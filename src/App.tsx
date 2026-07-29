import { useCallback, useEffect, useRef, useState } from 'react'
import { LanguageProvider } from './i18n/LanguageContext'
import { projects } from './data/projects'
import Hero from './components/Hero'
import IndexRail from './components/IndexRail'
import Dossier from './components/Dossier'
import Footer from './components/Footer'

function Log() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const sections = useRef(new Map<string, HTMLElement>())
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '-15% 0px -70% 0px', threshold: 0 },
    )
    sections.current.forEach((el) => observerRef.current?.observe(el))
    return () => observerRef.current?.disconnect()
  }, [])

  const registerSection = useCallback((id: string, el: HTMLElement | null) => {
    if (el) {
      sections.current.set(id, el)
      observerRef.current?.observe(el)
    }
  }, [])

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Hero />
      <div className="md:grid md:grid-cols-[180px_1fr]">
        <IndexRail activeId={activeId} />
        <main>
          {projects.map((project) => (
            <Dossier key={project.id} project={project} registerSection={registerSection} />
          ))}
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <Log />
    </LanguageProvider>
  )
}
