import LanguageToggle from './LanguageToggle'
import ThemeToggle from './ThemeToggle'
import { useLanguage } from '../i18n/LanguageContext'
import { strings } from '../i18n/strings'

export default function Hero() {
  const { lang } = useLanguage()

  return (
    <header className="relative overflow-hidden border-b border-rule">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="flex items-center justify-between border-b border-rule/70 py-5">
          <a href="#top" className="font-mono text-xs tracking-[0.18em] text-paper/80 transition-colors hover:text-accent">AG<span className="text-accent">.</span></a>
          <div className="flex items-center gap-2 sm:gap-4">
            <nav aria-label="Main navigation" className="hidden gap-6 font-mono text-[10px] uppercase tracking-[0.14em] text-muted sm:flex">
              <a href="#work" className="transition-colors hover:text-paper">{strings.work[lang]}</a>
              <a href="#contact" className="transition-colors hover:text-paper">{strings.contactTitle[lang]}</a>
            </nav>
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </div>
        <div id="top" className="py-14 md:py-20">
          <div className="document-topline"><span>PERSONAL ENGINEERING PORTFOLIO</span><span>SPAIN / 2026</span><span>DOCUMENT AG-0001</span></div>
          <div className="grid gap-10 py-12 md:grid-cols-[1fr_280px] md:items-end md:py-16">
            <div>
              <p className="mb-7 font-mono text-[9px] uppercase tracking-[0.22em] text-accent">{strings.eyebrow[lang]}</p>
              <h1 className="display-type text-[clamp(4.2rem,10vw,9.6rem)] leading-[0.88] text-paper">Antoine<br/>Giz<span className="text-accent">.</span></h1>
              <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Mango77x / {strings.role[lang]}</p>
              <p className="mt-7 max-w-3xl text-base leading-[1.85] text-muted md:text-lg">{strings.thesis[lang]}</p>
            </div>
            <aside className="border-l border-rule pl-5 md:pb-2">
              <p className="technical-label text-accent">{strings.focusLabel[lang]}</p>
              <p className="mt-3 text-sm leading-7 text-paper/85">{strings.focus[lang]}</p>
              <div className="mt-7 border-t border-rule pt-4 font-mono text-[9px] uppercase leading-6 tracking-[0.12em] text-muted">
                <p>Systems / Simulation</p><p>Native software / Distributed systems</p><p>Design record / 2026</p>
              </div>
            </aside>
          </div>
          <div className="document-bottomline"><span>SELECTED TECHNICAL WORK</span><a href="#work" className="text-accent hover:text-paper">{strings.work[lang]} ↓</a><span>01 — 06 / INDEX</span></div>
        </div>
      </div>
    </header>
  )
}
