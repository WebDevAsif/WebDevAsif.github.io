import "./App.module.css";
import Navbar from "./components/common/Navbar/Navbar.jsx";
import Hero from "./components/sections/Hero/Hero.jsx";
import About from "./components/sections/About/About.jsx";
import Service from "./components/sections/Projects/Projects.jsx";
import Skills from "./components/sections/Skills/Skills.jsx";
import Contact from "./components/sections/Contact/Contact.jsx";
import Footer from "./components/common/Footer/Footer.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
