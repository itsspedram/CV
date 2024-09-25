"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  ChevronDown,
  Code,
  Wrench as Tool,
  Globe,
  Beaker,
} from "lucide-react";
export default function Home() {
  const [scrollY, setScrollY] = useState(0);
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

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const experiences = [
    {
      company: "Nobitex",
      position: "Front End Engineer",
      period: "2022 Feb - present",
      location: "Tehran",
      achievements: [
        "Spearheaded the development of Nobigift, boosting returning visitors by 25%, which led to a rise in site traffic and community engagement.",
        "Elevated user engagement by 40% on the DeFi platform through the creation of an intuitive, responsive UI for over 100 decentralized financial products.",
        "Overhauled the Nobidex platform, cutting onboarding time by 50% and enhancing user retention with a more streamlined, user-friendly interface.",
        "Developed comprehensive documentation using Docusaurus, reducing support queries by 30% and improving team collaboration.",
        "Engineered the Nobitex Labs website using serverless technology, simplifying the deployment pipeline and reducing development time by 50%.",
        "Strengthened site reliability by implementing E2E tests for Nobidex MVP, reducing post-launch issues and improving deployment quality."
      ],
    },
    {
      company: "Hami System",
      position: "Front End Developer",
      period: "2021 Aug - 2022 Feb",
      location: "Tehran",
      achievements: [
        "Optimized front-end performance for the Samat website, slashing page load times by 30% and driving increased user engagement.",
        "Reinforced website security by 30% through advanced authentication protocols and the creation of a specialized security section for stock exchange users.",
        "Implemented a video-based learning section on the Judiciary authentication site, decreasing onboarding time by 30% and boosting comprehension by 40%",
      ],
    },
    {
      company: "Makeen academy",
      position: "Mentor",
      period: "2021 May - 2021 Nov",
      location: "Tehran",
      achievements: [
        "Mentored a team of front-end developers, leading to 100% placement of bootcamp graduates in developer roles.",
      ],
    },
    {
      company: "Sooran",
      position: "Front End Developer",
      period: "2020 Feb - 2021 Mar",
      location: "Tehran",
      achievements: [
        "Built a user-centric front-end for the Mustafa Prize and Parsian Exchange websites, improving site functionality and driving a 15% increase in customer satisfaction.",
      ],
    },
    {
      company: "Football bartar",
      position: "Front End Developer",
      period: "2019 Feb - 2020 Feb",
      location: "Tehran",
      achievements: [
        "Created multiple landing pages, including Rakhtkan and Shootbalista, to enhance user engagement and brand visibility.",
      ],
    },
    {
      company: "Makeen Ideal Media",
      position: "Front End Intern,Designer",
      period: "2015 Jul - 2018 Dec",
      location: "Tehran",
      achievements: [
        "Designed 2D and 3D elements for various gaming projects, transitioning into front-end development and game development with Unity, C#, and JS.",
      ],
    },
  ];

  const skillCategories = [
    {
      name: "Programming Languages & Frameworks",
      icon: <Code className="w-6 h-6 text-blue-400" />,
      skills: [
        "JavaScript",
        "TypeScript",
        "HTML/CSS/SASS",
        "Next.js",
        "React.js",
        "Node.js",
        "Express",
        "Solidity",
      ],
    },
    {
      name: "Tools & Technologies",
      icon: <Tool className="w-6 h-6 text-blue-400" />,
      skills: [
        "Git",
        "Linux",
        "Redux",
        "JIRA",
        "React Query",
        "GraphQL",
        "Socket.io",
        "Storybook",
        "Photoshop",
        "Figma",
        "Playwright",
        "jestjs"
      ],
    },
    {
      name: "Web Development",
      icon: <Globe className="w-6 h-6 text-blue-400" />,
      skills: [
        "Front-End Development",
        "UX/UI Design",
        "Responsive Design",
        "Web3 Development",
      ],
    },
    {
      name: "Testing & Optimization",
      icon: <Beaker className="w-6 h-6 text-blue-400" />,
      skills: [
        "E2E Testing",
        "Code Refactoring",
        "State Management",
        "Serverless Platforms",
      ],
    },
  ];

  const projects = [
    {
      name: "Nobitex Labs",
      url: "https://labs.nobitex.ir/#/",
      description:
        "An innovative platform for cryptocurrency experiments and blockchain technology exploration.",
    },
    {
      name: "Nobitex DEX",
      url: "https://dex.nobitex.ir/",
      description:
        "A decentralized exchange platform for secure and efficient cryptocurrency trading.",
    },
    {
      name: "CSDI Portal",
      url: "https://www.csdiran.ir/",
      description:
        "A comprehensive portal for the Central Securities Depository of Iran, facilitating securities management.",
    },
    {
      name: "Nobitex Gift Card",
      url: "https://nobitex.ir/giftcard/",
      description:
        "A digital gift card system for cryptocurrency purchases and transfers.",
    },
    {
      name: "CryptoVault (Unreleased)",
      url: "#",
      description:
        "A secure, multi-signature cryptocurrency wallet with advanced security features. (Project discontinued due to regulatory changes)",
    },
    {
      name: "BlockChain Explorer (Unreleased)",
      url: "#",
      description:
        "A user-friendly blockchain explorer for multiple cryptocurrencies. (Project put on hold due to resource constraints)",
    },
    {
      name: "Shootbalista (Unreleased)",
      url: "#",
      description:
        "A live web-based football game offering real-time player interaction and competitive matches.",
    },
    {
      name: "Pardisan Exchange (Unreleased)",
      url: "#",
      description:
        "A site for currency exchange during the COVID-19 pandemic, offering real-time rates for various currencies.",
    },
    {
      name: "Small Crypto Exchange (Unreleased)",
      url: "#",
      description:
        "A lightweight cryptocurrency exchange platform tailored for local market transactions.",
    },
    {
      name: "Samat Admin Panel (Unreleased)",
      url: "#",
      description:
        "A private admin panel designed for internal use by the Samat organization, ensuring secure access to administrative functions.",
    },
    {
      name: "Sooran",
      url: "https://sooran.co/",
      description:
        "A comprehensive website for culinary content, offering recipes and food-related articles. (Released)",
    },
    {
      name: "Tavanmandsazan",
      url: "https://tavanmandsazan.ir/",
      description:
        "A platform aimed at empowering individuals through education and skill development opportunities.",
    },
    {
      name: "Rakhtkan (Unreleased)",
      url: "#",
      description:
        "A content-driven website developed for the Football Bartar content team, offering updates and analysis on football.",
    },
    {
      name: "Footballbartar (Unreleased)",
      url: "#",
      description:
        "A football-centric website providing news, scores, and in-depth coverage of football events.",
    },
    {
      name: "Winka (Unreleased)",
      url: "#",
      description:
        "A football prediction platform allowing users to make match predictions and earn rewards.",
    },
  ];
  

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
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />

      <main className="relative z-10">
        <motion.section
          id="home"
          ref={sectionRefs.home}
          className="min-h-screen flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="text-center">
            <motion.h1
              className="text-5xl font-bold mb-4 text-blue-400"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Pedram Mirshah
            </motion.h1>
            <motion.p
              className="text-2xl mb-8"
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
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-blue-400" />
                <a href="tel:+989377303038"> +989377303038</a>
              </div>
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
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
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
          viewport={{ once: true }}
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
                    <span className="text-gray-500">Project Unreleased</span>
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
                Tehran Jonoub Islamic Azad University
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
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">
                Languages
              </h3>
              <div className="bg-gray-700 rounded-lg p-6 shadow-lg">
                <p className="text-lg text-gray-300">English: Fluent</p>
                <p className="text-lg text-gray-300">Farsi: Native</p>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
