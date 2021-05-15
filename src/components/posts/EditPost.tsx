import React from 'react';
import { Input, Upload, Button, Form, Modal } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useRecoilState } from 'recoil';
import { createCommentState } from '../recoil/atom';
import { useRouter } from 'next/router';

const { TextArea } = Input;

interface Props {}

export const EditPost = (props: Props) => {
  const [isModalEditPost, setModalEditPost] =
    useRecoilState(createCommentState);
  const route = useRouter();

  const onFinish = (values: { desc: string }) => {
    console.log(values);
    setModalEditPost(false);
    return route.push('/posts');
  };

  const handleCancel = () => {
    setModalEditPost(false);
    return route.push('/posts');
  };

  return (
    <>
      <Modal visible={isModalEditPost} footer={null} onCancel={handleCancel}>
        <div className='mb-4 font-bold text-md text-gray-700'>Edit Post</div>
        <Form
          name='editPostForm'
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
              <TextArea placeholder='Edit descripton post?' autoSize />
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
                  htmlType='submit'
                  type='primary'
                  className='font-medium ml-2 rounded'
                >
                  Edit
                </Button>
              </Form.Item>
            </div>
          </div>
        </Form>
      </Modal>
    </>
  );
};
