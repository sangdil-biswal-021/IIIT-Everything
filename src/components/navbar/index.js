import React from 'react';
import Logo from '../../images/Logo.png';

const Navbar = () => {
  return (
    <nav className="bg-gray-000">
      <div className="max-w-[95vw] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-32">
          <div className="flex items-center">
            <a href="/" className=" w-48">
              <img src={Logo} alt="Example" />
            </a>
          </div>
          <div className="flex items-center ">
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
            </div>
            <div className="flex">
              <a
                href="/"
                className="text-purple-900 bg-gradient-to-r from-purple-400 to-purple-300  to-purple-100 hover:text-white px-8 py-4 ml-8 rounded-3xl text-sm   font-bold "
              >
                CONTACT US
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
