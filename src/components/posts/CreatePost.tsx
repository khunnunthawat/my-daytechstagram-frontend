import React from 'react';
import { Input, Upload, Button, Form, Modal } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useRecoilState } from 'recoil';
import { createPostState } from '../recoil/atom';
import router, { useRouter } from 'next/router';
import { Axios } from '../../pages/api/backendApi';

const { TextArea } = Input;

export const CreatePost = () => {
  const [isModalPost, setModalPost] = useRecoilState(createPostState);
  const route = useRouter();

  const onFinish = async (values: { desc: string }): Promise<boolean> => {
    console.log(values);
    // if (values) {
    //   try {
    //     const params = new URLSearchParams();
    //     params.append('desc', values.desc);
    //     // params.append('desc', values.image);
    //     await Axios.get('/posts/new');
    //     return router.push('/posts');
    //   } catch (e) {
    //     console.log('e', e.response);
    //     if (e.response.data.statusCode == 409) {
    //       alert('username is already exits');
    //     } else if (e.response.data.statusCode == 400) {
    //       alert('password is to week');
    //     }
    //   }
    // }
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
              <TextArea placeholder='What is happening?' autoSize />
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
