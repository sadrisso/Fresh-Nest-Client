import * as React from 'react';

function About() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6 bg-cover bg-center text-white" style={{ backgroundImage: "url('/about.jpg')" }}>
        <h1 className="text-3xl text-black md:text-5xl font-bold mb-4">About Grocery Mart</h1>
        <p className="text-md md:text-lg text-black mb-6 max-w-2xl">
          Providing fresh, organic, and high-quality groceries to your doorstep with convenience and trust.
        </p>
      </section>

      {/* Our Mission */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Mission</h2>
        <p className="max-w-3xl mx-auto text-lg">
          Our mission is to make grocery shopping easy, accessible, and affordable while ensuring the best quality products for our customers.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-200 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">🌿 Fresh & Organic</h3>
            <p>We source our products directly from farmers and trusted suppliers.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">🚚 Fast Delivery</h3>
            <p>Get your groceries delivered quickly and efficiently.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">💰 Affordable Prices</h3>
            <p>Enjoy competitive prices without compromising on quality.</p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">🌍 Sustainability</h3>
            <p>We support eco-friendly and sustainable farming practices.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">🤝 Customer Satisfaction</h3>
            <p>Your happiness is our priority. We ensure top-notch service.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">🏆 Quality Assurance</h3>
            <p>We guarantee the best quality in every product we offer.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
