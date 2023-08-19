import React, { useState } from 'react';
import { FaBars, FaTimes, FaTimesCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../../images/Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-gray-000">
        <div className="xl:w-[89vw] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-32">
            <div className="flex items-center">
              <Link link to="/" className="w-48 ">
                <img src={Logo} alt="Example" />
              </Link>
            </div>
            <div className="flex items-center lg:hidden">
              <button
                className="text-gray-300 hover:text-white px-3 py-2 z-50 transition-all "
                style={{
                  transform: isOpen ? 'rotate(90deg) ' : 'none',
                  opacity: isOpen ? '0' : '1',
                }}
                onClick={toggleMenu}
              >
                <FaBars />
              </button>
              <button
                className="text-gray-300 hover:text-white px-3 py-2 z-50 transition-all absolute"
                style={{
                  transform: isOpen ? '0 ' : 'rotate(-90deg)',
                  opacity: isOpen ? '1' : '0',
                }}
                onClick={toggleMenu}
              >
                <FaTimes />
              </button>
            </div>
            <div className=" hidden  lg:flex lg:items-center">
              <Link
                link
                to="/"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-lg text-sm font-medium"
              >
                HOME
              </Link>
              <Link
                link
                to="/browse"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-lg text-sm font-medium"
              >
                BROWSE RESOURCES
              </Link>
              <Link
                to="/upload"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-lg text-sm font-medium"
              >
                UPLOAD DOCUMENTS
              </Link>
              <Link
                to="/creator"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-lg text-sm font-medium"
              >
                CREATERS PAGE
              </Link>
              <Link
                to="/"
                className="text-txtPurple bg-gradient-to-r hover:bg-gradient-to-l from-customPurple to-customIndigo px-4 sm:px-8 py-4 ml-8 rounded-3xl text-sm font-bold transition duration-900 text-center"
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/*Mobile Menu */}
      {
        // isOpen &&
        <div
          className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center radialGrade bg-opacity-[.98] z-30 transition-all "
          style={{
            left: isOpen ? '0vw' : '10vw',
            opacity: isOpen ? '1' : '0',
            pointerEvents: isOpen ? '' : 'none',
          }}
        >
          <div className=" p-4 rounded">
            <div className=" flex  flex-col gap-6 items-center text-lg">
              <Link
                link
                to="/"
                onClick={toggleMenu}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-lg  font-medium"
              >
                HOME
              </Link>
              <Link
                link
                to="/browse"
                onClick={toggleMenu}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-lg  font-medium"
              >
                BROWSE RESOURCES
              </Link>
              <Link
                to="/upload"
                onClick={toggleMenu}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-lg font-medium"
              >
                UPLOAD DOCUMENTS
              </Link>
              <Link
                to="/creator"
                onClick={toggleMenu}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-lg  font-medium"
              >
                CREATERS PAGE
              </Link>
              <Link
                to="/"
                onClick={toggleMenu}
                className="text-txtPurple bg-gradient-to-r hover:bg-gradient-to-l from-customPurple to-customIndigo px-8  py-4  rounded-3xl font-bold transition duration-900 text-center"
              >
                CONTACT US
              </Link>
              <button
                className="text-gray-300 hover:text-white px-3 py-2 z-50 transition-all  "
                style={{
                  transform: !isOpen ? 'rotate(90deg) ' : 'none',
                  opacity: !isOpen ? '0' : '1',
                }}
                onClick={toggleMenu}
              >
                <FaTimesCircle className="scale-[2] absolute bottom-20 right-1/2 translate-x-1/2 opacity-10" />
              </button>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Navbar;
