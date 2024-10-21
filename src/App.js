// src/App.js
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { motion } from 'framer-motion';
import './App.css';
import Header from './components/Header';
import Introduction from './components/Introduction';
import SideIcons from './components/SideIcons';
import Footer from "./components/Footer";
import Aboutme from "./components/Aboutme";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skill from "./components/Skill";
import Intern from "./components/Intern";
import ProjectsShowcase from "./components/ProjectsShowcase";
import Projectdemo from "./components/Projectdemo";

function App() {
  const circles = Array.from({ length: 10 });

  return (
    <div className="full-body">
      {circles.map((_, index) => {
        const xPosition = Math.random() * 100; // Random X position percentage
        const yPosition = Math.random() * 100; // Random Y position percentage

        return (
          <motion.div
            key={index}
            className="circle"
            style={{
              position: 'absolute',
              top: `${yPosition}%`,
              left: `${xPosition}%`,
            }}
            initial={{ y: 0 }}
            animate={{
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: 1,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatDelay: index * 0.2, // Stagger the animations
            }}
          />
        );
      })}

      <Header />
      <Introduction />
      <SideIcons />
      <Aboutme/>
      <Skill></Skill>
      <Experience/>
      <Projects/>
      <Intern/>
      <ProjectsShowcase/>
      <Footer></Footer>
      <Projectdemo/>
    </div>
  );
}

export default App;
