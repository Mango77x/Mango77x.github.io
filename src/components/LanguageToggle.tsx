import { useLanguage } from '../i18n/LanguageContext'
import { strings } from '../i18n/strings'

export default function LanguageToggle({ className }: { className?: string }) {
  const { lang, toggle } = useLanguage()
  return (
    <button
      type="button"
      onClick={toggle}
      className={`border border-rule px-2 py-1 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:border-accent hover:text-accent ${className ?? ''}`}
      aria-label={`Switch language to ${lang === 'en' ? 'Spanish' : 'English'}`}
    >
      {lang.toUpperCase()} / {strings.langToggle[lang]}
    </button>
  )
}
