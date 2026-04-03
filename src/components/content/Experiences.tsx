import { experience } from "../../libs/Resume";
import { experienceTitle } from "../../libs/Title";
import BoxText from "../share/BoxText";
import TitleText from "../share/TitleText";
import { Timeline, TimelineItem } from "../share/Timeline";

export default function Experiences() {
  return (
    <BoxText>
      <TitleText>{experienceTitle}</TitleText>

      <Timeline>
        {experience.map((item) => (
          <TimelineItem
            key={`${item.start}-${item.end}-${item.company}`}
          >
            <p className="text-lg font-semibold">
              {item.start} - {item.end}
            </p>
            <p className="mt-1 text-md font-bold text-fuchsia-500">
              {item.company}
            </p>
            <p className="text-sm">Position : {item.position}</p>

            <div className="mt-2 flex flex-wrap gap-2">
              {item.skills?.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-gray-600 px-2 py-1 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </TimelineItem>
        ))}
      </Timeline>
    </BoxText>
  );
}
