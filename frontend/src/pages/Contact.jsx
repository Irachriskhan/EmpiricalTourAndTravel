import React from 'react';

function Contact() {
  return (
    <div className="container mx-auto p-6">
      <div className="content py-2 text-center">
        <h1 className="mb-4 text-4xl font-bold text-green-700">Contact Us</h1>
        <p className="mb-8 text-lg text-gray-700">We'd love to hear from you! Please fill out the form below to get in touch.</p>
      </div>
      <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h2>
        <form className="space-y-4">
          <div className="max-w-md mx-auto">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
            <input
              className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
              type="text"
              id="name"
              placeholder="Name"
              required
            />
          </div>
          <div className="max-w-md mx-auto">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input
              className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
              type="email"
              id="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="max-w-md mx-auto">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">Subject</label>
            <input
              className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
              type="text"
              id="subject"
              placeholder="Subject"
              required
            />
          </div>
          <div className="max-w-md mx-auto">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
            <textarea
              className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
              id="message"
              placeholder="Message"
              rows="5"
              required
            ></textarea>
          </div>
          <div className="">
            <button
              className="w-full md:w-auto bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:bg-green-700"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
