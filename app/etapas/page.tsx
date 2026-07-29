import { CalendarDays } from 'lucide-react'
import { PlaceholderPage } from '@/components/placeholder-page'

export const metadata = { title: 'Etapas' }

export default function EtapasPage() {
  return (
    <PlaceholderPage
      icon={CalendarDays}
      title="Etapas & Calendário"
      description="Todas as etapas em timeline, com kartódromo, mapa, status e avaliações após a corrida. Em construção."
    />
  )
}
