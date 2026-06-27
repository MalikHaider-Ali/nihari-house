'use client'
import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MENU_DATA, CATEGORIES } from '@/data/menu'
import DishCard from '@/components/DishCard'

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('Breakfast')

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="bg-burgundy py-20 px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="font-dm text-saffron text-[13px] uppercase tracking-[4px] mb-3">Explore Our</p>
          <h1 className="font-playfair text-6xl font-bold text-white mb-4">Our Menu</h1>
          <p className="font-lora text-white/70 text-[16px]">
            A curated collection of time-honored recipes, slow-cooked to perfection
          </p>
        </motion.div>
      </section>

      {/* Category Tabs */}
      <div className="sticky top-[72px] z-30 bg-cream/90 backdrop-blur-sm border-b border-border py-3 px-4 overflow-x-auto">
        <div className="flex items-center gap-2 max-w-6xl mx-auto w-max">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative font-dm text-[13px] font-semibold px-4 py-2 rounded-full whitespace-nowrap transition-all
                ${activeCategory === cat ? 'bg-saffron text-white' : 'bg-white text-charcoal border border-border hover:border-saffron'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Grid */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        {CATEGORIES.map((category) => {
          const items = MENU_DATA.filter((item) => item.category === category)
          return (
            <div key={category} id={category} className="mb-14">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-playfair text-[30px] font-bold text-burgundy mb-6 border-l-4 border-saffron pl-4"
              >
                {category}
              </motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {items.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <DishCard {...item} />
                  </motion.div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}