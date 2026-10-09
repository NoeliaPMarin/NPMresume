import { languages, type Skill } from '../data/skills'

type SkillsOutputProps = {
  skills: Skill[]
}

function SkillsOutput({ skills }: SkillsOutputProps) {
  return (
    <section className="mb-6 max-w-4xl">
      <h1 className="terminal-title text-xl font-bold">Technical skills</h1>
      <p className="terminal-meta mt-1 text-sm">Proficiency and practical experience</p>

      <div className="terminal-divider my-4" aria-hidden="true" />

      <ul className="space-y-4">
        {skills.map((skill) => (
          <li key={skill.name} className="min-w-0">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="terminal-prompt" aria-hidden="true">→</span>
              <h2 className="terminal-title font-semibold">{skill.name}</h2>
              <span className="terminal-skill-level text-xs font-semibold uppercase tracking-wide">
                [{skill.level}]
              </span>
            </div>
            <p className="terminal-copy mt-1 pl-5 text-sm">{skill.details}</p>
          </li>
        ))}
      </ul>

      <div className="terminal-divider my-5" aria-hidden="true" />

      <h1 className="terminal-title text-xl font-bold">Languages</h1>
      <ul className="terminal-list mt-3 space-y-1">
        {languages.map((language) => (
          <li key={language.name} className="flex gap-2">
            <span className="terminal-prompt" aria-hidden="true">→</span>
            <span>{language.name} <span className="terminal-meta">[{language.level}]</span></span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default SkillsOutput
