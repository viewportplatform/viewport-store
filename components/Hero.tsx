import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Create Your WhatsApp Store in Minutes
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Accept orders and payments via WhatsApp. No mistakes. Faster deals.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link 
                href="/auth/register" 
                className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition text-center"
              >
                Start Free
              </Link>
              <button className="border border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-50 transition">
                Watch Demo
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-indigo-100 rounded-2xl p-8 lg:p-12">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">📱</span>
                  </div>
                  <span className="font-semibold">WhatsApp Order</span>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• 2x Pizza Margherita - $25.00</p>
                  <p>• 1x Coca Cola - $3.00</p>
                  <p className="font-semibold pt-2 border-t">Total: $28.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
