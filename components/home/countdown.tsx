'use client'

import { useEffect, useState } from 'react'

function getTarget(daysAhead: number, hoursAhead: number) {
  const target = new Date()
  target.setDate(target.getDate() + daysAhead)
  target.setHours(target.getHours() + hoursAhead, 0, 0, 0)
  return target
}

function diff(target: Date) {
  const total = Math.max(0, target.getTime() - Date.now())
  return {
    days: Math.floor(total / (1000 * 60 * 60 * 24)),
    hours: Math.floor((total / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((total / (1000 * 60)) % 60),
    seconds: Math.floor((total / 1000) % 60),
  }
}

export function Countdown({
  daysAhead,
  hoursAhead,
}: {
  daysAhead: number
  hoursAhead: number
}) {
  const [target] = useState(() => getTarget(daysAhead, hoursAhead))
  const [time, setTime] = useState(() => diff(target))
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const id = setInterval(() => setTime(diff(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  const units = [
    { label: 'Dias', value: time.days },
    { label: 'Horas', value: time.hours },
    { label: 'Min', value: time.minutes },
    { label: 'Seg', value: time.seconds },
  ]

  return (
    <div className="grid grid-cols-4 gap-2">
      {units.map((unit) => (
        <div
          key={unit.label}
          className="glass flex flex-col items-center rounded-xl px-2 py-3"
        >
          <span className="font-mono text-2xl font-bold tabular-nums text-foreground sm:text-3xl">
            {mounted ? String(unit.value).padStart(2, '0') : '--'}
          </span>
          <span className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  )
}
