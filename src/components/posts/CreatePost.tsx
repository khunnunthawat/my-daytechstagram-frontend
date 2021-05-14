import React from 'react';
import { Input, Upload, Button, Form } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { TextArea } = Input;

interface Props {}

export const CreatePost = (props: Props) => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <>
      <div className='text-center font-bold text-2xl m-5 text-gray-700'>
        Create Post
      </div>
      <Form
        name='postForm'
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <div className='mx-auto w-10/12 flex flex-col border border-gray-300 p-4 shadow-md max-w-md bg-white rounded-md'>
          <Form.Item
            name='descPost'
            rules={[
              { required: true, message: 'Please input text descripton!' },
            ]}
          >
            <TextArea
              placeholder='What is happening?'
              autoSize
              className='my-2 rounded'
            />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: 'Please upload image!' }]}
          >
            <Upload listType='picture' maxCount={1}>
              <Button icon={<UploadOutlined />} className='my-2 rounded'>
                Upload
              </Button>
            </Upload>
          </Form.Item>
          <div className='flex px-4 ml-auto rounded'>
            <Form.Item>
              <Button type='primary' danger>
                Cancel
              </Button>
            </Form.Item>
            <Form.Item>
              <Button
                htmlType='submit'
                type='primary'
                className='p-1 px-4 font-medium text-white ml-2 rounded'
              >
                Post
              </Button>
            </Form.Item>
          </div>
        </div>
      </Form>
    </>
  );
};