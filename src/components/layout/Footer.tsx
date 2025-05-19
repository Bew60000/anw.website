import {
  FaCode,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLine,
} from "react-icons/fa";
import { namePortfolio } from "../../libs/Resume";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-2 rounded-t-md py-4 text-gray-300">
      <div className="flex items-center gap-5 py-2 text-xl">
        <a
          href="mailto:anw.nattapo.w@gmail.com"
          className="transition-colors hover:scale-120 hover:text-fuchsia-500"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://www.instagram.com/a_aong_/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:scale-120 hover:text-fuchsia-500"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/ABndc1005428"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:scale-120 hover:text-fuchsia-500"
        >
          <FaFacebook />
        </a>
        <a
          href="https://line.me/ti/p/8zxTJyV4TZ"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:scale-120 hover:text-fuchsia-500"
        >
          <FaLine />
        </a>
        <a
          href="https://github.com/Bew60000"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:scale-120 hover:text-fuchsia-500"
        >
          <FaGithub />
        </a>
      </div>
      <div className="-mb-2 flex items-center gap-2 text-sm">
        <FaCode className="text-green-400" />
        <span>Crafted with code by ANW(Bew60000)</span>
      </div>
      <span className="mt-1 text-xs text-gray-500">
        &copy; {new Date().getFullYear()} {namePortfolio} : ANW(Bew60000). All
        rights reserved.
      </span>
    </footer>
  );
}
