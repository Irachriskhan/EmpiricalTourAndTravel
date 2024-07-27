// components/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './UserSiderbar';
import Header from './UserHeader';

const Layout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <div className="flex-grow p-4 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
