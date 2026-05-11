import { useEffect, useRef } from 'react'

const AnimatedBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const ctx = canvas.getContext('2d')
    if (!ctx) return undefined

    let width = 0
    let height = 0
    let rafId = 0
    const dpr = window.devicePixelRatio || 1

    const rootStyles = getComputedStyle(document.documentElement)
    const primary = rootStyles.getPropertyValue('--wave-primary').trim() || '59, 130, 246'
    const secondary = rootStyles.getPropertyValue('--wave-secondary').trim() || '34, 211, 238'
    const tertiary = rootStyles.getPropertyValue('--wave-tertiary').trim() || '99, 102, 241'

    const layers = [
      { color: primary, amplitude: 26, frequency: 1.4, speed: 0.18, offsetY: 0.36, opacity: 0.35, lines: 7 },
      { color: secondary, amplitude: 22, frequency: 1.2, speed: 0.14, offsetY: 0.44, opacity: 0.28, lines: 6 },
      { color: tertiary, amplitude: 18, frequency: 1.1, speed: 0.1, offsetY: 0.52, opacity: 0.22, lines: 5 },
      { color: primary, amplitude: 12, frequency: 1.6, speed: 0.08, offsetY: 0.3, opacity: 0.18, lines: 4 },
    ]

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const createEdgeGradient = (color, alpha) => {
      const gradient = ctx.createLinearGradient(0, 0, width, 0)
      gradient.addColorStop(0, `rgba(${color}, 0)`)
      gradient.addColorStop(0.08, `rgba(${color}, ${alpha})`)
      gradient.addColorStop(0.92, `rgba(${color}, ${alpha})`)
      gradient.addColorStop(1, `rgba(${color}, 0)`)
      return gradient
    }

    const drawLayer = (time, layer) => {
      const baseY = height * layer.offsetY
      const lineGap = 6
      const lineOffsetStart = -((layer.lines - 1) * lineGap) / 2
      const drift = Math.sin(time * 0.3) * 6
      const verticalOsc = Math.sin(time * 0.6) * 3
      const gradient = createEdgeGradient(layer.color, layer.opacity)

      ctx.strokeStyle = gradient
      ctx.lineWidth = 1
      ctx.shadowBlur = 6
      ctx.shadowColor = `rgba(${layer.color}, ${layer.opacity * 0.6})`

      for (let i = 0; i < layer.lines; i += 1) {
        const lineOffset = lineOffsetStart + i * lineGap
        ctx.beginPath()
        const phase = time * layer.speed + i * 0.35
        const step = 10
        for (let x = 0; x <= width; x += step) {
          const progress = (x + drift) / width
          const y = baseY + lineOffset + verticalOsc + Math.sin(progress * layer.frequency * Math.PI * 2 + phase) * layer.amplitude
          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.stroke()
      }
    }

    const render = (timeMs) => {
      const time = timeMs / 1000
      ctx.clearRect(0, 0, width, height)
      ctx.globalCompositeOperation = 'source-over'

      layers.forEach((layer) => {
        drawLayer(time, layer)
      })

      rafId = requestAnimationFrame(render)
    }

    resize()
    window.addEventListener('resize', resize)
    rafId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      />
    </div>
  )
}

export default AnimatedBackground
