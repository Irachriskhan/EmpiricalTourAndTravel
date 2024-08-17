import { NavLink } from "react-router-dom";
import { FaHome, FaClipboardList, FaUsers, FaCalendarAlt } from "react-icons/fa"; 

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-green-500 text-white">
      <div className="flex items-center justify-center h-16">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      </div>
      <nav className="mt-10">
        <NavLink to="/admin/dashboard" className="flex items-center p-2">
          <FaHome className="h-5 w-5" />
          <span className="ml-4">Dashboard</span>
        </NavLink>
        <NavLink to="/admin/tours" className="flex items-center p-2">
          <FaClipboardList className="h-5 w-5" />
          <span className="ml-4">Tours</span>
        </NavLink>
        <NavLink to="/admin/customers" className="flex items-center p-2">
          <FaUsers className="h-5 w-5" />
          <span className="ml-4">Customers</span>
        </NavLink>
        <NavLink to="/admin/bookings" className="flex items-center p-2">
          <FaCalendarAlt className="h-5 w-5" />
          <span className="ml-4">Bookings</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
