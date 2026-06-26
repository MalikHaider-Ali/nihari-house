'use client'
import { useState } from 'react'

const categories = [
  { label: 'Breakfast',      href: '#breakfast' },
  { label: 'Nihari & Paye',  href: '#nihari'    },
  { label: 'Biryani & Rice', href: '#biryani'   },
  { label: 'Karahi',         href: '#karahi'    },
  { label: 'BBQ',            href: '#bbq'       },
  { label: 'Breads',         href: '#breads'    },
  { label: 'Drinks',         href: '#drinks'    },
  { label: 'Desserts',       href: '#desserts'  },
]

export default function CategoryTabs() {
  const [active, setActive] = useState('Nihari & Paye')

  return (
    <div className="sticky-tabs bg-[#FDF6EC] border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto py-4 space-x-4 hide-scrollbar whitespace-nowrap items-center">
          {categories.map((cat) => (
            <a
              key={cat.label}
              href={cat.href}
              onClick={() => setActive(cat.label)}
              className={`px-6 py-2 rounded-full border font-medium transition-colors
                ${active === cat.label
                  ? 'bg-[#D4870A] border-[#D4870A] text-white font-bold'
                  : 'border-[#6B1E2E] text-[#6B1E2E] hover:bg-[#D4870A] hover:border-[#D4870A] hover:text-white'
                }`}
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              {cat.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}