import * as React from 'react';

function Contact() {
  return (
    <div className="bg-gray-100 min-h-[calc(100vh-120px)] flex items-center justify-center mt-16">
      <div className="max-w-2xl w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label className="block text-left font-semibold mb-2">Name</label>
            <input type="text" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" />
          </div>
          <div className="mb-4">
            <label className="block text-left font-semibold mb-2">Email</label>
            <input type="email" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Email" />
          </div>
          <div className="mb-4">
            <label className="block text-left font-semibold mb-2">Message</label>
            <textarea className="w-full p-3 rounded-lg border resize-none border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition w-full">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
