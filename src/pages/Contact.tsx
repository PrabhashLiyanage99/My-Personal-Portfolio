import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
      <form>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 mb-4 border rounded"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-2 mb-4 border rounded"
          rows={4}
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
