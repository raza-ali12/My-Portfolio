import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  php,
  html,
  css,
  reactjs,
  aws,
  wordpress,
  shopify,
  woocommerce,
  graston,
  git,
  link,
  figma,
  devsinc,
  quicklyhire,
  Indianapolis,
  netroots,
  Killman,
  threejs,
  gravityform,
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },

  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Plugin Development",
    icon: mobile,
  },
  {
    title: "Theme Development",
    icon: creator,
  },
];

const technologies = [
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "WordPress",
    icon: wordpress,
  },
  {
    name: "WooCommerce",
    icon: woocommerce,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Gravity Forms",
    icon: gravityform,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Shopify",
    icon: shopify,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Lead Developer",
    company_name: "Quickly Hire",
    icon: quicklyhire,
    iconBg: "#383E56",
    date: "April 2023 - Present",
    points: [
      "Lead a dynamic team of 6 developers, ensuring that projects are executed efficiently and meet the company's standards.",
      "Conduct regular team meetings to review project status, address challenges, and ensure timely delivery.",
      "Collaborate with cross-functional teams to understand project requirements and set development goals.",
      "Actively participate in hands-on development tasks, leveraging expertise in modern software development practices and tools.",
      "Drive the adoption of best practices in code quality, security, and maintainability.",
      "Work closely with product managers, designers, and other stakeholders to understand and refine project requirements.",
    ],
  },
  {
    title: "Senior WordPress Developer",
    company_name: "Devsinc",
    icon: devsinc,
    iconBg: "#383E56",
    date: "Nov 2021 - April 2023",
    points: [
      "Successfully developed and launched multiple WordPress websites from scratch, adhering to client requirements and industry best practices.",
      "Utilized WordPress themes and frameworks to create visually appealing and user-friendly websites.",
      "Customized WordPress themes and plugins to meet specific client needs, including design modifications, functionality enhancements, and performance optimizations.",
      "Extensive experience in integrating and configuring various WordPress plugins to enhance website functionality, such as SEO optimization, security, caching, and social media integration.",
      "Communicated project progress, challenges, and solutions to clients in a clear and professional manner, maintaining strong client relationships.",
    ],
  },
  {
    title: "WordPress Developer",
    company_name: "Netroots Technologies",
    icon: netroots,
    iconBg: "#E6DEDD",
    date: "Sept 2020 - Nov 2021",
    points: [
      "Spearheaded the development and customization of WordPress, Joomla, and Drupal CMS solutions to meet specific client requirements, resulting in improved website functionality and user engagement.",
      "Successfully collaborated with UI/UX designers, front-end developers, and content creators to integrate design elements into WordPress, Joomla, and Drupal platforms, ensuring a cohesive user experience.",
      "Implemented robust security measures within CMS platforms, safeguarding against potential vulnerabilities and ensuring data integrity on WordPress, Joomla, and Drupal websites.",
      "Utilized PHP to implement custom features and functionalities within WordPress.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Raza proved me wrong.",
    name: "Karen",
    designation: "CFO",
    company: "Quickly Hire",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Raza does.",
    name: "Kolby",
    designation: "CTO",
    company: "Quickly Hire",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Raza optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Carl",
    designation: "CTO",
    company: "Camna LLC",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Indianapolis Zoo",
    description:
      "I had the privilege of developing the Indianapolis Zoo's website, a project that involved a range of skills and technologies to provide a seamless online experience for visitors and animal enthusiasts.", 
    tags: [
      {
        name: "theme-development",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "blue-text-gradient",
      },
      {
        name: "wp-rocket",
        color: "green-text-gradient",
      },
      {
        name: "wpengine",
        color: "pink-text-gradient",
      },
      {
        name: "acf",
        color: "green-text-gradient",
      },
    ],
    image: Indianapolis,
    source_code_link: "https://www.indianapoliszoo.com/",
  },
  {
    name: "Killman Diagnostic",
    description:
      "I am proud to present my work on the Kilmanndiagnostics website, a project that encompassed a comprehensive overhaul and enhancement of the online platform. My role was to revamp this website",
    tags: [
      {
        name: "theme-development",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "learndash",
        color: "pink-text-gradient",
      },
      {
        name: "cloudflare",
        color: "blue-text-gradient",
      },
      {
        name: "acf",
        color: "pink-text-gradient",
      },
      {
        name: "wpengine",
        color: "green-text-gradient",
      },
    ],
    image: Killman,
    source_code_link: "https://kilmanndiagnostics.com/",
  },
  {
    name: "Grastn Technique",
    description:
      "I am excited to present my work on the Graston Technique website, a project that demanded a keen eye for design and seamless functionality. My role involved a comprehensive overhaul using WordPress",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "wordpress",
        color: "green-text-gradient",
      },
      {
        name: "shopify",
        color: "pink-text-gradient",
      },
      {
        name: "divi",
        color: "blue-text-gradient",
      },
      {
        name: "wpenigne",
        color: "green-text-gradient",
      },
    ],
    image: graston,
    source_code_link: "https://grastontechnique.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
