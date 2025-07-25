import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 to-green-300 text-center p-6">
      <h1 className="text-6xl font-extrabold text-green-700 mb-4">404</h1>
      <p className="text-2xl font-semibold text-gray-800 mb-2">Oops! Page not found.</p>
      <p className="text-gray-600 mb-6">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md shadow-md transition duration-300"
      >
        <AiOutlineHome size={20} />
        Go Back Home
      </Link>
    </div>
  );
};

export default Error;
