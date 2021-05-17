import React from 'react';
import { Input, Button, Form } from 'antd';
import { useRouter } from 'next/router';

const { TextArea } = Input;

interface Props {}

export const CreateComment = (props: Props) => {

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
                  className='placeholder-gray-400'
                  placeholder='Comment...'
                  autoSize
                />
                <Form.Item>
                  <Button htmlType='submit' className='rounded-sm'>
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
