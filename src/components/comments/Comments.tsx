import React from 'react';
import { Form, Button, Input } from 'antd';
import { EditTwoTone, DeleteTwoTone } from '@ant-design/icons';

const { TextArea } = Input;

interface Props {}

export const Comments = (props: Props) => {
  return (
    <>
      <Form>
        <div className='border-b border-gray-100'></div>
        <div className='flex max-w-lg bg-white border-l-8'>
          <div className='flex items-center lg:justify-center w-full'>
            <div className='w-full'>
              <div className='flex items-center justify-between px-2 py-3 mx-3'>
                <div className='flex items-center w-auto h-auto rounded-full'>
                  <img
                    className='w-10 h-10 object-cover rounded-full'
                    alt='User avatar'
                    src='https://images.unsplash.com/profile-fb-1547572180-93a860f0a32b.jpg?auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff'
                  />
                  <div className='text-gray-600 text-sm font-medium ml-4'>
                    Fal Nunthawat
                  </div>
                  <div className='text-blue-500 text-xs ml-3'>9:47 PM</div>
                </div>
                <div className='flex ml-auto mr-2'>
                  <div className='text-sm space-x-4'>
                    <EditTwoTone twoToneColor='#1890ff' />
                    <DeleteTwoTone twoToneColor='#f759ab' />
                  </div>
                </div>
              </div>
              <div className='text-gray-900 text-sm mb-2 mx-4 px-2'>
                Lorem Ipsum is simply dummy text
              </div>
            </div>
          </div>
        </div>
      </Form>
    </>
  );
};

//border-l-8 sm:py-8 border-violet-400 text-blue-500
