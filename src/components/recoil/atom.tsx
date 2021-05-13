import { atom } from 'recoil';

export const userFromTypeState = atom<string>({
  key: 'userFromType',
  default: 'signIn',
});