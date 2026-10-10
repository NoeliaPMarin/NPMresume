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
  year: string
  link?: string
}

export const projects: Project[] = [
  {
    id: 'npm-resume',
    title: 'NPM Resume - Interactive Terminal Portfolio',
    description: 'An interactive portfolio presented as a command-line experience, built around the playful connection between my initials and npm.',
    role: 'Software Engineer & Designer',
    year: '2026',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'GitHub Pages'],
    contributions: [
      'Designed and built a command-driven portfolio interface with dedicated sections for experience, skills, projects, education and contact details.',
      'Created interactive commands, simulated package installation feedback and an accessible command history to make the experience feel terminal-native.',
      'Implemented classic and modern visual themes, with responsive layouts and reusable React components.',
      'Configured continuous deployment with GitHub Actions and published the site on a custom domain.',
    ],
    highlights: [
      'Interactive portfolio',
      'Custom command system',
      'Custom domain deployment',
    ],
    status: 'production',
    link: 'https://noeliaperezmarin.com',
  },

  {
    id: "external-training",
    title: 'TES Develop - External Training Records Feature',
    company: 'TES Develop',
    description: 'Designed and implemented a complete Moodle block to manage external training records.',
    role: 'Software Engineer',
    year: '2023',
    stack: [
      'PHP',
      'JavaScript (AMD)',
      'Mustache',
      'SQL',
      'Totara/Moodle',
    ],
    contributions: [
      'Built secure forms using the Moodle Form API and later refactored them into a modal-based UI aligned with UX designs.',
      'Developed web services for creating, retrieving and deleting records with AJAX-based interactions.',
      'Implemented dynamic rendering with Mustache templates to ensure reusable, maintainable UI components.',
      'Handled complex debugging scenarios, including timestamp and timezone issues, through careful backend-frontend alignment.',
      'Deployed the feature through staging to production following QA validation and stakeholder demos.',
    ],
    highlights: [
      'End-to-end ownership',
      'UX to implementation to QA to production',
      'Production release',
    ],
    status: "production",
  },

  {
    id: 'embedded-courses-widget',
    title: 'TES Develop × Safeguarding Company - Embedded Courses Widget',
    company: 'TES Develop × Safeguarding Company',
    description: 'Developed a reusable frontend widget embedded in an external product to surface relevant safeguarding courses.',
    role: 'Software Engineer',
    year: '2024',
    stack: ['StencilJS', 'JavaScript', 'HTML', 'CSS', 'APIs', 'JSON'],
    contributions: [
      'Consumed backend APIs, processed JSON data and rendered dynamic course content including name, description, image and CTA links.',
      'Focused on cross-product integration, enabling users to discover TES Develop training from another platform.',
      'Collaborated with the Tech Lead, QA, Product Owner and external stakeholders to align technical implementation with business goals.',
      'Designed the widget to be scalable and reusable across multiple TES applications, following shared design systems.',
    ],
    highlights: [
      'Reusable frontend widget',
      'External product integration',
      'Shared design-system implementation',
    ],
    status: 'production',
  },
];
