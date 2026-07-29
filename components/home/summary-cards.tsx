'use client'

import { motion } from 'motion/react'
import { Users, CalendarDays, Crown, Timer } from 'lucide-react'
import { championshipSummary } from '@/lib/mock-data'

const cards = [
  {
    label: 'Pilotos',
    value: String(championshipSummary.totalDrivers),
    hint: 'Inscritos na temporada',
    icon: Users,
    tone: 'primary' as const,
  },
  {
    label: 'Etapas',
    value: String(championshipSummary.totalStages),
    hint: '8 concluídas · 4 restantes',
    icon: CalendarDays,
    tone: 'default' as const,
  },
  {
    label: 'Melhor piloto',
    value: championshipSummary.bestDriver,
    hint: 'Líder do campeonato',
    icon: Crown,
    tone: 'default' as const,
    small: true,
  },
  {
    label: 'Melhor volta',
    value: championshipSummary.bestLap,
    hint: `Por ${championshipSummary.bestLapDriver}`,
    icon: Timer,
    tone: 'red' as const,
    mono: true,
  },
]

export function SummaryCards() {
  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {cards.map((card, i) => {
        const Icon = card.icon
        return (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="glass relative overflow-hidden rounded-2xl p-4"
          >
            <div
              className={[
                'mb-3 flex h-9 w-9 items-center justify-center rounded-lg',
                card.tone === 'primary'
                  ? 'bg-primary/15 text-primary'
                  : card.tone === 'red'
                    ? 'bg-destructive/15 text-destructive'
                    : 'bg-accent text-foreground',
              ].join(' ')}
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">{card.label}</p>
            <p
              className={[
                'mt-1 font-bold leading-tight',
                card.small ? 'text-base' : 'text-xl sm:text-2xl',
                card.mono ? 'font-mono tabular-nums' : 'font-display',
              ].join(' ')}
            >
              {card.value}
            </p>
            <p className="mt-1 text-[11px] text-muted-foreground">{card.hint}</p>
          </motion.div>
        )
      })}
    </div>
  )
}
