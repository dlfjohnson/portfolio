import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import careSummary from "@/public/caresummary.png";
import hustleImg from "@/public/hustle.png";
import hustle2Img from "@/public/hustle-2.png";
import localLillyImg from "@/public/local-lilly.png";
import localLilly2Img from "@/public/local-lilly-2.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Rollins College",
    role: null,
    location: "Winter Park, FL",
    description:
      "I graduated with a bachelors in International Business. I also received a minor in German and was Vice President of the Club Tennis team. In my junior year, I enrolled in a Introductory to Programming course and started building websites.",
    icon: React.createElement(LuGraduationCap),
    date: "2014",
  },
  {
    title: "Wyncode Academy",
    role: null,
    location: "Miami, FL",
    description:
      "I studied full stack web development. For my final project, I developed a web application using Ruby on Rails, HTML, CSS, Javascript, PostgreSQL, and Twitter’s API where users can find the most relevant hashtags to their topic of interest.",
    icon: React.createElement(LuGraduationCap),
    date: "2016",
  },
  {
    title: "ChenMed",
    role: "Associate Software Engineer, Clinical Apps Team",
    location: "Miami, FL",
    description:
      "I worked as a frontend software engineer for 6+ years developing large-scale web applications for a technology platform designed for value-based care. The applications enable physicians and clinical staff to monitor and treat their patients more effectively resulting in significant cost savings, increased user satisfaction, and improved patient health outcomes.",
    icon: React.createElement(CgWorkAlt),
    date: "2017 - 2023",
  }
] as const;

export const projectsData = [
  {
    title: "Local Lilly",
    description:
      "A winning mockup I created for a web design contest using Adobe Illustrator, Bootstrap, HTML, and CSS. The client provided a name and a concept. She envisioned a platform that would find local influencers to promote your business. I designed the logo, color scheme, and layout in addition to developing the custom HTML template. The client was very pleased with the design and decided to use it for her business.",
    tags: ["Adobe Illustrator", "Bootstrap", "HTML", "CSS"],
    imageUrls: [localLillyImg, localLilly2Img],
  },
  {
    title: "Hustle",
    description:
      "A Video Production Agency website I built for a client using Ruby, Ruby on Rails, JavaScript, Bootstrap, HTML and CSS. It showcases the agency's latest productions with a custom video player and modern design elements. The client wanted a website that would help them stand out in the industry and attract new clients.",
    tags: ["Ruby", "JavaScript", "Ruby On Rails", "Bootstrap", "HTML", "CSS"],
    imageUrls: [hustleImg, hustle2Img],
  },
  {
    title: "CarePro",
    description:
      "1 of the 9 highly responsive, enterprise level applications I developed at ChenMed. It served as a full-featured dashboard for over 120 clinical centers nationwide. Users can check in patients, view patient medical records, collect patient vitals, conduct screenings, initiate telehealth visits, and more.",
    tags: ["React", "Redux", "JavaScript", "MySQL", "Material UI", "HTML", "CSS", "Jest", "Enzyme", "React Testing Library", "Storybook", "Google Analytics", "Launch Darkly", "AWS"],
    imageUrls: [careSummary],
  },
  {
    title: "Auto Marketplace (Coming 2024)",
    description:
      "Innovative web platform designed to streamline the process of buying and selling cars. A user-friendly website providing a secure and efficient marketplace where users can list their cars for sale, browse available vehicles, and make transactions with confidence.",
    tags: ["React", "Next", "JavaScript", "HTML", "CSS", "Tailwind", "Node", "EXPRESS", "MySQL", "Vercel"],
    imageUrls: null,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Redux",
  "Next.js",
  "Angular",
  "Node",
  "Express",
  "Jest",
  "Enzyme",
  "React Testing Library",
  "Storybook",
  "Tailwind",
  "Framer Motion",
  "Material",
  "KendoReact",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Git",
  "Github Flow",
  "Git Flow",
  "Jira",
  "Bitbucket",
  "Swagger",
  "Invision",
  "Figma",
  "Google Analytics",
  "Launch Darkly",
  "Vercel",
  "AWS",
] as const;