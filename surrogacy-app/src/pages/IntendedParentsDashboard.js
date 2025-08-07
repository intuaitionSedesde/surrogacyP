import React from 'react';
import ProcessSteps from '../components/intended-parents/ProcessSteps';
import CompatibleSurrogates from '../components/intended-parents/CompatibleSurrogates';
import UpcomingEvents from '../components/intended-parents/UpcomingEvents';
import Messaging from '../components/intended-parents/Messaging';
import InfoSection from '../components/intended-parents/InfoSection';
import './IntendedParentsDashboard.css';

const IntendedParentsDashboard = () => {
  return (
    <div className="intended-parents-dashboard-container">
      <h1>My Surrogate Maternity Process</h1>
      <ProcessSteps />
      <CompatibleSurrogates />
      <UpcomingEvents />
      <Messaging />
      <InfoSection />
    </div>
  );
};

export default IntendedParentsDashboard;
