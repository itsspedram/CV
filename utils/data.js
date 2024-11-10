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
export const experiences = [
    {
      company: "Nobitex",
      position: "Front End Engineer",
      period: "2022 Feb - present",
      location: "Tehran",
      url: "https://nobitex.ir/",
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
      url: "https://hamisystem.com/",
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
      url: "https://makeen.ir/",
      period: "2021 May - 2021 Nov",
      location: "Tehran",
      achievements: [
        "Mentored a team of front-end developers, leading to 100% placement of bootcamp graduates in developer roles.",
      ],
    },
    {
      company: "Sooran",
      url: "https://sooran.co/",
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
      url: "#",
      period: "2019 Feb - 2020 Feb",
      location: "Tehran",
      achievements: [
        "Created multiple landing pages, including Rakhtkan and Shootbalista, to enhance user engagement and brand visibility.",
      ],
    },
    {
      company: "Makeen Ideal Media",
      url: "https://makeen.ir/",
      position: "Designer,Front End Intern",
      period: "2015 Jul - 2018 Dec",
      location: "Tehran",
      achievements: [
        "Designed 2D and 3D elements for various gaming projects, transitioning into front-end development and game development with Unity, C#, and JS.",
      ],
    },
  ];

  export 
  const skillCategories = [
    {
      name: "Programming Languages & Frameworks",
      icon: <Code className="w-6 h-6 text-blue-400" />,
      skills: [
        "JavaScript",
        "TypeScript",
        "Next.js",
        "React.js",
        "Vue.js",
        "Nuxt.js",
        "Svelte",
        "HTML",
        "CSS/SASS",
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
        "React Query",
        "Jotai",
        "Rest api",
        "GraphQL",
        "Socket.io",
        "Ethers.js",
        "wagmi",
        "ganache-cli",
        "RainbowKit",
        "Storybook",
        "Photoshop",
        "Figma",
        "Playwright",
        "Jest.js",
        "JIRA",
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

  export   const projects =[
    {
      name: "Nobitex Labs",
      url: "https://labs.nobitex.ir/#/",
      description:
        "An innovative laboratory environment for cryptocurrency experiments and blockchain technology exploration. The platform provides tools for users to explore cutting-edge decentralized finance technologies.",
    },
    {
      name: "Nobitex DEX",
      url: "https://dex.nobitex.ir/",
      description:
        "A decentralized exchange (DEX) offering secure and efficient cryptocurrency trading without intermediaries, allowing users full control over their assets.",
    },
    {
      name: "Nobitex Proof of Reserves Chrome Extension",
      url: "https://nobitex.ir/proof-of-reserves/",
      description:
        "A Chrome extension for verifying Nobitex's proof of reserves, ensuring users that their cryptocurrency assets are backed with verifiable funds. This extension provides transparency and trust in Nobitex's financial security.",
    },
    {
      name: "Nobitex Storybook",
      url: "https://storybook.nxbo.ir/",
      description:
        "A comprehensive React Storybook component library and Next.js integration showcase. This project demonstrates best practices for documenting and testing React components, with a special focus on TypeScript and serverless function components.",
    },
    {
      name: "CSDI Portal",
      url: "https://www.csdiran.ir/",
      description:
        "A central portal developed for the Central Securities Depository of Iran, providing essential tools for managing and processing securities, investments, and financial data in a streamlined manner.",
    },
    {
      name: "Nobitex Gift Card",
      url: "https://nobitex.ir/giftcard/",
      description:
        "A digital solution for purchasing and transferring cryptocurrency through gift cards, providing users with a secure and easy way to send crypto to others.",
    },
    {
      name: "Sooran",
      url: "https://sooran.co/",
      description:
        "A vibrant culinary platform offering a diverse range of recipes, articles, and food-related content. Released and widely used, it serves food enthusiasts with a comprehensive database of culinary knowledge.",
    },
    {
      name: "Tavanmandsazan (Discontinued)",
      url: "https://tavanmandsazan.ir/",
      description:
        "An educational platform designed to empower users through courses and skills development opportunities. This project is currently inactive as the client has taken the platform down.",
    },
    {
      name: "Pardisan Exchange  (Discontinued)",
      url: "#",
      description:
        "An unreleased platform developed to facilitate currency exchanges during the COVID-19 pandemic. Due to client constraints, the project has been discontinued and is no longer operational.",
    },
    {
      name: "Shootbalista (Discontinued)",
      url: "#",
      description:
        "A live, web-based football game allowing real-time player interactions and competitive matches. Though promising, the project was eventually discontinued due to changes in the client's priorities.",
    },
    {
      name: "Small Crypto Exchange (Unreleased)",
      url: "#",
      description:
        "A lightweight, localized cryptocurrency exchange platform designed for smaller markets. Despite its unreleased status, the platform was tailored to provide a streamlined user experience for regional crypto traders.",
    },
    {
      name: "CryptoVault (Unreleased)",
      url: "#",
      description:
        "A highly secure, multi-signature cryptocurrency wallet with advanced encryption and multi-layered protection. This project was discontinued due to changes in regulatory environments that made it untenable.",
    },
    {
      name: "BlockChain Explorer (Private Network)",
      url: "#",
      description:
        "A custom blockchain explorer designed for internal use within private networks, allowing users to explore transactions across multiple cryptocurrencies. The project was placed on hold due to resource constraints.",
    },
    {
      name: "Samat Admin Panel (Private Network)",
      url: "#",
      description:
        "A secure and feature-rich admin panel designed for the Samat organization, facilitating internal management processes. The panel operates within a closed network to ensure confidentiality.",
    },
    {
      name: "Winka (Discontinued)",
      url: "#",
      description:
        "A football prediction platform allowing users to make match predictions, compete with others, and earn rewards based on accurate forecasts. Currently unreleased but holds future potential.",
    },
    {
      name: "Rakhtkan (Discontinued)",
      url: "#",
      description:
        "Developed for the Football Bartar content team, Rakhtkan serves as a content-driven platform focused on providing updates and analysis of football events. The site has yet to be officially released.",
    },
    {
      name: "Footballbartar (Discontinued)",
      url: "#",
      description:
        "A football news and score-tracking website, designed to deliver in-depth coverage and live updates. While development has progressed, the platform remains unreleased.",
    },
  ];
  