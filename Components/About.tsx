import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div>
          <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] mb-[1rem]">
            ABOUT ME
          </h1>
          <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
            Hallo
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <p className="text-[19px] text-slate-300 w-[80%]">
              Fresh informatics graduates are skilled in Front-End Development
              and Mobile Development. With over 1 year of experience, I have
              created stunning visual designs for multiple platforms and built
              dynamic user interfaces for web and mobile applications. Hungry to
              learn new things and solve problems, I bring a unique and
              versatile skill set. Ready to contribute to innovative projects, I
              am committed to staying at the forefront of technology and making
              a meaningful impact.
            </p>
          </div>
          <button
            className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2"
            onClick={() =>
              (window.location.href =
                "https://www.linkedin.com/in/kelvin-samuel-4b338a17a/")
            }
          >
            <img
              src="/images/linkedin.png"
              alt="LinkedIn Icon"
              className="w-[1.8rem] h-[1.8rem]"
            />
            <p>My LinkedIn</p>
          </button>
        </div>
        <div
          data-aos="fade-left"
          className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative"
        >
          <Image
            src="/images/profile.jpg"
            alt="user"
            layout="fill"
            objectFit="contain"
            className="relative z-[11] w-[100%] h-[100%] object-contain"
          />
          <div className="absolute w-[100%] h-[100%] z-[10] bg-[#55e6a5] top-[-2rem] right-[-2rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
