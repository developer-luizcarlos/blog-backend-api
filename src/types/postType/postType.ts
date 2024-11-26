import { Document, ObjectId } from "mongoose";

export default interface PostInterface extends Document {
  author?: string | ObjectId;
  title: string;
  content: string;
  slug: string;
  tags: string[];
  thumbnail: string;
  comments?: string[];
  date?: Date;
}
