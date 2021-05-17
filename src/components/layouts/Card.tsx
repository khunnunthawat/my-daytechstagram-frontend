import React from 'react';
import { EditTwoTone, DeleteTwoTone } from '@ant-design/icons';
// import { Posts } from '../posts/Posts';
import { CreateComment } from '../comments/CreateComment';
import { Comments } from '../comments/Comments';
import { useRecoilState } from 'recoil';
import { createCommentState } from '../recoil/atom';
import Link from 'next/link';

interface Props {}

export const Card = (props: Props) => {
  const [isModalEditPost, setModalEditPost] =
    useRecoilState(createCommentState);

  return (
    <>
      <div className='flex max-w-lg my-4 bg-white shadow-sm rounded-md overflow-hidden mx-auto'>
        <div className='flex items-center lg:justify-center w-full'>
          <div className='w-full'>
            <div className='flex flex-wrap mt-2 px-2 py-3 mx-3'>
              <div className='w-auto h-auto rounded-full'>
                <img
                  className='w-12 h-12 object-cover rounded-full'
                  alt='User avatar'
                  src='https://images.unsplash.com/profile-fb-1547572180-93a860f0a32b.jpg?auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff'
                />
              </div>
              <div className='flex flex-col mb-2 ml-4 mt-1'>
                <div className='text-gray-600 text-sm font-semibold'>
                  Daytech
                </div>
                <div className='flex w-full mt-1'>
                  <div className='text-blue-600 font-base text-xs mr-1'>
                    • 42 seconds ago
                  </div>
                </div>
              </div>
              <div className='flex ml-auto mr-2'>
                <div className='text-lg space-x-4'>
                  <Link shallow={true} href='/posts/edit'>
                    <EditTwoTone
                      key='delPost'
                      onClick={() => {
                        setModalEditPost(true);
                      }}
                      twoToneColor='#1890ff'
                    />
                  </Link>
                  <DeleteTwoTone
                    key='delPost'
                    onClick={() => {}}
                    twoToneColor='#f759ab'
                  />
                </div>
              </div>
            </div>
            <div className='my-2 mx-4 px-2'>
              <img
                className='rounded-sm'
                src='https://images.unsplash.com/photo-1579535433609-c776e7bac442?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2100&q=80'
              />
            </div>
            <div className='text-gray-900 text-base my-4 mx-4 px-2'>
              Lorem Ipsum is simply dummy text
            </div>
            {/* <Posts /> */}
            <Comments />
            <CreateComment />
          </div>
        </div>
      </div>
    </>
  );
};