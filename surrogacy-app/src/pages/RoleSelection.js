import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RoleSelection.css';
import { FaUserShield, FaUserDoctor, FaScaleBalanced, FaBabyCarriage, FaHandHoldingHeart } from 'react-icons/fa';

const roles = [
  { name: 'Administrator', path: '/admin', icon: <FaUserShield />, tooltip: 'Manages the entire platform' },
  { name: 'Doctor', path: '/doctor', icon: <FaUserDoctor />, tooltip: 'Access to medical dashboard' },
  { name: 'Lawyer', path: '/lawyer', icon: <FaScaleBalanced />, tooltip: 'Manages contracts and legal matters' },
  { name: 'Intended Parent', path: '/intended-parent', icon: <FaBabyCarriage />, tooltip: 'Begin your journey to build a family' },
  { name: 'Surrogate', path: '/surrogate', icon: <FaHandHoldingHeart />, tooltip: 'Access your tracking dashboard' },
];

const RoleSelection = () => {
  const navigate = useNavigate();

  const handleRoleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="role-selection-container">
      <div className="role-selection-header">
        <h1>Select Your Role</h1>
        <p>Choose how you want to interact with the platform today.</p>
      </div>
      <div className="role-grid">
        {roles.map((role) => (
          <div
            className="role-card"
            key={role.name}
            title={role.tooltip}
            onClick={() => handleRoleClick(role.path)}
          >
            <div className="role-icon">{role.icon}</div>
            <div className="role-name">{role.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoleSelection;
