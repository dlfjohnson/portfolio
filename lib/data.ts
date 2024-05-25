import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    location: "Winter Park, FL",
    description:
      "I graduated with a bachelors in International Business and a minor in German.",
    icon: React.createElement(LuGraduationCap),
    date: "2014",
  },
  {
    title: "Wyncode Academy",
    location: "Miami, FL",
    description:
      "I completed a 9 week Full Stack Web Immersive bootcamp.",
    icon: React.createElement(LuGraduationCap),
    date: "2016",
  },
  {
    title: "Associate Software Engineer",
    location: "Miami, FL",
    description:
      "I worked as a frontend software engineer for 6+ years developing large-scale web applications to enable physicians and clinical staff to monitor and treat their patients more effectively.",
    icon: React.createElement(CgWorkAlt),
    date: "2017 - 2023",
  }
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Natiave",
  "Redux",
  "Next.js",
  "Angular.js",
  "Node.js",
  "Express",
  "Jest",
  "Enzyme",
  "React Testing Library",
  "Storybook",
  "Tailwind",
  "Material",
  "KendoReact",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Framer Motion",
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
] as const;