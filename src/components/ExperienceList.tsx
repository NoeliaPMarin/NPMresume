import type { Experience } from '../data/experience'

type ExperienceListProps = {
  experience: Experience[]
}

function ExperienceList({ experience }: ExperienceListProps) {
  return (
    <section className="mb-6 space-y-4">
      {experience.map((role) => (
        <article key={`${role.company}-${role.period}`} className="terminal-card space-y-3 px-4 py-3 sm:px-5 sm:py-4">
          <div>
            <h1 className="terminal-title font-bold">{role.company}</h1>
            <p className="terminal-meta text-sm">{role.role} · {role.location} · {role.period}</p>
          </div>
          <p className="terminal-copy">{role.summary}</p>
          <ul className="terminal-list list-inside list-disc space-y-1 text-sm">
            {role.responsibilities.map((responsibility) => (
              <li key={responsibility}>{responsibility}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  )
}

export default ExperienceList
