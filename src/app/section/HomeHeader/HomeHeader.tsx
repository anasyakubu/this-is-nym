import React from "react";
// import Nav from "../../components/Nav";
import Nav from "../../components/Nav";
import "./HomeHeader.scss";
import Image from "next/image";
import PhoneDashBoard from "../../../../public/nym.png";
import PrimaryBtn from "@/app/components/PrimaryBtn";
// import { BsAirplaneEnginesFill } from "react-icons/bs";
//import { Fade } from "react-awesome-reveal";

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
          <div className="text-center mt-10 pt-10">
            <Image className="phoneImg" src={PhoneDashBoard} alt="Logo" />
          </div>
          <div className="pl-3 max-w-xl lg:py-16">
            {/* sm:py-48 lg:py-56 */}
            <div className="text">
              <h1
                className="text-2xl font-extrabold tracking-wide shadow-2 sm:text-4xl"
                style={{ color: "#1D4ED8" }} //#122231
              >
                RUNNING YOUR SCHOOL SMARTLY
              </h1>
              <p
                className="mt-4 text-md leading-8"
                style={{ color: "#122231" }} //#3d4f60
              >
                We understand that the safety and well-being of your child are
                paramount, even when theyre at school. Thats why our schools kid
                monitoring software goes above and beyond to ensure parents are
                always informed about their childs arrival and departure.
              </p>
            </div>
            <div className="flex mt-10">
              <PrimaryBtn text="Get your school on board" />
            </div>
          </div>
        </div>
        <div className="p-5">
          <h6>Trusted by:</h6>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
