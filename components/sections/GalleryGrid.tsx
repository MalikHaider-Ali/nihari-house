'use client'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { GALLERY_ITEMS, GalleryItem } from '@/data/gallery'
import GalleryHero from './GalleryHero'

type FilterType = 'all' | 'food' | 'restaurant' | 'events'

export default function GalleryGrid() {
  const [activeFilter, setActiveFilter]   = useState<FilterType>('all')
  const [lightbox, setLightbox]           = useState<GalleryItem | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const filtered = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter)

  const openLightbox = (item: GalleryItem) => {
    const idx = filtered.findIndex((i) => i.id === item.id)
    setLightboxIndex(idx)
    setLightbox(item)
  }

  const prevImage = useCallback(() => {
    const newIdx = (lightboxIndex - 1 + filtered.length) % filtered.length
    setLightboxIndex(newIdx)
    setLightbox(filtered[newIdx])
  }, [lightboxIndex, filtered])

  const nextImage = useCallback(() => {
    const newIdx = (lightboxIndex + 1) % filtered.length
    setLightboxIndex(newIdx)
    setLightbox(filtered[newIdx])
  }, [lightboxIndex, filtered])

  useEffect(() => {
    if (!lightbox) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft')  prevImage()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'Escape')     setLightbox(null)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightbox, prevImage, nextImage])

  useEffect(() => {
    document.body.style.overflow = lightbox ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  return (
    <>
      <GalleryHero active={activeFilter} onFilter={setActiveFilter} />

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="relative group overflow-hidden rounded-xl break-inside-avoid cursor-pointer"
            onClick={() => openLightbox(item)}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={600}
              height={400}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#6B1E2E]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3
                className="text-white text-xl font-bold"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {item.title}
              </h3>
              <p
                className="text-white/80 text-sm"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                {item.desc}
              </p>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur rounded-full p-2">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-12 right-0 text-white hover:text-[#D4870A] transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image */}
            <div className="relative w-full rounded-2xl overflow-hidden">
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[75vh] object-contain"
                priority
              />
            </div>

            {/* Caption */}
            <div className="mt-4 text-center">
              <h3
                className="text-white text-xl font-bold"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {lightbox.title}
              </h3>
              <p
                className="text-white/60 text-sm mt-1"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                {lightbox.desc}
              </p>
              <p
                className="text-white/40 text-xs mt-2"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                {lightboxIndex + 1} / {filtered.length}
              </p>
            </div>

            {/* Prev */}
            <button
              onClick={prevImage}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-[#D4870A] text-white rounded-full flex items-center justify-center shadow-xl hover:bg-[#F5C842] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next */}
            <button
              onClick={nextImage}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-[#D4870A] text-white rounded-full flex items-center justify-center shadow-xl hover:bg-[#F5C842] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M9 5l7 7-7 7" />
              </svg>
            </button>

          </div>
        </div>
      )}
    </>
  )
}