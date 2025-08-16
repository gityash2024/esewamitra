import { useEffect, useRef, useState } from 'react'

export default function CountUp({ from = 0, to = 1000, duration = 1200, formatter = (v) => v.toLocaleString() }) {
  const [val, setVal] = useState(from)
  const rafRef = useRef(0)
  const startRef = useRef(0)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) { setVal(to); return }

    const step = (ts) => {
      if (!startRef.current) startRef.current = ts
      const p = Math.min((ts - startRef.current) / duration, 1)
      const next = Math.floor(from + (to - from) * p)
      setVal(next)
      if (p < 1) rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafRef.current)
  }, [from, to, duration])

  return <span>{formatter(val)}</span>
} 