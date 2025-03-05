import * as React from 'react';

function About() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-green-500 to-teal-600 text-white">
        <h1 className="text-5xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-6 max-w-2xl">
          We are dedicated to building innovative solutions that empower businesses and individuals.
        </p>
      </section>

      {/* Our Mission */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Mission</h2>
        <p className="max-w-3xl mx-auto text-lg">
          Our mission is to provide high-quality, secure, and scalable technology solutions that enhance productivity and creativity.
        </p>
      </section>

      {/* Our Team */}
      <section className="bg-gray-200 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">John Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
            <p>Lead Developer</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Mike Johnson</h3>
            <p>Head of Design</p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">🌍 Innovation</h3>
            <p>We strive to create cutting-edge solutions.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">🤝 Integrity</h3>
            <p>We believe in transparency and trust.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">🚀 Excellence</h3>
            <p>We are committed to delivering the best results.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
