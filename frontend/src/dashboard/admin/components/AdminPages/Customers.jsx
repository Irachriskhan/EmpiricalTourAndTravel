import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaUserCircle, FaTrash, FaEdit } from 'react-icons/fa';
import { BASE_URL } from '../../../../utils/config';
import useFetch from '../../../../hooks/useFetch';
import CustomerEditForm from './CustomerEditForm'; // Assuming it's in the same directory

function Customers() {
  const { data: users, loading, error, refetch } = useFetch(`${BASE_URL}/users`);
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/users/${id}`);
      if (response.status === 200) {
        toast.success(response.data.message);
        refetch(); // Optionally, refetch data after successful delete
      }
    } catch (error) {
      console.error(error);
      toast.error('Failed to delete customer');
    }
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setFormData({
      id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      address: user.address,
    });
    setShowEditForm(true);
  };

  const handleCloseForm = () => {
    setSelectedUser(null);
    setFormData({
      id: '',
      name: '',
      email: '',
      phone: '',
      address: '',
    });
    setShowEditForm(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${BASE_URL}/users/${formData.id}`, formData);
      if (response.status === 200) {
        toast.success('Customer details updated successfully');
        setShowEditForm(false);
        refetch(); // Optionally, refetch data after successful update
      }
    } catch (error) {
      console.error(error);
      toast.error('Failed to update customer');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Customers</h1>

      {/* Edit Form */}
      {showEditForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-4 shadow-md rounded-lg max-w-md w-full">
            <h2 className="text-lg font-semibold mb-4">Edit Customer</h2>
            <form onSubmit={handleUpdate}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:border-blue-500 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:border-blue-500 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:border-blue-500 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:border-blue-500 w-full"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2">Save</button>
                <button type="button" onClick={handleCloseForm} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 divide-y divide-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr className="text-left text-xs md:text-sm lg:text-base text-gray-600 uppercase tracking-wider">
              <th className="py-2 md:py-3 px-3 md:px-4 lg:px-5">Profile</th>
              <th className="py-2 md:py-3 px-3 md:px-4 lg:px-5">Email</th>
              <th className="py-2 md:py-3 px-3 md:px-4 lg:px-5">Phone</th>
              <th className="py-2 md:py-3 px-3 md:px-4 lg:px-5">Address</th>
              <th className="py-2 md:py-3 px-3 md:px-4 lg:px-5 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan="5" className="py-4 text-center">Loading...</td>
              </tr>
            )}
            {error && (
              <tr>
                <td colSpan="5" className="py-4 text-center text-red-500">{error}</td>
              </tr>
            )}
            {!loading && !error && users.map((user) => (
              <tr key={user._id} className="hover:bg-gray-50">
                <td className="py-3 md:py-4 px-3 md:px-4 lg:px-5 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="mr-3">
                      <div className="rounded-full bg-gray-300 p-2">
                        <FaUserCircle className="text-gray-600" />
                      </div>
                    </div>
                    <span className="font-medium">{user.name}</span>
                  </div>
                </td>
                <td className="py-3 md:py-4 px-3 md:px-4 lg:px-5">{user.email}</td>
                <td className="py-3 md:py-4 px-3 md:px-4 lg:px-5">{user.phone}</td>
                <td className="py-3 md:py-4 px-3 md:px-4 lg:px-5">{user.address}</td>
                <td className="py-3 md:py-4 px-3 md:px-4 lg:px-5 text-center">
                  <div className="flex justify-center items-center">
                    <button onClick={() => handleEdit(user)} className="text-gray-500 hover:text-gray-700 mr-2">
                      <FaEdit />
                    </button>
                    <button onClick={() => handleDelete(user._id)} className="text-red-500 hover:text-red-700">
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

export default Customers;
