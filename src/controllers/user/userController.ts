import { Request, Response } from "express";
import { hash } from "bcrypt";
import User from "../../models/userModel/User";
import UserInterface from "../../types/userType/userType";
import validateUserCreation from "../../helpers/user/validateUserCreation";
import userAlreadyExists from "../../helpers/user/userAlreadyExists";
import createUserService from "../../services/user/createUserService";

export const createUser = async (req: Request, res: Response) => {
  const { username, password }: UserInterface = req.body;

  const validReceivedData = validateUserCreation(username, password);
  const userExist = await userAlreadyExists(username);

  if (validReceivedData || !userExist) {
    const hashedPassword = await hash(password, 10);
    try {
      await createUserService(username, hashedPassword);
      res.json({ message: "User created with success." });
    } catch (error) {
      res.json({ message: error });
    }
  } else if (!validReceivedData) {
    res.json({ message: "It's impossible to register empty values." });
  } else if (userExist) {
    res.json({ message: "This username is already been in use." });
  } else if (username.length < 4) {
    res.json({ message: "Your username must be at least 4 characters." });
  } else if (password.length < 7) {
    res.json({ message: "Your password must have at least 7 characters." });
  }
};
