import AboutMe from "./components/content/AboutMe";
import Contact from "./components/content/Contact";
import Educations from "./components/content/Educations";
import Experiences from "./components/content/Experiences";
import Home from "./components/content/Home";
import Project from "./components/content/Project";
import Skill from "./components/content/Skill";
import Footer from "./components/content/Footer";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="bg-black min-h-screen max-px-24">
      <Navbar />
      <div className="mx-4 sm:mx-12 md:mx-24 lg:mx-64 flex flex-col gap-4">
        <Home />
        <AboutMe />
        <div className="flex flex-col gap-4 md:flex md:flex-col xl:flex xl:flex-row">
          <Educations />
          <Experiences />
        </div>
        <Skill />
        <Project />
        <Contact />

        <Footer />
      </div>
    </div>
  );
}

export default App;
