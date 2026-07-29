import type { DiagramKind } from '../data/projects'

const stroke = 'var(--color-signal)'
const dot = 'var(--color-ink)'

function Swarm() {
  const nodes = [
    [40, 70], [110, 30], [170, 85], [240, 45], [300, 90], [360, 55], [420, 75],
  ]
  return (
    <>
      {nodes.slice(0, -1).map(([x, y], i) => {
        const [nx, ny] = nodes[i + 1]
        return <line key={i} x1={x} y1={y} x2={nx} y2={ny} stroke={stroke} strokeWidth="1" opacity="0.55" />
      })}
      <line x1="40" y1="70" x2="420" y2="75" stroke={stroke} strokeWidth="1" opacity="0.25" strokeDasharray="2 4" />
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 3 ? 5 : 3} fill={i === 3 ? 'var(--color-flag)' : dot} />
      ))}
    </>
  )
}

function Creature() {
  const spine = [[30, 60], [90, 40], [150, 55], [210, 35], [270, 55], [330, 40], [390, 60]]
  return (
    <>
      <path
        d={`M ${spine.map(([x, y]) => `${x} ${y}`).join(' L ')}`}
        stroke={stroke}
        strokeWidth="1.5"
        fill="none"
      />
      <path d="M 150 55 L 140 95 M 150 55 L 165 98" stroke={stroke} strokeWidth="1" opacity="0.6" fill="none" />
      <path d="M 270 55 L 260 95 M 270 55 L 285 98" stroke={stroke} strokeWidth="1" opacity="0.6" fill="none" />
      {spine.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3" fill={dot} />
      ))}
    </>
  )
}

function Route() {
  return (
    <>
      <path d="M 30 90 L 120 40 L 220 70 L 320 25 L 410 60" stroke={stroke} strokeWidth="1.5" fill="none" />
      <path d="M 220 70 L 220 100" stroke={stroke} strokeWidth="1" opacity="0.5" strokeDasharray="2 3" />
      <rect x="24" y="84" width="12" height="12" fill="none" stroke={dot} strokeWidth="1" />
      <circle cx="120" cy="40" r="4" fill="var(--color-flag)" />
      <path d="M 213 63 L 227 63 L 220 78 Z" fill={dot} />
      <circle cx="320" cy="25" r="4" fill={dot} />
      <circle cx="410" cy="60" r="4" fill={dot} />
    </>
  )
}

function Pulse() {
  return (
    <>
      <path
        d="M 20 60 L 90 60 L 110 20 L 130 100 L 150 40 L 170 60 L 420 60"
        stroke={stroke}
        strokeWidth="1.5"
        fill="none"
      />
      <circle cx="110" cy="20" r="3" fill="var(--color-flag)" />
      <circle cx="130" cy="100" r="3" fill={dot} />
    </>
  )
}

function Feed() {
  const rows = [20, 44, 68, 92]
  return (
    <>
      {rows.map((y, i) => (
        <line key={y} x1="30" y1={y} x2={i === 1 ? 260 : 400} y2={y} stroke={stroke} strokeWidth="1" opacity={i === 1 ? 1 : 0.4} />
      ))}
      <circle cx="30" cy="44" r="4" fill="var(--color-flag)" />
      <path d="M 300 38 L 300 50 M 294 44 L 306 44" stroke={dot} strokeWidth="1" />
    </>
  )
}

const diagrams: Record<DiagramKind, () => React.JSX.Element> = {
  swarm: Swarm,
  creature: Creature,
  route: Route,
  pulse: Pulse,
  feed: Feed,
}

export default function LineDiagram({ kind, className }: { kind: DiagramKind; className?: string }) {
  const Diagram = diagrams[kind]
  return (
    <svg viewBox="0 0 440 120" className={className} aria-hidden="true">
      <Diagram />
    </svg>
  )
}
