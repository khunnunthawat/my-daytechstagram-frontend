import { atom } from 'recoil';

export const loginState = atom<boolean>({
  key: 'loginState',
  default: false,
});

export const createPostState = atom<boolean>({
  key: 'createPost',
  default: false,
});

export const editPostState = atom<boolean>({
  key: 'editPost',
  default: false,
});

export const createCommentState = atom<boolean>({
  key: 'createComment',
  default: false,
});

export const editCommentState = atom<boolean>({
  key: 'editComment',
  default: false,
});
export const postsState = atom<[]>({
  key: 'postsST',
  default: [],
});
