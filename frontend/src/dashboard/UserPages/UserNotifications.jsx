import React, { useState } from 'react';
import { FaCheck, FaTrash } from 'react-icons/fa';

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'Your tour to Paris has been booked!', read: false },
    { id: 2, message: 'Payment for New York Tour received.', read: true },
    { id: 3, message: 'New feedback received for your Rome Tour.', read: false },
  ]);

  const markAsRead = (id) => {
    setNotifications(notifications.map((notification) =>
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter((notification) => notification.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Notifications</h2>
      {notifications.length === 0 ? (
        <p>No notifications available.</p>
      ) : (
        <ul className="list-none">
          {notifications.map((notification) => (
            <li key={notification.id} className={`flex items-center justify-between mb-2 p-3 border rounded ${notification.read ? 'bg-gray-100' : 'bg-white'}`}>
              <span className={notification.read ? 'text-gray-500' : 'text-black'}>{notification.message}</span>
              <div className="flex space-x-2">
                {!notification.read && (
                  <button
                    onClick={() => markAsRead(notification.id)}
                    className="text-green-500 hover:text-green-700"
                    title="Mark as Read"
                  >
                    <FaCheck />
                  </button>
                )}
                <button
                  onClick={() => deleteNotification(notification.id)}
                  className="text-red-500 hover:text-red-700"
                  title="Delete"
                >
                  <FaTrash />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notifications;
