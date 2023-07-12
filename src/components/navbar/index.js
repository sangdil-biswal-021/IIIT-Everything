import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/Logo.png';
const Navbar = () => {
  return (
    <nav className="bg-gray-000">
      <div className="xl:w-[89vw]  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-32">
          <div className="flex items-center">
            <Link link to="/trail" className=" w-48">
              <img src={Logo} alt="Example" />
            </Link>
          </div>
          <div className="flex items-center ">
            <div className="flex">
              <Link
                link
                to="/"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium hidden sm:block"
              >
                HOME
              </Link>
              <Link
                link
                to="/browse"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium hidden sm:block"
              >
                BROWSE RESOURCES
              </Link>
              <Link
                to="/upload"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium hidden sm:block"
              >
                UPLOAD DOCUMENTS
              </Link>
              <a
                href="/"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium hidden sm:block"
              >
                CREATERS PAGE
              </a>
            </div>
            <div className="flex">
              <a
                href="/"
                className="text-txtPurple  bg-gradient-to-r hover:bg-gradient-to-l from-customPurple to-customIndigo  px-4 sm:px-8 py-4 ml-8 rounded-3xl text-sm   font-bold transition duration-900 text-center"
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
