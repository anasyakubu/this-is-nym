import Image from "next/image";
import React from "react";
import MS from "../../../public/microsoft_icon.svg";
import Avatar from "../../../public/img_avatar3.png";

const PartnersCardThree = () => {
  return (
    <div className="PartnersCardThree bg-white text-gray-900 shadow-sm">
      <div className="p-5">
        <div className="logo">
          <Image src={MS} alt="MS" className="w-14" />
        </div>
        <div className="title mt-10">
          <p className="text-sm">
            As Microsoft,{" "}
            <span style={{ color: "#1D4ED8" }}>NYM Technologies Limited</span>{" "}
            leads the charge of great companies coming out of Africa, powering
            modern Technologies for an entire continent.
          </p>
        </div>
        <div className="footer mt-10 flex items-center space-x-1 rtl:space-x-reverse">
          <div className="">
            <Image src={Avatar} alt="User" className="rounded-full w-12" />
          </div>
          <div className="pl-0">
            <p className="p-0 m-0">Anas Yakubu</p>
            <small className="text-gray-400">Web Developer at NYM</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersCardThree;
