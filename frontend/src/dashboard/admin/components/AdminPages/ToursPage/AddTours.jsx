import React, { useState } from 'react';

function AddTours() {
  const [tour, setTour] = useState({
    name: '',
    description: '',
    price: '',
    duration: '',
    imageUrl: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTour({
      ...tour,
      [name]: value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    try {
      if (tour) {
        const response = await axios.put(`${BASE_URL}/tours/${tour_id}`, formData);
     
        if (response.status === 200){
        toast.success('Tour Added successfull');
        onSuccess();
        console.log('Tour data submitted:', tour);
      }
      else {

      }
      }
    } catch (error) {
      console.error(error);
      toast.error('Failed to save tour');
    }
   
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Tour</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Tour Name
          </label>
          <input
            type="text"
            name="name"
            value={tour.name}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            value={tour.description}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            type="number"
            name="price"
            value={tour.price}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Duration (days)
          </label>
          <input
            type="number"
            name="duration"
            value={tour.duration}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            type="text"
            name="imageUrl"
            value={tour.imageUrl}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Add Tour
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTours;
