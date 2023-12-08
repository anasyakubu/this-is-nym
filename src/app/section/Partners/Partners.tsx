import Image from "next/image";
import React from "react";
import Dot from "../../../../public/dots.svg";
import "./Partners.scss";
import PartnersCardOne from "@/app/components/PartnersCardOne";
import PartnersCardTwo from "@/app/components/PartnersCardTwo";
import PartnersCardThree from "@/app/components/PartnersCardThree";

const Partners = () => {
  return (
    <div
      className="Partners"
      style={{ backgroundColor: "#f2f7f8", color: "#3d4f60" }}
    >
      <div className="p-10">
        <div className="space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
          <div className="max-w-xl lg:py-16 mt-5">
            <h2 className="text-gray-900 text-2xl font-bold sm:text-6xl lg:text-3xl">
              Backed by strong global partners
            </h2>
            <p className="mt-5">
              <span style={{ color: "#1D4ED8" }}>NYM Technologies Limited</span>{" "}
              is backed by notable cloud companies as well as some of the best
              known companies on the planet.
            </p>
          </div>
          <div className="imgSection">{/* <Image src={Dot} alt="" /> */}</div>
        </div>

        <div className="cardSection mt-5">
          <div className="space-y-2 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            <PartnersCardOne />
            <PartnersCardTwo />
            <PartnersCardThree />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
