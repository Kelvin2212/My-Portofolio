import React from "react";
import SkilsItem from "./SkilsItem";
import SkilsLanguage from "./SkilsLanguage";

const Skils = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
      <h1 className="heading text-center">
        Education & <span className="text-yellow-400">Skill</span>
      </h1>

      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[6rem] grid grid-cols-1 md:grid-cols-2 gap-x-[3rem] gap-y-[3rem] items-start">
        <div className="flex flex-col justify-start gap-[0.5rem]">
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
          <SkilsItem
            title="Go"
            year="2024"
            subtitle="Learn to build efficient and maintainable backend systems using Go. Focused on creating RESTful APIs, designing clean and structured databases, writing optimized code, and implementing microservice architecture to ensure scalability and ease of maintenance."
          />
        </div>

        <div className="flex flex-col justify-start gap-[0.5rem]">
          <SkilsItem
            title="Flutter"
            year="2021 - 2022"
            subtitle="Learn the basics of creating website displays, statistical and dynamic mobile, ensuring responsive website displays across devices, enabling a seamless user experience."
          />
          <SkilsItem
            title="Next Js"
            year="2023 - 2024"
            subtitle="Learn to become a full stack developer by creating a dynamic and responsive website display, as well as creating APIs and querying data from the database."
          />
        </div>
      </div>

      <div className="w-[80%] mx-auto mt-[6rem] grid grid-cols-1 md:grid-cols-2 gap-x-[3rem] gap-y-[3rem] items-start">
        <div>
          <SkilsLanguage
            skill1="HTML"
            skill2="CSS"
            skill3="Javascript"
            skill4="Go"
            level1="w-[91%]"
            level2="w-[88%]"
            level3="w-[85%]"
            level4="w-[93%]"
            percentage1={91}
            percentage2={88}
            percentage3={85}
            percentage4={93}
          />
        </div>

        <div>
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
