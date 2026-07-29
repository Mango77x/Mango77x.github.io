import type { Project } from '../data/projects'
import { useLanguage } from '../i18n/LanguageContext'
import { strings } from '../i18n/strings'
import { useInView } from '../hooks/useInView'
import LineDiagram from './LineDiagram'

interface DossierProps {
  project: Project
  registerSection: (id: string, el: HTMLElement | null) => void
}

export default function Dossier({ project, registerSection }: DossierProps) {
  const { lang } = useLanguage()
  const { ref, inView } = useInView<HTMLElement>()

  const diagram = (
    <LineDiagram kind={project.diagram} className="h-24 w-full max-w-2xl text-rule" />
  )

  const stack = (
    <ul className="flex flex-wrap gap-2">
      {project.stack.map((item, i) => (
        <li
          key={item}
          className="border border-rule px-2 py-1 font-mono text-xs text-ink opacity-70 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:-translate-y-0.5 motion-reduce:transition-none"
          style={{ transitionDelay: `${i * 40}ms` }}
        >
          {item}
        </li>
      ))}
    </ul>
  )

  const links = (project.repo || project.demo) && (
    <div className="flex gap-4 font-mono text-xs uppercase tracking-widest">
      {project.repo && (
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="text-signal underline decoration-rule underline-offset-4 hover:decoration-signal"
        >
          {strings.viewRepo[lang]} ↗
        </a>
      )}
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="text-signal underline decoration-rule underline-offset-4 hover:decoration-signal"
        >
          {strings.viewDemo[lang]} ↗
        </a>
      )}
    </div>
  )

  return (
    <section
      id={project.id}
      ref={(el) => {
        ref.current = el
        registerSection(project.id, el)
      }}
      style={{ transformOrigin: '18% 0%' }}
      className={`group scroll-mt-16 border-b border-rule px-6 py-12 transition-[opacity,transform] duration-[420ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none md:px-10 md:py-16 ${
        inView ? 'scale-100 rotate-0 opacity-100' : 'scale-105 -rotate-1 opacity-0'
      }`}
    >
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-sm text-signal">{project.id}</span>
        <h2 className="font-display text-4xl italic text-ink md:text-5xl">{project.name}</h2>
      </div>

      <div className="mt-5 flex flex-col gap-6">
        {project.lead ? (
          <>
            {diagram}
            <p className="max-w-2xl text-base leading-relaxed text-muted">
              {project.description[lang]}
            </p>
          </>
        ) : (
          <>
            <p className="max-w-2xl text-base leading-relaxed text-muted">
              {project.description[lang]}
            </p>
            {diagram}
          </>
        )}

        {stack}
        {links}
      </div>
    </section>
  )
}
