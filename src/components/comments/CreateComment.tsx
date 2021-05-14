import React from 'react';
import { Input, Button, Form } from 'antd';

const { TextArea } = Input;

interface Props {}

export const CreateComment = (props: Props) => {
  return (
    <>
      <Form>
        <div className='flex lg:justify-center'>
          <div className='w-full mx-2 p-4'>
            <Form.Item>
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
