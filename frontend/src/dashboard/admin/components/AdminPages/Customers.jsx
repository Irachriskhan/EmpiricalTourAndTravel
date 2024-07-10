import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUserCircle, FaTrash, FaEye } from 'react-icons/fa';
import { BASE_URL } from '../../../../utils/config';
import useFetch from '../../../../hooks/useFetch';

function Customers() {
  const { data: users, loading, error, refetch } = useFetch(`${BASE_URL}/users`);
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    username: '',
    phone: '',
    address: '',
    country: '',
    photo: '',
  });

  const handleDelete = async (id) => {
    try {
      const response = await axios.patch(`${BASE_URL}/users/${id}`);
      if (response.status === 200) {
        toast.success('Deleted customer successfully');
        await refetch();
      } else {
        throw new Error('Failed to delete customer');
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
      username: user.username,
      phone: user.phone,
      address: user.address,
      country: user.country,
      photo: user.photo,
    });
    setShowEditForm(true);
  };

  const handleCloseForm = () => {
    setSelectedUser(null);
    setFormData({
      id: '',
      name: '',
      email: '',
      username: '',
      phone: '',
      address: '',
      country: '',
      photo: '',
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
      const response = await axios.get(`${BASE_URL}/users/${formData.id}`, formData);
      if (response.status === 200) {
        toast.success('Customer details updated successfully');
        setShowEditForm(false);
        await refetch();
      } else {
        throw new Error('Failed to update customer');
      }
    } catch (error) {
      console.error(error);
      toast.error('Failed to update customer');
    }
  };

  return (
    <div className="p-1">
      <ToastContainer />
      <h1 className="text-3xl font-bold mb-6 text-center text-green-600">Customers</h1>

      {showEditForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 shadow-md rounded-lg max-w-md w-full mx-4">
            <h2 className="text-lg font-semibold mb-4 text-green-600">View Customer</h2>
            <form onSubmit={handleUpdate}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  { label: 'Name', name: 'name', type: 'text' },
                  { label: 'Email', name: 'email', type: 'email' },
                  { label: 'Username', name: 'username', type: 'text' },
                  { label: 'Phone', name: 'phone', type: 'tel' },
                  { label: 'Address', name: 'address', type: 'text' },
                  { label: 'Country', name: 'country', type: 'text' },
                  { label: 'Photo URL', name: 'photo', type: 'text' },
                ].map(({ label, name, type }) => (
                  <div key={name}>
                    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
                      {label}
                    </label>
                    <input
                      type={type}
                      id={name}
                      name={name}
                      value={formData[name]}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:border-green-500 w-full"
                      required
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-end mt-4">
                <button
                  type="button"
                  onClick={handleCloseForm}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition duration-300"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-green-200 border-b border-green-300">
            <tr className="text-left text-xs md:text-sm lg:text-base text-gray-700 uppercase tracking-wider">
              {['Profile', 'Email', 'Phone', 'Address', 'Actions'].map((heading) => (
                <th key={heading} className="py-2 px-3 md:py-3 md:px-4 border-r border-green-300">
                  {heading}
                </th>
              ))}
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
              <tr key={user._id} className="hover:bg-green-50 border-b border-green-200">
                <td className="py-2 px-3 md:py-4 md:px-4 whitespace-nowrap border-r border-green-200" data-label="Profile">
                  <div className="flex items-center">
                    <div className="mr-3">
                      <img
                        src={user.photo || 'default-photo-url'}
                        alt="User Photo"
                        className="rounded-full w-10 h-10 object-cover"
                      />
                    </div>
                    <span className="font-medium text-gray-700">{user.name}</span>
                  </div>
                </td>
                <td className="py-2 px-3 md:py-4 md:px-4 text-gray-600 border-r border-green-200" data-label="Email">{user.email}</td>
                <td className="py-2 px-3 md:py-4 md:px-4 text-gray-600 border-r border-green-200" data-label="Phone">{user.phone}</td>
                <td className="py-2 px-3 md:py-4 md:px-4 text-gray-600 border-r border-green-200" data-label="Address">{user.address}</td>
                <td className="py-2 px-3 md:py-4 md:px-4 text-center" data-label="Actions">
                  <div className="flex justify-center items-center space-x-2">
                    <button
                      onClick={() => handleEdit(user)}
                      className="text-green-500 hover:text-green-700 transition duration-300"
                    >
                      <FaEye />
                    </button>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="text-red-500 hover:text-red-700 transition duration-300"
                    >
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
