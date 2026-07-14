'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'
import createGlobe from 'cobe'
import { cn } from '@/lib/utils'

export function Globe({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null)
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    let phi = 0
    const opts: any = {
      devicePixelRatio: 2,
      width: 1000,
      height: 1000,
      phi: 0,
      theta: 0.3,
      dark: isDark ? 1 : 0,
      diffuse: 1.2,
      scale: 1.1,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.13, 0.13, 0.2],
      markerColor: [0.13, 0.82, 0.93],
      glowColor: [0.13, 0.82, 0.93],
      offset: [0, 0],
      markers: [
        { location: [37.5665, 126.978], size: 0.05 },
        { location: [51.5074, -0.1278], size: 0.05 },
        { location: [40.7128, -74.006], size: 0.05 },
        { location: [35.6762, 139.6503], size: 0.05 },
        { location: [1.3521, 103.8198], size: 0.05 },
      ],
      onRender: (state: any) => {
        state.phi = phi
        phi += 0.003
      },
    }
    const globe = createGlobe(canvas, opts)

    globeRef.current = globe
    return () => globe.destroy()
  }, [])

  useEffect(() => {
    globeRef.current?.update({ dark: isDark ? 1 : 0 })
  }, [isDark])

  return (
    <canvas
      ref={canvasRef}
      className={cn(
        'pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 opacity-60 md:h-[700px] md:w-[700px]',
        className
      )}
    />
  )
}
