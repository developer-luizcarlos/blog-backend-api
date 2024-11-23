import { Schema, model } from "mongoose";
import UserInterface from "../../types/userType/userType";

const UserSchema = new Schema<UserInterface>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = model("User", UserSchema);

export default User;
