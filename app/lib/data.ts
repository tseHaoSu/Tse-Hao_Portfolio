import { title } from "process";
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
  siStandardresume
} from "simple-icons";

import linkedin from "@/app/assets/icons/linkedin.svg";

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
    title: "Hiking",
    emoji: "🥾",
    left: "35%",
    top: "40%",
  },
  {
    title: "Coffee",
    emoji: "☕",
    left: "70%",
    top: "45%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "5%",
    top: "65%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "45%",
    top: "70%",
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
    href: "https://www.linkedin.com/in/your-profile",
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
