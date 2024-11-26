import PostInterface from "../../types/postType/postType";

interface ErrorMessage {
  message: string;
}

const postValidateDataReceived = (data: any): boolean | ErrorMessage[] => {
  const errors: ErrorMessage[] = [];

  if (!data.title.trim()) {
    errors.push({ message: "The title field must be filled" });
  }
  if (!data.content.trim() || data.content.length < 20) {
    errors.push({
      message:
        "The content field must be filled and contains at least sixth characters",
    });
  }
  if (!Array.isArray(data.tags) || data.tags.length === 0) {
    errors.push({
      message: "You have to submit at least one tag to your post",
    });
  }
  if (!data.thumbnail.toString().trim()) {
    errors.push({ message: "The thumbnail field must be filled" });
  }

  return errors.length === 0 ? true : errors;
};

export default postValidateDataReceived;
