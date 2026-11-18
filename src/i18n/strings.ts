import type { Lang } from './LanguageContext'

export const strings = {
  eyebrow: { en: 'Independent software portfolio', es: 'Portfolio de proyectos personales' },
  role: { en: 'Software developer', es: 'Desarrollador de software' },
  headline: { en: 'Engineering-minded software.', es: 'Software con mentalidad de ingeniería.' },
  thesis: {
    en: 'I build software around complex systems — from native applications and distributed services to simulation, procedural generation and logistics.',
    es: 'Desarrollo software alrededor de sistemas complejos: desde aplicaciones nativas y servicios distribuidos hasta simulación, generación procedural y logística.',
  },
  focusLabel: { en: 'Areas of interest', es: 'Áreas de interés' },
  focus: { en: 'Systems software · Simulation · Distributed systems', es: 'Software de sistemas · Simulación · Sistemas distribuidos' },
  work: { en: 'Selected work', es: 'Proyectos' },
  featuredLabel: { en: 'Featured project', es: 'Proyecto principal' },
  selectedLabel: { en: 'Selected projects', es: 'Proyectos seleccionados' },
  experimentsLabel: { en: 'Prototypes & archive', es: 'Prototipos y archivo' },
  experimentsIntro: {
    en: 'Smaller experiments and earlier work, presented with their current level of maturity.',
    es: 'Experimentos y trabajos anteriores, presentados según su nivel de desarrollo actual.',
  },
  repo: { en: 'Source code', es: 'Código fuente' },
  demo: { en: 'Live project', es: 'Ver proyecto' },
  contactTitle: { en: 'Get in touch', es: 'Contacto' },
  contactText: {
    en: 'Interested in software engineering, simulation and complex technical systems.',
    es: 'Interesado en ingeniería de software, simulación y sistemas técnicos complejos.',
  },
  location: { en: 'Based in Spain', es: 'Con base en España' },
  langToggle: { en: 'ES', es: 'EN' },
} as const

export function s(key: { en: string; es: string }, lang: Lang) {
  return key[lang]
}
