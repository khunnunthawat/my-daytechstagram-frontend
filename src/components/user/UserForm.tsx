import React from 'react';
import { Form, Input, Button, Checkbox, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useRecoilState } from 'recoil';
import { userFromTypeState } from '../recoil/atom';
const { Title, Link } = Typography;

interface Props {}

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 10 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export const UserForm = (props: Props) => {
  const [check, setCheck] = useRecoilState(userFromTypeState);
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
        {check === 'userFromType' ? 'User Login' : 'Registration'}
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
          <Button
            onClick={() => {
              check == 'userFromType'
                ? setCheck('signUp')
                : setCheck('userFromType');
            }}
            type='link'
          >
            {check === 'userFromType'
              ? 'Register now!'
              : 'Already have an account ?'}
          </Button>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type='primary' htmlType='submit'>
            {check === 'userFromType' ? `Login ` : 'SignUp'}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

// tsrafc
// tsrafce
