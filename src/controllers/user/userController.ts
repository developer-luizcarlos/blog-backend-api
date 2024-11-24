import { Request, Response } from "express";
import { hash } from "bcrypt";
import User from "../../models/userModel/User";
import UserInterface from "../../types/userType/userType";
import validateUserCreation from "../../helpers/user/validateUserCreation";
import userAlreadyExists from "../../helpers/user/userAlreadyExists";
import createUserService from "../../services/user/createUserService";
import passwordAreEquals from "../../services/user/loginService";

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
    res
      .status(404)
      .json({ message: "It's impossible to register empty values." });
  } else if (userExist) {
    res.status(404).json({ message: "This username is already been in use." });
  } else if (username.length < 4) {
    res
      .status(404)
      .json({ message: "Your username must be at least 4 characters." });
  } else if (password.length < 7) {
    res
      .status(404)
      .json({ message: "Your password must have at least 7 characters." });
  }
};

export const login = async (req: Request, res: Response) => {
  const { username, password }: UserInterface = req.body;

  const userExist = await userAlreadyExists(username);

  if (!userExist) {
    res.status(404).json({ message: "User not found" });
  } else {
    try {
      const user = await User.findOne({ username });
      const passwordEquals = await passwordAreEquals(password, user!.password);

      passwordEquals
        ? res.status(200).json({ message: "Passwords are equals" })
        : res.json({ message: "Passwords aren't equals" });
    } catch (error) {
      res.status(404).json({ message: error });
    }
  }
};
