import React from 'react';
import Logo from '../../images/Logo.png';

const Navbar = () => {
  return (
    <nav className="bg-gray-000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className=" w-28">
              <img src={Logo} alt="Example" />
            </a>
          </div>
          <div className="flex">
            <a
              href="/"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              HOME
            </a>
            <a
              href="/"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              BROWSE RESOURCES
            </a>
            <a
              href="/"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              UPLOAD DOCUMENTS
            </a>
            <a
              href="/"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              CREATERS PAGE
            </a>
            <a
              href="/"
              className="text-gray-300 bg-purple-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
