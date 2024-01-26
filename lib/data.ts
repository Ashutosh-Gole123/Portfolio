import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ChatApp from "@/public/ChatApp.png";
import Dashboard from "@/public/MSCS_Dashboard.png";
import E_Commerce from "@/public/E-commerce Dashboard.png";
import Survey from "@/public/Survey.png";

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
    title: "Web Developer",
    location: "VIIT College",
    description:
      "I worked as a volunteer in my college for AISA commitee where we develope one website for event of Data Science Symposium.",
    icon: React.createElement(LuGraduationCap),
    date: "March, 2023",
  },
  {
    title: "Full Stack Developer Intern",
    location: "Digilytics Systems LLP",
    description:
      "I have worked as an full stack developer where I cover all my concepts of React and use my skills for industry projects.",
    icon: React.createElement(FaReact),
    date: "Feb 2023 - Sep 2023",
  },
  {
    title: "Machine Learning Intern",
    location: "Digilytics Systems LLP",
    description:
      "As the company like my work they wanted to keep me connected with them so we extended internship for 3 months where I have worked on machine learning concepts and as well as help in React projects of newcomer.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2023 - Nov 2023",
  },
] as const;

export const projectsData = [
  {
    title: "E-Commerce Dashboard",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["HTMl","CSS","Javascript"],
    imageUrl: E_Commerce,
  },
  {
    title: "MSCS Dashboard",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React","Python","Visualization","Data analytics","Firebase Hosting"],
    imageUrl: Dashboard,
  },
  
  {
    title: "ChatApp",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Firebase", "Material UI", "Redux", "Google Auth","Firebase Hosting"],
    imageUrl: ChatApp,
  },

  {
    title: "Survey",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React","Visualization","Google Auth","Firebase","Firebase Hosting"],
    imageUrl: Survey,
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
  "Flask",
  "Figma",
  "Android App Development",
  "MongoDB",
  "Firebase",
  "MySql",
  "Bootstrap (Framework)",
  "Express",
  "Data Analytics",
  "Python",
  "Django",
  "Framer Motion",
] as const;
