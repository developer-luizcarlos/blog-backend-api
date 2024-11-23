import User from "../../models/userModel/User";

const createUserService = async (username: string, password: string) => {
  const newUser = await new User({
    username: username,
    password: password,
  });

  await newUser.save();
};

export default createUserService;
