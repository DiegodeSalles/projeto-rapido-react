import { PostProps } from "../types/PostProps";

export async function updatePost({ id, authorId, title, content }: PostProps) {
  try {
    const response = await fetch(
      `http://localhost:3000/user/${authorId}/post/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      }
    );
    return response.ok ? true : false;
  } catch (err) {
    console.log(err);
  }
}
