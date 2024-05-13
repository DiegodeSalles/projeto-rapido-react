import { useEffect, useState } from "react";
import styles from "../styles/ListarPostagens.module.css";

interface PostsProps {
  id: number;
  title: string;
  content: string;
  published: boolean;
  createdAt: Date;
  author: { name: string };
  authorId: number;
}

export function ListarPostagens() {
  const [postagens, setPostagens] = useState<PostsProps[]>([]);

  async function deletarPostagem(postId: number, authorId: number) {
    try {
      const response = await fetch(
        `http://localhost:3000/user/${authorId}/post/${postId}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        console.log("Postagem deletada.");
        const postagensAtualizadas = postagens.filter(
          (postagem) => postagem.id !== postId
        );
        setPostagens(postagensAtualizadas);
      } else {
        console.error("Erro ao deletar a postagem.");
      }
    } catch (err) {
      console.error("Erro ao se comunicar com a API: " + err);
    }
  }

  function handleDeletarPostagem(postId: number, authorId: number) {
    deletarPostagem(postId, authorId);
  }

  useEffect(() => {
    async function getPostagens() {
      const response = await fetch("http://localhost:3000/users/posts");
      const data = await response.json();
      setPostagens(data);
    }
    getPostagens();
    console.log(postagens);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={styles.postagens}>
      {postagens.map((postagem) => (
        <div className={styles.card} key={postagem.id}>
          <header>
            <strong>{postagem.title}</strong>
          </header>
          <section>{postagem.content}</section>
          <section>{postagem.author.name}</section>
          <footer>
            <i>{new Date(postagem.createdAt).toUTCString()}</i>
          </footer>
          <button
            onClick={() =>
              handleDeletarPostagem(postagem.id, postagem.authorId)
            }
          >
            Deletar postagem
          </button>
        </div>
      ))}
    </div>
  );
}
