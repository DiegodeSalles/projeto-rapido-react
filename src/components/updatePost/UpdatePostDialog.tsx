import * as Dialog from "@radix-ui/react-dialog";
import styles from "../../styles/UpdateUserDialog.module.css";
import React, { useState } from "react";
import { PostFormDialog } from "./PostFormDialog";
import { DialogStateProps } from "../../utils/types/UpdateUserProps";
import {
  PostDataProps,
  UpdatePostDialogProps,
} from "../../utils/types/UpdatePostProps";

export const UpdatePostDialog: React.FC<UpdatePostDialogProps> = ({
  post,
  updateFunction,
}) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const postData = {
    id: post.id,
    title,
    content,
    published: post.published,
    createdAt: post.createdAt,
    author: post.author,
    authorId: post.authorId,
  };
  const postDataProps: PostDataProps = {
    postData,
    setTitle,
    setContent,
    updateFunction,
  };

  const dialogStateProps: DialogStateProps = { dialogOpen, setDialogOpen };

  return (
    <Dialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
      <Dialog.Trigger asChild>
        <button className={`${styles.Button} ${styles.violet}`}>
          Editar postagem
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.DialogOverlay} />
        <PostFormDialog
          dialogStateProps={dialogStateProps}
          postDataProps={postDataProps}
        />
      </Dialog.Portal>
    </Dialog.Root>
  );
};
