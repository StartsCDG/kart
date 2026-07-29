import Link from 'next/link'
import { MapPin, Clock, ChevronRight } from 'lucide-react'
import { Countdown } from './countdown'
import { nextStage } from '@/lib/mock-data'

export function NextStage() {
  return (
    <section className="glass relative overflow-hidden rounded-3xl p-6 sm:p-8">
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />

      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-primary/15 px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Próxima etapa
            </span>
            <span className="font-mono text-xs text-muted-foreground">Rodada {nextStage.round}</span>
          </div>

          <h2 className="mt-3 text-balance font-display text-2xl font-bold sm:text-3xl">
            {nextStage.name}
          </h2>

          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
              {nextStage.city}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
              Largada às {nextStage.time}
            </span>
          </div>

          <Link
            href="/etapas"
            className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-foreground"
          >
            Ver detalhes da etapa
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="w-full max-w-sm lg:w-72">
          <Countdown daysAhead={nextStage.daysAhead} hoursAhead={nextStage.hoursAhead} />
        </div>
      </div>
    </section>
  )
}
