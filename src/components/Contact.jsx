import Section from "./SectionSpacing";
import { Icons } from "./Icons";
import { motion } from "framer-motion";
import { container, card } from './animation/StaggerAnimationY'
import Vector from "../assets/vector.webp";

export default function Contact() {
  const ContactList = [
    { icon: "FaGithub", name: "Github", link: "https://github.com/Fenrir-qt" },
    {
      icon: "FaLinkedin",
      name: "LinkedIn",
      link: "https://linkedin.com/in/nico-angelo-burog-42199235b",
      style: "text-[#0a66c2]",
    },
    { icon: "SiGmail", name: "Gmail", link: "mailto:fenrirqtpie@gmail.com" },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0, transition: { ease: "easeOut" } },
  };

  return (
    <>
      <Section
        id="contact"
        className="min-h-50 flex flex-col items-center z-10 text-start"
      >
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="md:max-w-175 xl:max-w-5xl mx-auto w-full"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white z-10 px-5 md:px-0 xl:px-0">
            Contact
          </h2>
          <p className="md:w-full mt-2 text-gray-600 dark:text-gray-400 px-5 md:px-0 xl:px-0">
            Let's Connect! I'm open to collaborations, opportunities, and new
            ideas.
          </p>
          <img
            src={Vector}
            alt="Vector Image"
            className="mx-auto max-w-xs xl:max-w-xl z-10"
          />
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-xs md:max-w-175 xl:max-w-5xl mx-auto w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 z-10"
        >
          {ContactList.map((contact, index) => {
            const Icon = Icons[contact.icon];
            return (
              <motion.div
                key={index}
                variants={card}
                className="group max-w-xs md:max-w-175 xl:max-w-5xl w-full mx-auto grid grid-cols-1  
                 bg-slate-50 rounded-xl p-5 dark:bg-zinc-800 duration-300 
                 hover:scale-110 hover:border-blue-500 border border-transparent 
                 cursor-pointer backdrop-blur-xl shadow-md"
              >
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row items-center justify-center gap-2"
                >
                  <span className="text-black dark:text-white">
                    {Icon && <Icon size={25} className={contact.style} />}
                  </span>
                  <span className="text-black dark:text-white xl:text-2xl">
                    {contact.name}
                  </span>
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </Section>
    </>
  );
}
