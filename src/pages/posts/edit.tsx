import React from 'react';
import Head from 'next/head';
import { EditPost } from '@/components/posts/EditPost';

interface Props {}

const edit = (props: Props) => {
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

export default edit;
