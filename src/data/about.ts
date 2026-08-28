export type AboutText = {
  intro: {
    name: string
    role: string
    statement: string
  }
  background: string[]
  focus: string[]
}

export const aboutText: AboutText = {
  intro: {
    name: 'Noelia Perez Marin',
    role: 'Software Engineer · Frontend · Design',
    statement: 'I build digital experiences where engineering meets design.',
  },
  background: [
    'With a background in graphic design and professional experience in software engineering, I bring both sides of the process together: understanding how something should work and look, then building it.',
    'My experience spans frontend and full-stack development, working with JavaScript, React, PHP, APIs, SQL, testing, and production systems.',
  ],
  focus: [
    'Frontend Engineering',
    'React & modern JavaScript',
    'UI / UX implementation',
    'Design systems & reusable components',
    'Accessible, responsive interfaces',
  ],
}