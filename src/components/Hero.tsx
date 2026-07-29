import BoidsCanvas from './BoidsCanvas'
import LanguageToggle from './LanguageToggle'
import { useLanguage } from '../i18n/LanguageContext'
import { strings } from '../i18n/strings'

export default function Hero() {
  const { lang } = useLanguage()

  return (
    <header className="border-b border-rule px-6 py-10 md:px-10 md:py-14">
      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-xs uppercase tracking-widest text-muted">
          {strings.logLabel[lang]} / 2026
        </span>
        <LanguageToggle />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <h1 className="font-display text-6xl leading-none italic tracking-tight text-ink md:text-8xl">
            Antoine Giz
          </h1>
          <p className="mt-2 font-mono text-sm text-muted">Mango77x</p>
          <p className="mt-3 font-mono text-sm uppercase tracking-widest text-signal">
            {strings.role[lang]}
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {strings.thesis[lang]}
          </p>
        </div>

        <div className="border border-rule md:w-72">
          <BoidsCanvas className="h-40 w-full md:h-48" />
        </div>
      </div>
    </header>
  )
}
