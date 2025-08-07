import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Admin Menu</h2>
      </div>
      <ul className="sidebar-menu">
        <li><a href="#statistics">Statistics</a></li>
        <li><a href="#users">Recent Users</a></li>
        <li><a href="#actions">Quick Actions</a></li>
        <li><a href="#activity">Activity Summary</a></li>
        <li><a href="#reports">Reports</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
