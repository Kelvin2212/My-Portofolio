import { XMarkIcon } from "@heroicons/react/16/solid";
import React from "react";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      closeNav();
    }
  };

  return (
    <div
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-[#09101a]`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        <button
          onClick={() => scrollToSection("home")}
          className="nav-link-mobile"
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className="nav-link-mobile"
        >
          ABOUT
        </button>
        <button
          onClick={() => scrollToSection("project")}
          className="nav-link-mobile"
        >
          PROJECT
        </button>
        <button
          onClick={() => scrollToSection("blog")}
          className="nav-link-mobile"
        >
          BLOG
        </button>
      </div>
      <div
        onClick={closeNav}
        className="absolute z-[10000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-400"
      >
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNav;
