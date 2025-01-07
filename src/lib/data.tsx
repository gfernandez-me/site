import { Github, Linkedin, Briefcase, Figma } from "lucide-react";

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
import LogoPHP from "/public/images/logos/icon-php.svg";
import LogoLaravel from "/public/images/logos/icon-laravel.svg";
import LogoWordpress from "/public/images/logos/icon-wordpress.svg";
import LogoShopify from "/public/images/logos/icon-shopify.svg";
import LogoPrisma from "/public/images/logos/icon-prisma.svg";
import LogoMySQL from "/public/images/logos/icon-mysql.svg";
import LogoAWS from "/public/images/logos/icon-aws.svg";

import ProjectSadieNewton from "/public/images/project-sadie.png";
import ProjectH2Tech from "/public/images/project-h2tech.png";

import AvatarHensley from "/public/images/avatar-dummy.svg";

import { ProjectDetails, TechDetails, TestimonialDetails } from "@/lib/types";

export const NAV_LINKS = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/gabriel-m-fernandez/",
  },
  {
    icon: Github,
    url: "https://github.com/gfernandez-me",
  },
  {
    icon: Briefcase,
    url: "https://www.upwork.com/freelancers/~019fa4c72966b8eb13",
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: "Wordpress",
    logo: LogoWordpress,
    url: "https://wordpress.org/",
  },
  {
    label: "Shopify",
    logo: LogoShopify,
    url: "https://www.shopify.com/",
  },
  {
    label: "Javascript",
    logo: LogoJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "Typescript",
    logo: LogoTypescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    label: "React",
    logo: LogoReact,
    url: "https://react.dev/",
  },
  {
    label: "Next.js",
    logo: LogoNextjs,
    url: "https://nextjs.org/",
  },
  {
    label: "Node.js",
    logo: LogoNodejs,
    url: "https://nodejs.org/en",
  },
  {
    label: "Express.js",
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: "https://expressjs.com/",
  },
  {
    label: "Remix",
    logo: LogoRemix,
    url: "https://remix.run/",
  },
  {
    label: "Nest.js",
    logo: LogoNest,
    url: "https://nestjs.com/",
  },
  {
    label: "Socket.io",
    logo: LogoSocket,
    darkModeLogo: LogoSocketLight,
    url: "https://socket.io/",
  },
  {
    label: "MySQL",
    logo: LogoMySQL,
    url: "https://www.mysql.com/",
  },
  {
    label: "PostgreSQL",
    logo: LogoPostgreSQL,
    url: "https://www.postgresql.org/",
  },
  {
    label: "MongoDB",
    logo: LogoMongoDB,
    url: "https://www.mongodb.com/",
  },
  {
    label: "Tailwindcss",
    logo: LogoTailwindcss,
    url: "https://tailwindcss.com/",
  },
  {
    label: "PHP",
    logo: LogoPHP,
    url: "https://www.php.net/",
  },
  {
    label: "Laravel",
    logo: LogoLaravel,
    url: "https://laravel.com/",
  },
  {
    label: "Prisma",
    logo: LogoPrisma,
    url: "https://www.prisma.io/",
  },
  {
    label: "AWS Integrations",
    logo: LogoAWS,
    url: "https://aws.amazon.com/",
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: "H2Tech",
    description:
      "Developed the official website for a desktop and laptop repair company. The site was meticulously crafted using WordPress and the theme was customized with HTML, CSS, and JavaScript to ensure a seamless user experience. Emphasized web security to protect user data. Successfully deployed the site with a mobile-responsive design, ensuring accessibility across devices. Focused on enhancing user experience with intuitive navigation and implemented SEO strategies to improve visibility on Google search.",
    url: "https://h2tech.com.br/",
    previewImage: ProjectH2Tech,
    technologies: [
      "Wordpress",
      "PHP",
      "Google Analytics",
      "Custom Built Wordpress Plugins",
    ],
  },
  {
    name: "Sadie Newton",
    description:
      "Developed a fully customized WordPress website for an author, handling all aspects of the project lifecycle. Designed and implemented a responsive frontend, configured the backend, and ensured seamless deployment with HTTPS and robust security measures. Adapted and tailored a premium WordPress template to align with the client’s branding and needs. Delivered a polished, user-friendly platform that showcases the author’s work effectively and professionally.",
    url: "https://sadienewton.com/",
    previewImage: ProjectSadieNewton,
    technologies: [
      "Wordpress",
      "PHP",
      "Google Analytics",
      "Custom Built Wordpress Plugins",
      "Custom Built Wordpress Theme",
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
];
