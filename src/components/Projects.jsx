import { motion } from "framer-motion";
import { Icons } from "./Icons.js";
import { container, card } from "./animation/StaggerAnimationY.js";
import Section from "./SectionSpacing.jsx";

export default function Projects() {
  const Projects = [
    {
      title: "Personal Portfolio",
      description:
        "A responsive and interactive portfolio showcasing my skills, projects, and experiences as a student. Includes dynamic animations and easy access to my contact information. Built with ReactJS and Tailwind CSS.",
      icons: ["FaReact", "RiTailwindCssFill", "SiVite"],
      iconsStyle: [
        "text-primary",
        "text-primary",
        "text-black dark:text-white",
      ],
    },
    {
      title: "Geohazard Sentinel",
      description:
        "The GeoHazard Sentinel project is a GIS project used to map and mitigate vulnerable areas. This project is written in HTML, CSS, Javascript and utilizes ExpressJS in the backend.",
      icons: ["FaHtml5", "FaCss3Alt", "DiJavascript", "SiExpress", "GrMysql"],
      iconsStyle: [
        "text-orange-500",
        "text-blue-500",
        "text-yellow-500",
        "text-black dark:text-white",
        "text-black dark:text-white",
      ],
    },
    {
      title: "CozyControl",
      description:
        "A mobile application linked to an IoT device that can provide sensor readings of electricity consumption, light levels, and temperature by incorporating relays that control both lights and sockets. Built using Flutter and Firebase.",
      icons: ["RiFlutterFill", "RiFirebaseFill", "SiArduino"],
      iconsStyle: ["text-sky-500", " ", "text-primary"],
    },
    {
      title: "Apple Website Clone",
      description:
        "A responsive, high-fidelity clone of the Apple website built with React, Vite, TypeScript, and Tailwind CSS.",
      live: "https://apple-site-clone-iota.vercel.app",
      github: "https://github.com/Fenrir-qt/apple-site-clone",
      icons: ["FaReact", "RiTailwindCssFill", "SiTypescript", "SiVite"],
      iconsStyle: [
        "text-primary",
        "text-primary",
        "text-blue-500",
        "text-black dark:text-white",
      ],
    },
    {
      title: "Maskerade",
      description: "A comprehensive network analysis tool that supports both IPv4 and IPv6 networks. Calculate network information, generate host lists, perform subnet calculations, and export results to CSV files.",
      github: "https://github.com/Fenrir-qt/Maskerade",
      icons: ["FaPython"],
      iconsStyle: ["text-[#306998]"]
    }
  ];

  return (
    <>
      <Section
        id="projects"
        className="min-h-50 flex flex-col items-center z-10 text-start"
      >
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="md:max-w-175 xl:max-w-5xl mx-auto w-full"
        >
          <h2 className="text-start text-3xl md:text-4xl font-bold text-gray-900 dark:text-white z-10 px-5 md:px-0 xl:px-0">
            Projects
          </h2>
          <p className="text-start mt-2 text-gray-600 dark:text-gray-400 px-5 md:px-0 xl:px-0">
            Here are some of the projects I've been involved in, including
            collaborations with others.
          </p>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25  }}
          className="max-w-xs md:max-w-175 xl:max-w-5xl mx-auto w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 mt-12 z-10"
        >
          {Projects.map((project, index) => {
            return (
              <motion.div
                key={index}
                variants={card}
                whileHover={{ scale: 1.05, borderColor: "#3b82f6" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="motion-smooth group bg-slate-50 dark:bg-zinc-800 dark:text-white
                rounded-2xl p-6 flex flex-col justify-between border border-transparent cursor-pointer shadow-md"
              >
                <h3
                  className="text-xl font-semibold text-gray-900 dark:text-white mb-3 
                 group-hover:text-blue-500 dark:group-hover:text-blue-500"
                >
                  {project.title}
                </h3>
                {project.icons && (
                  <div className="flex gap-2 mb-3">
                    {project.icons.map((iconName, i) => {
                      const DynamicIcon = Icons[iconName];
                      return DynamicIcon ? (
                        <DynamicIcon
                          key={i}
                          size={36}
                          className={project.iconsStyle?.[i] || "text-gray-400"}
                        />
                      ) : null;
                    })}
                  </div>
                )}
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
                {}
                <div className="flex gap-2">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 self-start px-4 py-2 text-sm font-medium 
                     text-white bg-blue-500 rounded-lg shadow 
                     hover:shadow-lg hover:scale-105 
                     transition-all duration-300 flex justify-center items-center gap-1"
                    >
                      Live Link <Icons.CiLink className="text-xl" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 self-start px-4 py-2 text-sm font-medium 
                     text-white bg-zinc-800 dark:bg-zinc-700 rounded-lg shadow 
                       hover:shadow-lg hover:scale-105 
                       transition-all duration-300 flex justify-center items-center gap-1"
                    >
                      Github
                      <Icons.FaGithub />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Section>
    </>
  );
}
