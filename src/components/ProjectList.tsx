import type { Project } from '../data/projects'

type ProjectListProps = {
  projects: Project[]
}

function ProjectList({ projects }: ProjectListProps) {
  return (
    <section className="mb-6 space-y-4">
      {projects.map((project) => (
        <article key={project.id} className="space-y-3 rounded-xl border border-slate-700/80 bg-slate-900/40 p-4 sm:p-5">
          <div>
            <h2 className="font-bold text-emerald-300">{project.title}</h2>
            <p className="text-sm text-slate-400">{project.role}{project.company && ` · ${project.company}`}</p>
          </div>
          <p className="text-slate-300">{project.description}</p>
          <p className="break-words text-sm text-cyan-200">{project.stack.join(' · ')}</p>

          {project.link && (
            <a className="inline-flex text-sm font-semibold text-emerald-300 underline decoration-emerald-400/40 underline-offset-4 transition-colors hover:text-emerald-200" href={project.link} target="_blank" rel="noreferrer">
              View project
            </a>
          )}
        </article>
      ))}
    </section>
  )
}

export default ProjectList
