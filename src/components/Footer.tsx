import { contact } from '../data/contact'
import { useLanguage } from '../i18n/LanguageContext'
import { strings } from '../i18n/strings'

export default function Footer() {
  const { lang } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="px-6 py-12 md:px-10 md:py-16">
      <p className="font-display text-3xl italic text-ink md:text-4xl">{strings.footerHeading[lang]}</p>
      <p className="mt-2 max-w-md text-sm text-muted">{strings.footerNote[lang]}</p>

      <div className="mt-8 flex flex-col gap-2 border-t border-rule pt-6 font-mono text-sm md:flex-row md:gap-8">
        <a href={`mailto:${contact.email}`} className="text-signal hover:underline">
          {contact.email}
        </a>
        <a href={contact.github} target="_blank" rel="noreferrer" className="text-signal hover:underline">
          github.com/Mango77x
        </a>
        <a href={contact.linkedin} target="_blank" rel="noreferrer" className="text-signal hover:underline">
          linkedin
        </a>
      </div>

      <p className="mt-10 font-mono text-[10px] uppercase tracking-widest text-muted">
        Mango77x © {year} — end of log
      </p>
    </footer>
  )
}
