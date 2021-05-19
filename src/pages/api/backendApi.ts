import axios, { AxiosResponse } from 'axios';

export const userAxios = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

export const Axios = axios.create({
  baseURL: 'http://localhost:3000',
});

export const updatePost = async (
  values: any,
  postId: number,
  accessToken: string
) => {
  const url = process.env.API_URL + '/posts/' + postId + '/edit';

  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      // 'content-type': 'application/json;charset=utf-8',
    },
  };
  try {
    // url ที่จะยิงไป, ค่า parameter ที่รับมา, config ที่แนบไป ex.headers
    const result: AxiosResponse<any> = await axios.patch(url, values, config);
    return result;
  } catch (e) {
    console.log(e.response);
  }
};
