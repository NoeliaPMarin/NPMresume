export type Project = {
  id: string
  title: string
  company?: string
  description: string
  role: string
  stack: string[]
  contributions: string[]
  highlights?: string[]
  status?: 'production' | 'in-development'
  link?: string
}

export const projects: Project[] = [
  {
    id: "external-training",
    title: "External Training Records",
    company: "TES Develop",
    description: "An end-to-end feature for managing external training records within TES Develop.",
    role: "Software Engineer",
    stack: [
      "PHP",
      "JavaScript",
      "Mustache",
      "SQL",
      "Moodle/Totara",
      "AJAX",
    ],
    contributions: [
      "Add, edit and delete training records",
      "Modal-based UI based on UX designs",
      "PHP backend and Moodle web services",
      "AJAX interactions and dynamic rendering",
      "Relational database schema",
      "Automated Behat and PHPUnit tests",
    ],
    highlights: [
      "End-to-end ownership",
      "UX → implementation → QA → production",
      "Production release",
    ],
    status: "production",
  },

//   {
//     id: "safeguarding-widget",
//     title: "Safeguarding Courses Widget",
//     company: "TES Develop × Safeguarding Company",
//     description:
//       "A reusable frontend widget that surfaces TES Develop courses inside an external product.",
//     role: "Software Engineer",
//     stack: [
//       "StencilJS",
//       "JavaScript",
//       "HTML",
//       "CSS",
//       "REST APIs",
//       "JSON",
//     ],
//     contributions: [
//       "Reusable web component",
//       "REST API integration",
//       "Dynamic course rendering",
//       "Cross-product integration",
//       "Responsive UI",
//       "Shared design-system implementation",
//     ],
//     highlights: [
//       "Reusable across multiple TES applications",
//       "External product integration",
//       "Cross-functional collaboration",
//     ],
//     status: "production",
//   },

//   {
//     id: "npm-resume",
//     title: "Interactive Developer Portfolio",
//     company: "Self-initiated",
//     description:
//       "A terminal-inspired portfolio built around my initials — NPM — turning familiar npm commands into an interactive CV experience.",
//     role: "Designer & Developer",
//     stack: [
//       "React",
//       "TypeScript",
//       "Tailwind CSS",
//       "Vite",
//     ],
//     contributions: [
//         "Interactive command system",   
//         "Reusable React components",
//         "Responsive terminal interface",
//         "Structured CV data",
//         "Accessible keyboard interactions",
//     ],
//     highlights: [
//       "Reusable across multiple TES applications",
//       "External product integration",
//       "Cross-functional collaboration",
//     ],
//     status: "production",
//   },
];