import type { Project } from '../data/projects'
import { useLanguage } from '../i18n/LanguageContext'
import { strings } from '../i18n/strings'
import ProjectDiagram from './ProjectDiagram'

export default function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const { lang } = useLanguage()

  return (
    <article id={project.id} data-reveal className={featured ? 'dossier dossier-featured scroll-mt-10' : 'dossier dossier-compact scroll-mt-10'}>
      <div className="dossier-heading">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-accent">{project.status[lang]}</span>
          <span className="h-px w-5 bg-rule" />
          <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted">{project.category[lang]}</span>
        </div>
        <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted">DOC. AG-{project.index} / REV. A</span>
      </div>
      <div className="dossier-body">
        <div className="dossier-copy">
          <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.16em] text-accent">PROJECT {project.index} / {project.group}</p>
          <h3 className="dossier-title">{project.name}</h3>
          <p className="dossier-description mt-5">{project.description[lang]}</p>
          <div className="mt-6">
            <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.16em] text-muted">Technical scope</p>
            <ul className="flex flex-wrap gap-2">
              {project.stack.map((item) => <li key={item} className="border border-ink/20 px-2 py-1 font-mono text-[9px] text-ink/70">{item}</li>)}
            </ul>
          </div>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 font-mono text-[9px] uppercase tracking-[0.14em]">
            <a href={project.repo} target="_blank" rel="noreferrer" className="text-ink underline decoration-accent underline-offset-4 transition-colors hover:text-accent">{strings.repo[lang]} ↗</a>
            {project.demo ? <a href={project.demo} target="_blank" rel="noreferrer" className="text-ink underline decoration-accent underline-offset-4 transition-colors hover:text-accent">{strings.demo[lang]} ↗</a> : null}
          </div>
        </div>
        <div className="dossier-illustration"><ProjectDiagram project={project} /></div>
      </div>
      <div className="dossier-footer"><span>ANTOINE GIZ / MANGO77X</span><span>ENGINEERING NOTE · {project.index}</span><span>SHEET {project.index} / 06</span></div>
    </article>
  )
}
