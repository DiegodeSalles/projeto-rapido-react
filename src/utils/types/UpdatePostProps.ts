import React from "react";
import { PostProps } from "./PostProps";

export interface UpdatePostDialogProps {
  post: PostProps;
  updateFunction: (post: PostProps) => void;
}

export interface PostDataProps {
  postData: PostProps;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  updateFunction: (post: PostProps) => void;
}

export interface DialogStateProps {
  dialogOpen: boolean;
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
