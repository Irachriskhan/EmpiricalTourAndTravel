import React from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

const recentTourData = [
  {
    id: '1',
    tour_id: '4324',
    tour_name: 'Shirley A. Lape',
    tour_date: '2022-05-17T03:24:00',
    total_tour: '200',
    tour_address: 'Cottage Grove, OR 97424'
  },
  {
    id: '7',
    tour_id: '7453',
    tour_name: 'Ryan Carroll',
    tour_date: '2022-05-14T05:24:00',
    total_tour: '960',
    tour_address: 'Los Angeles, CA 90017'
  },
  {
    id: '2',
    tour_id: '5434',
    tour_name: 'Mason Nash',
    tour_date: '2022-05-17T07:14:00',
    total_tour: '836',
    tour_address: 'Westminster, CA 92683'
  },
  {
    id: '3',
    tour_id: '9854',
    tour_name: 'Luke Parkin',
    tour_date: '2022-05-16T12:40:00',
    total_tour: '453',
    tour_address: 'San Mateo, CA 94403'
  },
  {
    id: '4',
    tour_id: '8763',
    tour_name: 'Anthony Fry',
    tour_date: '2022-05-14T03:24:00',
    total_tour: '876',
    tour_address: 'San Mateo, CA 94403'
  },
  {
    id: '5',
    tour_id: '5627',
    tour_name: 'Ryan Carroll',
    tour_date: '2022-05-14T05:24:00',
    total_tour: '100',
    tour_address: 'Los Angeles, CA 90017'
  }
];

export default function RecentTours() {
  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-lg border border-gray-300 shadow-md">
      <strong className="text-green-700 font-medium text-lg">Recent Tours</strong>
      <div className="overflow-x-auto mt-3">
        <table className="min-w-full bg-white border border-gray-200 divide-y divide-gray-200">
          <thead className="bg-green-500 text-white">
            <tr className="text-left text-xs md:text-sm lg:text-base uppercase tracking-wider">
              <th className="py-2 md:py-3 px-3 md:px-4 lg:px-5">ID</th>
              <th className="py-2 md:py-3 px-3 md:px-4 lg:px-5">Tour ID</th>
              <th className="py-2 md:py-3 px-3 md:px-4 lg:px-5">Tour Name</th>
              <th className="py-2 md:py-3 px-3 md:px-4 lg:px-5">Tour Date</th>
              <th className="py-2 md:py-3 px-3 md:px-4 lg:px-5">Total Tour</th>
            </tr>
          </thead>
          <tbody>
            {recentTourData.map((tour) => (
              <tr key={tour.id} className="hover:bg-green-100">
                <td className="py-3 md:py-4 px-3 md:px-4 lg:px-5 border-b">
                  <Link to={`/tour/${tour.id}`} className="text-green-500 hover:text-green-700">#{tour.id}</Link>
                </td>
                <td className="py-3 md:py-4 px-3 md:px-4 lg:px-5 border-b">
                  <Link to={`/tour/${tour.tour_id}`} className="text-green-500 hover:text-green-700">#{tour.tour_id}</Link>
                </td>
                <td className="py-3 md:py-4 px-3 md:px-4 lg:px-5 border-b">
                  <Link to={`/tour/${tour.tour_id}`} className="text-green-500 hover:text-green-700">{tour.tour_name}</Link>
                </td>
                <td className="py-3 md:py-4 px-3 md:px-4 lg:px-5 border-b">
                  {format(new Date(tour.tour_date), 'dd MMM yyyy')}
                </td>
                <td className="py-3 md:py-4 px-3 md:px-4 lg:px-5 border-b">{tour.total_tour}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
