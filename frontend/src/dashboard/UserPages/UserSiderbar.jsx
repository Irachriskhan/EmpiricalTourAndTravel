import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser, FaClipboardList, FaBell, FaComments, FaCog, FaHome } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-64 bg-green-500 text-white flex flex-col">
      <NavLink 
        to="/user" 
        className="p-4 flex items-center text-white hover:bg-green-600"
      >
        <FaHome className="mr-2" /> User Dashboard
      </NavLink>
      <NavLink 
        to="/user/profile" 
        className="p-4 flex items-center text-white hover:bg-green-600"
      >
        <FaUser className="mr-2" /> Profile
      </NavLink>
      <NavLink 
        to="/user/bookings" 
        className="p-4 flex items-center text-white hover:bg-green-600"
      >
        <FaClipboardList className="mr-2" /> Bookings
      </NavLink>
      <NavLink 
        to="/user/notifications" 
        className="p-4 flex items-center text-white hover:bg-green-600"
      >
        <FaBell className="mr-2" /> Notifications
      </NavLink>
      <NavLink 
        to="/user/chats" 
        className="p-4 flex items-center text-white hover:bg-green-600"
      >
        <FaComments className="mr-2" /> Chats
      </NavLink>
      <NavLink 
        to="/user/settings" 
        className="p-4 flex items-center text-white hover:bg-green-600"
      >
        <FaCog className="mr-2" /> Settings
      </NavLink>
    </div>
  );
};

export default Sidebar;
