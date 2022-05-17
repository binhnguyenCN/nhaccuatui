// libs
import React from 'react';
// layouts
import Layout from '../components/Layout';
// styles
import 'antd/dist/antd.css';
import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
