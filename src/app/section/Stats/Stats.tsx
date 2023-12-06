import Image from "next/image";
import React from "react";
import IMG from "../../../../public/img-1.png";
import "./Stats.scss";

const Stats = () => {
  return (
    <div className="Stats bg-white">
      <div className="p-24">
        <div
          className="p-20 rounded-2xl"
          style={{ backgroundColor: "#1d965c" }}
        >
          <div className="space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
            <div className="max-w-xl lg:py-16">
              <h2 className="text-white font-extrabold text-2xl sm:text-6xl lg:text-3xl">
                24/7 Hours Support.
              </h2>
              <p className="text-white mt-5  font-semibold sm:text-6xl lg:text-2xl">
                Support Services everyday 24/7 hours. Here for you
              </p>
              <button className="mt-5 bg-transparent text-white font-semibold border text-sm p-2 m-1 rounded-sm border-white">
                Request a Support
              </button>
            </div>
            <div className="">
              <Image src={IMG} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
