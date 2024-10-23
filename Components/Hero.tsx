/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
import lottie from "lottie-web";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";
import animationData from "../public/animation.json";

const Hero = () => {
  const redirectToGithub = () => {
    window.location.href = "https://github.com/Kelvin2212";
  };

  const redirectToCV = () => {
    window.location.href =
      "https://drive.google.com/file/d/1ryFna5wvbkn1erpFu3mlVWJXs8rehglq/view?usp=sharing";
  };

  useEffect(() => {
    const container = document.getElementById("lottie-container");
    if (container) {
      lottie.loadAnimation({
        container: container,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData,
      });
    }
  }, []);

  return (
    <div
      id="home"
      className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-cover bg-center"
    >
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            HI, I'M <span className="text-yellow-400">KELVIN SAMUEL!</span>
          </h1>
          <TextEffect />
          <p className="mt-[1.5rem] text-[18px] text-[#ffffff92]">
            Fresh Graduate Informatics with 1+ years of professional experience.
          </p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <button
              onClick={redirectToCV}
              className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2"
            >
              <p>Download CV</p>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </button>
            <button
              onClick={redirectToGithub}
              className="flex items-center space-x-2"
            >
              <img
                src="/images/github.png"
                alt="GitHub Icon"
                className="w-[4rem] h-[4rem] hover:text-yellow-400 transition-all duration-200 text-[#55e6a5]"
              />
            </button>
          </div>
        </div>
        <div className="w-[500px] hidden bg-[#fffff] relative lg:flex items-center rounded-full h-[500px]">
          <div
            id="lottie-container"
            style={{ width: "100%", height: "130%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
