import LanguageToggle from './LanguageToggle'
import ThemeToggle from './ThemeToggle'
import { useLanguage } from '../i18n/LanguageContext'
import { strings } from '../i18n/strings'

export default function Hero() {
  const { lang } = useLanguage()

  return (
    <header id="top" className="relative overflow-hidden border-b border-rule">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="flex items-center justify-between border-b border-rule/70 py-5">
          <a href="#top" className="font-mono text-xs tracking-[0.18em] text-paper/80 transition-colors hover:text-accent" aria-label="Back to top">AG<span className="text-accent">.</span></a>
          <div className="flex items-center gap-2 sm:gap-4">
            <nav aria-label="Main navigation" className="hidden gap-6 font-mono text-[10px] uppercase tracking-[0.14em] text-muted sm:flex">
              <a href="#work" className="transition-colors hover:text-paper">{strings.work[lang]}</a>
              <a href="#contact" className="transition-colors hover:text-paper">{strings.contactTitle[lang]}</a>
            </nav>
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </div>
        <div className="py-10 md:py-16">
          <div className="document-topline"><span>PERSONAL ENGINEERING PORTFOLIO</span><span>SPAIN / 2026</span><span>DOCUMENT AG-0001 / REV. A</span></div>
          <div className="grid gap-12 py-12 md:grid-cols-[minmax(0,1fr)_300px] md:items-end md:py-20">
            <div data-reveal>
              <p className="mb-7 technical-label text-accent">{strings.eyebrow[lang]}</p>
              <h1 className="hero-title">Antoine Giz<span>.</span></h1>
              <p className="mt-7 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">MANGO77X / {strings.role[lang]}</p>
              <p className="mt-7 max-w-3xl text-base leading-[1.85] text-muted md:text-lg">{strings.thesis[lang]}</p>
            </div>
            <aside className="md:pb-1" data-reveal>
              <p className="mb-3 technical-label text-accent">{strings.focusLabel[lang]}</p>
              <p className="mb-6 text-sm leading-7 text-paper/85">{strings.focus[lang]}</p>
              <dl className="hero-index">
                <div><dt>Discipline</dt><dd>Software systems</dd></div>
                <div><dt>Focus</dt><dd>Simulation / Native</dd></div>
                <div><dt>Record</dt><dd>Selected work</dd></div>
                <div><dt>Revision</dt><dd>2026 / A</dd></div>
              </dl>
            </aside>
          </div>
          <div className="document-bottomline"><span>SELECTED TECHNICAL WORK</span><a href="#work" className="text-accent hover:text-paper">{strings.work[lang]} ↓</a><span>INDEX / 01—06</span></div>
        </div>
      </div>
    </header>
  )
}
