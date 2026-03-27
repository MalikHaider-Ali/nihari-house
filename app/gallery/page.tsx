import GalleryGrid from '@/components/sections/GalleryGrid'
import GallerySocial from '@/components/sections/GallerySocial'

export default function GalleryPage() {
  return (
    <main className="max-w-7xl mx-auto w-full px-6 py-12">
      <GalleryGrid />
      <GallerySocial />
    </main>
  )
}