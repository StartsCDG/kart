'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { Zap, ChevronRight } from 'lucide-react'

export function HeroBanner() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-3xl border border-border"
    >
      <div className="relative h-[420px] w-full sm:h-[460px]">
        <Image
          src="/hero-kart.png"
          alt="Karts disputando corrida noturna"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 1100px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
      </div>

      <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-destructive/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-destructive ring-1 ring-destructive/30"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-destructive" />
          Temporada 2026 ao vivo
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="max-w-2xl text-balance font-display text-4xl font-bold leading-none tracking-tight sm:text-6xl"
        >
          A elite do kart <span className="text-gradient-blue">em uma só pista</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="mt-3 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base"
        >
          Ranking inteligente, etapas oficiais e a disputa mais acirrada da temporada.
          Acompanhe cada volta, cada pódio e cada recorde.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="mt-6 flex flex-wrap gap-3"
        >
          <Link
            href="/campeonato"
            className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] glow-blue"
          >
            <Zap className="h-4 w-4" aria-hidden="true" />
            Ver campeonato
          </Link>
          <Link
            href="/etapas"
            className="glass inline-flex min-h-11 items-center gap-2 rounded-xl px-5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
          >
            Próximas etapas
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  )
}
