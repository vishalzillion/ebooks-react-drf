import React from 'react';

function SubNavbar({ filterBooks }) {
  return (
    <ul className="flex justify-center py-4 space-x-4">
      <li>
        <button
          className="text-xl text-gray-800 hover:text-white focus:outline-none transition duration-300 transform hover:scale-105 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 rounded-lg px-6 py-2 shadow-md"
          onClick={() => filterBooks('All')}
        >
          All
        </button>
      </li>
      <li>
        <button
          className="text-xl text-gray-800 hover:text-white focus:outline-none transition duration-300 transform hover:scale-105 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-600 hover:to-yellow-400 rounded-lg px-6 py-2 shadow-md"
          onClick={() => filterBooks('mystery')}
        >
          Mystery
        </button>
      </li>
      <li>
        <button
          className="text-xl text-gray-800 hover:text-white focus:outline-none transition duration-300 transform hover:scale-105 bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-600 hover:to-blue-400 rounded-lg px-6 py-2 shadow-md"
          onClick={() => filterBooks('fantasy')}
        >
          Fantasy
        </button>
      </li>
      <li>
        <button
          className="text-xl text-gray-800 hover:text-white focus:outline-none transition duration-300 transform hover:scale-105 bg-gradient-to-r from-green-400 to-green-600 hover:from-green-600 hover:to-green-400 rounded-lg px-6 py-2 shadow-md"
          onClick={() => filterBooks('drama')}
        >
          Drama
        </button>
      </li>
    </ul>
  );
}

export default SubNavbar;

