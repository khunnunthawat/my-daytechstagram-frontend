import React from 'react';
import Head from 'next/head';
import { EditComment } from '@/components/comments/EditComment';
interface Props {}

const edit = (props: Props) => {
  return (
    <>
      <Head>
        <title>Edit Comment</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <EditComment />
    </>
  );
};

export default edit;
