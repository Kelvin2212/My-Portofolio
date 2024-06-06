import React from "react";
import SkilsItem from "./SkilsItem";
import SkilsLanguage from "./SkilsLanguage";

const Skils = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
      <h1 className="heading">
        Education & <span className="text-yellow-400">Skill</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
        <div>
          <SkilsItem
            title="HTML, CSS, Javascript"
            year="2020 - 2021"
            subtitle="Learn the fundamentals of crafting both static and dynamic website displays, ensuring they are responsive across various devices, enabling seamless user experiences."
          />
          <SkilsItem
            title="React Js"
            year="2022 - 2023"
            subtitle="Learn the fundamentals of crafting both static and dynamic website displays, ensuring they are responsive across various devices, enabling seamless user experiences."
          />
          <SkilsLanguage
            skill1="Html"
            skill2="Css"
            skill3="Javascript"
            level1="w-[91%]"
            level2="w-[88%]"
            level3="w-[85%]"
            percentage1={91}
            percentage2={88}
            percentage3={85}
          />
        </div>
        <div className="bottom-2 mt-[1.4rem]">
          <SkilsItem
            title="Flutter"
            year="2021 - 2022"
            subtitle="Learn the basics of creating website displays, statistical and dynamic mobile, ensuring responsive website displays across devices, enabling a seamless user experience."
          />
          <SkilsItem
            title="Next Js"
            year="2023 - 2024"
            subtitle="Learn to become a full stack developer by creating a dynamic and responsive website display, as well as creating APIs and querying data from the database"
          />
          <SkilsLanguage
            skill1="React Js"
            skill2="Flutter"
            skill3="TypeScript"
            level1="w-[88%]"
            level2="w-[90%]"
            level3="w-[75%]"
            percentage1={88}
            percentage2={90}
            percentage3={75}
          />
        </div>
      </div>
    </div>
  );
};

export default Skils;
