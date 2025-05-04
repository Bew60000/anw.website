import BoxText from "../text-layout-size/BoxText";
import TitleText from "../text-layout-size/TitleText";
import { descriptionAboutMe } from "../../libs/ResumeText";
import { aboutTitle } from "../../libs/Title";
import { CameraIcon, Gamepad2, Globe } from "lucide-react";

const hobbies = [
  {
    icon: <CameraIcon className="text-fuchsia-400 w-8 h-8 mb-2" />,
    text: "Photography lover – capturing moments and street scenes.",
  },
  {
    icon: <Gamepad2 className="text-fuchsia-400 w-8 h-8 mb-2" />,
    text: "Gamers – Enjoy MOBA games, games with friends and story games.",
  },
  {
    icon: <Globe className="text-fuchsia-400 w-8 h-8 mb-2" />,
    text: "Explorer – discovering new places and cultures.",
  },
];

export default function AboutMe() {
  return (
    <BoxText>
      <TitleText>{aboutTitle}</TitleText>

      <div className="bg-white/5 border border-fuchsia-500/30 p-6 rounded-xl text-sm text-gray-200 leading-relaxed mx-6 shadow-inner hover:shadow-md transition-all duration-300">
        {descriptionAboutMe}
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 mt-6 mx-6 text-sm text-gray-300">
        {hobbies.map((hobby, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white/5 rounded-xl p-4 border border-fuchsia-500/20 hover:border-2 hover:border-fuchsia-500 shadow-md hover:scale-105 transition"
          >
            {hobby.icon}
            <p className="text-center">{hobby.text}</p>
          </div>
        ))}
      </div>
    </BoxText>
  );
}
