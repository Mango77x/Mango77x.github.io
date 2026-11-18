import type { LocalizedText } from '../i18n/LanguageContext'

export type ProjectGroup = 'featured' | 'selected' | 'prototype' | 'archived'

export interface Project {
  index: string
  id: string
  name: string
  group: ProjectGroup
  status: LocalizedText
  category: LocalizedText
  stack: string[]
  description: LocalizedText
  repo: string
  demo?: string
}

export const projects: Project[] = [
  {
    index: '01',
    id: 'mhforever',
    name: 'MHForever',
    group: 'featured',
    status: { en: 'Active development', es: 'En desarrollo activo' },
    category: { en: 'Native software · Game systems', es: 'Software nativo · Sistemas de juego' },
    stack: ['C++', 'Native recompilation', 'PC', 'Multiplayer'],
    description: {
      en: 'A native PC platform bringing classic Monster Hunter titles together. The project focuses on static recompilation rather than emulation, release compatibility, an integrated launcher and multiplayer.',
      es: 'Una plataforma nativa para PC que reúne títulos clásicos de Monster Hunter. El proyecto se centra en la recompilación estática en lugar de la emulación, la compatibilidad entre versiones, un launcher integrado y el multijugador.',
    },
    repo: 'https://github.com/Mango77x/MHForever',
    demo: 'https://mango77x.github.io/MHForever-site/',
  },
  {
    index: '02',
    id: 'swarmhq',
    name: 'SwarmHQ',
    group: 'selected',
    status: { en: 'Selected project', es: 'Proyecto destacado' },
    category: { en: 'Distributed systems · Simulation', es: 'Sistemas distribuidos · Simulación' },
    stack: ['Spring Boot', 'React', 'Python', 'MQTT', 'PostGIS'],
    description: {
      en: 'A simulated drone-fleet coordination platform combining telemetry ingestion, geospatial data, a live operational map and decentralised task allocation.',
      es: 'Plataforma de coordinación de flotas de drones simuladas que combina ingesta de telemetría, datos geoespaciales, un mapa en tiempo real y asignación distribuida de tareas.',
    },
    repo: 'https://github.com/Mango77x/SwarmHQ',
  },
  {
    index: '03',
    id: 'mols',
    name: 'MOLS',
    group: 'selected',
    status: { en: 'Selected project', es: 'Proyecto destacado' },
    category: { en: 'Backend engineering · Logistics', es: 'Backend · Logística' },
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'REST API'],
    description: {
      en: 'A logistics management application for stock, orders, shipments and vehicle assignment across land, air and sea routes, backed by a REST API and PostgreSQL.',
      es: 'Aplicación de gestión logística para inventario, pedidos, envíos y asignación de vehículos en rutas terrestres, aéreas y marítimas, respaldada por una API REST y PostgreSQL.',
    },
    repo: 'https://github.com/Mango77x/MOLS',
    demo: 'https://mols-demo.onrender.com/app',
  },
  {
    index: '04',
    id: 'creatures',
    name: 'Creatures',
    group: 'prototype',
    status: { en: 'Early prototype', es: 'Prototipo inicial' },
    category: { en: 'C++ · Procedural systems', es: 'C++ · Sistemas procedurales' },
    stack: ['C++', 'Procedural generation', 'Simulation'],
    description: {
      en: 'An early, verifiable experiment in procedural creature generation and physics-driven animation. Kept deliberately separate from finished projects.',
      es: 'Un experimento inicial y verificable de generación procedural de criaturas y animación basada en física. Se presenta deliberadamente aparte de los proyectos terminados.',
    },
    repo: 'https://github.com/Mango77x/Creatures',
  },
  {
    index: '05',
    id: 'kalo',
    name: 'kalo',
    group: 'archived',
    status: { en: 'Archived', es: 'Archivado' },
    category: { en: 'Web application · PWA', es: 'Aplicación web · PWA' },
    stack: ['React', 'TypeScript', 'Supabase', 'PWA'],
    description: {
      en: 'An AI-assisted calorie tracker with text and photo meal logging, multi-user support and bring-your-own-key AI access.',
      es: 'Contador de calorías asistido por IA, con registro de comidas por texto e imagen, soporte multiusuario y acceso a IA mediante clave propia.',
    },
    repo: 'https://github.com/Mango77x/kalo',
    demo: 'https://mango77x.github.io/kalo',
  },
  {
    index: '06',
    id: 'pulse',
    name: 'Pulse',
    group: 'archived',
    status: { en: 'Archived', es: 'Archivado' },
    category: { en: 'Web application · News aggregation', es: 'Aplicación web · Agregación de noticias' },
    stack: ['Next.js', 'JavaScript'],
    description: {
      en: 'A real-time news feed concept with AI-assisted filtering and story summaries.',
      es: 'Concepto de feed de noticias en tiempo real con filtrado y resúmenes de noticias asistidos por IA.',
    },
    repo: 'https://github.com/Mango77x/Pulse',
  },
]
