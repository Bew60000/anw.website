import { CameraIcon, Gamepad2, Globe, type LucideIcon } from "lucide-react";

export type HobbyProps = {
  icon: LucideIcon;
  text: string;
}

export const hobbies: HobbyProps[] = [
  {
    icon: CameraIcon,
    text: "Photography lover – capturing moments and street scenes.",
  },
  {
    icon: Gamepad2,
    text: "Gamers – Enjoy MOBA games, games with friends and story games.",
  },
  {
    icon: Globe,
    text: "Explorer – discovering new places and cultures.",
  },
];
