import React from 'react';

function TourPackage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-green-500 shadow-md py-8 md:py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Discover the Wonders of Our Destinations</h1>
          <p className="text-gray-200 mt-2">Explore our carefully curated tour packages for an unforgettable travel experience.</p>
        </div>
      </header>

      <section className="container mx-auto py-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Popular Tour Packages</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src="machu-picchu.jpg" alt="Machu Picchu" className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Machu Picchu Adventure</h3>
              <p className="text-gray-600">Explore the iconic Inca ruins of Machu Picchu and immerse yourself in the rich Peruvian culture.</p>
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mt-4">Learn More</button>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src="great-barrier-reef.jpg" alt="Great Barrier Reef" className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Great Barrier Reef Expedition</h3>
              <p className="text-gray-600">Discover the breathtaking underwater world of the Great Barrier Reef in Australia.</p>
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mt-4">Learn More</button>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src="northern-lights.jpg" alt="Northern Lights" className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Nordic Lights and Fjords</h3>
              <p className="text-gray-600">Journey to the Nordic countries and witness the mesmerizing display of the Northern Lights.</p>
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mt-4">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 px-4 md:py-16">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Customized Tour Packages</h2>
          <p className="text-gray-600 mb-6">Can't find the perfect package? Let us create a custom tour just for you.</p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg">Request a Custom Tour</button>
        </div>
      </section>
    </div>
  );
}

export default TourPackage;