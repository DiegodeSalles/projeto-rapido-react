import { CreatePostProps } from "../types/PostFormDataProps";

export async function createPost(formData: CreatePostProps) {
  try {
    const response = await fetch(
      `http://localhost:3000/user/${formData.authorId}/post/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    if (response.ok) {
      formData.setFormData({
        authorId: formData.authorId,
        title: "",
        content: "",
        publishedAt: new Date(),
        published: true,
      });
      return true;
    } else {
      console.error("Erro: " + response.statusText);
      return false;
    }
  } catch (err) {
    console.error("Erro no servidor da API: " + err);
  }
}
