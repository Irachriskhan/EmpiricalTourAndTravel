import React from 'react';
import { Link } from 'react-router-dom';
import { FaAward, FaTree, FaStar } from 'react-icons/fa';

function About() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-green-600">About Us</h2>
          <p className="text-lg mb-4">We Provide the Best Deals</p>
          <p className="text-gray-700 mb-8">Empirical Tour and Travel is a sustainable and responsible tour company that offers unforgettable travel experiences in Dr. Congo and the East African Region. We cater to travelers who are interested in safaris, gorilla trekking, cultural tours, sightseeing tours, and hiking adventures.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 text-center">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <FaTree className="text-green-600 text-4xl mb-4 mx-auto"/>
            <h2 className="text-2xl font-bold mb-4">Mission</h2>
            <p className="text-gray-700">Our mission is to provide sustainable and responsible travel experiences that showcase the natural beauty and cultural richness of the East African region. We strive to create memorable journeys that promote conservation and benefit local communities.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <FaAward className="text-green-600 text-4xl mb-4 mx-auto"/>
            <h2 className="text-2xl font-bold mb-4">Vision</h2>
            <p className="text-gray-700">Our vision is to be the leading tour company in East Africa, known for our commitment to sustainability, customer satisfaction, and exceptional travel experiences. We aim to inspire a love for travel and a deeper appreciation for the natural world.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <FaStar className="text-green-600 text-4xl mb-4 mx-auto"/>
            <h2 className="text-2xl font-bold mb-4">Our Achievements</h2>
            <ul className="list-disc list-inside text-gray-700 text-left mx-auto max-w-sm">
              <li className="mb-2">Winner of the Best Eco-Tourism Company Award 2023</li>
              <li className="mb-2">Partnered with over 50 local communities to promote sustainable tourism</li>
              <li className="mb-2">Successfully organized over 1000 tours in the past year</li>
              <li className="mb-2">Rated 5 stars by our customers on multiple review platforms</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Link to="/home" className="inline-block bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300">Back to Home</Link>
        </div>
      </div>
    </section>
  );
}

export default About;
