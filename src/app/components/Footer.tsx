import React from "react";
import Image from "next/image";
import Logo from "../../../public/nym.png";
import { FaLinkedin, FaInstagram, FaGithub, FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 bg-white text-gray-900">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            <Image
              src={Logo}
              alt="NYM Technologies Limited"
              className="w-8 text-deep-purple-accent-400"
            />
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              NYM Technologies Limited
            </span>
          </a>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-gray-800 tracking-wider">
              At NYM Technologies Limited, we`re more than a technology company;
              we`re architects of innovation. With expertise in AI, Software
              Development, Consultancy, Robotics, and Web Development, we craft
              solutions that redefine possibilities. Our commitment to
              excellence, collaborative approach, and relentless pursuit of
              innovation set us apart. Join us on a journey of digital
              transformation where your success is our mission.
            </p>
            <p className="mt-4 text-sm text-gray-800"></p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-gray-900">
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1 text-gray-800">Phone:</p>
            <a
              href="tel: +2347065696954"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              +234 7065 696954
            </a>
          </div>

          <div className="flex">
            <p className="mr-1 text-gray-800">WhatsApp:</p>
            <a
              href="tel: +(708) 794-6132"
              aria-label="Our WhatsApp"
              title="Our WhatsApp"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              +(708) 794-6132
            </a>
          </div>

          <div className="flex">
            <p className="mr-1 text-gray-800">Email:</p>
            <a
              href="mailto: hello@thisisnym.com"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              hello@thisisnym.com
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Address:</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              312 Lovely Street, NY
            </a>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide text-gray-900">
            Social
          </span>
          <div className="flex items-center mt-1 space-x-3">
            <a
              href="/"
              className="text-gray-900 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <FaLinkedin />
            </a>
            <a
              href="/"
              className="text-gray-900 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <FaInstagram />
            </a>
            <a
              href="/"
              className="text-gray-900 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <FaGithub />
            </a>
            <a
              href="/"
              className="text-gray-900 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <FaFacebook />
            </a>
            <a
              href="/"
              className="text-gray-900 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <FaSquareXTwitter />
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Follow us at our various social media platform to get the latest
            news and update
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600">
          © Copyright 2023 NYM Technologies Limited. All rights reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              F.A.Q
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Terms &amp; Conditions
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
