import '../styles/globals.scss';
// libs
import React from 'react';
// layouts
import Layout from '../components/Layout';

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
