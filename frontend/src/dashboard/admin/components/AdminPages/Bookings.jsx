import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaTrash } from 'react-icons/fa';
import moment from 'moment';
import { BASE_URL } from '../../../../utils/config';
import useFetch from '../../../../hooks/useFetch';

function Bookings() {
  const { data: initialBookings, loading, error, refetch } = useFetch(`${BASE_URL}/booking`);
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);

  useEffect(() => {
    if (initialBookings) {
      setBookings(initialBookings);
    }
  }, [initialBookings]);

  const handleDelete = async (_id) => {
    try {
      const response = await axios.patch(`${BASE_URL}/booking/${_id}`);
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

  const handleView = async (bookingId) => {
    try {
      const response = await axios.get(`${BASE_URL}/booking/${bookingId}`);
      if (response.status === 200) {
        setSelectedBooking(response.data);
        toast.success('Booking details fetched successfully');
      }
    } catch (error) {
      toast.error('Failed to fetch booking');
      console.error(error);
    }
  };

  const closeBookingDetails = () => {
    setSelectedBooking(null);
  };

  return (
    <div className="p-1">
      <ToastContainer />
      <h1 className="text-2xl font-bold mb-4 text-green-700">All Bookings</h1>
      <div className="overflow-x-auto">
        <table className="table-responsive min-w-full bg-white border border-gray-300 divide-y divide-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-green-500">
            <tr className="text-left text-xs md:text-sm lg:text-base text-white uppercase tracking-wider">
              <th className="py-2 md:py-3 px-1 md:px-4 lg:px-5">Customer Name</th>
              <th className="py-2 md:py-3 px-1 md:px-4 lg:px-5">Tour Title</th>
              <th className="py-2 md:py-3 px-1 md:px-4 lg:px-5">Booking Date</th>
              <th className="py-2 md:py-3 px-1 md:px-4 lg:px-5">Status</th>
              <th className="py-2 md:py-3 px-1 md:px-4 lg:px-5">Phone</th>
              <th className="py-2 md:py-3 px-1 md:px-4 lg:px-5 text-center">Actions</th>
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
                    <button onClick={() => handleView(booking._id)} className="text-green-500 hover:text-green-700 mr-2">
                      <FaEye />
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
      {selectedBooking && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Booking Details</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Customer Name:</label>
                <input
                  type="text"
                  value={selectedBooking.useremail}
                  readOnly
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Tour Title:</label>
                <input
                  type="text"
                  value={selectedBooking.tourName}
                  readOnly
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Booking Date:</label>
                <input
                  type="text"
                  value={moment(selectedBooking.bookAt).format('MMMM Do YYYY')}
                  readOnly
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Status:</label>
                <input
                  type="text"
                  value={selectedBooking.status}
                  readOnly
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Phone:</label>
                <input
                  type="text"
                  value={selectedBooking.phone}
                  readOnly
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Address:</label>
                <input
                  type="text"
                  value={selectedBooking.address}
                  readOnly
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <button type="button" onClick={closeBookingDetails} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Bookings;
