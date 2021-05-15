import React from 'react';

interface Props {}

export const Posts = (props: Props) => {
  return (
    <>
      <div className='my-2 mx-4 px-2'>
        <img
          className='rounded-sm'
          src='https://images.unsplash.com/photo-1579535433609-c776e7bac442?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2100&q=80'
        />
      </div>
      <div className='text-gray-900 text-base my-4 mx-4 px-2'>
        Lorem Ipsum is simply dummy text
      </div>
    </>
  );
};
