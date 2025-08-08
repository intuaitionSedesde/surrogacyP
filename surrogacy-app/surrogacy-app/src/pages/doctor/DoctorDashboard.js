import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import Card from '../../components/common/Card';
import './DoctorDashboard.css';

const DoctorDashboard = () => {
  return (
    <MainLayout>
      <h2>Doctor's Panel</h2>
      <div className="dashboard-grid">
        <Card>
          <h3>Medical Services</h3>
          <p>Placeholder for managing embryo transfer, neonatology, etc.</p>
        </Card>
        <Card>
          <h3>Medical Documentation</h3>
          <p>Placeholder for uploading and managing medical documents.</p>
        </Card>
      </div>
    </MainLayout>
  );
};

export default DoctorDashboard;
