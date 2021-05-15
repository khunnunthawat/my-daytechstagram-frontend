import React from 'react';
import { Layout, Menu } from 'antd';
import Link from 'next/link';
const { Content, Footer } = Layout;

interface Props {}

const MainLayout = ({ children }: any) => {
  return (
    <>
      <div className='min-h-screen flex'>
        <Layout>
          <div className='shadow-sm'>
            <Menu theme='light' mode='horizontal' defaultSelectedKeys={['2']}>
              <Menu.Item key='1'>
                <Link href='/signup'>User</Link>
              </Menu.Item>
              <Menu.Item key='2'>
                <Link href='/posts'>Page</Link>
              </Menu.Item>
              <Menu.Item key='3'>
                <Link href='/singin'>Logout</Link>
              </Menu.Item>
            </Menu>
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
