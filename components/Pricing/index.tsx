"use client";
import { useEffect, useState } from "react";
import Records from "./data.json";

const Pricing = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(Records);
  }, []);

  return (
    <div className="App">
      <div className="text-center my-8">
        <h1 className="text-2xl font-bold text-red-500">Produsele Noatre</h1>
        <p className="text-lg">Produse speciale, facute cu pasiune...</p>
      </div>
      <div className="container mx-auto px-6 py-8 text-center">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Records.map((record) => (
            <div
              key={record.id}
              className="mx-auto flex w-full max-w-lg flex-col items-center justify-center"
            >
              <section className="bg-white dark:bg-gray-900">
                <img
                  className="h-72 w-full rounded-md object-cover xl:h-80"
                  src={record.img}
                  alt="T-Shirt"
                />
                <h4 className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">
                  {record.title}
                </h4>
                <p className="text-blue-500">{record.price}</p>
                <button className="mt-4 flex w-full transform items-center justify-center rounded-md bg-gray-800 px-2 py-2 font-medium capitalize tracking-wide text-white transition-colors duration-200 hover:bg-gray-700 focus:bg-gray-700 focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-1 h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  <span className="mx-1">Add to cart</span>
                </button>
              </section>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
