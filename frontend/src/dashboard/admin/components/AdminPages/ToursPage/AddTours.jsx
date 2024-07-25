import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from '../../../../../utils/config';

const AddTour = () => {
  const [tourData, setTourData] = useState({
    name: '',
    description: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTourData({ ...tourData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/tours/admin/`, tourData);
      toast.success(response.data.message);
      setTourData({ name: '', description: '', price: '' });
    } catch (err) {
      if (err.response && err.response.data) {
        toast.error(`Failed to add tour: ${err.response.data.message}`);
        console.error(err.response.data);
      } else {
        toast.error('Failed to add tour');
        console.error(err);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-semibold mb-6">Add New Tour</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700">Name:</label>
          <input
            type="text"
            name="name"
            value={tourData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-gray-700">Description:</label>
          <textarea
            name="description"
            value={tourData.description}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-gray-700">Price:</label>
          <input
            type="number"
            name="price"
            value={tourData.price}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
        >
          Add Tour
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddTour;
