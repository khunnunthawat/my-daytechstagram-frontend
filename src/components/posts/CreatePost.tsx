import React from 'react';
import { Input, Upload, Button, Form, Modal } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useRecoilState } from 'recoil';
import { createPostState } from '../recoil/atom';
import { useRouter } from 'next/router';

const { TextArea } = Input;

interface Props {}

export const CreatePost = (props: Props) => {
  const [isModalPost, setModalPost] = useRecoilState(createPostState);
  const route = useRouter();

  const onFinish = (values: { desc: string }) => {
    setModalPost(false);
    return route.push('/posts');
  };

  const handleCancel = () => {
    setModalPost(false);
    return route.push('/posts');
  }
      
  return (
    <>
      <Modal visible={isModalPost} footer={null} onCancel={handleCancel}>
        <div className='mb-4 font-bold text-xl text-gray-700'>Create Post</div>
        <Form
          name='postForm'
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <div className='mx-auto flex flex-col'>
            <Form.Item
              name='descPost'
              rules={[
                { required: true, message: 'Please input text descripton!' },
              ]}
            >
              <TextArea placeholder='What is happening?' autoSize />
            </Form.Item>
            <Form.Item
              name='fileList'
              rules={[{ required: true, message: 'Please upload image!' }]}
            >
              <Upload listType='picture' maxCount={1}>
                <Button icon={<UploadOutlined />} className='rounded'>
                  Upload
                </Button>
              </Upload>
            </Form.Item>
            <div className='flex ml-auto'>
              <Form.Item>
                <Button
                  onClick={handleCancel}
                  type='primary'
                  danger
                  className='rounded'
                >
                  Cancel
                </Button>
              </Form.Item>
              <Form.Item>
                <Button
                  htmlType='submit'
                  type='primary'
                  className='font-medium ml-2 rounded'
                >
                  Post
                </Button>
              </Form.Item>
            </div>
          </div>
        </Form>
      </Modal>
    </>
  );
};
