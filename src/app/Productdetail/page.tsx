"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

const ClientSide = () => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const fetchedData: Product[] = await response.json();
        setData(fetchedData);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center py-12 px-6 sm:px-8">
      <div className="w-full max-w-7xl bg-gray-800 rounded-lg shadow-2xl overflow-hidden">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-8">
            <div className="relative w-20 h-20 mb-4">
              <div className="absolute inset-0 rounded-full border-4 border-t-blue-600 animate-spin"></div>
            </div>
            <span className="text-xl text-blue-600">Loading...</span>
          </div>
        ) : (
          <div className="text-white p-8 text-center rounded-t-lg">
            <h1 className="text-3xl sm:text-4xl font-serif font-semibold tracking-wide">
              Client-Side Data Fetching
            </h1>
          </div>
        )}
        <div className="p-8">
          {error ? (
            <div className="text-red-600 text-xl text-center">Error: {error}</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {data.map((product) => (
                <Link key={product.id} href={`/Productdetail/${product.id}`} legacyBehavior>
                  <div className="bg-white border border-gray-700 p-6 rounded-xl cursor-pointer hover:shadow-2xl transition-shadow duration-300">
                    <div className="flex flex-col items-center">
                      {product.image && (
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-48 object-cover rounded-md mb-4 transition-transform duration-300 hover:scale-105"
                        />
                      )}
                      <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                        {product.title}
                      </h2>
                      <p className="text-sm text-gray-700 mb-2 line-clamp-1">
                        {product.category}
                      </p>
                      <div className="flex justify-between items-center w-full">
                        <span className="text-lg font-bold text-gray-900">${product.price}</span>
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClientSide;
