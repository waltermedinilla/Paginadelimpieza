'use client'

import { useEffect, useRef, useState } from 'react'

export default function GlowingDivider({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [phase, setPhase] = useState<'none' | 'near' | 'full'>('none')

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        if (entry.intersectionRatio >= 0.3) {
          setPhase('full')
          observer.disconnect()
        } else {
          setPhase('near')
        }
      },
      { threshold: [0, 0.1, 0.3, 0.5] }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (phase !== 'full') return
    const timer = setTimeout(() => setPhase('none'), 4000)
    return () => clearTimeout(timer)
  }, [phase])

  return (
    <div
      ref={ref}
      className={`gold-divider ${className}`}
      style={{
        transition: 'box-shadow 1.2s ease, width 1.2s ease',
        boxShadow:
          phase === 'full'
            ? '0 0 30px var(--accent-gold), 0 0 60px rgba(var(--accent-gold-rgb), 0.4), 0 0 90px rgba(var(--accent-gold-rgb), 0.2)'
            : phase === 'near'
              ? '0 0 12px rgba(var(--accent-gold-rgb), 0.3)'
              : 'none',
        width: phase === 'full' ? '120px' : '60px',
      }}
    />
  )
}
