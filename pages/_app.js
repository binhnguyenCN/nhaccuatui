import '../styles/globals.scss';
import React from 'react';
import Layout from '../components/Layout';

// import PropTypes from 'prop-types';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
// MyApp.propTypes = {
//   Component: PropTypes.objectOf(PropTypes.object()).isRequired,
//   pageProps: PropTypes.objectOf(PropTypes.object()).isRequired,
// Component: PropTypes.object,
// };
export default MyApp;
