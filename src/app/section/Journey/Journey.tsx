import React from "react";
import Image from "next/image";
import Banner from "../../../../public/On the way-cuate (1).svg";
import "./Journey.scss";
import PrimaryBtn from "@/app/components/PrimaryBtn";

const Journey = () => {
  return (
    <div className="Journey">
      <div className="p-10">
        <div className="mt-5 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
          <div className="mt-5">
            <Image src={Banner} alt="Banner" className="animationMove" />
          </div>

          <div className="text">
            <div className="">
              <h2 className="sm:text-4xl font-bold">
                Our <span style={{ color: "#1D4ED8" }}>Journey</span>
              </h2>
            </div>
            <div className="mt-8">
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
              <PrimaryBtn text="Join Us on the Journey" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
