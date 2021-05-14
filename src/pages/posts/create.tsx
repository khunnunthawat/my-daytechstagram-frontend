import React from 'react';
import Head from 'next/head';
import { CreatePost } from '@/components/posts/CreatePost';

interface Props {}

const create = (props: Props) => {
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

export default create;