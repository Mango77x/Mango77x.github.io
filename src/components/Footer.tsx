import { contact } from '../data/contact'
import { useLanguage } from '../i18n/LanguageContext'
import { strings } from '../i18n/strings'

export default function Footer() {
  const { lang } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="border-t border-rule bg-panel">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-24">
        <div className="document-topline mb-12"><span>DOCUMENT AG-0001</span><span>END OF RECORD</span><span>CONTACT / 04</span></div>
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end" data-reveal>
          <div>
            <p className="technical-label text-accent">{strings.location[lang]}</p>
            <h2 className="section-title mt-4 max-w-[620px]">{strings.contactTitle[lang]}</h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">{strings.contactText[lang]}</p>
          </div>
          <div className="flex flex-col gap-4 font-mono text-[10px] uppercase tracking-[0.12em] md:items-end">
            <a href={`mailto:${contact.email}`} className="text-paper transition-colors hover:text-accent">{contact.email} ↗</a>
            <a href={contact.github} target="_blank" rel="noreferrer" className="text-paper transition-colors hover:text-accent">GitHub ↗</a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className="text-paper transition-colors hover:text-accent">LinkedIn ↗</a>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-3 border-t border-rule/70 pt-5 font-mono text-[9px] uppercase tracking-[0.12em] text-muted">
          <span>Antoine Giz / Mango77x</span><span>© {year}</span><span>END / AG-0001</span>
        </div>
      </div>
    </footer>
  )
}
