'use client'
import Image from 'next/image'
import { useState } from 'react'
import { MENU_DATA, MENU_SECTIONS } from '@/data/menu'
import { useCartStore } from '@/store/useCartStore'

function StarRating({ stars }: { stars: number }) {
  return (
    <div className="flex text-[#D4870A]">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className={`w-4 h-4 fill-current ${i > stars ? 'opacity-30' : ''}`}
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
    </div>
  )
}

export default function MenuGrid() {
  const { addItem } = useCartStore()
  const [addedItems, setAddedItems] = useState<string[]>([])

  const handleAddToCart = (item: typeof MENU_DATA[0]) => {
    addItem({
      id:         item.id,
      name:       item.name,
      price:      item.price,
      priceLabel: item.priceLabel,
      image:      item.image,
    })
    setAddedItems((prev) => [...prev, item.id])
    setTimeout(() => {
      setAddedItems((prev) => prev.filter((id) => id !== item.id))
    }, 1500)
  }

  return (
    <main className="container mx-auto px-4 py-12">
      {MENU_SECTIONS.map((section) => {
        const items = MENU_DATA.filter((item) => item.category === section.id)
        if (items.length === 0) return null

        return (
          <section key={section.id} className="mb-16" id={section.id}>
            <h2
              className="text-3xl text-[#6B1E2E] mb-8 border-l-4 border-[#D4870A] pl-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {section.label}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md group hover:shadow-xl transition-shadow border border-gray-100 flex flex-col"
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <span
                      className="absolute top-4 right-4 bg-[#6B1E2E] text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {item.priceLabel}
                    </span>
                    {item.badge && (
                      <span
                        className="absolute top-4 left-4 bg-[#D4870A] text-white px-3 py-1 rounded-full text-xs font-bold"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      >
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex items-center mb-2">
                      <StarRating stars={item.stars} />
                      <span
                        className="text-gray-400 text-xs ml-2"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      >
                        ({item.reviews} reviews)
                      </span>
                    </div>
                    <h3
                      className="text-xl font-bold text-gray-800 mb-2"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {item.name}
                    </h3>
                    <p
                      className="text-gray-600 text-sm mb-6 flex-grow"
                      style={{ fontFamily: 'Lora, serif' }}
                    >
                      {item.description}
                    </p>
                    <button
                      onClick={() => handleAddToCart(item)}
                      className={`w-full py-3 font-bold rounded transition-colors uppercase text-sm tracking-wider
                        ${addedItems.includes(item.id)
                          ? 'bg-green-500 text-white'
                          : 'bg-[#6B1E2E] text-white hover:bg-black'
                        }`}
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {addedItems.includes(item.id) ? '✓ Added!' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )
      })}
    </main>
  )
}