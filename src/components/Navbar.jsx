import React from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineMenu} from 'react-icons/ai';
const Navbar = () => {
  return (
    <header className="bg-[#2E323F] py-4 lg:py-6 w-full">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-white font-oswald text-3xl font-semibold">
              CRL
            </h1>
          </div>
          <div className='md:hidden'><AiOutlineMenu size={30} className='text-white'/></div>
          <ul className="hidden gap-6 md:flex">
            <li>
              <Link to="/" className="text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/signin" className="text-white">
                Sign in
              </Link>
            </li>
            <li>
              <Link to="/signup" className="text-white">
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
