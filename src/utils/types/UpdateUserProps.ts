import { UserProps } from "./UserProps";

export interface UpdateUserDialogProps {
  user: UserProps;
  updateFunction: (user: UserProps) => void;
}

export interface UserDataProps {
  userData: UserProps;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  updateFunction: (user: UserProps) => void;
}

export interface DialogStateProps {
  dialogOpen: boolean;
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
