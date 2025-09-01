import { Typewriter } from "react-simple-typewriter"
import Me from "../assets/Nico.webp";
import CV from "../assets/Burog_Nico_Angelo_Resume.pdf"
import { motion } from "framer-motion"
import { FaArrowAltCircleDown } from "react-icons/fa"
export default function Hero() {
  return (
    <>
      <section id="home">
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.9,
          ease: "easeOut",
        }}
        className="flex flex-col-reverse md:flex-row justify-center items-center p-10 xl:p-2 gap-5 xl:gap-50 z-50 min-h-175 md:min-h-150 xl:min-h-200"
      >
        <div>
          <span className="text-xl md:text-2xl xl:text-3xl">Hi! I'm{" "}</span>
          <span className="text-xl md:text-2xl xl:text-3xl text-blue-500 font-bold">
            <Typewriter
              words={["Nico Angelo"]}
              loop={1}
              cursor
              cursorStyle="_"
              cursorColor="#0052A2"
              typeSpeed={80}
              deleteSpeed={50}
            />
          </span>
          <p className="mt-2 max-w-2xs md:max-w-md text-lg md:text-2xl z-10">
            A developer in the making, crafting web & mobile apps, with a
            hacker's curiosity for security. On a mission to merge creativity
            with security one project at a time.
          </p>
          <div className="flex gap-2">
            <button className="mt-5 px-4 md:px-5 py-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 duration-200 cursor-pointer z-10 flex items-center gap-1.5">
              <a href={CV} className=" text-sm md:text-base" download>
                Download CV{" "}
              </a>
              <FaArrowAltCircleDown />
            </button>
          </div>
        </div>
        <img
          src={Me}
          alt="My Picture"
          className="max-w-2xs md:max-w-sm md:mt-2 ml-0 md:ml-5 rounded-xl z-1 hover:scale-110 duration-400 shadow-md cursor-pointer"
          fetchPriority="high"
        />
      </motion.div>
      </section>
    </>
  );
}
