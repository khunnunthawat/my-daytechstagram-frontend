import React from 'react';
import { Layout, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

interface Props {}

const MainLayout = ({ children }: any) => {
  return (
    <>
      <Layout className='layout'>
        <Header>
          <div className='logo' />
        </Header>
        <Content style={{ padding: '0 50px', margin: '16px 0' }}>
          <div className='site-layout-content'>{children}</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Daytechstagram ©2020 Created by Eiffel
        </Footer>
      </Layout>
    </>
  );
};

export default MainLayout;
