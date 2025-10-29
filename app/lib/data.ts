import {
  siJavascript,
  siHtml5,
  siReact,
  siCsswizardry,
  siTypescript,
  siNextdotjs,
  siTailwindcss,
  siGithub,
  siPython,
  siOpenjdk,
  siVuedotjs,
  siNodedotjs,
  siMysql,
  siPostgresql,
  siMongodb,
  siLinkerd,
  siInstagram,
  siGmail,
  siStandardresume,
} from "simple-icons";

import linkedin from "@/app/assets/icons/linkedin.svg";

import stillskilled from "@/app/assets/images/stillskilled.png";
import miroClone from "@/app/assets/images/miro.png";
import bugspot from "@/app/assets/images/bugspot.png";

export const hobbies = [
  {
    title: "Photography",
    emoji: "📷",
    left: "5%",
    top: "5%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "50%",
    top: "5%",
  },
  {
    title: "Tennis",
    emoji: "🎾",
    left: "75%",
    top: "8%",
  },
  {
    title: "Movies",
    emoji: "🎬",
    left: "10%",
    top: "25%",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    left: "35%",
    top: "28%",
  },
  {
    title: "Basketball",
    emoji: "🏀",
    left: "65%",
    top: "30%",
  },
  {
    title: "Swimming",
    emoji: "🏊",
    left: "15%",
    top: "45%",
  },
  {
    title: "Coffee",
    emoji: "☕",
    left: "45%",
    top: "48%",
  },
  {
    title: "Cooking",
    emoji: "🍳",
    left: "70%",
    top: "52%",
  },
  {
    title: "Jogging",
    emoji: "🏃",
    left: "8%",
    top: "65%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "38%",
    top: "68%",
  },
  {
    title: "Beach",
    emoji: "🏖️",
    left: "68%",
    top: "72%",
  },
  {
    title: "Guitar",
    emoji: "🎸",
    left: "25%",
    top: "82%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "55%",
    top: "85%",
  },
  {
    title: "Picnic",
    emoji: "🧺",
    left: "82%",
    top: "88%",
  },
];

export const toolBoxItems = [
  {
    title: "JavaScript",
    icon: siJavascript,
    customColor: false,
  },
  {
    title: "HTML5",
    icon: siHtml5,
    customColor: false,
  },
  {
    title: "React",
    icon: siReact,
    customColor: false,
  },
  {
    title: "CSS3",
    icon: siCsswizardry,
    customColor: false,
  },
  {
    title: "TypeScript",
    icon: siTypescript,
    customColor: false,
  },
  {
    title: "Next.js",
    icon: siNextdotjs,
    customColor: true,
  },
  {
    title: "Tailwind CSS",
    icon: siTailwindcss,
    customColor: false,
  },
  {
    title: "GitHub",
    icon: siGithub,
    customColor: true,
  },
  {
    title: "Python",
    icon: siPython,
    customColor: false,
  },
  {
    title: "Java",
    icon: siOpenjdk,
    customColor: true,
  },
  {
    title: "Vue.js",
    icon: siVuedotjs,
    customColor: false,
  },
  {
    title: "Node.js",
    icon: siNodedotjs,
    customColor: false,
  },
  {
    title: "MySQL",
    icon: siMysql,
    customColor: false,
  },
  {
    title: "PostgreSQL",
    icon: siPostgresql,
    customColor: false,
  },
  {
    title: "MongoDB",
    icon: siMongodb,
    customColor: false,
  },
];

export const footerLinks = [
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/tsehaosu",
    icon: linkedin,
  },
  {
    title: "Github",
    href: "https://github.com/tseHaoSu",
    icon: siGithub,
  },
  {
    title: "Resume",
    href: "/Tse_Hao_Su_Eastin_Resume.pdf",
    download: "Tse_Hao_Su_Eastin_Resume.pdf",
    icon: siStandardresume,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/eastin.su/",
    icon: siInstagram,
  },
  {
    title: "Email",
    href: "mailto:tsehaosu@gmail.com",
    icon: siGmail,
  },
];

export const portfolioProjects = [
  {
    company: "Personal Project",
    year: "2025",
    title: "StillSkilled - Gamified Learning Platform",
    results: [
      { title: "Built search for 1,000+ jobs across Australia" },
      { title: "Integrated LLaMA AI for resume building" },
      { title: "Deployed with Duolingo-style gamification" },
    ],
    link: "https://www.still-skilled.org/",
    image: stillskilled,
  },
  {
    company: "Personal Project",
    year: "2025",
    title: "Miro Clone - Collaborative Whiteboard",
    results: [
      { title: "Real-time editing for 4 simultaneous users" },
      { title: "Infinite canvas with drawing tools" },
      { title: "Live cursor tracking and sync updates" },
    ],
    link: "https://miro-clone-nine-rosy.vercel.app/",
    image: miroClone,
  },
  {
    company: "Personal Project",
    year: "2025",
    title: "Bugspot - Bug Tracking Application",
    results: [
      { title: "Team collaboration and issue resolution" },
      { title: "Google OAuth authentication" },
      { title: "Comprehensive analytics dashboard" },
    ],
    link: "https://tsehaosu.com/bugspot",
    image: bugspot,
  },
];
