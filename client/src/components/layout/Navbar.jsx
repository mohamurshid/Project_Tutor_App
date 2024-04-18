import React, { useState } from "react";
import { DiFsharp } from "react-icons/di";
import { FiMenu } from "react-icons/fi";
import logo from "../../assets/logo.png";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [isopen, setOpen] = useState(false);
  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav className="shadow:md w-full top-0 bg-gray-200">
      {/* <!-- Logo and SearchBar placement --> */}
      <div className="md:flex items-center justify-between text-white mr-6 text-xl md:px-10 px-7">
        <div className="hidden font-bold md:flex items-center text-white">
          <span className="font-semibold text-xl tracking-tight">
            <a href="/">
              <img src={logo} alt="logo" className="h-32 w-full" />
            </a>
          </span>
        </div>
        {/* <!-- Hamburger Menu Mobile only --> */}
        <div
          className="absolute right-8 top-6 cursor-pointer md:hidden mt-5 text-gray-300"
          onClick={() => setOpen(!isopen)}
        >
          <FiMenu size={30} />
        </div>

        {/* <!-- Nav Items --> */}
        <div
          className={
            isopen
              ? "fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center"
              : ""
          }
        >
          <button
            className={
              isopen
                ? "absolute top-0 right-0 m-2 text-white hover:text-gray-800 focus:text-gray-800 focus:outline-none"
                : "hidden"
            }
            onClick={closeMenu}
          >
            <svg className="h-12 w-12 fill-current">
              <IoCloseSharp />
            </svg>
          </button>
          <ul
            className={
              isopen
                ? ""
                : "hidden md:flex md:items-center md:ml-8 md:mx-0 md:pb-0 pb-12 absolute md:static bg-transparent md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in"
            }
          >
            <li className="md:ml-1 md:my-0 my-7">
              <a
                href="/"
                className="md:text-gray-700 hover:text-blue-500 mr-4 md:text-base text-sm"
              >
                Home
              </a>
            </li>
            <li className="md:ml-1 md:my-0 my-7">
              <a
                href="/about"
                className="md:text-gray-700 hover:text-blue-500 mr-4 md:text-base text-sm"
              >
                About
              </a>
            </li>
            <li className="md:ml-1 md:my-0 my-7">
              <a
                href="/tutorprofile"
                className=" md:text-gray-700 hover:text-blue-500 mr-4 md:text-base text-sm"
              >
                Find a Tutor
              </a>
            </li>
            <li className="md:ml-1 md:my-0 my-7">
              <a
                href="/login"
                className=" md:text-gray-700 hover:text-blue-500 mr-4 md:text-base text-sm"
              >
                Login
              </a>
            </li>
            <li className="md:my-0 my-7 md:ml-0">
              <button className="text-sm bg-teal-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full md:ml-4 md:text-base">
                <a href="/register">Sign Up</a>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// md:flex md:items-center md:ml-8 md:mx-0 md:pb-0 pb-12 absolute md:static bg-transparent md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in
