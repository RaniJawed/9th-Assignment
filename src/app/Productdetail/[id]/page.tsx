"use client";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

type PageProps = {
  params: {
    id: string;
  };
};

const ProductDetail = ({ params }: PageProps) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const productId = params.id;

  useEffect(() => {
    if (productId) {
      fetch(`https://fakestoreapi.com/products/${productId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch product data");
          }
          return response.json();
        })
        .then((data: Product) => {
          setProduct(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }
  }, [productId]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center py-12 px-4 sm:px-8">
      <div className="w-full max-w-4xl bg-white text-black rounded-xl p-8 shadow-lg">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-8">
            <div className="relative w-20 h-20 mb-4">
              <div className="absolute inset-0 rounded-full border-4 border-t-blue-600 animate-spin"></div>
            </div>
            <span className="text-xl text-blue-600">Loading...</span>
          </div>
        ) : error ? (
          <div className="text-red-600 text-xl text-center">Error: {error}</div>
        ) : (
          product && (
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
              <div className="w-full lg:w-1/2">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-auto object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="w-full lg:w-1/2 space-y-4">
                <h2 className="text-3xl font-bold">{product.title}</h2>
                <p className="text-xl text-blue-600">${product.price}</p>
                <p className="text-gray-700 overflow-hidden">{product.description}</p>
                <p className="text-sm text-gray-500">Category: {product.category}</p>
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, index) => {
                      const rating = Math.round(product.rating.rate);
                      return (
                        <FaStar
                          key={index}
                          className={index < rating ? "text-yellow-400" : "text-gray-400"}
                        />
                      );
                    })}
                  </div>
                  <p className="ml-2 text-gray-500">({product.rating.count} reviews)</p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
