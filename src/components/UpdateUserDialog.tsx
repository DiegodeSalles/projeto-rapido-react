import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import styles from "../styles/UpdateUserDialog.module.css";

export const UpdateUserDialog = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className={`${styles.Button} ${styles.violet}`}>
        Editar usuário
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className={styles.DialogOverlay} />
      <Dialog.Content className={styles.DialogContent}>
        <Dialog.Title className={styles.DialogTitle}>
          Editar usuário
        </Dialog.Title>
        <Dialog.Description className={styles.DialogDescription}>
          Faça alterações no usuário. Clique em salvar quando estiver pronto.
        </Dialog.Description>
        <fieldset className={styles.Fieldset}>
          <label className={styles.Label} htmlFor="name">
            Nome
          </label>
          <input className={styles.Input} id="name" defaultValue="" />
        </fieldset>
        <fieldset className={styles.Fieldset}>
          <label className={styles.Label} htmlFor="username">
            Email
          </label>
          <input className={styles.Input} id="username" defaultValue="" />
        </fieldset>
        <div className={styles.Div}>
          <Dialog.Close asChild>
            <button className={`${styles.Button} ${styles.green}`}>
              Salvar
            </button>
          </Dialog.Close>
        </div>
        <Dialog.Close asChild>
          <button className={styles.IconButton} aria-label="Close">
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
