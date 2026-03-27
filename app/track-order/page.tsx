import TrackHero from '@/components/sections/TrackHero'
import TrackSearch from '@/components/sections/TrackSearch'

export default function TrackOrderPage() {
  return (
    <>
      {/* Hero */}
      <TrackHero />

      {/* Search + Results */}
      <main className="pb-20">
        <TrackSearch />
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-100 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span
            className="text-xl font-bold text-[#6B1E2E]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Nihari House
          </span>
          <span
            className="text-slate-400 text-sm"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            © 2025 All rights reserved.
          </span>
          <div
            className="flex gap-6 text-sm text-slate-500"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            <a href="#" className="hover:text-[#6B1E2E] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#6B1E2E] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}