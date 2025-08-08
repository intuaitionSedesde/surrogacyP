import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import Card from '../../components/common/Card';
import './SurrogateDashboard.css';

const SurrogateDashboard = () => {
  return (
    <MainLayout>
      <h2>Surrogate's Dashboard</h2>
      <div className="dashboard-grid">
        <Card>
          <h3>My Profile</h3>
          <p>Placeholder for viewing and managing profile.</p>
        </Card>
        <Card>
          <h3>Medical Appointments</h3>
          <p>Placeholder for viewing and managing appointments.</p>
        </Card>
        <Card>
          <h3>Matched Intended Parents</h3>
          <p>Placeholder for information about matched parents.</p>
        </Card>
        <Card>
          <h3>Documents</h3>
          <p>Placeholder for uploading and managing required documents.</p>
        </Card>
      </div>
    </MainLayout>
  );
};

export default SurrogateDashboard;
