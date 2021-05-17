import React, { useEffect } from 'react';
import Head from 'next/head';
import { Button } from 'antd';
import Link from 'next/link';
import { CardPosts } from '@/components/layouts/CardPosts';
import { useRecoilState } from 'recoil';
import { createPostState, postsState } from '@/components/recoil/atom';
import { GetServerSideProps } from 'next';
import Cookies from 'cookies';
import { jwtProps } from '../../components/types/index';
import { Axios } from '../api/backendApi';

interface postsProps {
  jwt: string;
  feeds: any;
}

const posts: React.FC<postsProps> = ({ jwt, feeds }) => {
  console.log(jwt);
  const [posts, setPosts] = useRecoilState(postsState);

  useEffect(() => {                     //ถ้าค่าใน feed มีการเปลี่ยนแปลง ก็จะทำ useeffect
    setPosts(feeds);
    console.log('feeds ', feeds);
  }, [feeds]);

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
              <CardPosts posts={posts} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
//   const cookies = new Cookies(req, res);
//   const jwt = cookies.get('jwt');

//   if (!jwt) {
//     res.writeHead(302, { Location: '/signin' });
//     res.end();
//   }

//     // const { data } = await postAxios.get('/posts', {
//     //   headers: {
//     //     Authorization: `Bearer ${jwt}`,
//     //   },
//     // });

//   return {
//     props: {
//       jwt,
//       // feeds: data,
//     },
//   };
// };

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  // Create a cookies instance
  const cookies = new Cookies(req, res)
  const jwt = cookies.get('jwt')

  // if not found cookie, just redirect to sign in page
  if (!jwt) {
    res.writeHead(302, { Location: '/signin' }) //302 is a just code to redirect
    res.end()
  }

  const { data } = await Axios.get('/posts', {
    //get post ตาม path เเล้วใส่ใน data
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });


  return {
      props: {
        jwt,
        feeds: data, //  เอา data ใส่ ใน feeds 
      }
  }
}

export default posts;
