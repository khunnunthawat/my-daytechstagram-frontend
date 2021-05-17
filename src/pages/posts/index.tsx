import React from 'react';
import Head from 'next/head';
import { Button } from 'antd';
import Link from 'next/link';
import { CardPosts } from '@/components/layouts/CardPosts';
import { useRecoilState } from 'recoil';
import { createPostState } from '@/components/recoil/atom';
import { GetServerSideProps } from 'next';
import Cookies from 'cookies';
import { jwtProps } from '../../components/types/index';
import { postAxios } from '../api/backendApi';

const posts: React.FC<jwtProps> = ({ jwt }) => {
  console.log(jwt);

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
            {/* New Post */}
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
            {/* Post List */}
            <div className='flex flex-col flex-grow w-full'>
              <CardPosts />
            </div>
          </div>
        </div>
      </div>
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

    // const { data } = await postAxios.get('/posts', {
    //   headers: {
    //     Authorization: `Bearer ${jwt}`,
    //   },
    // });

  return {
    props: {
      jwt,
      // feeds: data,
    },
  };
};

export default posts;
