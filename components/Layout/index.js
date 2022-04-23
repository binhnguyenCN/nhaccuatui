import React from 'react';

function Layout(props) {
  const { children } = props;
  return (
    <>
      <h1>Nhaccuatui</h1>
      {children}
    </>
  );
}
export default Layout;
