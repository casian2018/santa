// Importing necessary dependencies
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// Creating the Header component
const Header = () => {
  return (
    <>
      <div className="flex h-20 flex-wrap place-items-center overflow-hidden bg-gray-900">
        <section className="fixed z-20 mx-auto">
          <nav className="flex w-screen justify-between  text-white">
            <div className="flex w-full items-center bg-gray-900 px-5 py-6 xl:px-12">
              <a className="font-heading text-3xl font-bold" href="#">
                SantaHO
              </a>
              <ul className="font-heading mx-auto hidden space-x-12 px-4 font-semibold md:flex">
                <li>
                  <a className="hover:text-red-500" href="/">
                    Acasă
                  </a>
                </li>
              <li>
                  <a className="hover:text-red-500" href="/about">
                    Despre Noi
                  </a>
                </li>
                <li>
                  <a className="hover:text-red-500" href="/pricing">
                    Produse
                  </a>
                </li>
                <li>
                  <a className="hover:text-red-500" href="/contact">
                    Contactează-ne
                  </a>
                </li>
              </ul>
              <div className="hidden items-center space-x-5 xl:flex">
                <p> </p>
                <p> </p>
                <a className="flex items-center hover:text-red-500" href="/cart">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="absolute -mt-5 ml-4 flex">
                    <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-pink-400 opacity-75"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-pink-500"></span>
                  </span>
                </a>
              </div>
            </div>
          </nav>
        </section>
      </div>
      <div className="absolute bottom-0 right-0 z-10 mb-4 mr-4">
        <div>
          <a
            title="Follow me on twitter"
            href="https://www.twitter.com/asad_codes"
            target="_blank"
            className="block h-16 w-16 transform rounded-full shadow transition-all hover:rotate-12 hover:scale-110 hover:shadow-lg"
          >
            <img
              className="h-full w-full rounded-full object-cover object-center"
              src=""
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
