// import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Tours from "../pages/Tours";
import About from "../pages/About";
import TourDetails from "../pages/TourDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SearchResultList from "../pages/SearchResultList";
import ThankYou from "../pages/ThankYou";
import Dashboard from "../dashboard/admin/pages/Dashboard";

import Layout from "../dashboard/admin/components/shared/Layout";
// admin dashboard pages
import Customers from "../dashboard/admin/components/AdminPages/Customers";
import ToursPage from "../dashboard/admin/components/AdminPages/ToursPage/AllTours";
import Bookings from "../dashboard/admin/components/AdminPages/Bookings";
import Feedback from "../dashboard/admin/components/AdminPages/Feedback";
import TourPackage from "../dashboard/admin/components/AdminPages/TourPackage";
import AddTours    from "../dashboard/admin/components/AdminPages/ToursPage/AddTours"
import Messages from "../dashboard/admin/components/AdminPages/Messages";


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/about" element={<About />} />
      <Route path="/tours/:id" element={<TourDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/tours/search" element={<SearchResultList />} />

      <Route path="/admin" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="/admin/Customers" element={<Customers/>} />
        <Route path="/admin/ToursPage/AllTours" element={<ToursPage />} />
        <Route path="/admin/Bookings" element={<Bookings/>} />
        <Route path="/admin/Feedback" element={<Feedback/>} />
        <Route path="/admin/TourPackage" element={<TourPackage/>} />
        <Route path="/admin/Messages" element={<Messages/>} />
        <Route path="/admin/ToursPage/AddTours" element={<AddTours/>} />
      </Route>
    </Routes>
  );
};

export default Routers;
