import { useEffect } from 'react'
import { LanguageProvider, useLanguage } from './i18n/LanguageContext'
import { projects } from './data/projects'
import Hero from './components/Hero'
import ProjectCard from './components/ProjectCard'
import Footer from './components/Footer'
import { strings } from './i18n/strings'

function useDrawingReveals() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]')
    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          currentObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])
}

function Portfolio() {
  const { lang } = useLanguage()
  useDrawingReveals()
  const featured = projects.find((project) => project.group === 'featured')
  const selected = projects.filter((project) => project.group === 'selected')
  const prototypes = projects.filter((project) => project.group === 'prototype')
  const archived = projects.filter((project) => project.group === 'archived')

  return (
    <div className="min-h-screen bg-carbon text-paper">
      <Hero />
      <main id="work" className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-24">
        <div className="mb-12" data-reveal>
          <p className="mb-4 section-rule">{strings.work[lang]} / 2026</p>
          <div className="flex items-end justify-between gap-6 border-b border-rule pb-5">
            <div>
              <h2 className="section-title">{strings.featuredLabel[lang]}</h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">A selected record of software systems, simulation work and technical experiments.</p>
            </div>
            <span className="hidden font-mono text-[9px] uppercase tracking-[0.14em] text-muted sm:block">01 — {String(projects.length).padStart(2, '0')}</span>
          </div>
        </div>

        {featured ? <ProjectCard project={featured} featured /> : null}

        <section className="mt-24" aria-labelledby="selected-heading">
          <div className="mb-8" data-reveal>
            <p className="mb-4 section-rule">02 / SELECTED SYSTEMS</p>
            <h2 id="selected-heading" className="section-title">{strings.selectedLabel[lang]}</h2>
          </div>
          <div className="grid gap-x-12 md:grid-cols-2">
            {selected.map((project) => <ProjectCard key={project.id} project={project} />)}
          </div>
        </section>

        <section className="mt-24" aria-labelledby="archive-heading">
          <div className="mb-8" data-reveal>
            <p className="mb-4 section-rule">03 / DEVELOPMENT RECORD</p>
            <h2 id="archive-heading" className="section-title">{strings.experimentsLabel[lang]}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{strings.experimentsIntro[lang]}</p>
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
  return <LanguageProvider><Portfolio /></LanguageProvider>
}
