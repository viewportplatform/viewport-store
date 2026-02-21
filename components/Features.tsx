import React from 'react';

const features = [
  {
    icon: '📱',
    title: 'WhatsApp Ordering',
    description: 'Receive clean orders directly via WhatsApp. No more messy text messages.',
  },
  {
    icon: '💳',
    title: 'Easy Payments',
    description: 'Accept payments via cards, bank transfer, or cash on delivery.',
  },
  {
    icon: '📊',
    title: 'Order Management',
    description: 'Track all orders in one dashboard. Never miss an order again.',
  },
  {
    icon: '🏪',
    title: 'Beautiful Store',
    description: 'Create a professional online store in minutes with custom domain.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Everything You Need to Sell Online
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Simple tools to grow your business
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-2xl hover:bg-gray-50 transition">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
