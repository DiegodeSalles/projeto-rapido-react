import React from "react";

export interface PostFormDataProps {
  authorId: number;
  title: string;
  content: string;
  publishedAt: Date;
  published: boolean;
}

export interface CreatePostProps {
  authorId: number;
  formData: PostFormDataProps;
  setFormData: React.Dispatch<React.SetStateAction<PostFormDataProps>>;
}
