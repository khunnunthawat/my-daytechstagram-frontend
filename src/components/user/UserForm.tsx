import React from 'react';
import { Form, Input, Button, Checkbox, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const { Title, Link } = Typography;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 10 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

interface UserFormProps {
  checkUser: string;
}

export const UserForm:React.FC<UserFormProps> = ({ checkUser }) => {
  console.log(checkUser);
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Form
        {...layout}
        name='basic'
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item>
          <Title level={4}>Daytechstagram</Title>
        </Form.Item>
        {checkUser === 'signin' ? 'User Login' : 'Registration'}
        <Form.Item
          label='Username'
          name='username'
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input
            prefix={<UserOutlined className='site-form-item-icon' />}
            placeholder='Username'
          />
        </Form.Item>

        <Form.Item
          label='Password'
          name='password'
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password
            prefix={<LockOutlined className='site-form-item-icon' />}
            type='password'
            placeholder='Password'
          />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Form.Item name='remember' valuePropName='checked' noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          {checkUser !== 'signin' ? (
            <Link href='/signin'>Already have an account ?</Link>
          ) : (
            <Link href='/signup'>Don't have an account?</Link>
          )}
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type='primary' htmlType='submit'>
            {checkUser === 'signin' ? 'Login' : 'SignUp'}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

// tsrafc
// tsrafce
