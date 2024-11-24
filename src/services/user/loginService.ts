import User from "../../models/userModel/User";
import { compare } from "bcrypt";

const passwordAreEquals = async (
  passwordReceived: string,
  password: string
): Promise<boolean> => {
  const equalPassword = await compare(passwordReceived, password);
  return equalPassword;
};

export default passwordAreEquals;
