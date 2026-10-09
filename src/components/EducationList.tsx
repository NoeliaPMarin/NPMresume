import type { Education } from '../data/education'

type EducationListProps = {
  education: Education[]
}

function EducationList({ education }: EducationListProps) {
  return (
    <section className="mb-6 space-y-4">
      {education.map((item) => (
        <article key={item.institution} className="terminal-card space-y-3 px-4 py-3 sm:px-5 sm:py-4">
          <div>
            <h1 className="terminal-title font-bold">{item.institution}</h1>
            <p className="terminal-meta text-sm">{item.qualification} · {item.location} · {item.period}</p>
          </div>
          <p className="terminal-copy">{item.description}</p>
        </article>
      ))}
    </section>
  )
}

export default EducationList
