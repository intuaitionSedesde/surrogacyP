import React from 'react';
import PregnancyProgress from '../components/surrogate/PregnancyProgress';
import UpcomingAppointments from '../components/surrogate/UpcomingAppointments';
import RecentDocuments from '../components/surrogate/RecentDocuments';
import QuickActions from '../components/surrogate/QuickActions';
import './SurrogateMotherDashboard.css';

const SurrogateMotherDashboard = () => {
  return (
    <div className="surrogate-mother-dashboard-container">
      <h1>My Pregnancy Panel</h1>
      <PregnancyProgress />
      <UpcomingAppointments />
      <RecentDocuments />
      <QuickActions />
    </div>
  );
};

export default SurrogateMotherDashboard;
