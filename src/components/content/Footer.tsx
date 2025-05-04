import { namePortfolio } from "../../libs/ResumeText";

export default function Footer() {
  return (
    <footer className="text-center text-sm text-gray-500 mt-10 p-4 border-t">
      <p>
        &copy; {new Date().getFullYear()} {namePortfolio}. All rights reserved.
      </p>
      <p>
        Built with <span className="font-semibold">React</span> &{" "}
        <span className="font-semibold">Vite</span> &{" "}
        <span className="font-semibold">Tailwind CSS</span>
      </p>
    </footer>
  );
}
