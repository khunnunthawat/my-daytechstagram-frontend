import React from 'react';
import { Layout, Breadcrumb } from 'antd';

const { Content, Footer } = Layout;

interface Props {}

const MainLayout = ({ children }: any) => {
  return (
    <>
      <Layout className='layout'>
        {/* <Header>
          <div className='logo' />
        </Header> */}
        <Content style={{ padding: '0 50px', margin: '100px 0' }}>
          {children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Daytechstagram ©2020 Created by Eiffel
        </Footer>
      </Layout>
    </>
  );
};

export default MainLayout;
