'use client'

type FilterType = 'all' | 'food' | 'restaurant' | 'events'

type Props = {
  active: FilterType
  onFilter: (f: FilterType) => void
}

const filters: { label: string; value: FilterType }[] = [
  { label: 'All',        value: 'all'        },
  { label: 'Food',       value: 'food'       },
  { label: 'Restaurant', value: 'restaurant' },
  { label: 'Events',     value: 'events'     },
]

export default function GalleryHero({ active, onFilter }: Props) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
      <div className="max-w-2xl">
        <h1
          className="text-5xl md:text-6xl font-bold text-slate-900 mb-4"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Our Gallery
        </h1>
        <p
          className="text-lg text-slate-600 font-light leading-relaxed"
          style={{ fontFamily: 'Lora, serif' }}
        >
          A curated visual journey through the rich heritage and vibrant
          flavors of authentic Pakistani cuisine.
        </p>
      </div>
      <div className="flex flex-wrap gap-2 pb-2 w-full md:w-auto">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => onFilter(f.value)}
            className={`flex h-10 shrink-0 items-center justify-center rounded-full px-6 text-sm font-bold transition-all
              ${active === f.value
                ? 'bg-[#6B1E2E] text-white shadow-md'
                : 'bg-[#6B1E2E]/10 text-[#6B1E2E] hover:bg-[#6B1E2E]/20'
              }`}
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            {f.label}
          </button>
        ))}
      </div>
    </div>
  )
}