import React from 'react';
import Link from 'next/link';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    description: 'Perfect for starting out',
    features: ['50 orders/month', 'Website with 20 images', 'No commissions', 'Accept local payments'],
    cta: 'Start Free',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'For growing businesses',
    features: [
      'Unlimited orders',
      'Unlimited images',
      'Card payments (Stripe)',
      'WhatsApp automation',
      'Custom domain',
      'Remove branding',
    ],
    cta: 'Get Started',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large businesses',
    features: [
      'Everything in Pro',
      'Dedicated account manager',
      'Custom integrations',
      'Priority support',
      'SLA guarantee',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Start free, upgrade when you need
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-2xl p-8 ${
                plan.highlighted 
                  ? 'bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-2xl shadow-indigo-500/30 scale-105' 
                  : 'bg-white border border-gray-200 shadow-lg'
              }`}
            >
              <h3 className={`text-xl font-semibold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>
              <div className="mt-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className={plan.highlighted ? 'text-indigo-200' : 'text-gray-500'}>{plan.period}</span>
              </div>
              <p className={`mt-2 ${plan.highlighted ? 'text-indigo-200' : 'text-gray-600'}`}>
                {plan.description}
              </p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className={plan.highlighted ? 'text-green-300' : 'text-green-500'}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link 
                href="/auth/register"
                className={`mt-8 block text-center py-3 rounded-lg font-semibold transition ${
                  plan.highlighted 
                    ? 'bg-white text-indigo-600 hover:bg-gray-100 shadow-lg' 
                    : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-lg shadow-indigo-500/25'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
