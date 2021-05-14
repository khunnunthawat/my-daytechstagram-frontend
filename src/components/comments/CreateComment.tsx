import React from 'react'
import { Input, Button, Form } from 'antd';

const { TextArea } = Input;

interface Props {
  
}

export const CreateComment = (props: Props) => {
  return (
    <div>
      <div className='flex w-full border-t border-gray-100'>
        <div className='mt-3 mx-5 flex flex-row'>
          <Form
            name='formComment'
            initialValues={{ remember: true }}
            layout='inline'
            style={{ justifyContent: 'center' }}
          >
            <Form.Item
              name='descComment'
              rules={[{ required: true, message: 'Please Enter Descripton' }]}
            >
              <TextArea placeholder='Comment...' autoSize className='my-2' />
            </Form.Item>
            <Form.Item className='pt-2 m-0'>
              <Button htmlType='submit' type='primary' className='bg-blue-500'>
                Comment
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
