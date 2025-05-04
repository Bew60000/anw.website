import { descriptionSkill, skills } from "../../libs/ResumeText";
import { skillsTitle } from "../../libs/Title";
import BoxText from "../text-layout-size/BoxText";
import TitleText from "../text-layout-size/TitleText";

export default function Skill() {
  return (
    <BoxText id="skill" className="scroll-mt-19">
      <TitleText>{skillsTitle}</TitleText>

      <div className="text-sm mx-6 mb-6">{descriptionSkill}</div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-6 ">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="bg-white/5 rounded-2xl shadow-md p-6 hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1 transition duration-300 ease-in-out border border-fuchsia-500/20 hover:border-2 hover:border-fuchsia-600"
          >
            <h3 className="text-xl font-bold text-white mb-4 border-b-2 border-fuchsia-600 pb-2 capitalize ">
              {category.replace("_", " ")}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {items.map((item) => (
                <li
                  key={item}
                  className="bg-fuchsia-600/90 text-white text-sm px-3 py-1 rounded-full font-medium transition hover:bg-fuchsia-700 hover:scale-105"
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
