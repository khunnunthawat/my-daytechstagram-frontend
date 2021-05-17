import React from 'react';
import Head from 'next/head';
import { EditPost } from '@/components/posts/EditPost';
import { GetServerSideProps } from 'next';
import Cookies from 'cookies';
import { jwtProps } from '@/components/types';

interface Props {}

const edit: React.FC<jwtProps> = ({ jwt }) => {
  return (
    <>
      <Head>
        <title>Edit Post</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <EditPost />
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

export default edit;
