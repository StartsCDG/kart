import { Gauge } from 'lucide-react'
import { PlaceholderPage } from '@/components/placeholder-page'

export const metadata = { title: 'Administração' }

export default function AdminPage() {
  return (
    <PlaceholderPage
      icon={Gauge}
      title="Painel Administrativo"
      description="Gerenciamento completo de pilotos, etapas, liga, feed, avaliações, sugestões e pontuação, com controle de permissões. Em construção."
    />
  )
}
