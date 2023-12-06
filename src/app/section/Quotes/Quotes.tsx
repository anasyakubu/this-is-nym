import Image from "next/image";
import React from "react";

const Quotes = () => {
  return (
    <div className="Quotes">
      <div className="p-20 text-center">
        <div className="">
          <h2
            className="text-gray-900 text-left text-2xl font-extrabold tracking-wider shadow-2"
            style={{
              fontSize: "40px",
              letterSpacing: "2px",
              lineHeight: "45px",
            }}
          >
            We create solutions that enable individuals and communities prosper
            across Africa.
          </h2>
          <p className="mt-5">
            We see an Africa where digital payments are a seamless part of
            everyday life
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
