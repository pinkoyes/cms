import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center space-y-6">
        <p>
          <Link to="/student">
            <button className="w-64 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
              Student
            </button>
          </Link>
        </p>
        <p>
          <Link to="/college">
            <button className="w-64 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300">
              College
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
