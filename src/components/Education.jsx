import BSU from "../assets/bsu_logo.webp"
import Section from "./SectionSpacing"
import { container, card } from './animation/StaggerAnimationX.js'
import { motion } from "framer-motion"

export default function Education() {

  const Educ = [
    {
      icon: BSU,
      school: "Batangas State University - TNEU",
      desc: "Bachelor of Science in Information Technology",
      year: "2021 - 2025",
    },
    {
      icon: BSU,
      school: "Batangas State University - Integrated School",
      desc: "Senior High School - (STEM)",
      year: "2019 - 2021",
    },
    {
      icon: BSU,
      school: "Batangas State University - Integrated School",
      desc: "Junior High School",
      year: "2015 - 2019",
    },
  ];

  return (
    <>
      <Section
        id="education"
        className="min-h-50 flex flex-col items-center z-10 text-center md:text-start"
      >
        <motion.div 
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="md:max-w-175 xl:max-w-5xl mx-auto w-full"
        >
          <h2 className="text-start text-3xl md:text-4xl font-bold text-gray-900 dark:text-white px-5 md:px-0 xl:px-0">
            Education
          </h2>
          <p className="md:w-full mt-2 text-gray-600 dark:text-gray-400 px-5 md:px-0 xl:px-0 mb-5">
            Fresh graduate with a degree in BS Information Technology, eager to apply my knowledge in real-world projects.
          </p>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full flex flex-col gap-4"
        >
          {Educ.map((education, index) => (
            <motion.div
              key={index}
              variants={card}
              className="group max-w-xs md:max-w-175 xl:max-w-5xl w-full mx-auto grid grid-cols-1 my-2 
                 bg-slate-50 rounded-xl p-5 dark:bg-zinc-800 duration-300 
                 hover:scale-110 hover:border-blue-500 border border-transparent 
                 cursor-pointer backdrop-blur-xl shadow-md"
            >
              <div className="flex items-center z-10">
                <img src={education.icon} alt="" className="w-10 h-auto" />
                <div className="flex flex-col mx-5">
                  <h3
                    className="text-md xl:text-xl text-black dark:text-white font-semibold 
                         group-hover:text-blue-500 dark:group-hover:text-blue-500"
                  >
                    {education.school}
                  </h3>
                  <span className="text-black dark:text-white text-sm xl:text-base">
                    {education.desc}
                  </span>
                  <span className="text-black dark:text-white text-sm xl:text-base">
                    {education.year}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </>
  );
}
