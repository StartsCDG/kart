import { HeroBanner } from '@/components/home/hero-banner'
import { NextStage } from '@/components/home/next-stage'
import { SummaryCards } from '@/components/home/summary-cards'
import { TopDrivers } from '@/components/home/top-drivers'
import { LatestWinners } from '@/components/home/latest-winners'
import { PhotoGallery } from '@/components/home/photo-gallery'

export default function HomePage() {
  return (
    <div className="space-y-8 sm:space-y-10">
      <HeroBanner />
      <NextStage />
      <SummaryCards />

      <div className="grid gap-8 lg:grid-cols-5 lg:gap-6">
        <div className="lg:col-span-3">
          <TopDrivers />
        </div>
        <div className="lg:col-span-2">
          <LatestWinners />
        </div>
      </div>

      <PhotoGallery />
    </div>
  )
}
