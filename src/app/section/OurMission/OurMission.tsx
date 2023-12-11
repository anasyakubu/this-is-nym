import React from "react";
import Image from "next/image";
import Banner from "../../../../public/banner-3.jpg";
import "./OurMission.scss";
import PrimaryBtn from "@/app/components/PrimaryBtn";

const OurMission = () => {
  return (
    <div
      className="OurMission"
      style={{ backgroundColor: "#fff", color: "#3d4f60" }}
    >
      <div className="p-10">
        <div className="">
          <h2 className="sm:text-4xl font-bold" style={{ color: "#1D4ED8" }}>
            Our Mission
          </h2>
        </div>
        <div className="mt-5 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
          <div className="text">
            <div className="">
              <h6 className="text-gray-900 text-xl font-bold">
                Empowering Growth, Inspiring Transformation.
              </h6>
              <p className="mt-5 text-sm">
                We believe in the power of technology to shape a brighter
                future. Our mission is to empower businesses and individuals
                through innovative solutions that not only meet but exceed
                expectations. Every line of code we write, every strategy we
                craft, and every solution we deliver is fueled by the desire to
                inspire transformative change.
              </p>
            </div>

            <div className="mt-5">
              <h6 className="text-gray-900 text-xl font-bold">
                Innovation at the Core, Collaboration in Action.
              </h6>
              <p className="mt-5 text-sm">
                What distinguishes us is our unwavering commitment to
                innovation. We thrive on challenges, embracing emerging
                technologies to architect solutions that propel our clients
                ahead of the curve. Collaboration is at the heart of our
                approach. We work closely with our clients, becoming strategic
                partners in their journey toward success.
              </p>
            </div>
            <div className="mt-5">
              <PrimaryBtn text="Join Us on the Journey" />
            </div>
          </div>
          <div className="">
            <Image
              src={Banner}
              alt="Banner"
              className="animationMove rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
