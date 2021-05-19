import React from 'react';
import { EditPost } from '@/components/posts/EditPost';
import Head from 'next/head';
import Cookies from 'cookies';
import { GetServerSideProps } from 'next';
import { Axios } from 'src/pages/api/backendApi';

const edit: React.FC = ({ jwt, data }: any) => {
  return (
    <>
      <Head>
        <title>Edit Post</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <EditPost jwt={jwt} feed={data} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res, query }) => {
  const { id } = query;
  const cookies = new Cookies(req, res);
  const jwt = cookies.get('jwt');

  if (!jwt) {
    res.writeHead(302, { Location: '/signin' }); //302 is a just code to redirect
    res.end();
  }

  const { data } = await Axios.get(`/posts/${id}`, {
    //get post ตาม path เเล้วใส่ใน data
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });

  return {
    props: {
      jwt,
      data, //  เอา data ใส่ ใน feeds
    },
  };
};

export default edit;
