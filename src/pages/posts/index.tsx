import React from 'react';
import Head from 'next/head';
import { Button } from 'antd';
import { CreatePost } from '@/components/posts/CreatePost';
import Link from 'next/link';

interface Props {}

const posts = () => {
  return (
    <>
      <Head>
        <title>Posts</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Button type='primary' className='p-1 px-4 font-medium text-white ml-2'>
        <Link href='/posts/create'>New Post</Link>
      </Button>
      <CreatePost />
    </>
  );
};

export default posts;
