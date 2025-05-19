import { descriptions, namePortfolio } from "../../libs/Resume";
import BoxText from "../share/BoxText";
import { motion } from "framer-motion";
import TypewriterEffect from "../Effect/Typewriter-effect";

export default function Home() {
  return (
    <BoxText
      id="home"
      className="mt-20 flex scroll-mt-20 flex-col items-center justify-center gap-8 rounded-xl px-6 py-12 xl:flex-row"
    >
      <img
        src="/images/Portfolio.jpg"
        alt={namePortfolio}
        className="h-64 w-64 rounded-2xl object-cover lg:h-84 lg:w-84"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }} // เริ่มจากจางและเลื่อนลง
        animate={{ opacity: 1, y: 0 }} // ลอยขึ้นมา
        transition={{ duration: 1 }} // เวลา 0.6 วิ
      >
        <div className="max-w-xl p-4 text-center md:p-8 md:text-left">
          <p className="text-gray-400">// Hi all. I am</p>
          <h1 className="mb-2 bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl">
            {namePortfolio}
          </h1>
          <TypewriterEffect
            className="mb-6 text-lg font-extrabold text-cyan-500 sm:text-xl"
            text="&gt; Front-end developer"
            speed={100}
            pause={1500}
          />
          <div className="text-sm">
            {descriptions.map((description, index) => (
              <p key={index} className="text-[14px]">
                {description.Welcome}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    </BoxText>
  );
}
