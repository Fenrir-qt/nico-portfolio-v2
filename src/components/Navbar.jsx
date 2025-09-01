import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx"
import ToggleDark from "./ToggleDark";

export default function Navbar() {
  const [active, setActive] = useState("home");

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "certificates", label: "Certificates" },
    { id: "contact", label: "Contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6,  rootMargin: "0px 0px -20% 0px"  }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const titles = {
      home: "Home",
      skills: "Skills",
      projects: "Projects",
      education: "Education",
      certificates: "Certificates",
      contact: "Contact",
    };

    document.title = titles[active] || "Nico Angelo | Portfolio";
  }, [active]);

  return (
    <>
      <header className="sticky top-0 bg-zinc-900 text-white z-100">
        <nav
          className="flex items-center justify-between p-5"
          aria-label="Main navigation"
        >
          <a href="/" className="font-bold text-lg ml-2 md:ml-5 xl:ml-30">
            Portfolio
          </a>
          <div className="hidden md:hidden xl:flex gap-10">
            {navLinks.map((navs) => (
              <a
                href={`#${navs.id}`}
                key={navs.id}
                onClick={() => setActive(navs.id)}
                className={`hover:text-sky-400 duration-200 ${
                  active === navs.id ? "text-sky-400 duration-300" : ""
                }`}
              >
                {navs.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <span className="mr-2 xl:mr-30 cursor-pointer">
              <ToggleDark className="z-101" />
            </span>
            <button className=" xl:hidden duration-200" onClick={toggleMenu}>
              {isMenuOpen ? (
                <RxCross1 className="text-lg" />
              ) : (
                <RxHamburgerMenu className="text-lg" />
              )}
            </button>
          </div>
        </nav>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              exit={{ opacity: 0, scaleY: 0 }}
              transition={{ duration: 0.3 }}
              className="xl:hidden absolute w-full origin-top bg-zinc-900 border-t border-zinc-700"
            >
              <div className="flex flex-col p-5 space-y-4">
                {navLinks.map((navs) => (
                  <a
                    href={`#${navs.id}`}
                    key={navs.id}
                    className={`${active === navs.id ? "text-sky-400" : ""}`}
                    onClick={() => {
                      setIsMenuOpen(false);
                      setActive(navs.id);
                    }}
                  >
                    {navs.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
