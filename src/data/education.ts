export type Education = {
  institution: string
  qualification: string
  location: string
  period: string
  description: string
}

export const education: Education[] = [
  {
    institution: 'MAKERS',
    qualification: 'Software Engineer Apprenticeship',
    location: 'Birmingham, UK',
    period: '2023 - 2024',
    description: 'Intensive, practice-based apprenticeship combining software engineering fundamentals with on-the-job product development. Covered full-stack development principles, object-oriented programming, testing practices (BDD and unit testing), Agile methodologies and collaborative product delivery in a professional environment.',
  },
  {
    institution: 'Sboza2 School of Design',
    qualification: 'Graphic Design Diploma',
    location: 'Granada, Spain',
    period: '2018 - 2020',
    description: 'Focused on visual communication, typography, layout systems and user-centred design. Developed strong foundations in visual hierarchy, branding and digital interface design, which now inform my approach to frontend development and UI quality.',
  },
]
