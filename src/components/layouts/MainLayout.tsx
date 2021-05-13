import React from 'react';
import { Layout, Menu, Image } from 'antd';

const { Content, Footer } = Layout;

interface Props {}

const MainLayout = ({ children }: any) => {
  return (
    <>
      <div className='min-h-screen flex'>
        <Layout className='layout'>
          <Menu theme='light' mode='horizontal' defaultSelectedKeys={['2']}>
            <Menu.Item key='1'>Home</Menu.Item>
            <Menu.Item key='2'>SignUp</Menu.Item>
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
