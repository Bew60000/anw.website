import { contactInfo } from "../../libs/Contact";
import { namePortfolio } from "../../libs/Resume";
import TypewriterEffect from "../Effect/Typewriter-effect";
import BoxText from "../share/BoxText";

export default function Contact() {
  return (
    <BoxText
      id="contact"
      className="flex scroll-mt-19 flex-col items-center justify-center gap-8 rounded-xl bg-white/4 px-6 py-12 lg:flex-row"
    >
      <div className="max-w-xl p-4 text-center md:p-8 md:text-left">
        <p className="text-gray-400">//Contact click</p>
        <p className="mb-2 bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl">
          {namePortfolio}
        </p>

        <TypewriterEffect
          className="mb-6 text-lg font-extrabold text-cyan-500 sm:text-xl"
          text="&gt; Contact for Me"
          speed={150}
          pause={1500}
        />

        <div className="space-y-4 text-sm text-gray-300">
          {contactInfo.map(({ label, var: v, value, color, link }) => (
            <div key={v}>
              <p>{label}</p>
              <p>
                <span className="text-green-400">const</span> {v} =
                {link ? (
                  <a href={link} className={`text-${color} break-all`}>
                    {value}
                  </a>
                ) : (
                  <span className={`text-${color}`}>{value}</span>
                )}
                ;
              </p>
            </div>
          ))}
        </div>
      </div>

      <img
        src="/images/Contact.JPG"
        alt={namePortfolio}
        className="h-64 w-64 rounded-2xl object-cover lg:h-84 lg:w-84"
      />
    </BoxText>
  );
}
