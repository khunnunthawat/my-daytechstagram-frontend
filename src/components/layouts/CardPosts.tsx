import React, { useState } from 'react';
import { EditTwoTone, DeleteTwoTone } from '@ant-design/icons';
import { CreateComment } from '../comments/CreateComment';
import { Comments } from '../comments/Comments';
import { useRecoilState } from 'recoil';
import { createCommentState } from '../recoil/atom';
import { CardPostProps } from '../types';
import { useRouter } from 'next/router';

export const CardPosts: React.FC<CardPostProps> = ({ posts, onDelete }) => {
  const [isModalEditPost, setModalEditPost] =
    useRecoilState(createCommentState);
  const router = useRouter();

  // editPostState
  const onEditPost = (id: number):Promise<boolean> => {
    setModalEditPost(true);
    console.log('onEditPost id: ', id);
    return router.push(`/posts/${id}/edit`);
  };

  const onDeletePost = (id: number) => {
    onDelete(id);
  };

  const renderedFeed = posts.map((post) => {
    return (
      <div
        key={post.id}
        className='flex max-w-lg my-4 bg-white shadow-sm rounded-md overflow-hidden mx-auto'
      >
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
                {/* post id : {post.id} */}
                <div className='text-gray-600 text-sm font-semibold'>
                  {post.user.username}
                </div>
                <div className='flex w-full mt-1'>
                  <div className='text-blue-600 font-base text-xs mr-1'>
                    {new Date(post.created)
                      .toLocaleDateString('us-TH', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric',
                        second: 'numeric',
                      })
                      .toString()}
                  </div>
                </div>
              </div>
              <div className='flex ml-auto mr-2'>
                <div className='text-lg space-x-4'>
                  <EditTwoTone
                    onClick={() => {
                      onEditPost(post.id);
                    }}
                    twoToneColor='#1890ff'
                  />
                  <DeleteTwoTone
                    onClick={() => onDeletePost(post.id)}
                    twoToneColor='#f759ab'
                  />
                </div>
              </div>
            </div>
            <div className='my-2 mx-4 px-2'>
              <img
                className='rounded-sm'
                src={`http://localhost:3000/${post.image}`}
              />
            </div>
            <div className='text-gray-900 text-base my-4 mx-4 px-2'>
              {post.desc}
            </div>
            <Comments />
            <CreateComment />
          </div>
        </div>
      </div>
    );
  });
  return <>{renderedFeed}</>;
};
