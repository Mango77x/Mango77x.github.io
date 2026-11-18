import type { Project } from '../data/projects'
import { useLanguage } from '../i18n/LanguageContext'
import { strings } from '../i18n/strings'

export default function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const { lang } = useLanguage()

  return (
    <article id={project.id} className={featured
      ? 'group relative scroll-mt-10 border border-rule bg-panel p-7 md:p-10'
      : 'group relative scroll-mt-10 border-t border-rule py-7 md:py-9'}>
      {featured ? (
        <div className="absolute right-0 top-0 h-16 w-16 border-b border-l border-rule/70">
          <span className="absolute right-3 top-3 font-mono text-[10px] text-accent">{project.index}</span>
        </div>
      ) : null}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">{project.status[lang]}</span>
        <span className="h-px w-5 bg-rule" />
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">{project.category[lang]}</span>
      </div>
      <div className={featured ? 'mt-8 grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(220px,0.62fr)] md:items-end' : 'mt-4 grid gap-5 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:items-start'}>
        <div>
          <h3 className={featured ? 'text-5xl font-semibold tracking-[-0.06em] text-paper md:text-7xl' : 'text-3xl font-semibold tracking-[-0.055em] text-paper md:text-4xl'}>
            {project.name}<span className="text-accent">.</span>
          </h3>
          {featured ? <p className="mt-4 max-w-md font-mono text-xs uppercase tracking-[0.12em] text-muted">{project.stack.join(' / ')}</p> : null}
        </div>
        <div>
          <p className={featured ? 'max-w-2xl text-base leading-[1.8] text-muted md:text-lg' : 'max-w-2xl text-sm leading-[1.8] text-muted md:text-base'}>
            {project.description[lang]}
          </p>
          {!featured ? (
            <ul className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((item) => <li key={item} className="border border-rule/80 px-2 py-1 font-mono text-[10px] text-muted">{item}</li>)}
            </ul>
          ) : null}
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 font-mono text-[10px] uppercase tracking-[0.14em]">
            <a href={project.repo} target="_blank" rel="noreferrer" className="text-accent underline decoration-rule underline-offset-4 transition-colors hover:text-paper">{strings.repo[lang]} ↗</a>
            {project.demo ? <a href={project.demo} target="_blank" rel="noreferrer" className="text-accent underline decoration-rule underline-offset-4 transition-colors hover:text-paper">{strings.demo[lang]} ↗</a> : null}
          </div>
        </div>
      </div>
    </article>
  )
}
