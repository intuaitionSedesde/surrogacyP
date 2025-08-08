import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import UserList from './components/UserList';
import Button from '../../components/common/Button';
import './UserManagement.css';

const UserManagement = () => {
  return (
    <MainLayout>
      <div className="user-management-header">
        <h2>User Management</h2>
        <Button variant="primary">Add New User</Button>
      </div>
      <UserList />
    </MainLayout>
  );
};

export default UserManagement;
