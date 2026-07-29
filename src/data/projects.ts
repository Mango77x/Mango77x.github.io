import type { LocalizedText } from '../i18n/LanguageContext'

export type DiagramKind = 'swarm' | 'creature' | 'route' | 'pulse' | 'feed'

export interface Project {
  index: string
  code: string
  id: string
  name: string
  stack: string[]
  description: LocalizedText
  repo?: string
  demo?: string
  diagram: DiagramKind
  /** Lead entry: diagram runs before the description instead of after. */
  lead?: boolean
}

export const projects: Project[] = [
  {
    index: '01',
    code: 'SW',
    id: 'PROY-01',
    name: 'SwarmHQ',
    lead: true,
    stack: ['Spring Boot', 'React', 'Python', 'MQTT', 'PostGIS'],
    description: {
      en: 'Simulated drone-fleet C2 platform. MQTT telemetry ingestion, PostGIS geospatial storage, a live map over WebSocket, and swarm coordination through boids flocking plus task-auction bidding between units.',
      es: 'Plataforma C2 de flota de drones simulada. Ingesta de telemetría por MQTT, almacenamiento geoespacial PostGIS, mapa en vivo por WebSocket y coordinación de enjambre mediante boids y subasta de tareas entre unidades.',
    },
    repo: 'https://github.com/Mango77x/SwarmHQ',
    diagram: 'swarm',
  },
  {
    index: '02',
    code: 'CR',
    id: 'PROY-02',
    name: 'Creatures',
    stack: ['C++'],
    description: {
      en: 'Procedural creature generation engine. Physically simulated bodies drive procedural animation, rendered as pseudo-3D pixel art from a from-scratch C++ pipeline.',
      es: 'Motor de generación procedural de criaturas. Cuerpos con física simulada impulsan animación procedural, renderizada en pixel art pseudo-3D desde un pipeline en C++ construido desde cero.',
    },
    diagram: 'creature',
  },
  {
    index: '03',
    code: 'MO',
    id: 'PROY-03',
    name: 'MOLS',
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'REST API'],
    description: {
      en: 'Internal logistics system. Tracks stock, orders and shipments, and assigns vehicles across land, air and sea routes through a REST API backed by PostgreSQL.',
      es: 'Sistema logístico interno. Gestiona stock, pedidos y envíos, y asigna vehículos por rutas de tierra, aire y mar a través de una API REST respaldada por PostgreSQL.',
    },
    diagram: 'route',
  },
  {
    index: '04',
    code: 'KA',
    id: 'PROY-04',
    name: 'kalo',
    stack: ['React', 'TypeScript', 'Supabase', 'PWA'],
    description: {
      en: 'AI-assisted calorie tracker. Logs meals from text or photo, multi-user with bring-your-own-key AI access, installable as a PWA.',
      es: 'Calorie tracker asistido por IA. Registra comidas por texto o foto, multiusuario con acceso a IA mediante clave propia (BYOK), instalable como PWA.',
    },
    repo: 'https://github.com/Mango77x/kalo',
    demo: 'https://mango77x.github.io/kalo',
    diagram: 'pulse',
  },
  {
    index: '05',
    code: 'PU',
    id: 'PROY-05',
    name: 'Pulse',
    stack: ['Next.js', 'JavaScript'],
    description: {
      en: 'Real-time news feed, filtered and summarized by AI as stories break.',
      es: 'Feed de noticias en tiempo real, filtrado y resumido por IA a medida que ocurren.',
    },
    diagram: 'feed',
  },
]
