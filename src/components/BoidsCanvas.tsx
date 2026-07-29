import { useEffect, useRef } from 'react'

interface Boid {
  x: number
  y: number
  vx: number
  vy: number
  bidding: boolean
}

interface Task {
  x: number
  y: number
  claimedBy: number | null
  age: number
}

const BOID_COUNT = 22
const MAX_SPEED = 1.35
const NEIGHBOR_RADIUS = 46
const SEPARATION_RADIUS = 16
const TASK_RADIUS = 10
const TASK_INTERVAL_MS = 2600

// Real boids flocking (separation + alignment + cohesion) with a lightweight
// task-auction layer on top: the nearest idle boid "bids" on each task by
// steering toward it until it's claimed, same model as SwarmHQ's coordinator.
export default function BoidsCanvas({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = 0
    let height = 0
    let dpr = Math.min(window.devicePixelRatio || 1, 2)

    const boids: Boid[] = Array.from({ length: BOID_COUNT }, () => ({
      x: Math.random() * 300,
      y: Math.random() * 200,
      vx: (Math.random() - 0.5) * MAX_SPEED,
      vy: (Math.random() - 0.5) * MAX_SPEED,
      bidding: false,
    }))

    const tasks: Task[] = []
    let lastTaskSpawn = 0

    function resize() {
      if (!canvas) return
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(canvas)
    resize()

    function spawnTask(now: number) {
      if (now - lastTaskSpawn < TASK_INTERVAL_MS || tasks.length >= 2) return
      lastTaskSpawn = now
      tasks.push({
        x: 24 + Math.random() * (width - 48),
        y: 24 + Math.random() * (height - 48),
        claimedBy: null,
        age: 0,
      })
    }

    function runAuction() {
      for (const task of tasks) {
        if (task.claimedBy !== null) continue
        let winner = -1
        let bestDist = Infinity
        boids.forEach((b, i) => {
          if (b.bidding) return
          const d = Math.hypot(b.x - task.x, b.y - task.y)
          if (d < bestDist) {
            bestDist = d
            winner = i
          }
        })
        if (winner !== -1) {
          task.claimedBy = winner
          boids[winner].bidding = true
        }
      }
    }

    function step() {
      for (let i = 0; i < boids.length; i++) {
        const b = boids[i]
        let sepX = 0
        let sepY = 0
        let aliX = 0
        let aliY = 0
        let cohX = 0
        let cohY = 0
        let neighbors = 0

        for (let j = 0; j < boids.length; j++) {
          if (i === j) continue
          const o = boids[j]
          const dx = b.x - o.x
          const dy = b.y - o.y
          const d = Math.hypot(dx, dy)
          if (d < NEIGHBOR_RADIUS && d > 0) {
            neighbors++
            aliX += o.vx
            aliY += o.vy
            cohX += o.x
            cohY += o.y
            if (d < SEPARATION_RADIUS) {
              sepX += dx / d
              sepY += dy / d
            }
          }
        }

        if (neighbors > 0) {
          aliX /= neighbors
          aliY /= neighbors
          cohX = cohX / neighbors - b.x
          cohY = cohY / neighbors - b.y
        }

        b.vx += sepX * 0.05 + aliX * 0.02 + cohX * 0.0006
        b.vy += sepY * 0.05 + aliY * 0.02 + cohY * 0.0006

        if (b.bidding) {
          const task = tasks.find((t) => t.claimedBy === i)
          if (task) {
            const dx = task.x - b.x
            const dy = task.y - b.y
            const d = Math.hypot(dx, dy)
            if (d < TASK_RADIUS) {
              tasks.splice(tasks.indexOf(task), 1)
              b.bidding = false
            } else {
              b.vx += (dx / d) * 0.12
              b.vy += (dy / d) * 0.12
            }
          } else {
            b.bidding = false
          }
        }

        const speed = Math.hypot(b.vx, b.vy)
        if (speed > MAX_SPEED) {
          b.vx = (b.vx / speed) * MAX_SPEED
          b.vy = (b.vy / speed) * MAX_SPEED
        }

        b.x += b.vx
        b.y += b.vy

        if (b.x < 0) b.x += width
        if (b.x > width) b.x -= width
        if (b.y < 0) b.y += height
        if (b.y > height) b.y -= height
      }
    }

    function draw() {
      if (!ctx) return
      ctx.clearRect(0, 0, width, height)

      ctx.strokeStyle = 'rgba(43, 92, 86, 0.5)'
      ctx.lineWidth = 1
      for (const task of tasks) {
        ctx.beginPath()
        ctx.arc(task.x, task.y, TASK_RADIUS, 0, Math.PI * 2)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(task.x - 4, task.y)
        ctx.lineTo(task.x + 4, task.y)
        ctx.moveTo(task.x, task.y - 4)
        ctx.lineTo(task.x, task.y + 4)
        ctx.stroke()
      }

      for (const b of boids) {
        const angle = Math.atan2(b.vy, b.vx)
        const size = 4.5
        ctx.save()
        ctx.translate(b.x, b.y)
        ctx.rotate(angle)
        ctx.beginPath()
        ctx.moveTo(size, 0)
        ctx.lineTo(-size * 0.8, size * 0.6)
        ctx.lineTo(-size * 0.8, -size * 0.6)
        ctx.closePath()
        ctx.fillStyle = b.bidding ? '#A63A2E' : '#1C1F1D'
        ctx.fill()
        ctx.restore()
      }
    }

    let raf = 0
    function loop(now: number) {
      spawnTask(now)
      runAuction()
      step()
      draw()
      raf = requestAnimationFrame(loop)
    }

    if (prefersReducedMotion) {
      step()
      draw()
    } else {
      raf = requestAnimationFrame(loop)
    }

    return () => {
      cancelAnimationFrame(raf)
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      role="img"
      aria-label="Live boids flocking simulation with task-auction coordination"
    />
  )
}
