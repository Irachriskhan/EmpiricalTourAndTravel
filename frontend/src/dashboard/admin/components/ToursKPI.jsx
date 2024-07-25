import { useState, useEffect } from 'react';
import axios from 'axios';
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from "react-icons/io5";

const BASE_URL = 'your_base_url_here';

export default function ToursKPI() {
  const [totalTours, setTotalTours] = useState(0);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/tours/admin/`);
        const tours = response.data; // Assuming the response data contains the array of tours
        setTotalTours(tours.length); // Set the total number of tours
      } catch (error) {
        console.error('Error fetching tours:', error);
      }
    };

    fetchTours();
  }, []);

  return (
    <div className="flex gap-4">
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
          <IoBagHandle className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total Bookings</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">232</strong>
            <span className="text-sm text-green-500 pl-2">-33</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-400">
          <IoPieChart className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total Users</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">153</strong>
            <span className="text-sm text-green-500 pl-2">-3</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
          <IoPeople className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total Tours</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">{totalTours}</strong>
            <span className="text-sm text-red-500 pl-2">-30</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
          <IoCart className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total Amount</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">40,632</strong>
            <span className="text-sm text-red-500 pl-2">-15,000</span>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
}

function BoxWrapper({ children }) {
  return (
    <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">
      {children}
    </div>
  );
}
