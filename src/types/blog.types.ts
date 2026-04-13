import { TCategory } from "./category.types";

export type TBlog = {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  createdAt: string;
  updatedAt: string;
};

export type TBlogComment = {
  id: string;
  blogId: string;
  name: string;
  email: string;
  phone?: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export type TBlogCommentReply = {
  id: string;
  commentId: string;
  name: string;
  email: string;
  phone?: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export interface IBlog {
  id: string;
  title: string;
  content: string;
  thumbnail: string;
  category: TCategory;
  author: string;
  createdAt: string;
  updatedAt: string;
  blogComments: IBlogComment[];
}

export interface IBlogComment {
  id: string;
  name: string;
  email: string;
  content: string;
  blogId: string;
  createdAt: string;
  updatedAt: string;
}
