import { descriptions, skills } from "../../libs/Resume";
import { skillsTitle } from "../../libs/Title";
import BoxText from "../share/BoxText";
import TitleText from "../share/TitleText";

export default function Skill() {
  return (
    <BoxText id="skill" className="scroll-mt-19">
      <TitleText>{skillsTitle}</TitleText>
      {/* Skill Description */}
      <div className="mx-6 mb-6">
        {descriptions.map((description, index) => (
          <p key={index} className="text-[14px]">
            {description.Skill}
          </p>
        ))}
      </div>

      {/* Skill Card */}
      <div className="mt-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="rounded-2xl border border-fuchsia-500/20 bg-white/5 p-6 shadow-md transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-[1.02] hover:border-2 hover:border-fuchsia-600 hover:shadow-xl"
          >
            <h3 className="mb-4 border-b-2 border-fuchsia-600 pb-2 text-xl font-bold text-white capitalize">
              {category.replace("_", " ")}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {items.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-fuchsia-600/90 px-3 py-1 text-sm font-medium text-white transition hover:scale-105 hover:bg-fuchsia-700"
                >
                  {item.trim()}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </BoxText>
  );
}
