import { Flag } from 'lucide-react'
import { PlaceholderPage } from '@/components/placeholder-page'

export const metadata = { title: 'Campeonato' }

export default function CampeonatoPage() {
  return (
    <PlaceholderPage
      icon={Flag}
      title="Campeonato"
      description="Tabela geral, pontuação, vitórias, pódios, poles, melhores voltas e gráficos com filtros e busca. Disponível em breve."
    />
  )
}
