import { contactInfo } from "../../libs/Contact";
import { namePortfolio } from "../../libs/ResumeText";
import BoxText from "../text-layout-size/BoxText";

export default function Contact() {
  return (
    <BoxText
      id="contact"
      className="bg-white/4 flex flex-col lg:flex-row items-center justify-center gap-8 px-6 py-12 rounded-xl scroll-mt-19"
    >
      <div className="text-center md:text-left p-4 md:p-8 max-w-xl">
        <p className="text-gray-400">//Contact click</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
          {namePortfolio}
        </h1>
        <p className="text-cyan-500 font-extrabold text-lg sm:text-xl mb-6">
          &gt; Front-end developer
        </p>

        <div className="text-sm text-gray-300 space-y-4">
          {contactInfo.map(({ label, var: v, value, color, link }) => (
            <div key={v}>
              <p>{label}</p>
              <p>
                <span className="text-green-400">const</span> {v} ={" "}
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
