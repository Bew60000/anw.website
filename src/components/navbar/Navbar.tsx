import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { namePortfolio } from "../../libs/ResumeText";
import { cn } from "../../libs/utils";


const sections = ["home", "skill", "projects", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    setTimeout(
      () => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }),
      100
    );
  };

  const Link = ({ id }: { id: string }) => (
    <button
      onClick={() => scrollTo(id)}
      className={cn(
        "px-3 py-2 transition",
        active === id
          ? "text-orange-400 border-b-2 border-orange-400"
          : "hover:font-extrabold"
      )}
    >
      &lt;{id} /&gt;
    </button>
  );

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-slate-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 text-sm text-teal-400">
        <div className="hidden md:flex space-x-4 font-mono">
          {sections.map((id) => (
            <Link key={id} id={id} />
          ))}
        </div>
        <div className="flex items-center gap-3 text-green-600 font-mono">
          <span className="hidden sm:block">{namePortfolio}</span>
          <img
            src="/images/Portfolio.png"
            alt={namePortfolio}
            className="w-8 h-8 rounded-full ring-1 ring-teal-500"
          />
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-300 hover:text-white transition"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-gray-800 border-t border-slate-700 text-sm font-mono">
          {sections.map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={cn(
                "block w-full text-left px-4 py-3 transition text-green-600",
                active === id
                  ? "text-orange-400 border-l-4 border-orange-400 bg-slate-700"
                  : "hover:bg-slate-700"
              )}
            >
              _{id}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
