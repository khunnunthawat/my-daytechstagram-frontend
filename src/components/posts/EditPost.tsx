import React, { useState } from 'react';
import { Input, Button, Form, Modal, message } from 'antd';
import { useRecoilState } from 'recoil';
import { createCommentState } from '../recoil/atom';
import { useRouter } from 'next/router';
import { Axios } from 'src/pages/api/backendApi';
import { postPropsEdit } from '../types';

const { TextArea } = Input;

export const EditPost: React.FC<postPropsEdit> = ({ jwt, feed }) => {
  const [isModalEditPost, setModalEditPost] =
    useRecoilState(createCommentState);
  const [editDesc, setEditDesc] = useState(feed.desc);
  const route = useRouter();

  const onFinish = async ():Promise<boolean | undefined> => {
    try {
      const params = new URLSearchParams();
      params.append('desc', editDesc);
      await Axios.patch(`/posts/${feed.id}/edit`, params, {
        headers: {
          Authorization: `Bearer ${jwt}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      message.success('Update edit post success');
      setModalEditPost(false);
      return route.push('/posts');
    } catch (error) {
      message.error('Unable to edit post');
    }
  };

  const handleCancel = (): Promise<boolean> => {
    setModalEditPost(false);
    return route.push('/posts');
  };

  return (
    <>
      <Modal visible={isModalEditPost} footer={null} onCancel={handleCancel}>
        <div className='mb-4 font-bold text-md text-gray-700'>Edit Post</div>
        <Form
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <div className='mx-auto flex flex-col'>
            <Form.Item
              style={{ marginBottom: 12 }}
            >
              <TextArea
                value={editDesc}
                onChange={(e) => {
                  setEditDesc(e.target.value);
                }}
                // defaultValue={feed.desc}
                placeholder='Edit descripton post?'
                autoSize
              />
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