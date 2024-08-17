import React, { useState } from 'react';

const Settings = () => {
  const [settings, setSettings] = useState({
    email: 'user@example.com',
    password: '',
    notifications: {
      email: true,
      sms: false,
    },
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setSettings((prevSettings) => ({
        ...prevSettings,
        notifications: {
          ...prevSettings.notifications,
          [name]: checked,
        },
      }));
    } else {
      setSettings((prevSettings) => ({
        ...prevSettings,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the updated settings to your backend
    console.log('Settings updated:', settings);
    alert('Settings updated!');
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>

      <form onSubmit={handleSubmit}>
        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={settings.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={settings.password}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Notification Preferences */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Notifications:</label>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="email_notifications"
              name="email"
              checked={settings.notifications.email}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="email_notifications">Email Notifications</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="sms_notifications"
              name="sms"
              checked={settings.notifications.sms}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="sms_notifications">SMS Notifications</label>
          </div>
        </div>

        {/* Save Button */}
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Save Settings
        </button>
      </form>
    </div>
  );
};

export default Settings;
