import Home from "../components/content/Home";
import AboutMe from "../components/content/AboutMe";
import Educations from "../components/content/Educations";
import Experiences from "../components/content/Experiences";
import Skill from "../components/content/Skill";
import Project from "../components/content/Project";
import Contact from "../components/content/Contact";
import { ScrollBasedVelocityDemo } from "../components/effect/ScrollBasedVelocityDemo";

export default function Content() {
  return (
    <>
      <div className="mx-auto mb-4 flex w-full max-w-[1020px] flex-col gap-4">
        <Home />
        <AboutMe />
        <Educations />
        <Experiences />
        <Skill />
        <Project />
        <Contact />
      </div>
      <ScrollBasedVelocityDemo />
    </>
  );
}
