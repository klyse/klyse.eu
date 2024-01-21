"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";

export const projectsData = [
  {
    id: 1,
    title: "Strawanzer",
    description: "South Tyrol's Events Platform",
    image: "/images/projects/1.png",
    previewUrl: "https://strawanzer.events",
  },
  {
    id: 2,
    title: "Magun",
    description: "Share those emotions",
    image: "/images/projects/2.png",
    previewUrl: "https://magun.space",
  },
  {
    id: 3,
    title: "Premer",
    description: "Presentation timer for Apple Watch",
    image: "/images/projects/3.png",
    previewUrl: "https://premer.klyse.eu",
  },
  {
    id: 4,
    title: "Price Tracking",
    description: "Price tracking for supermarkets",
    image: "/images/projects/4.png",
  },
  {
    id: 5,
    title: "Logitech Keyboard LED",
    description: "LED based shortcut helper",
    image: "/images/projects/5.png",
    gitUrl: "https://github.com/klyse/LogitechKeyboardLED",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
