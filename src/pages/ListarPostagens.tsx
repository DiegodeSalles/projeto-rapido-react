import styles from "../styles/ListarPostagens.module.css";
import { useEffect, useState } from "react";
import { UpdatePostDialog } from "../components/updatePost/UpdatePostDialog";
import { PostProps } from "../utils/types/PostProps";
import { updatePost } from "../utils/postagem/updatePost";
import { deletarPostagem } from "../utils/postagem/deletePost";

export function ListarPostagens() {
  const [postagens, setPostagens] = useState<PostProps[]>([]);

  function handleDeletarPostagem(postId: number, authorId: number) {
    deletarPostagem({ authorId, postId, postagens, setPostagens });
  }

  async function handleAtualizarPostagem(post: PostProps) {
    if (!post.content || !post.title) {
      return;
    }
    try {
      const resultado = await updatePost(post);
      if (resultado) {
        console.log("Postagem atualizada!");
        setPostagens(
          postagens.map((postagem) =>
            postagem.id === post.id ? post : postagem
          )
        );
      } else {
        console.log("Algum erro aconteceu.");
      }
    } catch (err) {
      console.log("erro");
    }
  }

  useEffect(() => {
    async function getPostagens() {
      const response = await fetch("http://localhost:3000/users/posts");
      const data = await response.json();
      setPostagens(data);
    }
    getPostagens();

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
          <UpdatePostDialog
            post={postagem}
            updateFunction={handleAtualizarPostagem}
          />
        </div>
      ))}
    </div>
  );
}
