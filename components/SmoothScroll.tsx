'use client'
import { useEffect, useRef, createContext, useContext } from 'react'
import { useAnimationFrame } from 'framer-motion'

// ── Lenis Type (avoids needing @types package) ────────────────────
type LenisInstance = {
  raf: (time: number) => void
  scrollTo: (target: string | number | HTMLElement, options?: {
    offset?: number
    duration?: number
    easing?: (t: number) => number
    immediate?: boolean
  }) => void
  destroy: () => void
  on: (event: string, callback: () => void) => void
  stop: () => void
  start: () => void
}

// ── Context — lets child components call lenis.scrollTo() ─────────
const LenisContext = createContext<LenisInstance | null>(null)

export const useLenis = () => useContext(LenisContext)

// ── Smooth Scroll Wrapper ─────────────────────────────────────────
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<LenisInstance | null>(null)

  useEffect(() => {
    // Dynamically import Lenis to avoid SSR issues
    const initLenis = async () => {
      const LenisModule = await import('lenis')
      const Lenis = LenisModule.default

      const lenis = new Lenis({
        lerp: 0.08,
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      }) as LenisInstance

      lenisRef.current = lenis
    }

    initLenis()

    return () => {
      lenisRef.current?.destroy()
      lenisRef.current = null
    }
  }, [])

  // Sync Lenis RAF with Framer Motion
  useAnimationFrame((time) => {
    lenisRef.current?.raf(time)
  })

  return (
    <LenisContext.Provider value={lenisRef.current}>
      {children}
    </LenisContext.Provider>
  )
}