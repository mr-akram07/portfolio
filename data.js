// data.js
import { FaCode, FaPaintBrush,  } from "react-icons/fa";
import { TbPrompt } from "react-icons/tb";

export const expertise = [
  { name: "HTML", percent: 95, tags: ["Structure", "Hypertext"], },
  { name: "CSS", percent: 85, tags: ["Styling", "Design Website"], },
  { name: "BootStrap", percent: 90, tags: ["Framework"], },
  { name: "Tailwind CSS", percent: 75, tags: ["Designing", "CSS", "Framework"], },
  { name: "JavaScript", percent: 65, tags: ["Script", "Programming" ], },
  { name: "React JS", percent: 70, tags: ["Frontend", "Website Building"], },
  { name: "Node JS", percent: 65, tags: ["Backend", "Server"], },
  { name: "Express JS", percent: 75, tags: ["Framework of Node"], },
  { name: "C Language", percent: 60, tags: ["Programming Language", "App Dev", "Games Dev"], },
  { name: "C++", percent: 65, tags: ["Updated C Language", "OOP's", "Fast"], },
  { name: "MongoDB", percent: 85, tags: ["Database", "JSON Format", "Easy than SQL"], },
  { name: "My SQL", percent: 80, tags: ["Database", "Table Format"], },
  { name: "Adobe Photoshop", percent: 80, tags: ["Photo Editor", "Graphic Design", "Professional"], },
  { name: "Canva", percent: 90, tags: ["Graphic Design", "Templates"], },
];

export const skills = [
  {
    title: "Web Developer",
    icon: FaCode,
    description: "Building responsive, modern, and performant web applications using React, JavaScript, and Tailwind CSS.",
    color: "text-blue-500",
    percent: 75, // 👈 NEW: Skill level for the role
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
    percent: 70, // 👈 NEW: Skill level for the role
  },
];

export const projects = [
  { title: "Portfolio Website", link: "", desc: "A personal portfolio built with React and Tailwind CSS.", image: "./test.png", tags: ["Resume", "Branding"], },
  
];

export const codeLines = [
  "console.log('Hello, Akram');",
  "const x = 10;",
  "function greet() { return 'Hi!'; }",
  "const portfolio = ['HTML', 'CSS', 'JS', 'React'];"
];

export const designSamples = [
  { title: "Election Poster",  desc: "A Poster to promote the Election Compaign.", image: "./Poster.png", link: "./Poster.png",  tags: ["Banner", "Election Poster","New Year Poster"], },
  { title: "Photo Frame",  desc: "An image is edited for hold in a frame.", image: "./Teacher Day.png", link: "./Teacher Day.png",  tags: ["Frame", "Teacher's Day","Image"], },
  { title: "Shop Banner",  desc: "A banner for the shop recognition.", image: "./Banner.png", link: "./Banner.png",  tags: ["Shop Banner", "Poster"], },
  { title: "Admission Brochure",  desc: "An Admission Brochure used for all the details of the course.", image: "./Admission.png", link: "./Admission.png",  tags: ["Admission Card", "Brochure", "Designs"], },
  { title: "Visiting Card",  desc: "A visiting card with all the details of the company or shop.", image: "./Shop Card.png", link: "./Shop Card.png",  tags: ["Visiting Card", "Shop Details"], },
  { title: "Logo",  desc: "A logo for your own recognition.", image: "./Shop Logo.png", link: "./Shop Logo.png",  tags: ["Logo", "Designs", "Recognition"], },
  { title: "Wedding Card",  desc: "A wedding card for invitation.", image: "./Wedding.png", link: "./Wedding.png",  tags: ["Invitation", "Designs"], },
];

export const ResumeData = {
  summary: "Passionate web developer with experience in creating responsive, user-friendly websites using modern technologies. Skilled in React, JavaScript, and UI/UX design, aiming to deliver high-quality solutions and innovative projects.",
  education: [
    { degree: 'MERN Stack Development', institution: 'Hareetech Development Pvt. Ltd.', year: 'August 2025 - September 2025' },
    { degree: 'Bachelor in Computer Applications (BCA)', institution: 'Hiralal Ramniwas P. G. College', year: '2024 - Present' },
    { degree: 'Diploma in Computer Applications (DCA)', institution: 'Lucknow Computer & Technical Institute', year: '2023 - 2024' },
    { degree: 'Intermediate', institution: 'Hiralal Ramniwas Inter College', year: '2021 - 2023' },
    { degree: 'High School', institution: 'Hiralal Ramniwas Inter College', year: '2019 - 2021' },
  ],
  experience: [
    { role: 'Graphic Designer', company: 'Freelancer', year: 'April 2025 - Present' },
    { role: 'Front End Developer', company: 'Freelancer', year: 'October 2025 - Present' },
  ]
};
