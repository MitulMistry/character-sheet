import React from 'react';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <p>Layout</p>
      <Outlet />
    </div>
  );
}

export default Layout;