import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState("false");

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="bg-black fixed top-0 left-0 right-0 z-30">
      <div className="text-white flex justify-between items-center h-24 max-w-[1024px] px-4 mx-auto">
        <h1 className="w-full text-3xl font-bold text-light-green">DATA.</h1>
        <ul className="hidden md:flex">
          <li className="p-4">
            <Link to="home" smooth={true} duration={1000}>
              Home
            </Link>
          </li>
          <li className="p-4">
            <Link to="company" smooth={true} duration={1000}>
              Company
            </Link>
          </li>
          <li className="p-4">
            <Link to="newsletter" smooth={true} duration={1000}>
              Newsletter
            </Link>
          </li>
          <li className="p-4">
            <Link to="plans" smooth={true} duration={1000}>
              Plans
            </Link>
          </li>
          <li className="p-4">
            <Link to="footer" smooth={true} duration={1000}>
              Contact
            </Link>
          </li>
        </ul>

        <div onClick={handleNav} className="md:hidden">
          {nav ? (
            <AiOutlineMenu size={20} className="cursor-pointer" />
          ) : (
            <AiOutlineClose size={20} className="cursor-pointer" />
          )}
        </div>
        <div
          className={
            !nav
              ? "fixed top-0 left-0 w-[60%] h-full ease-in-out duration-500 z-10 bg-gray-700/75 "
              : "fixed left-[-100%] z-10"
          }
        >
          <ul className="pt-24 uppercase">
            <li className="p-4 border-b border-gray-600">
              {" "}
              <Link to="home" smooth={true} duration={1000}>
                Home
              </Link>
            </li>
            <li className="p-4 border-b border-gray-600">
              {" "}
              <Link to="company" smooth={true} duration={1000}>
                Company
              </Link>
            </li>
            <li className="p-4 border-b border-gray-600">
              <Link to="newsletter" smooth={true} duration={1000}>
                Newsletter
              </Link>
            </li>
            <li className="p-4 border-b border-gray-600">
              <Link to="plans" smooth={true} duration={1000}>
                Plans
              </Link>
            </li>
            <li className="p-4 border-b border-gray-600">
              <Link to="footer" smooth={true} duration={1000}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
