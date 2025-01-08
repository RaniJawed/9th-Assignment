"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaLaptopCode, FaServer, FaHome } from "react-icons/fa";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const close = () => {
    setIsMobileMenuOpen(false);
  };
return (
    <nav className="bg-black p-4 shadow-2xl border-b-4 border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-serif font-extrabold text-white">Data Fetching</div>
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div className="hidden md:flex space-x-8">
          <Link
            href="/"
            className="flex items-center px-5 py-3 rounded-md text-white hover:bg-gray-700 transition duration-300"
          >
            <FaHome className="mr-3" /> Home
          </Link>
          <Link
            href="/Productdetail"
            className="flex items-center px-5 py-3 rounded-md text-white hover:bg-gray-700 transition duration-300"
          >
            <FaLaptopCode className="mr-3" /> Client Side
          </Link>
          <Link
            href="/serverside"
            className="flex items-center px-5 py-3 rounded-md text-white hover:bg-gray-700 transition duration-300"
          >
            <FaServer className="mr-3" /> Server Side
          </Link>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black opacity-80 z-10"
          onClick={toggleMenu}
        />
      )}
      <div
        className={`md:hidden fixed top-0 right-0 w-full bg-black transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-all duration-300 ease-in-out z-20`}
      >
        <div className="flex flex-col items-end pt-8">
          <button
            onClick={toggleMenu}
            className="mb-6 text-white"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-7 h-7 transition transform rotate-180"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <Link
            href="/"
            className="flex items-center w-full px-6 py-4 rounded-md text-center text-white hover:bg-gray-700 transition duration-300"
            onClick={close}
          >
            <FaHome className="mr-3" /> Home
          </Link>
          <Link
            href="/Productdetail"
            className="flex items-center w-full px-6 py-4 rounded-md text-center text-white hover:bg-gray-700 transition duration-300"
            onClick={close}
          >
            <FaLaptopCode className="mr-3" /> Client Side
          </Link>
          <Link
            href="/serverside"
            className="flex items-center w-full px-6 py-4 rounded-md text-center text-white hover:bg-gray-700 transition duration-300"
            onClick={close}
          >
            <FaServer className="mr-3" /> Server Side
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
