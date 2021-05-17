import { atom } from 'recoil';

export const loginState = atom<boolean>({
  key: 'loginstate',
  default: false,
});

export const createPostState = atom<boolean>({
  key: 'createpost',
  default: false,
});

export const createCommentState = atom<boolean>({
  key: 'createcomment',
  default: false,
});

export const editCommentState = atom<boolean>({
  key: 'editcomment',
  default: false,
});
export const postsState = atom<[]>({
  key: 'postsST',
  default: [],
});
