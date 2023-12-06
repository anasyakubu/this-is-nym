import React from "react";
import "./WhyUs.scss";
import Image from "next/image";
import ImgOne from "../../../../public/img-1.png";

const WhyUs = () => {
  return (
    <div className="WhyUs">
      <div className="p-10">
        <div className="space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
          <div className="">{/* <Image src={ImgOne} alt="Img" /> */}</div>
          <div className="title max-w-xl lg:py-16">
            <h2 className="font-extrabold text-xl" style={{ color: "#122231" }}>
              Why US
            </h2>
            <h6
              className="text-md mt-3 font-extrabold tracking-wide shadow-2 sm:text-4xl"
              style={{ color: "#122231" }}
            >
              Why Choose NYM Technologies Limited?
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
