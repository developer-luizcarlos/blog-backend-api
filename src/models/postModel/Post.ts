import { Schema, model } from "mongoose";
import PostInterface from "../../types/postType/postType";
import getDate from "../../helpers/post/getDate";

const PostSchema = new Schema<PostInterface>({
  author: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
  },
  thumbnail: {
    type: String,
    required: true,
  },
  comments: {
    type: [String],
    default: [],
  },
  date: {
    type: String,
    default: getDate(),
  },
});

const Post = model("Post", PostSchema);

export default Post;
