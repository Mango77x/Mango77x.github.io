import { projects } from '../data/projects'
import { useLanguage } from '../i18n/LanguageContext'
import { strings } from '../i18n/strings'

export default function IndexRail({ activeId }: { activeId: string | null }) {
  const { lang } = useLanguage()

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'start',
    })
  }

  return (
    <nav
      aria-label={strings.indexLabel[lang]}
      className="border-b border-rule px-6 py-4 md:sticky md:top-0 md:h-screen md:self-start md:border-b-0 md:border-r md:px-6 md:py-10"
    >
      <p className="hidden font-display text-lg italic text-muted md:block">
        {strings.indexLabel[lang]}
      </p>
      <ul className="flex gap-5 overflow-x-auto md:mt-5 md:flex-col md:gap-3 md:overflow-visible">
        {projects.map((p) => {
          const active = activeId === p.id
          return (
            <li key={p.id} className="shrink-0 md:shrink">
              <button
                type="button"
                onClick={() => scrollTo(p.id)}
                aria-current={active ? 'true' : undefined}
                className={`flex w-full items-baseline gap-1.5 whitespace-nowrap py-1 font-mono text-sm transition-colors md:gap-0 ${
                  active ? 'text-signal' : 'text-muted hover:text-ink'
                }`}
              >
                <span className={active ? 'font-medium' : ''}>{p.index}</span>
                <span
                  aria-hidden="true"
                  className="hidden flex-1 border-b border-dotted border-rule md:mx-1.5 md:block"
                  style={{ marginBottom: '0.2em' }}
                />
                <span className={active ? 'font-medium' : ''}>{p.code}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
