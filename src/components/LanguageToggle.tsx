import { useLanguage } from '../i18n/LanguageContext'
import { strings } from '../i18n/strings'

export default function LanguageToggle({ className }: { className?: string }) {
  const { lang, toggle } = useLanguage()
  return (
    <button
      type="button"
      onClick={toggle}
      className={`font-mono text-xs tracking-widest uppercase border border-rule px-2 py-1 text-muted hover:text-signal hover:border-signal transition-colors ${className ?? ''}`}
      aria-label={`Switch language to ${lang === 'en' ? 'Spanish' : 'English'}`}
    >
      {lang.toUpperCase()} / {strings.langToggle[lang]}
    </button>
  )
}
