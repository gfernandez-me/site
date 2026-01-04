import { Github, Linkedin, Briefcase } from "lucide-react";

import LogoJavascript from "/public/images/logos/icon-javascript.svg";
import LogoTypescript from "/public/images/logos/icon-typescript.svg";
import LogoReact from "/public/images/logos/icon-react.svg";
import LogoNextjs from "/public/images/logos/icon-nextjs.svg";
import LogoNodejs from "/public/images/logos/icon-nodejs.svg";
import LogoExpress from "/public/images/logos/icon-express.svg";
import LogoExpressLight from "/public/images/logos/icon-express-light.svg";
import LogoNest from "/public/images/logos/icon-nest.svg";
import LogoSocket from "/public/images/logos/icon-socket.svg";
import LogoSocketLight from "/public/images/logos/icon-socket-light.svg";
import LogoPostgreSQL from "/public/images/logos/icon-postgresql.svg";
import LogoMongoDB from "/public/images/logos/icon-mongodb.svg";
import LogoRemix from "/public/images/logos/icon-remix.svg";
import LogoTailwindcss from "/public/images/logos/icon-tailwindcss.svg";
import LogoWordpress from "/public/images/logos/icon-wordpress.svg";
import LogoShopify from "/public/images/logos/icon-shopify.svg";
import LogoPrisma from "/public/images/logos/icon-prisma.svg";
import LogoPrismaLight from "/public/images/logos/icon-prisma-light.svg";
import LogoMySQL from "/public/images/logos/icon-mysql.svg";
import LogoMySQLLight from "/public/images/logos/icon-mysql-light.svg";
import LogoAWS from "/public/images/logos/icon-aws.svg";
import LogoAWSLight from "/public/images/logos/icon-aws-light.svg";
import LogoVuejs from "/public/images/logos/icon-vuejs.svg";

import ProjectNextERP from "/public/images/project-nexterp.png";
import ProjectSadieNewton from "/public/images/project-sadie.png";
import ProjectH2Tech from "/public/images/project-h2tech.png";
import ProjectValorDistributions from "/public/images/project-valor.png";
import ProjectStlthVape from "/public/images/project-stlth.png";
import AvatarHensley from "/public/images/avatar-dummy.svg";
import AvatarSadie from "/public/images/avatar-sadie.svg";

import { ProjectDetails, TechDetails, TestimonialDetails } from "@/lib/types";

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS = [
  { icon: Linkedin, url: "https://www.linkedin.com/in/gabriel-m-fernandez/" },
  { icon: Github, url: "https://github.com/gfernandez-me" },
  { icon: Briefcase, url: "https://www.upwork.com/freelancers/~019fa4c72966b8eb13" },
];

export const TECHNOLOGIES: TechDetails[] = [
  { label: "TypeScript", logo: LogoTypescript, url: "https://www.typescriptlang.org/" },
  { label: "JavaScript", logo: LogoJavascript, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { label: "React", logo: LogoReact, url: "https://react.dev/" },
  { label: "Next.js", logo: LogoNextjs, url: "https://nextjs.org/" },
  { label: "Node.js", logo: LogoNodejs, url: "https://nodejs.org/en" },
  { label: "NestJS", logo: LogoNest, url: "https://nestjs.com/" },
  { label: "Express", logo: LogoExpress, darkModeLogo: LogoExpressLight, url: "https://expressjs.com/" },
  { label: "Remix", logo: LogoRemix, url: "https://remix.run/" },
  { label: "Socket.IO", logo: LogoSocket, darkModeLogo: LogoSocketLight, url: "https://socket.io/" },
  { label: "PostgreSQL", logo: LogoPostgreSQL, url: "https://www.postgresql.org/" },
  { label: "MongoDB", logo: LogoMongoDB, url: "https://www.mongodb.com/" },
  { label: "MySQL", logo: LogoMySQL, darkModeLogo: LogoMySQLLight, url: "https://www.mysql.com/" },
  { label: "Prisma", logo: LogoPrisma, darkModeLogo: LogoPrismaLight, url: "https://www.prisma.io/" },
  { label: "Tailwind CSS", logo: LogoTailwindcss, url: "https://tailwindcss.com/" },
  { label: "AWS", logo: LogoAWS, darkModeLogo: LogoAWSLight, url: "https://aws.amazon.com/" },
  { label: "Shopify", logo: LogoShopify, url: "https://www.shopify.com/" },
  { label: "Vue.js", logo: LogoVuejs, url: "https://vuejs.org/" },

  // Keep WordPress for freelance, but keep it last so it doesn't distract for TS/Node roles
  { label: "WordPress", logo: LogoWordpress, url: "https://wordpress.org/" },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: "NextERP",
    description:
      "A fully optimized ERP system for inventory, sales, and assembly workflows. Includes an API layer integrating with Dear Inventory and Shopify, with strong performance on PostgreSQL and a responsive UI designed for fast internal operations.",
    url: "https://nexterp.ca/",
    previewImage: ProjectNextERP,
    technologies: [
      "Vue.js",
      "PostgreSQL",
      "REST API",
      "Redis",
      "Shopify Integration",
      "Inventory Management",
    ],
  },
  {
    name: "Valor Distributions",
    description:
      "Led development of a Shopify storefront and internal tools focused on reliability and speed. Built integrations and backend services around Shopify APIs and webhooks, and improved operational workflows with background jobs, retries, and clean monitoring so the team can ship safely and support production with confidence.",
    url: "https://valordistributions.com/",
    previewImage: ProjectValorDistributions,
    technologies: [
      "Shopify",
      "Hydrogen / Remix",
      "React",
      "Node.js",
      "APIs & Webhooks",
      "Queues & Background Jobs",
    ],
  },
  {
    name: "Stlth Vape Store",
    description:
      "E-commerce storefront work focused on performance and maintainability. Delivered UI improvements, integrations, and operational fixes around Shopify APIs and webhooks, with attention to safe releases, clean code, and production stability.",
    url: "https://stlthvape.com/",
    previewImage: ProjectStlthVape,
    technologies: [
      "Shopify",
      "React",
      "Node.js",
      "API Integration",
      "Webhooks",
      "Performance",
    ],
  },
  {
    name: "H2Tech",
    description:
      "Developed the official website for a desktop and laptop repair company. Built on WordPress with customized theme work (HTML/CSS/JS), mobile responsiveness, and SEO improvements for better visibility.",
    url: "https://h2tech.com.br/",
    previewImage: ProjectH2Tech,
    technologies: ["WordPress", "Google Analytics", "Custom WordPress Plugins"],
  },
  {
    name: "Sadie Newton",
    description:
      "Built a customized WordPress website for an author, including responsive frontend work, deployment with HTTPS, and a clean structure to showcase books and content professionally.",
    url: "https://thesadienewton.com/",
    previewImage: ProjectSadieNewton,
    technologies: [
      "WordPress",
      "Google Analytics",
      "Custom WordPress Plugins",
      "Custom WordPress Theme",
    ],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: "Hensley H.",
    personAvatar: AvatarHensley,
    title: "CEO & Founder - h2tech.com.br",
    testimonial:
      "I hired Gabriel Fernandez to develop my company's website, and the result was simply amazing! He did all the work following Google's guidelines, which ensured the website reached the top position in search results. Gabriel demonstrates highly advanced knowledge and impressive dedication. Throughout the process, he always focused on my specific needs, making the website perfect for my business. In one of the meetings, he mentioned having over 15 years of experience in the field, which is evident in the quality of his work. I highly recommend Gabriel to anyone looking for a highly skilled and committed programmer!",
  },
  {
    personName: "Sadie Newton",
    personAvatar: AvatarSadie,
    title: "Author - thesadienewton.com",
    testimonial:
      "Working with Gabriel was an absolute game-changer for my author website! He created a stunning, user-friendly site on WordPress that beautifully showcases my books. The customizations they made to the premium layout were seamless and perfectly tailored to my needs. His expertise with plugins like ACF, Yoast SEO, and Wordfence ensured my site is optimized, secure, and performs flawlessly. I couldn't be happier with the result—it's professional, engaging, and exactly what I envisioned. Highly recommend!",
  },
];
