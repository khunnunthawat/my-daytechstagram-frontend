import { atom } from 'recoil';

export const createPostState = atom({
  key: 'createpoststate',
  default: false,
});

export const createCommentState = atom({
  key: 'createcommentstate',
  default: false,
});

export const editCommentState = atom({
  key: 'editcommentstate',
  default: false,
});