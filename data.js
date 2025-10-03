// data.js
import { FaCode, FaPaintBrush,  } from "react-icons/fa";
import { TbPrompt } from "react-icons/tb";

export const skills = [
  { name: "HTML", percent: 95 },
  { name: "CSS", percent: 85 },
  { name: "BootStrap", percent: 90 },
  { name: "Tailwind CSS", percent: 80 },
  { name: "JavaScript", percent: 65 },
  { name: "React JS", percent: 70 },
  { name: "Node JS", percent: 65 },
  { name: "Express JS", percent: 85 },
  { name: "C Language", percent: 70 },
  { name: "C++", percent: 80 },
  { name: "MongoDB", percent: 85 },
  { name: "My SQL", percent: 80 },
  { name: "Adobe Photoshop", percent: 85 },
  { name: "Canva", percent: 95 },
];

export const rolesData = [
  {
    title: "Web Developer",
    icon: FaCode,
    description: "Building responsive, modern, and performant web applications using React, JavaScript, and Tailwind CSS.",
    color: "text-blue-500",
    percent: 70, // 👈 NEW: Skill level for the role
  },
  {
    title: "Graphic Designer",
    icon: FaPaintBrush,
    description: "Designing intuitive and visually appealing user interfaces focusing on accessibility and user experience.",
    color: "text-purple-500",
    percent: 85, // 👈 NEW: Skill level for the role
  },
  {
    title: "Prompt Engineer",
    icon: TbPrompt,
    description: "I will give the best prompt for the work I need to done by AI.",
    color: "text-yellow-500",
    percent: 80, // 👈 NEW: Skill level for the role
  },
];

export const projects = [
  { title: "Portfolio Website", desc: "A personal portfolio built with React and Tailwind CSS.", image: "./test.png" },
  
];

export const codeLines = [
  "console.log('Hello, Akram');",
  "const x = 10;",
  "function greet() { return 'Hi!'; }",
  "const portfolio = ['HTML', 'CSS', 'JS', 'React'];"
];