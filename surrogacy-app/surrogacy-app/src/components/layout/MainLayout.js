import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import './MainLayout.css';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      <Sidebar />
      <main className="content">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
