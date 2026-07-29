import { Shield } from 'lucide-react'
import { PlaceholderPage } from '@/components/placeholder-page'

export const metadata = { title: 'Liga' }

export default function LigaPage() {
  return (
    <PlaceholderPage
      icon={Shield}
      title="Liga"
      description="Dados oficiais da liga: regulamento, patrocinadores, temporada, administração e redes sociais. Em breve."
    />
  )
}
