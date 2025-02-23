import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  // TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Founder & Digital Marketer",
    companyName: "Code Media",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2022 - present",
    points: [
      "Founded and managed a digital marketing agency specializing in content creation, branding, and web development.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Freelance Software Engineer",
    companyName: "",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "March 2022 - present",
    points: [
      "Designed and developed multiple full-stack applications, including e-commerce platforms, school websites, and booking systems.",
      "Specialized in React.js, Node.js, MongoDB, and Firebase for scalable and secure applications.",
      "Built and deployed mobile apps using React Native and Flutter, ensuring smooth user experiences.",
      "Worked with numerous clients worldwide, delivering high-quality solutions and earning a strong reputation in the industry.",
    ],
  },
  {
    title: "Lead Developer",
    companyName: "Hospital Booking system",
    icon: shopify,
    iconBg: "#383E56",
    date: "Sep 2024 - Dec 2024",
    points: [
      "Developed a hospital appointment booking system using Node.js, MongoDB/PouchDB, and WebSockets.",
      "Implemented real-time updates and seamless patient-doctor interactions for efficient scheduling.      ",
      "Designed an intuitive and responsive UI to enhance the user experience.      ",
      "Ensured data security and HIPAA compliance for patient records.      ",
    ],
  },
  {
    title: "Project Manager",
    companyName: "servix",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "May 2023 - Jan 2024",
    points: [
      "Created an innovative gig marketplace where users can post tasks and bid on jobs.",
      "Built the app using a robust tech stack, integrating Firebase for backend services.",
      "Designed a seamless registration and bidding system to enhance user engagement.",
      "Managed the project from concept to launch, focusing on scalability and usability.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I am extremely pleased with the user-friendly web application provided by codemedia. Their software services are top-notch, and the customer service is truly reliable. I highly recommend codemedia for anyone looking for a company that delivers good service.",
    name: "Christian Howie",
    designation: "",
    company: "Adray",
    // image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "codemedia has really helped our business. Definitely worth the investment. Thank you!",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I am beyond impressed with the exceptional service provided by codemedia. Their software solutions are innovative, reliable, and user-friendly. As a tech enthusiast, I appreciate their commitment to quality and customer satisfaction.      ",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Servix",
    description:
      "Servix is a gig marketplace that connects users with freelancers, allowing task posting and bidding in real-time. Built with Firebase for a secure and scalable backend, it features seamless registration, a dynamic bidding system, and an intuitive user interface, ensuring smooth and efficient task management.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "AWS",
        color: "green-text-gradient",
      },
      {
        name: "next.js",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
  },
  {
    name: "Medicare",
    description:
      "Medicare is a hospital appointment system built with Node.js, MongoDB/PouchDB, and WebSockets for real-time scheduling. It offers seamless patient-doctor interactions, a responsive user interface, and ensures data security with HIPAA compliance.",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Restapi",
        color: "pink-text-gradient",
      },
      {
        name: "WebSockets",
        color: "yellow-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/Himansha2001/Medicare-Appoinment-system.git",
  },
  {
    name: "City pulse",
    description:
      "A Flutter-based community app for reporting local incidents, power cuts, and lost & found items. Powered by Firebase for real-time updates, it features a user-friendly interface and security measures to ensure accurate reporting and community trust.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "dart",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
