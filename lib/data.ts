import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import portfolioImg from "@/public/portfolio.png";
import selaskiImg from "@/public/selaski.png";
import myMetalStructuresImg from "@/public/MyMetalStructures.png";

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
    title: "Graduated University",
    location: "Zulia, Venezuela",
    description:
      "I graduated as a Computer Enginner after 4 years of University. I immediately found a job as a front-end developer through my internship.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Full-Stack Developer",
    location: "Zulia, Venezuela",
    description:
      "I worked as a full-stack for 2 years. Developed Web Applications with React, Node.js and Microsoft SQL Server deployed to Azure alongside Azure functions, created Python Automations and Developed Mobile Apps with React Native.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Chile (Remote)",
    description:
      "I worked as a full-stack and web crawling developer for a year. Developed Webpages with Angular, Typescript, TailwindCSS, Node.js and MySQL deployed to AWS, also automated web scrapping with Puppeteer.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Zulia, Venezuela",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind and MongoDB as well as Flutter, React Native or Swift for Mobile Applications. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Portfolio",
    description:
      "The very portfolio you're on right now! I developed this on my free time over a week's time",
    tags: [
      "React",
      "Next.js",
      "Framer Motion",
      "Tailwind",
      "TypeScript",
      "React Email",
      "Resend",
      "Vercel",
    ],
    imageUrl: portfolioImg,
  },
  {
    title: "Selaski",
    description:
      "Foreign Commerce Software. I was a full-stack developer as well as a the Web Crawling developer.",
    tags: [
      "Angular",
      "TypeScript",
      "Node.js",
      "Tailwind",
      "Puppeteer",
      "MySQL",
      "AWS",
    ],
    imageUrl: selaskiImg,
  },
  {
    title: "My Metal Structures",
    description:
      "Web Store for a Metal Buildings Design and Installation company in the US. Built from scratch and then passed down to their tech team",
    tags: ["React", "Node.js", "Microsoft SQL Server", "Azure"],
    imageUrl: myMetalStructuresImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "SQL",
  "Python",
  "Framer Motion",
  "RPA",
  "Angular",
  "React Native",
  "Azure",
  "AWS",
] as const;
