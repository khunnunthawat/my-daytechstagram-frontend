import React from 'react';
import Head from 'next/head';
import { CreatePost } from '@/components/posts/CreatePost';
import { GetServerSideProps } from 'next';
import Cookies from 'cookies';
import { jwtProps } from '@/components/types';
import { Axios } from '../api/backendApi';
import { message } from 'antd';

const create: React.FC<jwtProps> = ({ jwt }) => {
  const onPost = async (desc: string, file: any) => {
    try {
      // console.log('file', file);
      const formdb = new FormData();
      formdb.append('desc', desc);
      formdb.append('image', file);

      const newData = await Axios.post('/posts', formdb, {
        headers: {
          Authorization: `Bearer ${jwt}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      message.success('Successfully create a post');
      // console.log('newData', newData.data);
    } catch (error) {
      message.error('Unable to create post');
    }
  };

  return (
    <>
      <Head>
        <title>Create Post</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <CreatePost onPost={onPost} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const cookies = new Cookies(req, res);
  const jwt = cookies.get('jwt');

  if (!jwt) {
    res.writeHead(302, { Location: '/signin' });
    res.end();
  }

  const { data } = await Axios.get('/posts', {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });

  return {
    props: {
      jwt,
      feeds: data,
      status: true,
    },
  };
};

export default create;
