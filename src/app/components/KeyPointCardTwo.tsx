import Image from "next/image";
import React from "react";
import Img from "../../../public/invest.svg";

const KeyPointCardOne = () => {
  return (
    <div className="KeyPointCardTwo">
      <div
        className="rounded-xl text-gray-900"
        style={{ backgroundColor: "#dcfcf0", padding: "10%" }}
      >
        <div className="">
          <Image src={Img} alt="Img" className="w-24" />
        </div>
        <div className="">
          <h2 className="mt-5 text-md font-extrabold tracking-wide shadow-2 sm:text-4xl">
            Invest
          </h2>
          <p className="mt-5">
            Get zero fees on money transfers and we are 25% cheaper than Western
            Union or MoneyGram.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KeyPointCardOne;
