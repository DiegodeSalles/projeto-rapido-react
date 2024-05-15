export interface PostProps {
  id: number;
  title: string;
  content: string;
  published: boolean;
  createdAt: Date;
  author: { name: string };
  authorId: number;
}
