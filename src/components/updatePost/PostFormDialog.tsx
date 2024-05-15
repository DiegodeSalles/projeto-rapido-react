import { Cross2Icon } from "@radix-ui/react-icons";
import { FormEvent, forwardRef } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import styles from "../../styles/UpdateUserDialog.module.css";
import { UpdatePostFormProps } from "../../utils/types/UpdatePostFormProps";
import { PostProps } from "../../utils/types/PostProps";

export const PostFormDialog = forwardRef<HTMLDivElement, UpdatePostFormProps>(
  ({ postDataProps, dialogStateProps }, ref) => {
    const { postData, setContent, setTitle, updateFunction } = postDataProps;
    const { setDialogOpen } = dialogStateProps;

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const updatedPost: PostProps = {
        ...postDataProps.postData,
        title: postData.title,
        content: postData.content,
      };
      if (updatedPost.title && updatedPost.content) {
        setDialogOpen(() => false);
        updateFunction(updatedPost);
      } else {
        console.log("Os campos não podem estar vazios.");
      }
    };
    return (
      <Dialog.Content ref={ref} className={styles.DialogContent}>
        <Dialog.Title className={styles.DialogTitle}>
          Editar postagem
        </Dialog.Title>
        <Dialog.Description className={styles.DialogDescription}>
          Faça alterações na postagem. Clique em salvar quando estiver pronto.
        </Dialog.Description>
        <form onSubmit={handleSubmit}>
          <fieldset className={styles.Fieldset}>
            <label className={styles.Label} htmlFor="title">
              Título
            </label>
            <input
              className={styles.Input}
              id="title"
              defaultValue={postData.title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </fieldset>
          <fieldset className={styles.Fieldset}>
            <label className={styles.Label} htmlFor="content">
              Conteúdo
            </label>
            <textarea
              className={styles.Input}
              id="content"
              defaultValue={postData.content}
              onChange={(e) => setContent(e.target.value)}
            />
          </fieldset>
          <div className={styles.Div}>
            <button className={`${styles.Button} ${styles.green}`}>
              Salvar
            </button>
          </div>
        </form>
        <Dialog.Close asChild>
          <button className={styles.IconButton} aria-label="Close">
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    );
  }
);
