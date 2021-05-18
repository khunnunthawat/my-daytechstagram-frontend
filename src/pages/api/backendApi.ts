import axios from 'axios';

export const userAxios = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

export const Axios = axios.create({
  baseURL: 'http://localhost:3000',
});
