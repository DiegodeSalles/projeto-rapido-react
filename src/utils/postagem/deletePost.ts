import { DeletePostProps } from "../types/DeletePostProps";

export async function deletarPostagem(postagensProps: DeletePostProps) {
  try {
    const response = await fetch(
      `http://localhost:3000/user/${postagensProps.authorId}/post/${postagensProps.postId}`,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      console.log("Postagem deletada.");
      const postagensAtualizadas = postagensProps.postagens.filter(
        (postagem) => postagem.id !== postagensProps.postId
      );
      postagensProps.setPostagens(postagensAtualizadas);
    } else {
      console.error("Erro ao deletar a postagem.");
    }
  } catch (err) {
    console.error("Erro ao se comunicar com a API: " + err);
  }
}
