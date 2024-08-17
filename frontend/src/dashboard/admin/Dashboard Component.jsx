import React from 'react';
import { FaUser, FaChartBar, FaClipboardList } from 'react-icons/fa'; 

const Dashboard = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4"> Admin Dashboard</h1>
      <div className="grid grid-cols-3 gap-4">
        {/* Users Card */}
        <div className="bg-white shadow rounded p-4 flex items-center">
          <FaUser className="text-blue-500 text-3xl mr-4" />
          <div>
            <h2 className="text-xl font-bold"> Users</h2>
            <p className="text-gray-600"> 150</p>
          </div>
        </div>
        {/* Bookings Card */}
        <div className="bg-white shadow rounded p-4 flex items-center">
          <FaClipboardList className="text-green-500 text-3xl mr-4" />
          <div>
            <h2 className="text-xl font-bold"> Bookings</h2>
            <p className="text-gray-600">45</p>
          </div>
        </div>
        {/* Revenue Card */}
        <div className="bg-white shadow rounded p-4 flex items-center">
          <FaChartBar className="text-purple-500 text-3xl mr-4" />
          <div>
            <h2 className="text-xl font-bold"> Revenue</h2>
            <p className="text-gray-600"> $12,500</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
