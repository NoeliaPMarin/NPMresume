import type { Project } from '../data/projects'

type ProjectListProps = {
  projects: Project[]
}

function ProjectList({ projects }: ProjectListProps) {
  return (
    <section className="mb-6 space-y-4">
      {projects.map((project) => (
        <article key={project.id} className="terminal-card terminal-card-accent space-y-3 px-4 py-3 sm:px-5 sm:py-4">
          <div>
            <h2 className="terminal-title font-bold">{project.title}</h2>
            <p className="terminal-meta text-sm">{project.role}{project.company && ` · ${project.company}`} · {project.year}</p>
          </div>
          <p className="terminal-copy">{project.description}</p>
          <p className="terminal-stack break-words text-sm">{project.stack.join(' · ')}</p>

          <ul className="terminal-list list-inside list-disc space-y-1 text-sm">
            {project.contributions.map((contribution) => (
              <li key={contribution}>{contribution}</li>
            ))}
          </ul>

          {project.highlights && (
            <p className="terminal-meta text-sm">
              Highlights: {project.highlights.join(' · ')}
            </p>
          )}

          {project.link && (
            <a className="terminal-link inline-flex text-sm font-semibold underline underline-offset-4 transition-colors" href={project.link} target="_blank" rel="noreferrer">
              View project
            </a>
          )}
        </article>
      ))}
    </section>
  )
}

export default ProjectList
