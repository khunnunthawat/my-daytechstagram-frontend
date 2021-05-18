import React, { useState } from 'react';
import { Input, Upload, Button, Form, Modal } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useRecoilState } from 'recoil';
import { createPostState } from '../recoil/atom';
import { useRouter } from 'next/router';

const { TextArea } = Input;

interface FormPostProps {
  onPost: (descPost: string, file: any) => Promise<void>;
}

export const CreatePost: React.FC<FormPostProps> = ({ onPost }) => {
  const [isModalPost, setModalPost] = useRecoilState(createPostState);
  const route = useRouter();
  const [desc, setDesc] = useState('');

  const onFinish = async (values: {
    descPost: string;
    fileList: any;
  }): Promise<boolean> => {
    // console.log('Succeess : ', values);
    onPost(values.descPost, values.fileList.file.originFileObj);
    setDesc('');
    setModalPost(false);
    return route.push('/posts');
  };

  const handleCancel = (): Promise<boolean> => {
    setModalPost(false);
    return route.push('/posts');
  };

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
              style={{ marginBottom: 12 }}
            >
              <TextArea
                onChange={(e) => setDesc(e.target.value)}
                placeholder='What is happening?'
                autoSize
              />
            </Form.Item>
            <Form.Item
              // valuePropName='fileList'
              name='fileList'
              rules={[{ required: true, message: 'Please upload image!' }]}
              style={{ marginBottom: 12 }}
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
