import Image from "next/image";
import React from "react";
import "./Services.scss";
import Programer from "../../../../public/Innovation-rafiki.svg";
import { FaLaptopCode } from "react-icons/fa";
import { FaCode, FaChalkboardUser } from "react-icons/fa6";
import { GiArtificialIntelligence } from "react-icons/gi";
import { RiRobot2Fill } from "react-icons/ri";

const Services = () => {
  return (
    <div
      className="Services"
      style={{ backgroundColor: "#dbecff", color: "#3d4f60" }}
    >
      <div className="p-10">
        <div className="space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
          <div className="text max-w-xl lg:py-16">
            <div className="">
              <h3 className="text-gray-900 font-extrabold text-2xl sm:text-6xl lg:text-6xl">
                Our Field of <span style={{ color: "#1D4ED8" }}>Expertise</span>
              </h3>
              <p className="mt-5 text-md">
                Explore the world of technological adventures with us through
                our services. Explore the limitless possibilities of technology
                with NYM Technologies Limited.
              </p>
            </div>
            <div className="mt-5">
              <p className="flex ">
                <span className="text-2xl bg-gray-900 text-white p-3 rounded-full">
                  <FaLaptopCode className="text-xl" />
                </span>
                <span className="text-center ml-5 mt-2 text-lg font-semibold">
                  Software Development
                </span>
              </p>
              <p className="flex mt-5">
                <span className="text-2xl bg-gray-900 text-white p-3 rounded-full">
                  <FaCode className="text-xl" />
                </span>
                <span className="text-center ml-5 mt-2 text-lg font-semibold">
                  Web Development
                </span>
              </p>

              <p className="flex mt-5">
                <span className="text-2xl bg-gray-900 text-white p-3 rounded-full">
                  <FaChalkboardUser className="text-xl" />
                </span>
                <span className="text-center ml-5 mt-2 text-lg font-semibold">
                  Consultancy
                </span>
              </p>

              <p className="flex mt-5">
                <span className="text-2xl bg-gray-900 text-white p-3 rounded-full">
                  <GiArtificialIntelligence className="text-xl" />
                </span>
                <span className="text-center ml-5 mt-2 text-lg font-semibold">
                  Artificial Intelligence (AI)
                </span>
              </p>

              <p className="flex mt-5">
                <span className="text-2xl bg-gray-900 text-white p-3 rounded-full">
                  <RiRobot2Fill className="text-xl" />
                </span>
                <span className="text-center ml-5 mt-2 text-lg font-semibold">
                  Robotics
                </span>
              </p>
            </div>
          </div>
          <div className="img">
            <Image src={Programer} alt="Programer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
