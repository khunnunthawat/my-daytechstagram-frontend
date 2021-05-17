import { ReactNode } from 'react';
import create from '../../pages/posts/create';
export interface UserProps {
  username: string;
  password: string;
}
export interface jwtProps {
  jwt: string;
}

export interface PostProps {
  id: number;
  desc: string;
  image: string;
  created: string;
  updated: string;
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