import React from 'react';
import { Input, Upload, Button, Form, Modal } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useRecoilState } from 'recoil';
import { editCommentState } from '../recoil/atom';
import { useRouter } from 'next/router';

const { TextArea } = Input;

export const EditComment = () => {
  const [isModalEditComment, setModalEditComment] =
    useRecoilState(editCommentState);
  const route = useRouter();

  const onFinish = (values: { desc: string }): Promise<boolean> => {
    console.log(values);
    setModalEditComment(false);
    return route.push('/posts');
  };

  const handleCancel = (): Promise<boolean> => {
    setModalEditComment(false);
    return route.push('/posts');
  };

  return (
    <>
      <Modal visible={isModalEditComment} footer={null} onCancel={handleCancel}>
        <div className='mb-4 font-bold text-md text-gray-700'>Edit Comment</div>
        <Form
          name='editCommentForm'
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <div className='mx-auto flex flex-col'>
            <Form.Item
              name='descComment'
              rules={[
                { required: true, message: 'Please input text descripton!' },
              ]}
              style={{ marginBottom: 12 }}
            >
              <TextArea placeholder='Edit desc comment...' autoSize />
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
