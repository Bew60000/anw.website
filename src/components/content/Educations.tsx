import { educations } from "../../libs/Resume";
import { educationTitle } from "../../libs/Title";
import BoxText from "../share/BoxText";
import TitleText from "../share/TitleText";
import { Timeline, TimelineItem } from "../share/Timeline";

export default function Educations() {
  return (
    <BoxText>
      <TitleText>{educationTitle}</TitleText>

      <Timeline>
        {educations.map((edu) => (
          <TimelineItem
            key={`${edu.yearStart}-${edu.yearEnd}-${edu.educationName}`}
          >
            <p className="text-lg font-semibold">
              {edu.yearStart} - {edu.yearEnd}
            </p>
            <p className="mt-1 text-md font-bold text-fuchsia-500">
              {edu.educationName}
            </p>
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
          </TimelineItem>
        ))}
      </Timeline>
    </BoxText>
  );
}
