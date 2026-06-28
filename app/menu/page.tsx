'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { MENU_DATA, MENU_SECTIONS } from '@/data/menu'
import DishCard from '@/components/DishCard'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('breakfast')

  return (
    <div className="min-h-screen bg-cream">

      {/* HERO */}
      <section className="bg-burgundy py-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-dm text-saffron text-[13px] uppercase tracking-[4px] mb-3">Explore Our</p>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-4">Our Menu</h1>
          <p className="font-lora text-white/70 text-[16px] max-w-xl mx-auto">
            A curated collection of time-honored recipes, slow-cooked to perfection
            using traditional Mughlai techniques.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 font-dm text-[13px] text-white/50">
            <span>Home</span><span>/</span>
            <span className="text-saffron">Menu</span>
          </div>
        </motion.div>
      </section>

      {/* STICKY CATEGORY TABS */}
      <div className="sticky top-[72px] z-30 bg-cream/95 backdrop-blur-sm border-b border-border py-3 px-4">
        <div className="max-w-6xl mx-auto overflow-x-auto">
          <div className="flex items-center gap-2 w-max mx-auto">
            {MENU_SECTIONS.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => setActiveCategory(section.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className={`font-dm text-[13px] font-semibold px-4 py-2 rounded-full whitespace-nowrap transition-all
                  ${activeCategory === section.id
                    ? 'bg-saffron text-white shadow-sm'
                    : 'bg-white text-charcoal border border-border hover:border-saffron'
                  }`}
              >
                {section.label}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* MENU SECTIONS */}
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-16">
        {MENU_SECTIONS.map((section) => {
          const items = MENU_DATA.filter((item) => item.category === section.id)
          return (
            <div key={section.id} id={section.id}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4 mb-6"
              >
                <div className="w-1 h-8 bg-saffron rounded-full" />
                <h2 className="font-playfair text-[28px] md:text-[32px] font-bold text-burgundy">
                  {section.label}
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {items.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                  >
                    <DishCard
                      id={item.id}
                      name={item.name}
                      price={item.price}
                      image={item.image}
                      stars={item.stars}
                      category={item.category}
                      description={item.description}
                      isBestSeller={item.badge === 'Best Seller'}
                      isPopular={item.badge === 'Popular'}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      <WhatsAppFloat />
    </div>
  )
}