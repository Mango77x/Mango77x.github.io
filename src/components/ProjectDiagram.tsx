import type { ReactNode } from 'react'
import type { Project } from '../data/projects'

function DrawingFrame({ children, label, code }: { children: ReactNode; label: string; code: string }) {
  return (
    <div className="drawing-sheet relative overflow-hidden border border-ink/20 bg-sheet">
      <div className="drawing-grid absolute inset-0" />
      <div className="relative flex items-center justify-between border-b border-ink/20 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.14em] text-ink/55">
        <span>{label}</span><span>{code}</span>
      </div>
      <svg viewBox="0 0 560 300" role="img" aria-label={label} className="relative block h-auto w-full text-ink">
        {children}
      </svg>
      <div className="relative flex items-center justify-between border-t border-ink/20 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.12em] text-ink/55">
        <span>Conceptual system diagram · not to scale</span><span>AG / {code}</span>
      </div>
    </div>
  )
}

const line = "fill-none stroke-current"
const node = "fill-sheet stroke-current"

function MHForeverDrawing() {
  return <DrawingFrame label="Native recompilation architecture" code="MHF-01">
    <g className={line} strokeWidth="1.5">
      <path d="M90 145H180M270 145H355M445 145H490M225 180V225H400V180" />
      <path d="M225 110V65H400V110" strokeDasharray="4 5" />
    </g>
    <g className={node} strokeWidth="1.5">
      <rect x="25" y="112" width="65" height="66" rx="2"/><rect x="180" y="112" width="90" height="66" rx="2"/>
      <rect x="355" y="112" width="90" height="66" rx="2"/><rect x="490" y="112" width="55" height="66" rx="2"/>
      <rect x="350" y="225" width="100" height="42" rx="2"/>
      <rect x="180" y="42" width="90" height="46" rx="2"/>
    </g>
    <g fill="currentColor" fontSize="10" textAnchor="middle" fontFamily="monospace">
      <text x="57" y="140">GAME</text><text x="57" y="154">IMAGE</text>
      <text x="225" y="139">STATIC</text><text x="225" y="153">RECOMP</text>
      <text x="400" y="139">NATIVE</text><text x="400" y="153">RUNTIME</text>
      <text x="517" y="139">PC</text><text x="517" y="153">BUILD</text>
      <text x="225" y="61">RELEASE PROFILES</text><text x="400" y="250">LAUNCHER / ONLINE</text>
    </g>
    <g className={line} strokeWidth="1">
      <path d="M57 95V112M57 178V202H125V145H180M225 88V112M400 88V112M400 178V225" strokeDasharray="3 4"/>
      <circle cx="125" cy="145" r="3" fill="currentColor"/><circle cx="310" cy="145" r="3" fill="currentColor"/>
    </g>
    <g fill="currentColor" fontSize="8" fontFamily="monospace"><text x="28" y="86">SOURCE</text><text x="285" y="130">CODE PATH</text><text x="455" y="215">SERVICES</text></g>
  </DrawingFrame>
}

function SwarmDrawing() {
  const drones = [[105,85],[215,65],[330,92],[430,65],[160,210],[300,220],[430,205]]
  return <DrawingFrame label="Distributed fleet coordination" code="SWM-02">
    <g className={line} strokeWidth="1.2" strokeDasharray="5 5">
      {drones.map(([x,y],i)=><path key={i} d={`M280 145L${x} ${y}`}/>)}
      <path d="M105 85L215 65L330 92L430 65M160 210L300 220L430 205" opacity=".55"/>
    </g>
    <g fill="currentColor">
      {drones.map(([x,y],i)=><g key={i} transform={`translate(${x} ${y})`}><circle r="13" fill="none" stroke="currentColor" strokeWidth="1.4"/><path d="M-7 0H7M0 -7V7" stroke="currentColor" strokeWidth="1.2"/><circle r="2.5"/></g>)}
    </g>
    <circle cx="280" cy="145" r="34" className={node} strokeWidth="1.6"/>
    <circle cx="280" cy="145" r="25" className={line} strokeDasharray="2 3"/>
    <g fill="currentColor" fontSize="9" textAnchor="middle" fontFamily="monospace"><text x="280" y="142">TASK</text><text x="280" y="154">ALLOC.</text></g>
    <g className={line} strokeWidth="1"><path d="M105 110V270H455V218M430 92V270M160 224V270"/></g>
    <text x="280" y="288" fill="currentColor" fontSize="9" textAnchor="middle" fontFamily="monospace">TELEMETRY BUS / MQTT / GEOSPATIAL STATE</text>
  </DrawingFrame>
}

function MolsDrawing() {
  const boxes = [{x:22,t:"WAREHOUSE"},{x:158,t:"INVENTORY"},{x:294,t:"ORDER"},{x:430,t:"TRANSPORT"}]
  return <DrawingFrame label="Logistics operations flow" code="MLS-03">
    <g className={line} strokeWidth="1.5"><path d="M118 142H158M254 142H294M390 142H430" /><path d="M476 178V228H70V178" strokeDasharray="4 4"/></g>
    {boxes.map(({x,t})=><g key={t}><rect x={x} y="105" width="96" height="73" className={node} strokeWidth="1.5"/><path d={`M${x+12} 126H${x+84}M${x+12} 139H${x+70}M${x+12} 152H${x+78}`} className={line} strokeWidth="1"/><text x={x+48} y="95" textAnchor="middle" fill="currentColor" fontSize="9" fontFamily="monospace">{t}</text></g>)}
    <g className={line} strokeWidth="1"><path d="M70 178V228M70 228H280V178M280 228H476"/></g>
    <g fill="currentColor" fontSize="9" fontFamily="monospace"><text x="280" y="250" textAnchor="middle">REST API / POSTGRESQL</text><text x="280" y="265" textAnchor="middle" opacity=".65">STOCK · MOVEMENTS · ASSIGNMENT</text></g>
    <g className={line} strokeWidth="1"><circle cx="138" cy="142" r="3" fill="currentColor"/><circle cx="274" cy="142" r="3" fill="currentColor"/><circle cx="410" cy="142" r="3" fill="currentColor"/></g>
  </DrawingFrame>
}

function CreaturesDrawing() {
  return <DrawingFrame label="Procedural creature rig study" code="CRT-04">
    <g className={line} strokeWidth="1.2">
      <path d="M95 220L155 165L225 150L300 170L365 150L430 175L470 220"/>
      <path d="M155 165L135 110L180 75L235 105L225 150M300 170L280 230L245 258M365 150L390 95L435 112L430 175M225 150L210 220L175 255M365 150L385 220L420 250"/>
      <path d="M95 220H470M95 220L80 240M470 220L485 240" strokeDasharray="3 4"/>
      <path d="M155 165L180 75L235 105L300 170L390 95L435 112" strokeDasharray="4 4" opacity=".55"/>
    </g>
    <g fill="currentColor"><circle cx="155" cy="165" r="4"/><circle cx="225" cy="150" r="4"/><circle cx="300" cy="170" r="4"/><circle cx="365" cy="150" r="4"/><circle cx="430" cy="175" r="4"/><circle cx="180" cy="75" r="3"/><circle cx="390" cy="95" r="3"/></g>
    <g fill="currentColor" fontSize="9" fontFamily="monospace"><text x="35" y="42">SKELETAL GRAPH</text><text x="390" y="42">PROCEDURAL MESH</text><text x="280" y="285" textAnchor="middle">KINEMATICS / TERRAIN ADAPTATION / PHYSICS-DRIVEN MOTION</text></g>
    <g className={line} strokeWidth="1"><path d="M155 165L90 95H35M390 95L455 65H525" strokeDasharray="3 4"/></g>
  </DrawingFrame>
}


function KaloDrawing() {
  return <DrawingFrame label="Meal logging and nutrition pipeline" code="KAL-05">
    <g className={line} strokeWidth="1.4">
      <rect x="25" y="105" width="100" height="82"/><rect x="160" y="105" width="100" height="82"/><rect x="295" y="105" width="100" height="82"/><rect x="430" y="105" width="105" height="82"/>
      <path d="M125 146H160M260 146H295M395 146H430"/>
      <path d="M75 187V230H345V187" strokeDasharray="4 4"/>
      <circle cx="75" cy="140" r="12"/><path d="M66 140H84M75 131V149M182 130H238M182 145H230M182 160H238M317 130H373M317 145H365M317 160H373M450 130H515M450 145H505M450 160H515"/>
    </g>
    <g fill="currentColor" fontSize="9" textAnchor="middle" fontFamily="monospace"><text x="75" y="95">MEAL INPUT</text><text x="210" y="95">AI PARSING</text><text x="345" y="95">NUTRITION</text><text x="482" y="95">DAILY LOG</text><text x="210" y="250">TEXT / PHOTO ENTRY</text></g>
  </DrawingFrame>
}

function PulseDrawing() {
  return <DrawingFrame label="News aggregation and filtering flow" code="PLS-06">
    <g className={line} strokeWidth="1.4">
      <rect x="35" y="65" width="115" height="55"/><rect x="35" y="145" width="115" height="55"/><rect x="220" y="105" width="120" height="75"/><rect x="410" y="105" width="115" height="75"/>
      <path d="M150 92H185V142H220M150 172H185V142M340 142H410"/>
      <path d="M230 123H330M230 140H315M230 157H325M420 123H515M420 140H505M420 157H515"/>
    </g>
    <g fill="currentColor" fontSize="9" textAnchor="middle" fontFamily="monospace"><text x="92" y="55">NEWS SOURCES</text><text x="92" y="135">RSS / WEB FEEDS</text><text x="280" y="95">FILTER + RANK</text><text x="467" y="95">STORY FEED</text><text x="280" y="220">AI-ASSISTED SUMMARIES</text></g>
    <g className={line} strokeWidth="1"><path d="M280 180V202H467V180" strokeDasharray="3 4"/></g>
  </DrawingFrame>
}

function GenericDrawing({ project }: { project: Project }) {
  return <DrawingFrame label="Application system overview" code={`APP-${project.index}`}>
    <g className={line} strokeWidth="1.4">
      <rect x="55" y="80" width="130" height="135"/><rect x="215" y="80" width="130" height="135"/><rect x="375" y="80" width="130" height="135"/>
      <path d="M185 147H215M345 147H375"/>
      <path d="M75 112H165M75 130H145M75 148H155M235 112H325M235 130H305M235 148H315M395 112H485M395 130H465M395 148H475"/>
    </g>
    <g fill="currentColor" fontSize="10" textAnchor="middle" fontFamily="monospace"><text x="120" y="65">INPUT</text><text x="280" y="65">PROCESSING</text><text x="440" y="65">OUTPUT</text></g>
  </DrawingFrame>
}

export default function ProjectDiagram({ project }: { project: Project }) {
  switch (project.id) {
    case 'mhforever': return <MHForeverDrawing />
    case 'swarmhq': return <SwarmDrawing />
    case 'mols': return <MolsDrawing />
    case 'creatures': return <CreaturesDrawing />
    case 'kalo': return <KaloDrawing />
    case 'pulse': return <PulseDrawing />
    default: return <GenericDrawing project={project} />
  }
}
