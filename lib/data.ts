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
      "First project on HTML CSS and Javascript and make beutiful UI for E-commerce website.",
    tags: ["HTMl","CSS","Javascript"],
    imageUrl: E_Commerce,
    links: "https://github.com/Ashutosh-Gole123/Dashboard",
  },
  {
    title: "ChatApp",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Firebase", "Material UI", "Redux", "Google Auth","Firebase Hosting"],
    imageUrl: ChatApp,
    links: "https://chatproject-7cf17.web.app/",

  },
  {
    title: "MSCS Dashboard",
    description:
      "Hackathon where they provide some data and I need to manipulate the data and come with visualizations then make frontend for project.",
    tags: ["React","Python","Visualization","Data analytics","Firebase Hosting"],
    imageUrl: Dashboard,
    links: "http://dashboard-f7c00.web.app/",

  },
  
  

  {
    title: "Survey",
    description:
      "A web app similar like Google forms where we can make forms and publish it to take survey of the users and visualize that data.",
    tags: ["React","Visualization","Google Auth","Firebase","Firebase Hosting"],
    imageUrl: Survey,
    links: "https://sureway-17523.web.app/",

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
