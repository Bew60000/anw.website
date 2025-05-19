import BoxText from "../share/BoxText";
import TitleText from "../share/TitleText";
import { descriptions } from "../../libs/Resume";
import { aboutTitle } from "../../libs/Title";

import { hobbies } from "../../libs/Hobby";

export default function AboutMe() {
  return (
    <BoxText>
      <TitleText>{aboutTitle}</TitleText>

      {/* AboutMe Description  */}
      <div className="mx-6 rounded-xl border border-fuchsia-500/30 bg-white/5 p-6 leading-relaxed text-gray-200 shadow-inner transition-all duration-300 hover:shadow-md">
        {descriptions.map((description, index) => (
          <p key={index} className="text-[14px]">
            {description.AboutMe}
          </p>
        ))}
      </div>

      {/* ้Hobby */}
      <div className="mx-6 mt-6 grid gap-6 text-sm text-gray-300 sm:grid-cols-1 md:grid-cols-3">
        {hobbies.map((hobby, index) => {
          const Icon = hobby.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center rounded-xl border border-fuchsia-500/20 p-4 shadow-md transition hover:scale-105 hover:border-2 hover:border-fuchsia-500"
            >
              <Icon className="mb-2 h-8 w-8 text-fuchsia-400" />
              <p className="text-center">{hobby.text}</p>
            </div>
          );
        })}
      </div>
    </BoxText>
  );
}
