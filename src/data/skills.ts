export type Skill = {
  name: string
  level: 'Advanced' | 'Intermediate'
  details: string
}

export type Language = {
  name: string
  level: string
}

export const skills: Skill[] = [
  { name: 'JavaScript', level: 'Advanced', details: 'JSON, ES6+, DOM manipulation, asynchronous programming, API integration and AJAX.' },
  { name: 'React', level: 'Intermediate', details: 'Component-based architecture, hooks, state management, reusable UI and frontend development.' },
  { name: 'HTML5', level: 'Advanced', details: 'Semantic markup, accessibility, responsive layout and web standards.' },
  { name: 'CSS3', level: 'Advanced', details: 'Responsive design, flexbox, layout systems, UI styling and visual consistency.' },
  { name: 'API integration', level: 'Advanced', details: 'REST APIs, JSON handling, AJAX, frontend-backend communication and data rendering.' },
  { name: 'StencilJS', level: 'Intermediate', details: 'Web components, reusable widgets and component architecture.' },
  { name: 'Mustache', level: 'Intermediate', details: 'Templating, dynamic rendering and UI components.' },
  { name: 'Behat', level: 'Intermediate', details: 'BDD, behaviour-driven development and acceptance testing.' },
  { name: 'PHPUnit', level: 'Intermediate', details: 'Unit testing, backend testing and test coverage.' },
  { name: 'PHP', level: 'Intermediate', details: 'Server-side development, business logic and web services.' },
  { name: 'SQL', level: 'Intermediate', details: 'Relational databases, queries and data validation.' },
  { name: 'Git', level: 'Advanced', details: 'Version control, branching, pull requests and code reviews.' },
  { name: 'Docker', level: 'Intermediate', details: 'Containerisation, local environments and development workflow.' },
]

export const languages: Language[] = [
  { name: 'Spanish', level: 'Native' },
  { name: 'English', level: 'Professional' },
]
