import Post from "../../models/postModel/Post";

const createPostService = async (data: Object) => {
  const newPost = await new Post(data);
  await newPost.save();
};

export default createPostService;
