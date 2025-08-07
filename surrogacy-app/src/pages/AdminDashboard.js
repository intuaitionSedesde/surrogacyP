import React from 'react';
import Sidebar from '../components/Sidebar';
import StatisticsOverview from '../components/admin/StatisticsOverview';
import RecentUsersList from '../components/admin/RecentUsersList';
import QuickActionsPanel from '../components/admin/QuickActionsPanel';
import ActivitySummary from '../components/admin/ActivitySummary';
import ReportsSection from '../components/admin/ReportsSection';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard-layout">
      <Sidebar />
      <div className="main-content">
        <h1>Administration Panel</h1>
        <StatisticsOverview />
        <RecentUsersList />
        <QuickActionsPanel />
        <ActivitySummary />
        <ReportsSection />
      </div>
    </div>
  );
};

export default AdminDashboard;
