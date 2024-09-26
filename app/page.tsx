"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  ChevronDown,} from "lucide-react";
import {experiences,skillCategories,projects} from "@/utils/data"
export default function Home() {
  // const [scrollY, setScrollY] = useState(0);
  const sectionRefs: Record<
    "home" | "experience" | "skills" | "projects" | "education",
    React.RefObject<HTMLElement>
  > = {
    home: useRef(null),
    experience: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    education: useRef(null),
  };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollY(window.scrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            document
              .querySelector(`nav a[href="#${id}"]`)
              ?.classList.add("text-blue-400");
          } else {
            const id = entry.target.id;
            document
              .querySelector(`nav a[href="#${id}"]`)
              ?.classList.remove("text-blue-400");
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);
  const scrollToSection = (sectionId: keyof typeof sectionRefs) => {
    if (sectionRefs[sectionId]?.current) {
      sectionRefs[sectionId].current.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 overflow-hidden">
      <nav className="fixed top-0 left-0 right-0 bg-gray-800 bg-opacity-90 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-blue-400 ">
              Pedram Mirshah
            </div>
            <ul className="md:flex space-x-4 hidden">
              {(
                Object.keys(sectionRefs) as Array<keyof typeof sectionRefs>
              ).map((sectionId) => (
                <li key={sectionId}>
                  <a
                    href={`#${sectionId}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(sectionId);
                    }}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <div
        className="fixed inset-0 bg-gradient-to-b from-blue-900 to-gray-900 z-0"
        // style={{
        //   transform: `translateY(${scrollY * 0.5}px)`,
        // }}
      />

      <main className="relative z-10">
        <motion.section
          id="home"
          ref={sectionRefs.home}
          className="min-h-screen flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="text-center">
            <motion.h1
              className="md:text-5xl  text-2xl font-bold mb-4 mt-20 text-blue-400"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Pedram Mirshah
            </motion.h1>
            <motion.p
              className="md:text-2xl text-lg mb-8"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Front End Engineer
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center items-center gap-4 text-sm mb-12"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="flex items-center">
                <MapPin size={16} className="mr-2 text-blue-400" />
                Tehran
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-blue-400" />
                <a href="mailto:webmaster@example.com">pedmsv@gmail.com</a>
              </div>
              {/* <div className="flex items-center">
                <Phone size={16} className="mr-2 text-blue-400" />
                <a href="tel:+989377303038"> +989377303038</a>
              </div> */}
              <div className="flex items-center">
                <Linkedin size={16} className="mr-2 text-blue-400" />
                <a href="https://www.linkedin.com/in/pedram-mirshah-b5425516a/">
                  Pedram Mirshah
                </a>
              </div>
              <div className="flex items-center">
                <Github size={16} className="mr-2 text-blue-400" />
                <a href="https://github.com/itsspedram"> @itsspedram</a>
              </div>
            </motion.div>
            <motion.p
              className="max-w-3xl mx-auto text-gray-300 leading-relaxed text-lg"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Front-End Engineer with 4+ years of web development experience and
              3 years specializing in blockchain technologies. Proficient in
              React, Next.js, TypeScript, JavaScript, and Tailwind CSS, with a
              proven record of enhancing user experiences and driving
              engagement. Contributed to web3 platforms serving over 100,000
              users, resulting in significant improvements in user interaction
              and retention. Experienced in delivering innovative solutions in
              fast-paced, collaborative environments focused on optimization.
            </motion.p>
            <motion.div
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: [0, 10, 0], opacity: 1 }}
              transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
              className="cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("experience");
              }}
            >
              <ChevronDown size={32} className="mt-12 mx-auto text-blue-400" />
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="experience"
          ref={sectionRefs.experience}
          className="py-20 bg-gray-800 bg-opacity-80"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-blue-400 mb-12 text-center">
              Professional Experience
            </h2>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-700 rounded-lg p-6 shadow-lg transition-all duration-300 hover:shadow-blue-400/20 hover:scale-105"
                  initial={{  opacity: 0 }}
                  whileInView={{  opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-semibold text-blue-400">
                    {exp.company}
                  </h3>
                  <p className="text-lg text-gray-300 mb-2">{exp.position}</p>
                  <p className="text-sm text-gray-400 mb-4">
                    {exp.period} | {exp.location}
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="skills"
          ref={sectionRefs.skills}
          className="py-20 bg-gray-900 bg-opacity-80"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-blue-400 mb-12 text-center">
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 rounded-lg p-6 shadow-lg"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    {category.icon}
                    <h3 className="text-xl font-semibold text-blue-400 ml-2">
                      {category.name}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-blue-900 text-blue-200 text-sm font-medium px-2.5 py-0.5 rounded transition-all duration-300 hover:bg-blue-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="projects"
          ref={sectionRefs.projects}
          className="py-20 bg-gray-800 bg-opacity-80"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-blue-400 mb-12 text-center">
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-700 rounded-lg p-6 shadow-lg"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold text-blue-400 mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  {project.url !== "#" ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      View Project
                    </a>
                  ) : (
                    <span className="text-gray-500">Project Is Not Available</span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="education"
          ref={sectionRefs.education}
          className="py-20 bg-gray-900 bg-opacity-80"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-blue-400 mb-12 text-center">
              Education
            </h2>
            <motion.div
              className="bg-gray-700 rounded-lg p-6 shadow-lg max-w-2xl mx-auto"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-blue-400">
                Bachelor of Computer Engineering
              </h3>
              <p className="text-lg text-gray-300 mb-2">
              Islamic Azad University, South Tehran Branch
              </p>
              <p className="text-sm text-gray-400">
                2015 Oct - 2020 Jun | Tehran
              </p>
            </motion.div>
            <motion.div
              className="mt-12 max-w-2xl mx-auto"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-blue-400 mb-4 text-center">
                Languages
              </h3>
              <div className="bg-gray-700 rounded-lg p-6 shadow-lg flex justify-around">
                <p className="text-lg text-gray-300"><b>English</b>: Fluent</p>
                <p className="text-lg text-gray-300"><b>Farsi</b>: Native</p>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
