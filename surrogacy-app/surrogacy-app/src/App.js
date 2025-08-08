import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminDashboard from './pages/admin/AdminDashboard';
import UserManagement from './pages/admin/UserManagement';
import DoctorDashboard from './pages/doctor/DoctorDashboard';
import LawyerDashboard from './pages/lawyer/LawyerDashboard';
import SurrogateDashboard from './pages/surrogate/SurrogateDashboard';
import IntendedParentDashboard from './pages/intended-parent/IntendedParentDashboard';

function App() {
  // In a real app, there would be logic to determine the user's role
  // and render the appropriate dashboard. For now, we'll just define the routes.
  return (
    <BrowserRouter>
      <Routes>
        {/* For now, we'll make the Admin Dashboard the root. */}
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<UserManagement />} />

        {/* We can add other routes here as needed */}
        <Route path="/doctor" element={<DoctorDashboard />} />
        <Route path="/lawyer" element={<LawyerDashboard />} />
        <Route path="/surrogate" element={<SurrogateDashboard />} />
        <Route path="/intended-parent" element={<IntendedParentDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
