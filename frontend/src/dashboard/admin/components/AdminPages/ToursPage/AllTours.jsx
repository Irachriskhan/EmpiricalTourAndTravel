import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaTrash } from 'react-icons/fa';
import { BASE_URL } from '../../../../../utils/config';
import useFetch from '../../../../../hooks/useFetch';
import TourEditForm from './TourEditForm';

function AllTours() {
  const { data: initialTours, loading, error, refetch } = useFetch(`${BASE_URL}/tours`);
  const [tours, setTours] = useState([]);
  const [filteredTours, setFilteredTours] = useState([]);
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);
  const [statusFilter, setStatusFilter] = useState(''); 

  useEffect(() => {
    if (initialTours) {
      setTours(initialTours);
      setFilteredTours(initialTours); 
    }
  }, [initialTours]);

  useEffect(() => {
    if (statusFilter) {
      setFilteredTours(tours.filter(tour => tour.status === statusFilter));
    } else {
      setFilteredTours(tours);
    }
  }, [tours, statusFilter]);

  const handleDelete = async (_id) => {
    toast.info(
      <div>
        <p>Are you sure you want to delete this tour?</p>
        <div>
          <button
            onClick={async () => {
              try {
                const response = await axios.patch(`${BASE_URL}/tours/admin/${_id}`);
                if (response.status === 200) {
                  toast.success('Deleted tour successfully');
                  setTours(tours.filter(tour => tour._id !== _id));
                } else {
                  toast.error('Cannot find the tour!');
                }
              } catch (error) {
                console.error('Error deleting tour:', error);
                toast.error('Failed to delete tour');
              }
            }}
            className="mr-2 bg-green-500 text-white p-1 rounded"
          >
            Yes
          </button>
          <button className="bg-gray-300 p-1 rounded" onClick={() => toast.dismiss()}>
            No
          </button>
        </div>
      </div>,
      {
        autoClose: false,
        closeOnClick: false,
        draggable: false,
        closeButton: false,
      }
    );
  };

  const handleView = (tour) => {
    setSelectedTour(tour);
    setShowEditForm(true);
  };

  const handleCloseForm = () => {
    setSelectedTour(null);
    setShowEditForm(false);
  };

  const handleUpdate = async (formData) => {
    try {
      const response = await axios.get(`${BASE_URL}/tours/admin/${formData._id}`, formData);
      if (response.status === 200) {
        toast.success('Tour details updated successfully');
        setShowEditForm(false);
        refetch();
      } else {
        toast.error('Failed to update tour');
      }
    } catch (error) {
      console.error('Error updating tour:', error);
      toast.error('Failed to update tour');
    }
  };

  return (
    <div className="p-1">
      <ToastContainer />
      <h1 className="text-2xl font-bold mb-4 text-green-700">All Tours</h1>
      {showEditForm && selectedTour && (
        <TourEditForm tour={selectedTour} onUpdate={handleUpdate} onClose={handleCloseForm} />
      )}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 divide-y divide-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-green-500">
            <tr className="text-left text-xs md:text-sm lg:text-base text-white uppercase tracking-wider">
              <th className="py-2 md:py-3 px-3 md:px-4 lg:px-5">Title</th>
              <th className="py-2 md:py-3 px-3 md:px-4 lg:px-5">City</th>
              <th className="py-2 md:py-3 px-3 md:px-4 lg:px-5">Address</th>
              <th className="py-2 md:py-3 px-3 md:px-4 lg:px-5">Price</th>
              <th className="py-2 md:py-3 px-3 md:px-4 lg:px-5">Max People</th>
              <th className="py-2 md:py-3 px-3 md:px-4 lg:px-5">
                <div className="flex items-center">
                  Status
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="ml-2 border border-blue-300 bg-green-500 text-white rounded p-1 text-xs"
                  >
                    <option value="">All</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
              </th>
              <th className="py-2 md:py-3 px-3 md:px-4 lg:px-5 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan="7" className="py-4 text-center">Loading...</td>
              </tr>
            )}
            {error && (
              <tr>
                <td colSpan="7" className="py-4 text-center text-red-500">{error}</td>
              </tr>
            )}
            {!loading && !error && filteredTours.map((tour) => (
              <tr key={tour._id} className="hover:bg-green-100">
                <td className="py-3 md:py-4 px-3 md:px-4 lg:px-5 border">{tour.title}</td>
                <td className="py-3 md:py-4 px-3 md:px-4 lg:px-5 border">{tour.city}</td>
                <td className="py-3 md:py-4 px-3 md:px-4 lg:px-5 border">{tour.address}</td>
                <td className="py-3 md:py-4 px-3 md:px-4 lg:px-5 border">{tour.price}</td>
                <td className="py-3 md:py-4 px-3 md:px-4 lg:px-5 border">{tour.maxPeople}</td>
                <td className="py-3 md:py-4 px-3 md:px-4 lg:px-5 border">{tour.status}</td>
                <td className="py-3 md:py-4 px-3 md:px-4 lg:px-5 border text-center">
                  <div className="flex justify-center items-center">
                    <button onClick={() => handleView(tour)} className="text-green-500 hover:text-green-700 mr-2">
                      <FaEye />
                    </button>
                    <button onClick={() => handleDelete(tour._id)} className="text-green-500 hover:text-green-700">
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

export default AllTours;
