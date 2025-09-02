import Section from "./SectionSpacing";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { container, card } from "./animation/EaseStagger";
import PythonDev from "../assets/python.png";
import NetskopeAdmin from "../assets/netskope.png";
import ISC2 from "../assets/isc2.png";
import HackerRankJS from "../assets/js_inter.png";

export default function Certificates() {

  const [selectedCard, setSelectedCard] = useState(null);

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
      image: NetskopeAdmin,
    },
    { issuer: "ISC2", name: "Certified in Cybersecurity", date: "July, 2025", image: ISC2, },
    {
      issuer: "IBM",
      name: "Python for Data Science, AI, & Development",
      date: "Aug, 2025",
      image: PythonDev
    },
    {
      issuer: "HackerRank",
      name: "Javascript (Intermediate) Certificate",
      date: "Aug, 2025",
      image: HackerRankJS,
    },
  ];

  const showCert = (certificate) => {
    setSelectedCard(certificate);
  };

  const closeCert = () => {
    setSelectedCard(null);
  };

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
          viewport={{ once: true, amount: 0.25 }}
          className="max-w-xs md:max-w-175 xl:max-w-5xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4"
        >
          {Certs.map((certificate, index) => (
            <motion.div
              whileHover={{ scale: 1.05, borderColor: "#3b82f6" }}
              transition={{ type: "spring", stiffness: 300 }}
              key={index}
              variants={card}
              onClick={() => showCert(certificate)}
              className="motion-smooth group bg-slate-50 rounded-xl p-5 dark:bg-zinc-800
                 border border-transparent 
                 cursor-pointer backdrop-blur-xl"
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
        {selectedCard && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="cert-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative bg-slate-100 dark:bg-zinc-900 p-4 xl:p-6 rounded-2xl shadow-lg max-w-xs xl:max-w-lg w-full"
            >
              <button
                onClick={closeCert}
                className="absolute -top-5 xl:-top-7 -right-5 xl:-right-7  text-gray-300 dark:text-gray-200 text-sm font-bold cursor-pointer"
              >
                ✕
              </button>

              {selectedCard.image && (
                <img
                  src={selectedCard.image}
                  alt={selectedCard.name}
                  onContextMenu={(e) => e.preventDefault()}
                  className="select-none pointer-events-none rounded-lg w-xs xl:w-full h-auto mb-4"
                />
              )}

              <h2 className="text-sm md:text-xl xl:text-xl font-semibold">
                {selectedCard.name}
              </h2>
              <p className="text-xs md:text-base xl:text-base text-gray-500">
                {selectedCard.issuer}
              </p>
              <p className="text-xs md:text-base xl:text-base text-gray-500">
                {selectedCard.date}
              </p>
            </motion.div>
          </div>
        )}
      </Section>
    </>
  );
}
