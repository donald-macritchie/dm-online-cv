import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <>
      <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-white shadow-lg z-50">
        <div>
          <Link
            to="/"
            className="text-3xl font-medium border-2 border-black p-2 rounded-md transition-colors duration-300 ease-in-out hover:bg-orange-300"
          >
            D.M
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4">
          <li className="relative group">
            <Link to="/" className="transition-colors duration-300 ease-in-out">
              Home
            </Link>
            <span className="absolute left-1/2 right-1/2 bottom-0 h-0.5 bg-black transition-all duration-300 ease-in-out group-hover:left-0 group-hover:right-0"></span>
          </li>

          <li className="relative group">
            <Link to="/skills" className="transition-colors duration-300 ease-in-out">
              Skills
            </Link>
            <span className="absolute left-1/2 right-1/2 bottom-0 h-0.5 bg-black transition-all duration-300 ease-in-out group-hover:left-0 group-hover:right-0"></span>
          </li>

          <li className="relative group">
            <Link
              to="/projects"
              className="transition-colors duration-300 ease-in-out"
            >
              Projects
            </Link>
            <span className="absolute left-1/2 right-1/2 bottom-0 h-0.5 bg-black transition-all duration-300 ease-in-out group-hover:left-0 group-hover:right-0"></span>
          </li>

          <li className="relative group">
            <Link
              to="/about"
              className="transition-colors duration-300 ease-in-out"
            >
              About
            </Link>
            <span className="absolute left-1/2 right-1/2 bottom-0 h-0.5 bg-black transition-all duration-300 ease-in-out group-hover:left-0 group-hover:right-0"></span>
          </li>

          <li className="relative group">
            <Link
              to="/contact"
              className="transition-colors duration-300 ease-in-out"
            >
              Contact
            </Link>
            <span className="absolute left-1/2 right-1/2 bottom-0 h-0.5 bg-black transition-all duration-300 ease-in-out group-hover:left-0 group-hover:right-0"></span>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <div
          onClick={handleClick}
          className="md:hidden z-10 border-2 border-black p-2 rounded-md transition-colors duration-300 ease-in-out hover:bg-orange-300 cursor-pointer"
        >
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center"
          }
        >
          <li className="py-6 text-4xl">
            <Link to="/" className="text-black" onClick={handleClick}>
              Home
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link to="/skills" className="text-black" onClick={handleClick}>
              Skills
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link to="/projects" className="text-black" onClick={handleClick}>
              Projects
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link to="/about" className="text-black" onClick={handleClick}>
              About
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link to="/contact" className="text-black" onClick={handleClick}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
