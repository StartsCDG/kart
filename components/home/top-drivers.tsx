'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { Star, ChevronRight } from 'lucide-react'
import { topDrivers } from '@/lib/mock-data'
import { SectionHeader } from './section-header'

const positionColor = ['text-primary', 'text-foreground', 'text-destructive', 'text-muted-foreground', 'text-muted-foreground']

export function TopDrivers() {
  return (
    <section>
      <SectionHeader
        title="Top 5 pilotos"
        subtitle="Classificação geral da temporada"
        href="/ranking"
        actionLabel="Ranking completo"
      />

      <div className="mt-4 space-y-2.5">
        {topDrivers.map((driver, i) => (
          <motion.div
            key={driver.id}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <Link
              href="/pilotos"
              className="glass group flex items-center gap-3 rounded-2xl p-3 transition-colors hover:bg-accent/60 sm:gap-4 sm:p-4"
            >
              <span
                className={`w-6 shrink-0 text-center font-display text-xl font-bold ${positionColor[i]}`}
              >
                {i + 1}
              </span>

              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-border sm:h-14 sm:w-14">
                <Image
                  src={driver.photo}
                  alt={driver.name}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="truncate font-semibold">{driver.name}</p>
                  <span className="shrink-0 font-mono text-xs text-muted-foreground">#{driver.number}</span>
                </div>
                <p className="truncate text-xs text-muted-foreground">{driver.team}</p>
              </div>

              <div className="hidden items-center gap-1 text-sm sm:flex">
                <Star className="h-4 w-4 fill-primary text-primary" aria-hidden="true" />
                <span className="font-medium tabular-nums">{driver.rating.toFixed(1)}</span>
              </div>

              <div className="text-right">
                <p className="font-display text-lg font-bold leading-none tabular-nums">{driver.points}</p>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">pts</p>
              </div>

              <ChevronRight
                className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
