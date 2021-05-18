import React from 'react';
import { Input, Button, Form } from 'antd';
import { useRouter } from 'next/router';

const { TextArea } = Input;

export const CreateComment = () => {

  const route = useRouter();
  
    const onFinish = (values: { desc: string }): Promise<boolean> => {
      console.log(values);
      return route.push('/posts');
    };
  
  return (
    <>
      <Form
        name='creatcommentForm'
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <div className='flex lg:justify-center'>
          <div className='w-full mx-2 p-4'>
            <Form.Item style={{ marginBottom: 0 }}>
              <div className='flex self-center'>
                <TextArea
                  className='placeholder-gray-400 rounded-md'
                  placeholder='Comment...'
                  autoSize
                />
                <Form.Item>
                  <Button
                    htmlType='submit'
                    className='rounded-md border-none shadow-none'
                  >
                    Comment
                  </Button>
                </Form.Item>
              </div>
            </Form.Item>
          </div>
        </div>
      </Form>
    </>
  );
};
