import { Users } from 'lucide-react'
import { PlaceholderPage } from '@/components/placeholder-page'

export const metadata = { title: 'Pilotos' }

export default function PilotosPage() {
  return (
    <PlaceholderPage
      icon={Users}
      title="Pilotos"
      description="Grid de pilotos com perfis completos no estilo Instagram: conquistas, estatísticas, avaliações e biografia. Em construção."
    />
  )
}
