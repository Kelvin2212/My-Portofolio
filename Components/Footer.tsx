import { DevicePhoneMobileIcon, EnvelopeIcon } from "@heroicons/react/20/solid";
import React from "react";

const Footer = () => {
  return (
    <div
      id="contact"
      className="pt-[8rem] pb-[4rem] bg-[#02050a] mx-auto justify-center"
    >
      <div
        className="grid border-b-[1px] pb-[6rem] border-gray-400 w-[80%] mx-auto gap-[3rem] justify-center
          lg:grid-cols-3 md:grid-cols-2 grid-cols-1"
      >
        <div className="flex items-center space-x-6 md:flex-row flex-col">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
            <DevicePhoneMobileIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black" />
          </div>
          <div className="text-center md:text-left mt-4 md:mt-0">
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">
              Phone
            </h1>
            <p className="text-[17px] w-[90%] text-white opacity-60">
              +6285155477137
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-6 md:flex-row flex-col mx-auto">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
            <EnvelopeIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black" />
          </div>
          <div className="text-center md:text-left mt-4 md:mt-0">
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">
              Send Us Email
            </h1>
            <p className="text-[17px] w-[90%] text-white opacity-60">
              kelvinbalkes@gmail.com
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-6 md:flex-row flex-col mx-auto">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
            <img
              src="/images/instagram.png"
              alt="Instagram"
              className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black"
            />
          </div>
          <div className="text-center md:text-left mt-4 md:mt-0">
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">
              Instagram
            </h1>
            <p className="text-[17px] w-[90%] text-white opacity-60">
              kelvin_samuel7
            </p>
          </div>
        </div>
      </div>

      <div className="w-[80%] mt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between">
        <div className="text-[16px] mb-[2rem] md:mb-0 text-white opacity-20">
          © Kelvin Samuel 2024
        </div>
        <div className="flex items-center justify-center md:justify-end space-x-10">
          <p className="text-[16px] text-white opacity-20">Terms & Condition</p>
          <p className="text-[16px] text-white opacity-20">Privacy Policy</p>
          <p className="text-[16px] text-white opacity-20">Sitemap</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
