'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { galleryPhotos } from '@/lib/mock-data'
import { SectionHeader } from './section-header'

export function PhotoGallery() {
  return (
    <section>
      <SectionHeader
        title="Últimas fotos"
        subtitle="Bastidores e melhores momentos"
        href="/feed"
        actionLabel="Abrir feed"
      />

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {galleryPhotos.map((photo, i) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="group relative aspect-square overflow-hidden rounded-2xl border border-border"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) 50vw, 280px"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-background/0 transition-colors group-hover:bg-background/20" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
