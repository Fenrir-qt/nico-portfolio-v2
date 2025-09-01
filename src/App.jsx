import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Particles from "./components/Particles";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App(){
  
  return(
    <>
    <Navbar />
    <Particles />
    <main>
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Certificates />
      <Contact />
    </main>
    <Footer />
    </>
  )
}