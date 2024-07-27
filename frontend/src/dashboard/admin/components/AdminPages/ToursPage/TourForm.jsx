// TourForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../../../../utils/config';
import { toast } from 'react-toastify';

function TourForm({ tour, onSuccess }) {
  const [formData, setFormData] = useState({
    title: '',
    city: '',
    address: '',
    price: '',
    maxPeople: '',
    status: 'Active'
  });

  useEffect(() => {
    if (tour) {
      setFormData({
        title: tour.title,
        city: tour.city,
        address: tour.address,
        price: tour.price,
        maxPeople: tour.maxPeople,
        status: tour.status
      });
    }
  }, [tour]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (tour) {
        // Update tour
        const response = await axios.put(`${BASE_URL}/tours/${tour._id}`, formData);
        if (response.status === 200) {
          toast.success('Tour updated successfully');
          onSuccess();
        }
      } else {
        // Add new tour
        const response = await axios.post(`${BASE_URL}/tours`, formData);
        if (response.status === 201) {
          toast.success('Tour added successfully');
          onSuccess();
        }
      }
    } catch (error) {
      console.error(error);
      toast.error('Failed to save tour');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>City</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Address</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Price</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Max People</label>
        <input
          type="number"
          name="maxPeople"
          value={formData.maxPeople}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          required
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="Pending">Pending</option>
        </select>
      </div>
      <button type="submit">
        {tour ? 'Update Tour' : 'Add Tour'}
      </button>
    </form>
  );
}

export default TourForm;
