import React from 'react';
import { Link } from 'react-router-dom';

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Welcome to Specs Inspector
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            AI-Powered Electrical Inspection Platform
          </p>
          <div className="space-x-4">
            <Link
              to="/login"
              className="btn btn-primary btn-lg"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="btn btn-outline btn-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
