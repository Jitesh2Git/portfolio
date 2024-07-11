import { carepusle, carHub, gshop, horizon, noteease, shoppe } from "@/public";

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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projects = [
  {
    title: "Carepulse",
    description:
      "CarePulse is a doctor appointment booking platform built with Next.js and Tailwind CSS, featuring SMS reminders via Twilio, an admin dashboard for appointment management, and using Shadcn UI components for its interface. It ensures secure data handling with Appwrite and proactive error monitoring through Sentry integration.",
    tags: [
      "Next.js",
      "Typescript",
      "Tailwind CSS",
      "Appwrite",
      "Twilio",
      "Sentry",
      "Shadcn UI",
    ],
    imageUrl: carepusle,
    href: "https://carepulse.netlify.app/",
  },
  {
    title: "Horizon",
    description:
      "Horizon is a sleek news website with a dynamic interface built with React and Tailwind CSS. It features light/dark modes, article favoriting, keyword searches, category filters, and pagination. Powered by Redux Toolkit and GNews API, it offers a fast, personalized reading experience.",
    tags: ["React", "Tailwind CSS", "GNews API", "Redux Toolkit"],
    imageUrl: horizon,
    href: "https://horizon-news.netlify.app/",
  },
  {
    title: "NoteEase",
    description:
      "NoteEase is a MERN stack app with features for adding, editing, deleting, pinning, and searching notes, plus user authentication for account creation, login, and user deletion.",
    tags: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB", "Express.js"],
    imageUrl: noteease,
    href: "https://noteease.netlify.app",
  },
  {
    title: "GShop",
    description:
      "GShop is a top-notch e-commerce site made just for gamers. It offers a smooth, immersive experience. Add your favorites to your cart, and customize quantities.",
    tags: ["Next.js", "JavaScript", "Tailwind CSS", "Sanity"],
    imageUrl: gshop,
    href: "https://gshop-e.netlify.app",
  },
  {
    title: "Shoppe",
    description:
      "Shoppe is an ecommerce website where you can buy different products. Sanity CMS for easy content management and add to cart functionality.",
    tags: ["Next.js", "JavaScript", "CSS", "Sanity"],
    imageUrl: shoppe,
    href: "https://shoppe-r.netlify.app/",
  },
  {
    title: "CarHub",
    description:
      "Cars Hub is a car rental website developed in React, Next.js, TypeScript, TailwindCSS for styling  and provides filtering options like car name, model, etc.",
    tags: ["Next.js", "Typescript", "Tailwind CSS", "Rapid API"],
    imageUrl: carHub,
    href: "https://car-col.netlify.app/",
  },
] as const;

export const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "MongoDB",
  "Redux Tooklit",
  "Sanity",
  "GitHub",
] as const;
