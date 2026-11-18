import { LanguageProvider, useLanguage } from './i18n/LanguageContext'
import { projects } from './data/projects'
import Hero from './components/Hero'
import ProjectCard from './components/ProjectCard'
import Footer from './components/Footer'
import { strings } from './i18n/strings'

function Portfolio() {
  const { lang } = useLanguage()
  const featured = projects.find((project) => project.group === 'featured')
  const selected = projects.filter((project) => project.group === 'selected')
  const prototypes = projects.filter((project) => project.group === 'prototype')
  const archived = projects.filter((project) => project.group === 'archived')

  return (
    <div className="min-h-screen bg-carbon text-paper">
      <Hero />
      <main id="work" className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 md:py-28">
        <div className="mb-12 flex items-end justify-between gap-6 border-b border-rule pb-5">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">{strings.work[lang]} / 2026</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.06em] text-paper md:text-6xl">{strings.featuredLabel[lang]}</h2>
          </div>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.14em] text-muted sm:block">01 — {String(projects.length).padStart(2, '0')}</span>
        </div>

        {featured ? <ProjectCard project={featured} featured /> : null}

        <section className="mt-24" aria-labelledby="selected-heading">
          <div className="mb-4 flex items-center gap-4">
            <span className="font-mono text-[10px] text-accent">02</span>
            <div className="h-px flex-1 bg-rule" />
          </div>
          <h2 id="selected-heading" className="mb-3 text-3xl font-semibold tracking-[-0.05em] text-paper md:text-4xl">{strings.selectedLabel[lang]}</h2>
          <div className="grid gap-x-12 md:grid-cols-2">
            {selected.map((project) => <ProjectCard key={project.id} project={project} />)}
          </div>
        </section>

        <section className="mt-24" aria-labelledby="archive-heading">
          <div className="mb-4 flex items-center gap-4">
            <span className="font-mono text-[10px] text-accent">03</span>
            <div className="h-px flex-1 bg-rule" />
          </div>
          <div className="mb-8 max-w-2xl">
            <h2 id="archive-heading" className="text-3xl font-semibold tracking-[-0.05em] text-paper md:text-4xl">{strings.experimentsLabel[lang]}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{strings.experimentsIntro[lang]}</p>
          </div>
          {prototypes.map((project) => <ProjectCard key={project.id} project={project} />)}
          <div className="mt-8 border-t border-rule/60 pt-2">
            {archived.map((project) => <ProjectCard key={project.id} project={project} />)}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <Portfolio />
    </LanguageProvider>
  )
}
