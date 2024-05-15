import { UserProps } from "../types/UserProps";

export async function updateUser({ id, name, email }: UserProps) {
  try {
    const response = await fetch(`http://localhost:3000/user/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
      }),
    });
    return response.ok ? true : false;
  } catch (err) {
    console.error("Erro interno da API: " + err);
  }
}
