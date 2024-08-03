import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from '../../../../utils/config';

const TourPackage = () => {
  const [tourPackages, setTourPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTourPackages = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/tour-packages`);
        console.log('Fetched data:', response.data);
        
        if (response.data && Array.isArray(response.data.data)) {
          setTourPackages(response.data.data);
          toast.success('Tour packages loaded successfully!');
        } else {
          throw new Error('Data format is not correct');
        }
      } catch (error) {
        setError('Error fetching tour packages');
        toast.error('Error fetching tour packages');
        console.error('Error fetching tour packages:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTourPackages();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <ToastContainer />
      <header className="bg-green-500 shadow-md py-8 md:py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Discover the Wonders of Our Destinations</h1>
          <p className="text-gray-200 mt-2">Explore our carefully curated tour packages for an unforgettable travel experience.</p>
        </div>
      </header>
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Popular Tour Packages</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tourPackages.map((packageItem) => (
            <div key={packageItem._id} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105">
              <img src={packageItem.photo} alt={packageItem.title} className="h-40 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-1">{packageItem.title}</h3>
                <p className="text-gray-600 mb-1">{packageItem.caption}</p>
                {packageItem.duration && <p className="text-gray-600 mb-1">Duration: {packageItem.duration}</p>}
                <p className="text-gray-600 mb-1">Price: ${packageItem.price}</p>
                {packageItem.maxGroupSize && <p className="text-gray-600 mb-1">Max Group Size: {packageItem.maxGroupSize}</p>}
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mt-2">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-white py-12 px-4 md:py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Customized Tour Packages</h2>
          <p className="text-gray-600 mb-6">Can't find the perfect package? Let us create a custom tour just for you.</p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg">Request a Custom Tour</button>
        </div>
      </section>
    </div>
  );
};

export default TourPackage;
