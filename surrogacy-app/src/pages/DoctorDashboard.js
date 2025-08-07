import React from 'react';
import Statistics from '../components/doctor/Statistics';
import TodaysAppointments from '../components/doctor/TodaysAppointments';
import QuickActions from '../components/doctor/QuickActions';
import RecentCases from '../components/doctor/RecentCases';
import DocumentSection from '../components/doctor/DocumentSection';
import './DoctorDashboard.css';

const DoctorDashboard = () => {
  return (
    <div className="doctor-dashboard-container">
      <h1>Medical Panel</h1>
      <Statistics />
      <TodaysAppointments />
      <QuickActions />
      <RecentCases />
      <DocumentSection />
    </div>
  );
};

export default DoctorDashboard;
