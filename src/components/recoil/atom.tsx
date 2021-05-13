import { atom } from 'recoil';

export const userFromTypeState = atom<string>({
  key: 'userCheck',
  default: 'signUp',
});