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
      { rootMargin: "-40% 0px -50% 0px" },
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
      100,
    );
  };

  const Link = ({ id }: { id: string }) => (
    <button
      onClick={() => scrollTo(id)}
      className={cn(
        "px-3 py-2 transition",
        active === id
          ? "border-b-2 border-orange-400 text-orange-400"
          : "hover:font-extrabold",
      )}
    >
      &lt;{id} /&gt;
    </button>
  );

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/15 shadow-lg backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 text-sm text-teal-400 sm:px-6 lg:px-8">
        <div className="hidden space-x-4 font-mono md:flex">
          {sections.map((id) => (
            <Link key={id} id={id} />
          ))}
        </div>
        <div className="flex items-center gap-3 font-mono text-green-600">
          <span className="hidden sm:block">{namePortfolio}</span>
          <img
            src="/images/Portfolio.png"
            alt={namePortfolio}
            className="h-8 w-8 rounded-full ring-1 ring-teal-500"
          />
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-300 transition hover:text-white"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-slate-700 bg-gray-800 font-mono text-sm md:hidden">
          {sections.map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={cn(
                "block w-full px-4 py-3 text-left text-green-600 transition",
                active === id
                  ? "border-l-4 border-orange-400 bg-slate-700 text-orange-400"
                  : "hover:bg-slate-700",
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
