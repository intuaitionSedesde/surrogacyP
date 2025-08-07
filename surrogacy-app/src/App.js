import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RoleSelection from './pages/RoleSelection';
import AdminDashboard from './pages/AdminDashboard';
import MatchingSystemDashboard from './pages/MatchingSystemDashboard';
import DoctorDashboard from './pages/DoctorDashboard';
import IntendedParentsDashboard from './pages/IntendedParentsDashboard';
import SurrogateMotherDashboard from './pages/SurrogateMotherDashboard';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<RoleSelection />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/matching-system" element={<MatchingSystemDashboard />} />
          <Route path="/doctor" element={<DoctorDashboard />} />
          <Route path="/intended-parent" element={<IntendedParentsDashboard />} />
          <Route path="/surrogate" element={<SurrogateMotherDashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
