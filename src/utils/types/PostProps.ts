import { UserProps } from "./UserProps";

export interface PostProps {
  id: number;
  title: string;
  content: string;
  published: boolean;
  createdAt: Date;
  author: UserProps;
  authorId: number;
}
