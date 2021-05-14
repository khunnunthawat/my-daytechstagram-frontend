import { atom } from 'recoil';

export const userFromTypeState = atom<string>({
  key: 'userCheck',
  default: 'signup',
});

export const createPostState = atom({
  key: 'createPost',
  default: false,
});