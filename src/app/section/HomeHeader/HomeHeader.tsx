import React from "react";
// import Nav from "../../components/Nav";
import Nav from "../../components/Nav";
import "./HomeHeader.scss";
import Image from "next/image";
import PhoneDashBoard from "../../../../public/Programmer-pana.svg";
import PrimaryBtn from "@/app/components/PrimaryBtn";
// import { BsAirplaneEnginesFill } from "react-icons/bs";
//import { Fade } from "react-awesome-reveal";
import MyGradeCard from "../../../../public/logo-small.png";
import Proptter from "../../../../public/logo.png";
import KiddoAlert from "../../../../public/KiddoAlertLogo.png";
import Mall84 from "../../../../public/Square Logo.png";

// #f2f7f8 bg
// #3d4f60 text
const HomeHeader = () => {
  return (
    <div
      className="HomeHeader"
      style={{ backgroundColor: "#f2f7f8", color: "#3d4f60" }}
    >
      <Nav />
      <div className="lg:px-6">
        <div className="p-3 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
          {/* py-24 sm:py-0 */}
          <div className="pl-3 max-w-xl lg:py-16">
            {/* sm:py-48 lg:py-56 */}
            <div className="text">
              <h1
                className="text-md font-extrabold tracking-wide shadow-2 sm:text-3xl"
                style={{ color: "#1D4ED8" }} //#122231
              >
                THE BEST CHOICE FOR IT SOLUTIONS
              </h1>
              <p
                className="mt-4 text-sm leading-8"
                style={{ color: "#122231" }} //#3d4f60 122231
              >
                At NYM Technologies Limited, we are at the forefront of
                innovation, driving technological advancements across various
                domains. As a leading technology company, we specialize in AI,
                Software Development, Consultancy, Robotics, and Web
                Development, delivering cutting-edge solutions that empower
                businesses to thrive in the digital age. Get your school on
                board
              </p>
            </div>
            <div className="flex mt-10">
              <PrimaryBtn text="Explore our technology" />
              <button className="bg-transparent text-gray-900 ml-3 font-semibold border text-sm p-2 m-1 rounded-sm border-black">
                Feel the Innovation
              </button>
            </div>
          </div>
          <div className="text-center mt-10 pt-10">
            <Image className="phoneImg" src={PhoneDashBoard} alt="Logo" />
          </div>
        </div>
        <div className="p-5">
          <h6 className="font-semibold text-gray-900">Our Products:</h6>
          <div className="flex">
            <div className="">
              {" "}
              <Image
                src={MyGradeCard}
                alt="MyGradeCard"
                className="h-12 w-12 m-3"
              />
            </div>
            <div className="">
              {" "}
              <Image src={Proptter} alt="Proptter" className="h-10 w-12  m-3" />
            </div>
            <div className="">
              <Image
                src={KiddoAlert}
                alt="KiddoAlert"
                className="h-12 w-12  m-3"
              />
            </div>
            <div className="">
              {" "}
              <Image src={Mall84} alt="KiddoAlert" className="h-12 w-12  m-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
