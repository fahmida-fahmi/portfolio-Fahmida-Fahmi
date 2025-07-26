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
  python,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  threejs,
  munnaReview,
  shimaReview,
  emilReview,
  msOffice,
  allMuslimLiving,
  dunlin,
  bistroBoss,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "resume",
    title: "My Resume",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "Mobile App Developer",
    icon: mobile,
  },
  {
    title: "Video Editor",
    icon: backend,
  },
  {
    title: "Graphics Designer",
    icon: creator,
  },
  {
    title: "MS Office",
    icon: msOffice,
  },
  {
    title: "SQA Engineer",
    icon: backend,
  },
  {
    title: "DevOps Engineer",
    icon: backend,
  },
  {
    title: "Data Analyst",
    icon: backend,
  },
];

const technologies = [
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
    name: "Python",
    icon: python,
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

const experiences = [
  {
    title: "Graphic Designer",
    company_name: "Freelance",
    icon: creator,
    iconBg: "#383E56",
    date: "Dec 2020 - Sep 2022",
    points: [
      "1. Enhanced client satisfaction by 25% through captivating marketing materials.",
      "2. Improved website aesthetics by 30%, elevating online presence.",
      "3. Drove 20% increase in client success rates through user-centric websites.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Full stack Developer",
    company_name: "Self Employed",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Mar 2025 - Present",
    points: [
      "Developing and maintaining web applications using React.js, Next.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial: `The work you have done based on my limited contents is excellent. It's still far away to provide my feedback.`,
    name: "Mahmudul Hasan",
    designation: "CO-Founder & CEO",
    company: "Dunlin Next Era",
    image: munnaReview,
  },
  {
    testimonial:"Excellent service, very professional and reliable — highly recommended from Bangladesh!",
    name: "Enam Rahman Emil",
    designation: "Owner",
    company: "Suma Agro Farm",
    image: emilReview,  
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Fahmida does.",
    name: "Nazmun Nahar",
    designation: "Technical Project Manager",
    company: "ATPCO",
    image: shimaReview,
  },
];

const projects = [
  {
    name: "All Muslim Living",
    liveLink: "https://all-muslim-living.onrender.com/",
    description:
      "All Muslim Living is a secure matrimony platform helping Muslims worldwide find life partners with attractive featuring, privacy, ease and many more.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: allMuslimLiving,
    source_code_link: "https://github.com/fahmida-fahmi/All-muslim-living/",
  },
  {
    name: "Dunlin Nextera Ltd",
    liveLink: "https://dunlin-nextera-ltd.onrender.com/",
    description:
      "Dunlin is a fintech hub platform offering secure and easy-to-use digital financial services to simplify everyday money management.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nestjs",
        color: "green-text-gradient",
      },
      {
        name: "Framer-motion",
        color: "pink-text-gradient",
      },
    ],
    image: dunlin,
    source_code_link: "https://github.com/fahmida-fahmi/dunlin_nextera_ltd",
  },
  {
    name: "Bistro Boss Restaurant",
    liveLink: "https://bistro-boss-restaurant-a91ab.web.app/",
    description:
      "Bistro Boss is a restaurant platform with a charity focus, offering easy menu management and online ordering to support community causes.",
    tags: [
      {
        name: "React&nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "DaisyUI",
        color: "pink-text-gradient",
      },
    ],
    image: bistroBoss,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
