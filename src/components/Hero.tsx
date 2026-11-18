import LanguageToggle from './LanguageToggle'
import { useLanguage } from '../i18n/LanguageContext'
import { strings } from '../i18n/strings'

export default function Hero() {
  const { lang } = useLanguage()

  return (
    <header className="relative overflow-hidden border-b border-rule">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="flex items-center justify-between border-b border-rule/70 py-5">
          <a href="#top" className="font-mono text-xs tracking-[0.18em] text-paper/80 hover:text-accent">
            AG<span className="text-accent">.</span>
          </a>
          <div className="flex items-center gap-6">
            <nav aria-label="Main navigation" className="hidden gap-6 font-mono text-[11px] uppercase tracking-[0.14em] text-muted sm:flex">
              <a href="#work" className="transition-colors hover:text-paper">{strings.work[lang]}</a>
              <a href="#contact" className="transition-colors hover:text-paper">{strings.contactTitle[lang]}</a>
            </nav>
            <LanguageToggle />
          </div>
        </div>

        <div id="top" className="grid min-h-[620px] items-center gap-12 py-20 md:grid-cols-[minmax(0,1.25fr)_minmax(280px,0.75fr)] md:py-28">
          <div className="relative z-10">
            <p className="mb-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
              <span className="h-px w-8 bg-accent" />
              {strings.eyebrow[lang]}
            </p>
            <h1 className="max-w-4xl text-[clamp(3.6rem,8vw,7.8rem)] font-semibold leading-[0.92] tracking-[-0.075em] text-paper">
              Antoine<br />Giz<span className="text-accent">.</span>
            </h1>
            <p className="mt-7 font-mono text-xs uppercase tracking-[0.18em] text-muted">
              Mango77x <span className="px-2 text-rule">/</span> {strings.role[lang]}
            </p>
            <p className="mt-8 max-w-2xl text-lg leading-[1.75] text-muted md:text-xl">
              {strings.thesis[lang]}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 border-l-2 border-accent pl-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">{strings.focusLabel[lang]}</span>
              <span className="text-sm text-paper/85">{strings.focus[lang]}</span>
            </div>
            <a href="#work" className="mt-12 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.16em] text-paper transition-colors hover:text-accent">
              {strings.work[lang]} <span aria-hidden="true" className="text-accent">↓</span>
            </a>
          </div>

          <div className="relative hidden aspect-[4/5] max-h-[470px] overflow-hidden border border-rule bg-panel md:block">
            <div className="absolute inset-0 technical-grid opacity-70" />
            <svg viewBox="0 0 420 500" className="absolute inset-0 h-full w-full" fill="none" aria-hidden="true">
              <path d="M44 360H376M44 250H376M44 140H376M100 65V435M210 65V435M320 65V435" stroke="currentColor" className="text-rule" strokeWidth=".7" opacity=".55" />
              <path d="M62 326L138 270L210 294L284 176L358 132" stroke="currentColor" className="text-accent" strokeWidth="1.5" />
              <path d="M62 326L138 270L210 294L284 176L358 132" stroke="currentColor" className="text-accent" strokeWidth="8" opacity=".08" />
              <circle cx="62" cy="326" r="5" fill="#C58B55" />
              <circle cx="138" cy="270" r="4" fill="#E7E7E0" />
              <circle cx="210" cy="294" r="4" fill="#E7E7E0" />
              <circle cx="284" cy="176" r="4" fill="#E7E7E0" />
              <circle cx="358" cy="132" r="5" fill="#C58B55" />
              <path d="M62 326L62 390M138 270L138 390M210 294L210 390M284 176L284 390M358 132L358 390" stroke="currentColor" className="text-rule" strokeDasharray="3 5" opacity=".65" />
              <rect x="44" y="65" width="332" height="370" stroke="currentColor" className="text-rule" opacity=".7" />
            </svg>
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between border-t border-rule pt-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">Systems / Structure / Motion</span>
              <span className="font-mono text-[10px] text-accent">01—04</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
