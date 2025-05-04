import { description_Hi, namePortfolio } from "../../libs/ResumeText";
import BoxText from "../text-layout-size/BoxText";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <BoxText
      id="home"
      className="mt-19 bg-white/4 flex flex-col xl:flex-row items-center justify-center gap-8 px-6 py-12 rounded-xl scroll-mt-19"
    >
      <img
        src="/images/Portfolio.png"
        alt={namePortfolio}
        className="hidden md:block w-64 h-64 lg:w-84 lg:h-84 object-cover rounded-2xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }} // เริ่มจากจางและเลื่อนลง
        animate={{ opacity: 1, y: 0 }} // ลอยขึ้นมา
        transition={{ duration: 1 }} // เวลา 0.6 วิ
      >
        <div className="text-center md:text-left p-4 md:p-8 max-w-xl">
          <p className="text-gray-400">// Hi all. I am</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            {namePortfolio}
          </h1>
          <p className="text-cyan-500 font-extrabold text-lg sm:text-xl mb-6">
            &gt; Front-end developer
          </p>
          <div className="text-sm ">"{description_Hi}"</div>
        </div>
      </motion.div>
    </BoxText>
  );
}
