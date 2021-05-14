import React from 'react';
import Head from 'next/head';
import { Button } from 'antd';
import Link from 'next/link';
import { Card } from '@/components/layouts/Card';
import { useRecoilState } from 'recoil';
import { createPostState } from '@/components/recoil/atom';

interface Props {}

const posts = () => {
  const [isModalPost, setModalPost] = useRecoilState(createPostState);

  return (
    <>
      <Head>
        <title>Posts</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex flex-wrap items-center lg:justify-center'>
        <h2 className='text-xl text-gray-900 font-medium title-font'>
          Daytechstagram
        </h2>
        <div className='md:w-3/5 md:pl-6'>
          <div className='flex float-right'>
            <Button
              type='primary'
              onClick={() => {
                setModalPost(true);
              }}
              className='p-1 px-4 font-medium text-white rounded-md ml-2 float-right'
            >
              <Link shallow={true} href='/posts/create'>
                New Post
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <Card />
      
    </>
  );
};

export default posts;
