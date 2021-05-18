import { ReactNode } from 'react';
export interface UserProps {
  username: string;
  password: string;
}
export interface UserFormProps {
  checkPage: string;
}
export interface jwtProps {
  jwt: any;
}
export interface PostProps {
  id: number;
  desc: string;
  image: string;
  created: string;
  updated: string;
  user: {
    id: number;
    username: string;
  };
}
export interface FeedPostsProps {
  jwt: string;
  feeds: any;
}
export interface CardPostProps {
  posts: PostProps[];
  onDelete: (id: number) => void;
}
export interface CommentProps {
  id: number;
  desc: string;
  created: string;
  updated: string;
}
export interface MainLayoutProps {
  children: JSX.Element & ReactNode;
}
