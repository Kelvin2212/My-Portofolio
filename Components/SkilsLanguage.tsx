import React from "react";

interface Props {
  skill1: string;
  skill2: string;
  skill3: string;
  skill4?: string; // opsional
  level1: string;
  level2: string;
  level3: string;
  level4?: string; // opsional
  percentage1: number;
  percentage2: number;
  percentage3: number;
  percentage4?: number; // opsional
}

const SkilsLanguage = ({
  level1,
  level2,
  level3,
  level4,
  skill1,
  skill2,
  skill3,
  skill4,
  percentage1,
  percentage2,
  percentage3,
  percentage4,
}: Props) => {
  const renderSkill = (skill: string, level: string, percentage: number) => (
    <div className="relative mb-[3rem]">
      <h1 className="p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold">
        {skill} ({percentage}%)
      </h1>
      <span
        className={`${level} bottom-0 h-[6px] absolute bg-[#55e6a5]`}
      ></span>
    </div>
  );

  return (
    <div>
      {renderSkill(skill1, level1, percentage1)}
      {renderSkill(skill2, level2, percentage2)}
      {renderSkill(skill3, level3, percentage3)}
      {skill4 &&
        level4 &&
        percentage4 !== undefined &&
        renderSkill(skill4, level4, percentage4)}
    </div>
  );
};

export default SkilsLanguage;
