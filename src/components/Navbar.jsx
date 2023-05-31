import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <header className="bg-[#2E323F] py-6 w-full">
      <div className="w-[90%] mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-white font-oswald text-3xl font-semibold">
              CRL
            </h1>
          </div>
          <ul className="flex gap-6">
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
