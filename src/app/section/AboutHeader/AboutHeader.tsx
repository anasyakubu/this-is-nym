import React from "react";
import Nav from "../../components/Nav";
import "./AboutHeader.scss";
import Image from "next/image";
import PhoneDashBoard from "../../../../public/Collab-cuate.svg";
import PrimaryBtn from "@/app/components/PrimaryBtn";
// import { BsAirplaneEnginesFill } from "react-icons/bs";
//import { Fade } from "react-awesome-reveal";

// #f2f7f8 bg
// #3d4f60 text
const AboutHeader = () => {
  return (
    <div
      className="AboutHeader"
      style={{ backgroundColor: "#fff", color: "#3d4f60" }}
    >
      <Nav />
      <div className="lg:px-6">
        <div className="p-3 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
          {/* py-24 sm:py-0 */}
          <div className="text-center mt-3 pt-3">
            <Image className="phoneImg" src={PhoneDashBoard} alt="Logo" />
          </div>
          <div className="max-w-xl lg:py-16">
            {/* sm:py-48 lg:py-56 */}
            <div className="text">
              <h1
                className="text-md font-extrabold tracking-wide shadow-2 sm:text-3xl"
                style={{ color: "#1D4ED8" }} //#122231
              >
                About NYM Technologies Limited
              </h1>
              <p
                className="mt-4 text-sm leading-8"
                style={{ color: "#122231" }} //#3d4f60 122231
              >
                At{" "}
                <span style={{ color: "#1D4ED8" }}>
                  NYM Technologies Limited
                </span>
                , we are pioneers of technological evolution, driven by a
                passion for innovation and a commitment to excellence.
                Established with a vision to redefine possibilities, we
                specialize in a spectrum of cutting-edge services including AI,
                Software Development, Consultancy, Robotics, and Web
                Development.
              </p>
            </div>
            <div className="flex mt-10">
              <PrimaryBtn text="How we came about" />
              {/* <button className="bg-transparent text-gray-900 ml-3 font-semibold border text-sm p-2 m-1 rounded-sm border-black">
                Feel the Innovation
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
