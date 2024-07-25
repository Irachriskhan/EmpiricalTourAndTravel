import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Tours from "../pages/Tours";
import About from "../pages/About";
import Contact from "../pages/Contact"
import TourDetails from "../pages/TourDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";  
import SearchResultList from "../pages/SearchResultList";
import ThankYou from "../pages/ThankYou";
import Dashboard from "../dashboard/admin/pages/Dashboard";
import AdminLayout from "../dashboard/admin/components/shared/AdminLayout";

// Admin dashboard pages
import Customers from "../dashboard/admin/components/AdminPages/Customers";
import ToursPage from "../dashboard/admin/components/AdminPages/ToursPage/AllTours";
import Bookings from "../dashboard/admin/components/AdminPages/Bookings";
import Feedback from "../dashboard/admin/components/AdminPages/Feedback";
import TourPackage from "../dashboard/admin/components/AdminPages/TourPackage";
import AddTours from "../dashboard/admin/components/AdminPages/ToursPage/AddTours";
import Messages from "../dashboard/admin/components/AdminPages/Messages";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/about" element={<About />} />
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/tours/:id" element={<TourDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} /> {/* Added ForgotPassword route */}
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/tours/search" element={<SearchResultList />} />

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/admin/customers" element={<Customers />} />
        <Route path="/admin/tourspage/alltours" element={<ToursPage />} />
        <Route path="/admin/bookings" element={<Bookings />} />
        <Route path="/admin/feedback" element={<Feedback />} />
        <Route path="/admin/tourpackage" element={<TourPackage />} />
        <Route path="/admin/messages" element={<Messages />} />
        <Route path="/admin/tourspage/addtours" element={<AddTours />} />
      </Route>
    </Routes>
  );
};

export default Routers;
