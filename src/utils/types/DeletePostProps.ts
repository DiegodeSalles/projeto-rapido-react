import React from "react";
import { PostProps } from "./PostProps";

export interface DeletePostProps {
  postId: number;
  authorId: number;
  postagens: PostProps[];
  setPostagens: React.Dispatch<React.SetStateAction<PostProps[]>>;
}
