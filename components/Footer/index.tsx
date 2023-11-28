import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  return (
    <>
      <div className="mx-auto pt-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
        <div className="row-gap-6 mb-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <span className="ml-2 text-xl font-bold uppercase tracking-wide text-gray-800">
                SantaHO
              </span>
            </a>
            <div className="mt-6 lg:max-w-sm">
              <p className="text-sm text-gray-800">
                SantaHO, locul unde compasiunea întâlnește comerțul într-o
                afacere dedicată creării unui viitor mai bun pentru copiii care
                nu beneficiază de sprijinul părintesc. La SantaHO, credem cu
                tărie că fiecare copil merită șansa de a experimenta magia
                copilăriei, indiferent de împrejurările lor.
              </p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-gray-900">
              Contacts
            </p>
            <div className="flex">
              <p className="mr-1 text-gray-800">Phone:</p>
              <a
                href="tel:+40729459468"
                aria-label="Our phone"
                title="Our phone"
                className="text-deep-purple-accent-400 transition-colors duration-300 hover:text-deep-purple-800"
              >
                +40 729 459 468
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800">Email:</p>
              <a
                href="mailto:contact@santaho.ro"
                aria-label="Our email"
                title="Our email"
                className="text-deep-purple-accent-400 transition-colors duration-300 hover:text-deep-purple-800"
              >
                contact@santaho.ro
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800">Address:</p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Our address"
                title="Our address"
                className="text-deep-purple-accent-400 transition-colors duration-300 hover:text-deep-purple-800"
              >
                Timișoara , România
              </a>
            </div>
          </div>
          <div>
            <span className="text-base font-bold tracking-wide text-gray-900">
              Social
            </span>
            <div className="mt-1 flex items-center space-x-3">
              
              <a
                href="/"
                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                  <circle cx="15" cy="15" r="4"></circle>
                  <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"></path>
                </svg>
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Echipa Santaho - un trio pasionat și plin de inimă, dedicat
              aducerii bucuriei în inimile copiilor fără posibilități în timpul
              sezonului festiv.
            </p>
          </div>
        </div>
        <div className="border-t pt-5 pb-10 text-center">
          <p className="text-sm text-gray-600">
            SantaHO © Copyright 2023 | All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
