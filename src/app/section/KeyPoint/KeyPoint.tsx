import Image from "next/image";
import React from "react";
import Img from "../../../../public/Programmer-bro.svg";
import "./KeyPoint.scss";
import KeyPointCardOne from "@/app/components/KeyPointCardOne";
import KeyPointCardTwo from "@/app/components/KeyPointCardTwo";
import KeyPointCardThree from "@/app/components/KeyPointCardThree";

const KeyPoint = () => {
  return (
    <div
      className="KeyPoint text-gray-900"
      style={{ backgroundColor: "#063e2a" }}
    >
      <div className="p-10">
        <div className="tittle">
          <h2 className="text-xl mt-3 font-extrabold tracking-wide shadow-2 text-white sm:text-4xl">
            Key Points About Our <br /> Production
          </h2>
        </div>

        <div className="mt-20 space-y-2 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
          <KeyPointCardOne />
          <KeyPointCardTwo />
          <KeyPointCardThree />
        </div>
      </div>
    </div>
  );
};

export default KeyPoint;
