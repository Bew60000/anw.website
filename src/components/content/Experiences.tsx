import { experience } from "../../libs/ResumeText";
import { experienceTitle } from "../../libs/Title";
import BoxText from "../share/BoxText";
import TitleText from "../share/TitleText";

export default function Experiences() {
  return (
    <BoxText>
      <TitleText>{experienceTitle}</TitleText>

      <div className="relative pl-20">
        <div className="absolute left-[62px] top-[12px] bottom-0 w-[2px] bg-gray-300" />

        {experience.map((experience, index) => (
          <div key={index} className="mb-8 relative">
            <div className="absolute -left-[23px] top-1.5 w-3 h-3 bg-fuchsia-500 rounded-full border-2 shadow z-10" />

            <div className="pl-2">
              <p className="text-lg font-semibold">
                {experience.start} - {experience.end}
              </p>
              <p className="text-md font-bold text-fuchsia-500 mt-1">
                {experience.company}
              </p>
              <p className="text-sm">Position : {experience.position}</p>

              <div className="flex flex-wrap gap-2 mt-2">
                {experience.skills?.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-600 text-sm px-2 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </BoxText>
  );
}
