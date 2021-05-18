import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { userAxios } from '../../pages/api/backendApi';
import router from 'next/router';
import { UserFormProps } from '../types';

const cookieCutter = require('cookie-cutter');

export const UserForm: React.FC<UserFormProps> = ({ checkPage }) => {
  console.log('Page URL : ', checkPage);

  const onFinish = async (values: any): Promise<boolean | undefined> => {
    if (checkPage === 'signup') {
      try {
        const params = new URLSearchParams();
        params.append('username', values.username);
        params.append('password', values.password);

        await userAxios.post('/user/signup', params);
        return router.push('/signin');
      } catch (e) {
        // console.log('e', e.response);
        if (e.response.data.statusCode == 409) {
          alert('username is already exits');
          return router.push('/signin');
        } else if (e.response.data.statusCode == 400) {
          alert('password is to week');
        }
      }
    } else if (checkPage === 'signin') {
      try {
        const params = new URLSearchParams();
        params.append('username', values.username);
        params.append('password', values.password);

        const { data } = await userAxios.post('/user/signin', params);
        // console.log(data);
        cookieCutter.set('jwt', data.token);
        return router.push('/posts');
      } catch (e) {
        // console.log('e', e.response);
      }
    }
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <div className='flex items-center p-4 sm:justify-center lg:justify-center '>
        <div className='flex flex-col overflow-hidden bg-white rounded-md shadow-md max md:flex-row md:flex-1 lg:max-w-screen-md'>
          <div className='p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly'>
            <div className='my-3 text-2xl font-bold tracking-wider text-center'>
              <p>Eiffel stagram</p>
            </div>
          </div>
          <div className='p-5 bg-white md:flex-1'>
            <h3 className='my-4 text-2xl font-semibold text-gray-700'>
              {checkPage === 'signin' ? 'Account Login' : 'Registration'}
            </h3>
            <Form
              initialValues={{ remember: true }}
              style={{ width: '100%' }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name='username'
                rules={[
                  { required: true, message: 'Please input your username!' },
                ]}
              >
                <Input
                  size='large'
                  prefix={<UserOutlined className='site-form-item-icon' />}
                  placeholder='Username'
                />
              </Form.Item>
              <Form.Item
                name='password'
                rules={[
                  { required: true, message: 'Please input your password!' },
                  {
                    pattern:
                      /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                    message: 'password too weak',
                  },
                ]}
              >
                <Input.Password
                  size='large'
                  prefix={<LockOutlined className='site-form-item-icon' />}
                  type='password'
                  placeholder='Password'
                />
              </Form.Item>
              <div className='flex flex-col space-y-1'>
                <div className='flex items-center justify-between'>
                  <Form.Item name='remember' valuePropName='checked' noStyle>
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>
                  <div className='text-sm text-blue-600 hover:underline focus:text-blue-800'>
                    {checkPage !== 'signin' ? (
                      <Link href='/signin'>Already have an account ?</Link>
                    ) : (
                      <Link href='/signup'>Don't have an account?</Link>
                    )}
                  </div>
                </div>
              </div>
              <div className='flex flex-col space-y-5 my-7'>
                <Button size='large' type='primary' htmlType='submit'>
                  {checkPage === 'signin' ? 'Login' : 'SignUp'}
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};
