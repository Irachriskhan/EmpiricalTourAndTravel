import React, { useState } from 'react';
import useFetch from '../../../../../hooks/useFetch';
import { BASE_URL } from '../../../../../utils/config';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function AllTours() {
  const { data: tours, loading, error, refetch } = useFetch(`${BASE_URL}/tours`);
  const [statuses, setStatuses] = useState({});

  const handleStatusChange = (tourId, newStatus) => {
    setStatuses(prevStatuses => ({
      ...prevStatuses,
      [tourId]: newStatus
    }));
    // Optionally, update the status on the server
    // fetch(`${BASE_URL}/tours/${tourId}`, {
    //   method: 'PUT',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ status: newStatus })
    // }).then(refetch);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/tours/${id}`);
      if (response.status === 200) {
        toast.success(response.data.message);
        refetch();
      }
    } catch (error) {
      console.error(error);
      toast.error('Failed to delete tour');
    }
  };

  const handleUpdate = async (id, e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${BASE_URL}/tours/${id}`);
      if (response.status === 200) {
        toast.success('Tour detail updated successfully');
        refetch();
      }
    } catch (error) {
      console.error(error);
      toast.error('Failed to update tour');
    }
  };

  const handleEdit = async(tour) => {
    e.preventDefault();
    try {
        const response = await axios.put(`${BASE_URL}/tours/${id}`)
        if (response.status === 200) {
            toast.success('Tour detail updated successfully');
        }
    } catch(error){
        console.error(error)
        
    }
    console.log('Edit tour', tour);
    // Optionally, navigate to an edit page or open a modal for editing
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 divide-y divide-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr className="text-left text-xs md:text-sm lg:text-base text-gray-600 uppercase tracking-wider">
            <th className="py-2 md:py-3 px-3 md:px-4 lg:px-5">Title</th>
            <th className="py-2 md:py-3 px-3 md:px-4 lg:px-5">City</th>
            <th className="py-2 md:py-3 px-3 md:px-4 lg:px-5">Address</th>
            <th className="py-2 md:py-3 px-3 md:px-4 lg:px-5">Price</th>
            <th className="py-2 md:py-3 px-3 md:px-4 lg:px-5">Max People</th>
            <th className="py-2 md:py-3 px-3 md:px-4 lg:px-5">Status</th>
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
          {!loading && !error && tours.map((tour) => (
            <tr key={tour._id} className="hover:bg-gray-50">
              <td className="py-3 md:py-4 px-3 md:px-4 lg:px-5 whitespace-nowrap">{tour.title}</td>
              <td className="py-3 md:py-4 px-3 md:px-4 lg:px-5">{tour.city}</td>
              <td className="py-3 md:py-4 px-3 md:px-4 lg:px-5">{tour.address}</td>
              <td className="py-3 md:py-4 px-3 md:px-4 lg:px-5">{tour.price}</td>
              <td className="py-3 md:py-4 px-3 md:px-4 lg:px-5">{tour.maxPeople}</td>
              <td className="py-3 md:py-4 px-3 md:px-4 lg:px-5">
                <select
                  value={statuses[tour._id] || tour.status}
                  onChange={(e) => handleStatusChange(tour._id, e.target.value)}
                  className="border border-gray-300 rounded px-2 py-1"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Pending">Pending</option>
                </select>
              </td>
              <td className="py-3 md:py-4 px-3 md:px-4 lg:px-5 text-center">
                <div className="flex justify-center items-center">
                  <button onClick={() => handleEdit(tour)} className="text-gray-500 hover:text-gray-700 mr-2">
                    <Link to="/TourForm"/>
                    <FaEdit />
                  </button>
                  <button onClick={() => handleDelete(tour._id)} className="text-red-500 hover:text-red-700">
                    <FaTrash />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllTours;
