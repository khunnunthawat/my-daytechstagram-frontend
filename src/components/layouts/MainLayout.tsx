import React from 'react';
import { Layout, Menu } from 'antd';
import Link from 'next/link';

const { Content, Footer } = Layout;

interface Props {}

const MainLayout = ({ children }: any) => {
  return (
    <>
      <div className='min-h-screen flex'>
        <Layout className='layout'>
          <Menu theme='light' mode='horizontal' defaultSelectedKeys={['1']}>
            <Menu.Item key='1'>
              <Link href='/signup'>User</Link>
            </Menu.Item>
            <Menu.Item key='2'>
              <Link href='/posts'>Page</Link>
            </Menu.Item>
            <Menu.Item key='3'>
              <Link href='/posts/create'>Post</Link>
            </Menu.Item>
          </Menu>
          <Content style={{ padding: '0 50px', margin: '100px 0' }}>
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
