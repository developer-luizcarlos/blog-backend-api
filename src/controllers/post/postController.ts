import { Request, Response } from "express";
import PostInterface from "../../types/postType/postType";
import postValidateDataReceived from "../../helpers/post/createPost";
import createPostService from "../../services/post/createPostService";

export const create = async (req: Request, res: Response): Promise<void> => {
  const { title, content, tags, thumbnail }: PostInterface = req.body;
  const author = req.params.id;

  // Combine data for validation
  const dataReceived = {
    author,
    title,
    content,
    tags,
    thumbnail,
  };

  const validationResult = postValidateDataReceived(dataReceived);

  if (validationResult !== true) {
    res.status(400).json({
      success: false,
      errors: validationResult,
    });
    return;
  }

  try {
    await createPostService(dataReceived);
    res.status(201).json({
      success: true,
      message: "Post created successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred while creating the post.",
      error: error || "Unknown error",
    });
  }
};
