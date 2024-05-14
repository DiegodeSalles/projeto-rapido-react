import { Cross2Icon } from "@radix-ui/react-icons";
import { FormEvent } from "react";
import { FormDataDialogProps } from "../../utils/types/UpdateFormProps";
import * as Dialog from "@radix-ui/react-dialog";
import { UserProps } from "../../utils/types/UserProps";
import styles from "../../styles/UpdateUserDialog.module.css";

export const FormDataDialog: React.FC<FormDataDialogProps> = ({
  userDataProps,
  dialogStateProps,
}) => {
  const { userData, setName, setEmail, updateFunction } = userDataProps;
  const { setDialogOpen } = dialogStateProps;

  const isEmailValid = (email: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updatedUser: UserProps = {
      ...userDataProps.userData,
      name: userData.name,
      email: userData.email,
    };
    if (isEmailValid(updatedUser.email)) {
      setDialogOpen(() => false);
      updateFunction(updatedUser);
    } else {
      console.log("Corrija o formulário");
    }
  };
  return (
    <Dialog.Content className={styles.DialogContent}>
      <Dialog.Title className={styles.DialogTitle}>Editar usuário</Dialog.Title>
      <Dialog.Description className={styles.DialogDescription}>
        Faça alterações no usuário. Clique em salvar quando estiver pronto.
      </Dialog.Description>
      <form onSubmit={handleSubmit}>
        <fieldset className={styles.Fieldset}>
          <label className={styles.Label} htmlFor="name">
            Nome
          </label>
          <input
            className={styles.Input}
            id="name"
            defaultValue={userData.name}
            onChange={(e) => setName(e.target.value)}
          />
        </fieldset>
        <fieldset className={styles.Fieldset}>
          <label className={styles.Label} htmlFor="email">
            Email
          </label>
          <input
            className={styles.Input}
            type="email"
            id="email"
            defaultValue={userData.email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>
        <div className={styles.Div}>
          <button className={`${styles.Button} ${styles.green}`}>Salvar</button>
        </div>
      </form>
      <Dialog.Close asChild>
        <button className={styles.IconButton} aria-label="Close">
          <Cross2Icon />
        </button>
      </Dialog.Close>
    </Dialog.Content>
  );
};
