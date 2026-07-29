import type { Lang } from './LanguageContext'

export const strings = {
  role: {
    en: 'Fullstack engineer · Simulated systems',
    es: 'Fullstack · Sistemas simulados',
  },
  thesis: {
    en: 'I build systems that model movement and behavior — drone swarms that negotiate tasks, creatures with procedural physics, logistics that route across land, air and sea.',
    es: 'Construyo sistemas que modelan movimiento y comportamiento — enjambres de drones que negocian tareas, criaturas con física procedural, logística que enruta por tierra, aire y mar.',
  },
  indexLabel: {
    en: 'Index',
    es: 'Índice',
  },
  logLabel: {
    en: 'Operations log',
    es: 'Cuaderno de bitácora',
  },
  viewRepo: { en: 'View repo', es: 'Ver repo' },
  viewDemo: { en: 'View demo', es: 'Ver demo' },
  footerHeading: {
    en: 'End of transmission',
    es: 'Fin de transmisión',
  },
  footerNote: {
    en: 'Based in Spain. Open to fullstack roles in aerospace & defense.',
    es: 'Con base en España. Abierto a roles fullstack en aeroespacial y defensa.',
  },
  langToggle: { en: 'ES', es: 'EN' },
} as const

export function s(key: { en: string; es: string }, lang: Lang) {
  return key[lang]
}
