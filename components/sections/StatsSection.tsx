'use client'
import { useEffect, useRef, useState } from 'react'

const stats = [
  { target: 1987,  label: 'Established',     suffix: ''  },
  { target: 50000, label: 'Customers Served', suffix: '+' },
  { target: 12,    label: 'Secret Spices',    suffix: ''  },
  { target: 24,    label: 'Hours Simmering',  suffix: ''  },
]

function AnimatedCounter({
  target,
  suffix,
}: {
  target: number
  suffix: string
}) {
  const [count, setCount]     = useState(0)
  const [started, setStarted] = useState(false)
  const ref                   = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true)
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    let current = 0
    const step  = Math.ceil(target / 80)
    const timer = setInterval(() => {
      current += step
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(current)
      }
    }, 20)
    return () => clearInterval(timer)
  }, [started, target])

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {started && count >= target ? suffix : ''}
    </span>
  )
}

export default function StatsSection() {
  return (
    <section className="bg-[#6B1E2E] py-16 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div
                className="text-4xl md:text-5xl font-bold text-[#D4870A] mb-2"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                <AnimatedCounter
                  target={stat.target}
                  suffix={stat.suffix}
                />
              </div>
              <span
                className="uppercase tracking-widest text-sm text-white/80"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}