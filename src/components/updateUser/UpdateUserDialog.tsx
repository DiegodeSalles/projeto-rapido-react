import * as Dialog from "@radix-ui/react-dialog";
import styles from "../styles/UpdateUserDialog.module.css";
import React, { useState } from "react";
import {
  UpdateUserDialogProps,
  UserDataProps,
  DialogStateProps,
} from "../../utils/types/UpdateUserProps";
import { FormDataDialog } from "./FormDataDialog";

export const UpdateUserDialog: React.FC<UpdateUserDialogProps> = ({
  user,
  updateFunction,
}) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [dialogOpen, setDialogOpen] = useState(false);

  const userData = { id: user.id, name, email };
  const userDataProps: UserDataProps = {
    userData,
    setName,
    setEmail,
    updateFunction,
  };
  const dialogStateProps: DialogStateProps = { dialogOpen, setDialogOpen };

  return (
    <Dialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
      <Dialog.Trigger asChild>
        <button className={`${styles.Button} ${styles.violet}`}>
          Editar usuário
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.DialogOverlay} />
        <FormDataDialog
          dialogStateProps={dialogStateProps}
          userDataProps={userDataProps}
        />
      </Dialog.Portal>
    </Dialog.Root>
  );
};
