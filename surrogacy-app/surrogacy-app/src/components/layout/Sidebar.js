import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  // In a real app, the links would be dynamic based on user role
  const navLinks = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Profile', path: '/profile' },
    { name: 'Messages', path: '/messages' },
    { name: 'Documents', path: '/documents' },
    { name: 'Settings', path: '/settings' },
  ];

  return (
    <aside className="sidebar">
      <nav>
        <ul>
          {navLinks.map(link => (
            <li key={link.name}>
              <a href={link.path}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
