import Image from "next/image";
import React from "react";
import User from "../../../../public/img_avatar3.png";

const Testimonial = () => {
  return (
    <div className="Testimonial bg-white text-gray-900">
      <div className="p-10">
        <div className="">
          <h2 className="text-2xl font-bold sm:text-6xl lg:text-4xl">
            Trusted by thousands
          </h2>
          <p className="mt-5">
            Hear from those who chose{" "}
            <span style={{ color: "#1D4ED8" }}>NYM Technologies Limited</span>
          </p>
        </div>

        <div className="">
          <div className="space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
            <div className="">
              <div className="bg-gray-900 text-white p-5 mt-10 rounded-lg">
                <p>
                  NYM Technologies Limited is my top choice for money transfers.
                  Its fast, reliable, and convenient, providing excellent
                  services. Highly recommendable for sending money to family and
                  friends.
                </p>
                <h6 className="mt-5 mb-5">Evelyn Omemmah</h6>
              </div>
            </div>
            <div className="">
              <div className="grid grid-cols-2 gap-2 mt-10">
                <div className="text-center">
                  <Image
                    src={User}
                    alt="User"
                    className="rounded-full w-32 text-center"
                  />
                  <small>Anas Yakubu</small>
                </div>
                <div className="text-center">
                  <Image
                    src={User}
                    alt="User"
                    className="rounded-full w-32 text-center"
                  />
                  <small>Anas Yakubu</small>
                </div>
                <div className="text-center">
                  <Image
                    src={User}
                    alt="User"
                    className="rounded-full w-32 text-center"
                  />
                  <small>Anas Yakubu</small>
                </div>
                <div className="text-center">
                  <Image
                    src={User}
                    alt="User"
                    className="rounded-full w-32 text-center"
                  />
                  <small>Anas Yakubu</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
