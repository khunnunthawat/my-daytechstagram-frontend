import React from 'react';
import Head from 'next/head';
import { Button } from 'antd';
import Link from 'next/link';
import { Card } from '@/components/layouts/Card';
import { useRecoilState } from 'recoil';
import { createPostState } from '@/components/recoil/atom';
import { CreatePost } from '@/components/posts/CreatePost';

interface Props {}

const posts = () => {
  const [isModalPost, setModalPost] = useRecoilState(createPostState);

  return (
    <>
      <Head>
        <title>Posts</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex justify-center px-4'>
        <div className='flex'>
          <div className='flex flex-col'>
            <div className='flex justify-between px-8 py-4 border-gray-300'>
              <h2 className='text-lg text-gray-900 title-font'>
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
            <div>
              <CreatePost />
            </div>

            <div className='flex flex-col flex-grow w-full'>
              <Card />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default posts;
