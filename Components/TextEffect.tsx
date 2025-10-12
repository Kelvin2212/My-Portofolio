import { TypeAnimation } from "react-type-animation";

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        "Programmer",
        1500,
        "Web Developer",
        1500,
        "Mobile Developer",
        1500,
        "Fullstack Developer",
        1500,
      ]}
      speed={50}
      className="text-[2rem] md:text-[3rem] text-[#55e6a5] font-bold uppercase "
      repeat={Infinity}
    />
  );
};

export default TextEffect;
