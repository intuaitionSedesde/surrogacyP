import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import Card from '../../components/common/Card';
import './IntendedParentDashboard.css';

const IntendedParentDashboard = () => {
  return (
    <MainLayout>
      <h2>Intended Parent's Dashboard</h2>
      <div className="dashboard-grid">
        <Card>
          <h3>Find a Surrogate</h3>
          <p>Placeholder for searching and matching with surrogates.</p>
        </Card>
        <Card>
          <h3>Assigned Professionals</h3>
          <p>Placeholder for viewing assigned doctors and lawyers.</p>
        </Card>
        <Card>
          <h3>Documentation</h3>
          <p>Placeholder for managing documents and tracking progress.</p>
        </Card>
      </div>
    </MainLayout>
  );
};

export default IntendedParentDashboard;
