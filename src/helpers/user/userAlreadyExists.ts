import User from "../../models/userModel/User";

const userAlreadyExists = async (user: string): Promise<boolean> => {
  const verifyIfUserExist = await User.exists({ username: user });
  return !!verifyIfUserExist;
};

export default userAlreadyExists;
