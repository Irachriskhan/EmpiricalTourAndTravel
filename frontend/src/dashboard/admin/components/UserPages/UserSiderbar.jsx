// components/Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-green-500 text-white flex flex-col">
      <NavLink to="/admin" className="p-4">Admin Dashboard</NavLink>
      <NavLink to="/user/profile" className="p-4">Profile</NavLink>
      <NavLink to="/user/bookings" className="p-4">Bookings</NavLink>
      <NavLink to="/user/notifications" className="p-4">Notifications</NavLink>
      <NavLink to="/user/chats" className="p-4">Chats</NavLink>
      <NavLink to="/user/settings" className="p-4">Settings</NavLink>
    </div>
  );
};

export default Sidebar;
