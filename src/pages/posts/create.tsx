import React from 'react';
import Head from 'next/head';

interface Props {}

const create = (props: Props) => {
  return (
    <>
      <Head>
        <title>Create Post</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>CreatePost</div>
    </>
  );
};

export default create;