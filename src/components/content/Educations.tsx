import { educations } from "../../libs/ResumeText";
import { educationTitle } from "../../libs/Title";
import BoxText from "../share/BoxText";
import TitleText from "../share/TitleText";

export default function Educations() {
  return (
    <BoxText>
      <TitleText>{educationTitle}</TitleText>

      <div className="relative pl-20">
        <div className="absolute left-[62px] top-[12px] bottom-0 w-[2px] bg-gray-300" />

        {educations.map((edu, index) => (
          <div key={index} className="mb-8 relative">
            <div className="absolute -left-[23px] top-1.5 w-3 h-3 bg-fuchsia-500 rounded-full border-2 shadow z-10" />

            <div className="pl-2">
              <p className="text-lg font-semibold">
                {edu.yearStart} - {edu.yearEnd}
              </p>
              <p className="text-md font-bold text-fuchsia-500 mt-1">{edu.educationName}</p>
              {edu.faculty && <p className="text-sm">Faculty: {edu.faculty}</p>}
              {edu.department && (
                <p className="text-sm text-gray-400">
                  Department: {edu.department}
                </p>
              )}
              {edu.school && <p className="text-sm">Secondary: {edu.school}</p>}
              {edu.highSchool && (
                <p className="text-sm text-gray-400">
                  HighSchool: {edu.highSchool}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </BoxText>
  );
}
