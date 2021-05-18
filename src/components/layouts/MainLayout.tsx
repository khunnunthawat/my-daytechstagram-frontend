import React from 'react';
import { Layout, Menu } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { loginState } from '../recoil/atom';
import { useRecoilState } from 'recoil';
import { MainLayoutProps } from '../types/index';

const cookieCutter = require('cookie-cutter');
const { Content, Footer } = Layout;

const MainLayout: React.FC<MainLayoutProps> = ({ children }: any) => {
  const [login, setLogin] = useRecoilState(loginState);

  const route = useRouter();

  const handleLogout = () => {
    cookieCutter.set('jwt', '', { expires: new Date(0) });
    setLogin(true);
    return route.push('/signin');
  };

  return (
    <>
      <div className='min-h-screen flex'>
        <Layout>
          <div className='shadow-sm'>
            {login === true ? (
              <Menu theme='light' mode='horizontal' defaultSelectedKeys={['1']}>
                <Menu.Item key='1'>
                  <Link href='/signup'>
                    User
                  </Link>
                </Menu.Item>
              </Menu>
            ) : (
              <Menu theme='light' mode='horizontal' defaultSelectedKeys={['1']}>
                <Menu.Item key='1'>
                  <Link href='/posts'>
                    Page
                  </Link>
                </Menu.Item>
                <Menu.Item key='2'>
                  <button className='text-red-500' onClick={handleLogout}>
                    Logout
                  </button>
                </Menu.Item>
              </Menu>
            )}
          </div>
          <Content style={{ padding: '0 50px', margin: '20px 0' }}>
            {children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Daytechstagram ©2020 Created by Eiffel
          </Footer>
        </Layout>
      </div>
    </>
  );
};

export default MainLayout;