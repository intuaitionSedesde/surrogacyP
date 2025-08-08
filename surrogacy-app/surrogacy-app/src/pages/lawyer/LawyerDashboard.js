import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import Card from '../../components/common/Card';
import './LawyerDashboard.css';

const LawyerDashboard = () => {
  return (
    <MainLayout>
      <h2>Lawyer's Panel</h2>
      <div className="dashboard-grid">
        <Card>
          <h3>Legal Contracts</h3>
          <p>Placeholder for managing contracts and legal guarantees.</p>
        </Card>
        <Card>
          <h3>Legal Documentation</h3>
          <p>Placeholder for uploading and managing legal documents.</p>
        </Card>
      </div>
    </MainLayout>
  );
};

export default LawyerDashboard;
