import React, { useState } from 'react';

const UserBookings = () => {
  const [bookings, setBookings] = useState({
    history: [
      { id: 1, tour: 'Paris Tour', date: '2024-01-15', status: 'Completed', amount: '$1000' },
      { id: 2, tour: 'New York Tour', date: '2024-02-20', status: 'Completed', amount: '$800' },
    ],
    pending: [
      { id: 3, tour: 'London Tour', date: '2024-03-10', status: 'Pending', amount: '$1200' },
    ],
    booked: [
      { id: 4, tour: 'Rome Tour', date: '2024-04-25', status: 'Booked', amount: '$1500' },
    ],
    payments: [
      { id: 5, method: 'Credit Card', date: '2024-01-15', amount: '$1000' },
      { id: 6, method: 'PayPal', date: '2024-02-20', amount: '$800' },
    ],
  });

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Bookings</h2>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Booking History</h3>
        <ul className="list-disc pl-5">
          {bookings.history.map((booking) => (
            <li key={booking.id}>
              {booking.tour} - {booking.date} - {booking.status} - {booking.amount}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Pending Tours (Paid)</h3>
        <ul className="list-disc pl-5">
          {bookings.pending.map((booking) => (
            <li key={booking.id}>
              {booking.tour} - {booking.date} - {booking.status} - {booking.amount}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Booked Tours</h3>
        <ul className="list-disc pl-5">
          {bookings.booked.map((booking) => (
            <li key={booking.id}>
              {booking.tour} - {booking.date} - {booking.status} - {booking.amount}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Payments</h3>
        <ul className="list-disc pl-5">
          {bookings.payments.map((payment) => (
            <li key={payment.id}>
              {payment.method} - {payment.date} - {payment.amount}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserBookings;
