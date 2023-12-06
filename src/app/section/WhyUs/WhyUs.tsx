import React from "react";
import "./WhyUs.scss";
import Image from "next/image";
import ImgOne from "../../../../public/undraw_open_source_-1-qxw.svg";
import ImgTwo from "../../../../public/Innovation-pana.svg";

const WhyUs = () => {
  return (
    <div className="WhyUs bg-white text-gray-900">
      <div className="p-10">
        <div className="space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
          <div className="max-w-xl lg:py-16">
            <Image src={ImgOne} alt="Img" />
            {/* <Image src={ImgTwo} alt="Img" /> */}
          </div>
          <div className="title max-w-xl lg:py-16 mt-10">
            <h2 className="font-extrabold text-xl" style={{ color: "#122231" }}>
              Why <span style={{ color: "#1D4ED8" }}>US</span>
            </h2>
            <h6
              className="text-md mt-3 font-extrabold tracking-wide shadow-2 sm:text-4xl"
              style={{ color: "#122231" }}
            >
              Why Choose{" "}
              <span style={{ color: "#1D4ED8" }}>NYM Technologies </span>
              Limited?
            </h6>
            <div className="mt-10">
              <div className="">
                <h4 className="sm:text-2xl font-semibold">Expertise :</h4>
                <p className="mt-3">
                  Our team consists of seasoned professionals with extensive
                  expertise in their respective fields. We stay abreast of the
                  latest <span style={{ color: "#1D4ED8" }}>technological</span>{" "}
                  trends to provide you with forward-thinking solutions.
                </p>
              </div>

              <div className="mt-5">
                <h4 className="sm:text-2xl font-semibold">
                  <span style={{ color: "#1D4ED8" }}>Client</span>-Centric
                  Approach :
                </h4>
                <p className="mt-3">
                  Your success is our priority. We collaborate closely with our
                  clients, understanding their goals and challenges, to deliver
                  solutions that align with their business objectives.
                </p>
              </div>

              <div className="mt-5">
                <h4 className="sm:text-2xl font-semibold">Innovation :</h4>
                <p className="mt-3">
                  Innovation is in our{" "}
                  <span style={{ color: "#1D4ED8" }}>DNA</span>. We thrive on
                  pushing the boundaries of whats possible, continuously seeking
                  new ways to add value to your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
