import { motion } from "framer-motion"
import { Icons } from './Icons.js'
import { container, card } from './animation/StaggerAnimationY.js'
import Section from "./SectionSpacing.jsx"
export default function Skills() {

  const Skill = [
    { icon: "FaHtml5", name: "HTML", style: "text-orange-500" },
    { icon: "FaCss3Alt", name: "CSS", style: "text-blue-500" },
    { icon: "RiTailwindCssFill", name: "Tailwind", style: "text-primary" },
    { icon: "SiArduino", name: "Arduino", style: "text-primary" },
    { icon: "SiExpress", name: "ExpressJS" },
    { icon: "FaNode", name: "NodeJS", style: "text-lime-600" },
    { icon: "FaFigma", name: "Figma" },
    { icon: "GrMysql", name: "MySQL"},
    { icon: "FaGithub", name: "Github" },
    { icon: "FaGitAlt", name: "Git", style: "text-orange-600" },
  ];

  return (
    <>
      <Section
        id="skills"
        className="min-h-50 flex flex-col items-center z-10 text-start"
      >
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="md:max-w-175 xl:max-w-5xl mx-auto w-full"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white z-10 px-5 md:px-0 xl:px-0">
            Skills
          </h2>
          <p className="md:w-full mt-2 text-gray-600 dark:text-gray-400 px-5 md:px-0 xl:px-0">
            What I've learned so far and continue to build upon.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="md:max-w-175 xl:max-w-5xl mx-auto w-85 md:w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-5 md:mt-12 z-10 cursor-pointer"
        >
          {Skill.map((skills, index) => {
            const Icon = Icons[skills.icon];

            return (
              <motion.div
                key={index}
                variants={card}
              >
              <span
                key={index}
                className="flex flex-col items-center justify-center md:gap-3 
                     bg-slate-50 dark:bg-zinc-800 
                     text-gray-800 dark:text-gray-200 
                     shadow-md hover:shadow-lg 
                     hover:scale-105 transition-all duration-300 
                     rounded-2xl p-6"
              >
                {Icon && <Icon size={36} className={skills.style}/>}
                <span className="text-sm font-medium">{skills.name}</span>
              </span>
              </motion.div>
            );
          })}
        </motion.div>
      </Section>
    </>
  );
}
