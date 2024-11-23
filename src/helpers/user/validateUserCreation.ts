import UserInterface from "../../types/userType/userType";

const validateUserCreation = (username: string, password: string): boolean => {
  const hasValidUsername = username.trim() && username.length >= 4;
  const hasValidPassword = password.trim() && password.length >= 7;

  return hasValidUsername && hasValidPassword ? true : false;
};

export default validateUserCreation;
