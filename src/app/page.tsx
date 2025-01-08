"use client";
import React from "react";
import Link from "next/link";
import { FaArrowRight, FaServer } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-6 sm:p-10">
      <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center tracking-tight uppercase">
        Assignment 9
      </h1>
      <p className="text-xl font-semibold sm:text-2xl text-white mb-12 text-center">
        Client-side and Server-side Data Fetching
      </p>
      <div className="flex flex-col sm:flex-row sm:space-x-8 gap-8 mb-10 w-full sm:w-auto">
        <Link href="/Productdetail">
          <button className="px-8 py-4 sm:px-12 sm:py-6 bg-gray-800 text-white font-medium rounded-lg border-2 border-gray-200 shadow-md transform transition-all duration-300 ease-in-out hover:bg-gray-600 hover:text-white hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50 flex items-center justify-center space-x-3 w-full sm:w-auto">
            <FaArrowRight className="text-2xl sm:text-3xl" />
            <span className="text-base sm:text-lg tracking-wider">Client-side Data Fetching</span>
          </button>
        </Link>
        <Link href="/serverside">
          <button className="px-8 py-4 sm:px-12 sm:py-6 bg-gray-800 text-white font-medium rounded-lg border-2 border-gray-200 shadow-md transform transition-all duration-300 ease-in-out hover:bg-gray-600 hover:text-white hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50 flex items-center justify-center space-x-3 w-full sm:w-auto">
            <FaServer className="text-2xl sm:text-3xl" />
            <span className="text-base sm:text-lg tracking-wider">Server-side Data Fetching</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
