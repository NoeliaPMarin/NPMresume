import type { Project } from '../data/projects'

type ProjectListProps = {
  projects: Project[]
}

function ProjectList({ projects }: ProjectListProps) {
  return (
    <section className="mb-6 space-y-4">
      {projects.map((project) => (
        <article key={project.id} className="space-y-1">
          <h2 className="font-bold">{project.title}</h2>
          <p>{project.description}</p>
          <p>{project.stack.join(' · ')}</p>

          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer">
              View project
            </a>
          )}
        </article>
      ))}
    </section>
  )
}

export default ProjectList