'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { Trophy } from 'lucide-react'
import { latestWinners } from '@/lib/mock-data'
import { SectionHeader } from './section-header'

export function LatestWinners() {
  return (
    <section>
      <SectionHeader
        title="Últimos vencedores"
        subtitle="Quem subiu ao lugar mais alto do pódio"
        href="/campeonato"
        actionLabel="Ver resultados"
      />

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {latestWinners.map((winner, i) => (
          <motion.article
            key={winner.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="group relative overflow-hidden rounded-2xl border border-border"
          >
            <div className="relative h-44 w-full">
              <Image
                src={winner.photo}
                alt={`${winner.driver} vencedor da ${winner.stage}`}
                fill
                sizes="(max-width: 640px) 100vw, 360px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary glow-blue">
                <Trophy className="h-4 w-4 text-primary-foreground" aria-hidden="true" />
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-4">
              <p className="text-xs text-muted-foreground">{winner.date}</p>
              <p className="font-display text-lg font-bold leading-tight">{winner.driver}</p>
              <p className="truncate text-xs text-muted-foreground">{winner.stage}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
