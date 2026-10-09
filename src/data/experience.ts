export type Experience = {
  company: string
  location: string
  role: string
  period: string
  summary: string
  responsibilities: string[]
}

export const experience: Experience[] = [
  {
    company: 'Tes Global',
    location: 'Sheffield (Hybrid)',
    role: 'Associate Engineer',
    period: '2023 - present',
    summary: 'Software Engineer within the TES Develop product team.',
    responsibilities: [
      'Full-stack development on TES Develop, a large-scale education platform built on Totara (Moodle) and used by teachers and schools.',
      'Ownership of an end-to-end feature allowing users to add, edit and delete external training records, from planning and UX collaboration to production release.',
      'Backend development in PHP, including Moodle plugins, web services, business logic and secure GDPR-compliant data handling.',
      'Frontend development using JavaScript (AMD modules), Mustache templates, HTML and CSS, with a strong focus on usability and visual consistency.',
      'Design and implementation of relational database schemas, SQL queries and data validation.',
      'Close collaboration with UX designers, product managers, QA engineers and senior developers in an Agile environment.',
      'Writing and maintaining automated tests using Behat (BDD) and PHPUnit, achieving high test coverage.',
      'Active participation in code reviews, refactoring legacy code, debugging complex issues and contributing to CI/CD workflows and staged releases.',
    ],
  },
  {
    company: 'Euro Sport',
    location: 'Redditch, UK',
    role: 'Lead Graphic Designer',
    period: '2022 - 2023',
    summary: 'Led the design of merchandising products for football teams and sports organisations, translating client requirements into production-ready designs.',
    responsibilities: [
      'Worked directly with sports clubs and clients to understand design requirements.',
      'Designed merchandise and visual assets for football teams and sports organisations.',
      'Managed communication between clients and production teams to ensure accurate delivery.',
      'Oversaw the translation of concepts into physical products, maintaining quality and brand consistency.',
    ],
  },
  {
    company: 'Freelance Web & Graphic Designer',
    location: 'Granada, Spain',
    role: 'Designer',
    period: '2016 - 2023',
    summary: 'Worked with small businesses and local companies, including Serigran and Seriestilo, to design visual identities and digital experiences such as websites, branding materials and marketing assets.',
    responsibilities: [
      'Designed responsive website layouts with a strong focus on usability, accessibility and visual hierarchy.',
      'Created branding systems, typography and visual assets for digital products.',
      'Developed simple design systems and reusable visual guidelines to ensure consistency across digital interfaces.',
      'Collaborated with clients and teams to translate business requirements into clear visual solutions.',
      'Prepared design specifications and visual assets to support web development implementation.',
    ],
  },
  {
    company: 'Seriestilo',
    location: 'Granada, Spain',
    role: 'Design Lead',
    period: '2019 - 2022',
    summary: 'Led the design and production of merchandising products, working closely with clients and production teams.',
    responsibilities: [
      'Designed custom merchandising products based on client requirements.',
      'Managed communication between clients and the production workshop to ensure accurate implementation.',
      'Coordinated orders and production timelines across multiple projects.',
      'Ensured visual consistency and quality across product lines.',
    ],
  },
  {
    company: 'Serigran',
    location: 'Granada, Spain',
    role: 'Graphic Designer',
    period: '2016 - 2019',
    summary: 'Worked as a graphic designer on branding, marketing and digital design projects for local businesses.',
    responsibilities: [
      'Designed brand identities, logos and visual materials for marketing and advertising.',
      'Created website layouts and simple UI designs using WordPress, marking my first experience working with web interfaces.',
      'Produced visual assets for digital and print, including merchandising and promotional materials.',
      'Collaborated with clients to translate business ideas into clear visual communication.',
    ],
  },
]
