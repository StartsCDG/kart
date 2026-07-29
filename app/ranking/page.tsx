import { Trophy } from 'lucide-react'
import { PlaceholderPage } from '@/components/placeholder-page'

export const metadata = { title: 'Ranking' }

export default function RankingPage() {
  return (
    <PlaceholderPage
      icon={Trophy}
      title="Ranking Inteligente"
      description="Classificação baseada em avaliações entre pilotos, pontuação, vitórias, pódios e regularidade — geral, por temporada e histórico. Em breve."
    />
  )
}
