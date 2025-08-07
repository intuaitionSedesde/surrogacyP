import React from 'react';
import SearchAndFilterPanel from '../components/matching/SearchAndFilterPanel';
import AvailableSurrogates from '../components/matching/AvailableSurrogates';
import ParentsLooking from '../components/matching/ParentsLooking';
import MatchingAlgorithm from '../components/matching/MatchingAlgorithm';
import MatchNotifications from '../components/matching/MatchNotifications';
import MatchHistoryLog from '../components/matching/MatchHistoryLog';
import './MatchingSystemDashboard.css';

const MatchingSystemDashboard = () => {
  return (
    <div className="matching-system-dashboard-container">
      <h1>Matching System</h1>
      <SearchAndFilterPanel />
      <div className="columns">
        <div className="column">
          <AvailableSurrogates />
        </div>
        <div className="column">
          <ParentsLooking />
        </div>
      </div>
      <MatchingAlgorithm />
      <MatchNotifications />
      <MatchHistoryLog />
    </div>
  );
};

export default MatchingSystemDashboard;
