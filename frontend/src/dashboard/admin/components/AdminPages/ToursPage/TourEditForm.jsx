import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TourEditForm = ({ tour, onUpdate, onClose }) => {
  const [formData, setFormData] = useState({
    id: tour._id,
    photo: tour.photo,
    title: tour.title,
    desc: tour.desc,
    city: tour.city,
    address: tour.address,
    price: tour.price,
    maxPeople: tour.maxPeople,
    status: tour.status,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-4 shadow-md rounded-lg max-w-lg w-full">
        <h2 className="text-lg font-semibold mb-4">View Tour</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <div className="mb-2 sm:mb-0">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-2 py-1 mt-1 focus:outline-none focus:border-blue-500 w-full text-sm"
                required
              />
            </div>
            <div className="mb-2 sm:mb-0">
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-2 py-1 mt-1 focus:outline-none focus:border-blue-500 w-full text-sm"
                required
              />
            </div>
            <div className="mb-2 sm:mb-0">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-2 py-1 mt-1 focus:outline-none focus:border-blue-500 w-full text-sm"
                required
              />
            </div>
            <div className="mb-2 sm:mb-0">
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-2 py-1 mt-1 focus:outline-none focus:border-blue-500 w-full text-sm"
                required
              />
            </div>
            <div className="mb-2 sm:mb-0">
              <label htmlFor="maxPeople" className="block text-sm font-medium text-gray-700">Max People</label>
              <input
                type="number"
                id="maxPeople"
                name="maxPeople"
                value={formData.maxPeople}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-2 py-1 mt-1 focus:outline-none focus:border-blue-500 w-full text-sm"
                required
              />
            </div>
            <div className="mb-2 sm:mb-0">
              <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-2 py-1 mt-1 focus:outline-none focus:border-blue-500 w-full text-sm"
                required
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg mr-2"
            >
              Close
            </button>
           
          </div>
        </form>
      </div>
    </div>
  );
};

TourEditForm.propTypes = {
  tour: PropTypes.object.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default TourEditForm;
