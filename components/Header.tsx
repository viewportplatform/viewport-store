import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              VIEWPORT STORE
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-indigo-600 transition">
              Features
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-indigo-600 transition">
              Pricing
            </a>
            <Link href="/auth/login" className="text-gray-600 hover:text-indigo-600 transition">
              Login
            </Link>
            <Link 
              href="/auth/register" 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition shadow-lg shadow-indigo-500/25"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
