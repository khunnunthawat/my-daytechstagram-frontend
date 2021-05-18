import React from 'react';
import { EditPost } from '@/components/posts/EditPost';
import Head from 'next/head';

interface Props {}

export const desc = (props: Props) => {
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
