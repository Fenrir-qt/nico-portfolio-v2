import Section from "./SectionSpacing"
import { motion } from "framer-motion"
import { container, card } from './animation/EaseStagger'

export default function Certificates() {
  
  const Certs = [
    {
      issuer: "CICS",
      name: "Dean's Lister (2nd Year, 1st Semester)",
      date: "AY 2022 - 2023",
    },
    {
      issuer: "CICS",
      name: "Dean's Lister (3rd Year - 4th Year)",
      date: "AY 2023 - 2025",
    },
    {
      issuer: "Netskope",
      name: "Netskope Administrator Accreditation",
      date: "July, 2025",
    },
    { issuer: "ISC2", name: "Certified in Cybersecurity", date: "July, 2025" },
    {
      issuer: "IBM",
      name: "Python for Data Science, AI, & Development",
      date: "Aug, 2025",
    },
    {
      issuer: "HackerRank",
      name: "Javascript (Intermediate) Certificate",
      date: "Aug, 2025",
    },
  ];

  return (
    <>
      <Section
        id="certificates"
        className="min-h-50 flex flex-col items-center z-10 text-center md:text-start"
      >
        <div className="md:max-w-175 xl:max-w-5xl mx-auto w-full">
          <h2 className="text-start text-3xl md:text-4xl font-bold text-gray-900 dark:text-white px-5 md:px-0 xl:px-0">
            Certificates
          </h2>
          <p className="md:w-full mt-2 text-gray-600 dark:text-gray-400 px-5 md:px-0 xl:px-0 mb-5">
            Earned certificates that showcased my skills.
          </p>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-xs md:max-w-175 xl:max-w-5xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4"
        >
          {Certs.map((certificate, index) => (
            <motion.div
              key={index}
              variants={card}
              className="group bg-slate-50 rounded-xl p-5   dark:bg-zinc-800 duration-300 
                 hover:scale-110 hover:border-blue-500 border border-transparent 
                 cursor-pointer backdrop-blur-xl shadow-md"
            >
              <div className="flex flex-col">
                <h3
                  className="text-md xl:text-md text-black dark:text-white font-semibold 
                     group-hover:text-blue-500 dark:group-hover:text-blue-500"
                >
                  {certificate.name}
                </h3>
                <span className="text-black dark:text-white text-sm xl:text-base">
                  {certificate.issuer}
                </span>
                <span className="text-black dark:text-white text-sm xl:text-base">
                  {certificate.date}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </>
  );
}
