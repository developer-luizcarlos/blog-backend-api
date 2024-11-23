import { connect } from "mongoose";

const connectToDatabase = async () => {
  try {
    await connect(process.env.DATABASE_URI!.toString());
    console.log(`Connected to database with success`);
  } catch (error) {
    console.log(`An error happened during the process`);
  }
};

export default connectToDatabase;
