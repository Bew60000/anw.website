import Home from "../content/Home";
import AboutMe from "../content/AboutMe";
import Educations from "../content/Educations";
import Experiences from "../content/Experiences";
import Skill from "../content/Skill";
import Project from "../content/Project";
import Contact from "../content/Contact";

export default function Content() {
  return (
    <div className="mx-auto flex w-full max-w-[1020px] flex-col gap-4">
      <Home />
      <AboutMe />
      <Educations />
      <Experiences />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
}
