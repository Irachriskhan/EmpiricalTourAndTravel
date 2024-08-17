import React, { useState } from 'react';

const Chats = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! How can I help you today?', sender: 'support' },
    { id: 2, text: 'I have a question about my booking.', sender: 'user' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    const newMsg = {
      id: messages.length + 1,
      text: newMessage,
      sender: 'user',
    };

    setMessages([...messages, newMsg]);
    setNewMessage('');
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Chats</h2>
      <div className="border rounded p-4 h-96 overflow-y-scroll mb-4 bg-white">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-2 p-2 rounded ${
              message.sender === 'user' ? 'bg-blue-100 self-end' : 'bg-gray-100'
            }`}
          >
            <span>{message.text}</span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage} className="flex">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 p-2 border rounded-l"
          placeholder="Type your message..."
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-r hover:bg-green-600"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chats;
