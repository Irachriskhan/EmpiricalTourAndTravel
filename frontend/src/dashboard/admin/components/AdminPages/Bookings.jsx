import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEdit, FaTrash } from 'react-icons/fa';
import moment from 'moment';
import { BASE_URL } from '../../../../utils/config';
import useFetch from '../../../../hooks/useFetch';

function Bookings() {
  const { data: initialBookings, loading, error, refetch } = useFetch(`${BASE_URL}/booking`);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (initialBookings) {
      setBookings(initialBookings);
    }
  }, [initialBookings]);

  const handleDelete = async (_id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/booking/${_id}`);
      if (response.status === 200) {
        toast.success('Deleted booking successfully');
        setBookings(bookings.filter(booking => booking._id !== _id));
      } else {
        toast.error('Cannot find the booking!');
      }
    } catch (error) {
      console.error('Error deleting booking:', error);
      toast.error('Failed to delete booking');
    }
  };

  const handleEdit = (booking) => {
    // Handle the edit functionality here
    // You can open a modal or a new form for editing
  };

  return (
    <div className="container mx-auto p-4">
      <ToastContainer />
      <h1 className="text-2xl font-bold mb-4 text-green-700">All Bookings</h1>
      <div className="overflow-x-auto">
        <table className="table-responsive min-w-full bg-white border border-gray-300 divide-y divide-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-green-500">
            <tr className="text-left text-xs md:text-sm lg:text-base text-white uppercase tracking-wider">
              <th className="py-2 md:py-3 px-3 md:px-4 lg:px-5">Customer Name</th>
              <th className="py-2 md:py-3 px-3 md:px-4 lg:px-5">Tour Title</th>
              <th className="py-2 md:py-3 px-3 md:px-4 lg:px-5">Booking Date</th>
              <th className="py-2 md:py-3 px-3 md:px-4 lg:px-5">Status</th>
              <th className="py-2 md:py-3 px-3 md:px-4 lg:px-5">Phone</th>
              <th className="py-2 md:py-3 px-3 md:px-4 lg:px-5 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan="6" className="py-4 text-center">Loading...</td>
              </tr>
            )}
            {error && (
              <tr>
                <td colSpan="6" className="py-4 text-center text-red-500">{error}</td>
              </tr>
            )}
            {!loading && !error && bookings.map((booking) => (
              <tr key={booking._id} className="hover:bg-green-100">
                <td className="py-3 md:py-4 px-3 md:px-4 lg:px-5 border">{booking.useremail}</td>
                <td className="py-3 md:py-4 px-3 md:px-4 lg:px-5 border">{booking.tourName}</td>
                <td className="py-3 md:py-4 px-3 md:px-4 lg:px-5 border">{moment(booking.bookAt).format('MMMM Do YYYY')}</td>
                <td className="py-3 md:py-4 px-3 md:px-4 lg:px-5 border">{booking.status}</td>
                <td className="py-3 md:py-4 px-3 md:px-4 lg:px-5 border">{booking.phone}</td>
                <td className="py-3 md:py-4 px-3 md:px-4 lg:px-5 border text-center">
                  <div className="flex justify-center items-center">
                    <button onClick={() => handleEdit(booking)} className="text-green-500 hover:text-green-700 mr-2">
                      <FaEdit />
                    </button>
                    <button onClick={() => handleDelete(booking._id)} className="text-red-500 hover:text-red-700">
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Bookings;
