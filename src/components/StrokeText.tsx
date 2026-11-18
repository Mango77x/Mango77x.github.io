import fontSource from '../assets/NormStroke.svg?raw'

type Glyph = { advance: number; path: string }
const glyphs: Record<string, Glyph> = {}
for (const match of fontSource.matchAll(/<glyph unicode="([^"]+)" horiz-adv-x="([^"]+)" d="([^"]*)"\s*\/>/g)) {
  const character = match[1]
  if (character) glyphs[character] = { advance: Number(match[2]), path: match[3] ?? '' }
}

type StrokeTextProps = { text: string; className?: string; fontSize?: number; maxWidth?: number }

export default function StrokeText({ text, className = '', fontSize = 800, maxWidth = 900 }: StrokeTextProps) {
  const characters = [...text.toUpperCase()]
  const tracking = 72
  let cursor = 0
  const positioned = characters.map((character) => {
    const glyph = glyphs[character] ?? glyphs[' ']
    const advance = glyph?.advance ?? 480
    const item = { character, glyph, x: cursor }
    cursor += advance + tracking
    return item
  })
  const width = Math.max(cursor - tracking, 1)
  const renderedWidth = Math.min(maxWidth, (width / 1000) * fontSize)
  return (
    <svg className={className} viewBox={`0 0 ${width} 1000`} width={renderedWidth} role="img" aria-label={text} xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%', maxWidth: renderedWidth, height: 'auto', overflow: 'visible' }}>
      <g fill="none" stroke="currentColor" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" transform="translate(0 800) scale(1 -1)">
        {positioned.map(({ character, glyph, x }) => glyph?.path ? <path key={`${character}-${x}`} d={glyph.path} transform={`translate(${x} 0)`} /> : null)}
      </g>
    </svg>
  )
}