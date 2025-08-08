import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import Card from '../../components/common/Card';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <MainLayout>
      <h2>Admin Panel</h2>
      <div className="dashboard-grid">
        <Link to="/admin/users" className="card-link">
          <Card>
            <h3>User Management</h3>
            <p>Manage users, roles, and permissions.</p>
          </Card>
        </Link>
        <Card>
          <h3>Content Management</h3>
          <p>Placeholder for managing site content.</p>
        </Card>
        <Card>
          <h3>System Configurations</h3>
          <p>Placeholder for system settings.</p>
        </Card>
        <Card>
          <h3>Matching Overview</h3>
          <p>Placeholder for monitoring matching processes.</p>
        </Card>
      </div>
    </MainLayout>
  );
};

export default AdminDashboard;
