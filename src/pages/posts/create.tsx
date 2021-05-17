import React from 'react';
import Head from 'next/head';
import { CreatePost } from '@/components/posts/CreatePost';
import { GetServerSideProps } from 'next';
import Cookies from 'cookies';
import { jwtProps } from '@/components/types';

const create: React.FC<jwtProps> = ({ jwt }) => {
  return (
    <>
      <Head>
        <title>Create Post</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <CreatePost />
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

  return {
    props: {
      jwt,
    },
  };
};

export default create;