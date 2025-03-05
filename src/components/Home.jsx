import * as React from 'react';

function Home() {

  
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Platform</h1>
        <p className="text-lg mb-6">Build, innovate, and grow with our amazing tools.</p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">Get Started</button>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">🚀 Fast Performance</h3>
            <p>Experience lightning-fast speeds with our optimized platform.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">🔒 Secure & Reliable</h3>
            <p>We prioritize security to keep your data safe at all times.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">📱 Fully Responsive</h3>
            <p>Our platform works seamlessly across all devices.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-200 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">What Our Users Say</h2>
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <p className="italic">"This platform transformed the way I work. Highly recommended!"</p>
          <h3 className="mt-4 font-semibold">- Alex Johnson</h3>
        </div>
      </section>
    </div>
  );
}

export default Home;
