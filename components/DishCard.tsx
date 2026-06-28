'use client'
import { motion } from 'framer-motion'
import { useCartStore } from '@/store/useCartStore'

type DishCardProps = {
  id: string
  name: string
  price: number
  image: string
  stars?: number
  category: string
  description?: string
  isBestSeller?: boolean
  isPopular?: boolean
}

export default function DishCard({ id, name, price, image, stars, description, isBestSeller, isPopular }: DishCardProps) {
  const { addItem, openCart } = useCartStore()

  const handleAdd = () => {
    addItem({ id, name, price, priceLabel: `PKR ${price}`, image })
    openCart()
  }

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl overflow-hidden border border-border shadow-sm flex flex-col"
    >
      <div className="relative h-44 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        {isBestSeller && (
          <span className="absolute top-2 left-2 bg-burgundy text-white font-dm text-[11px] font-semibold px-2 py-1 rounded-full">
            Best Seller
          </span>
        )}
        {isPopular && !isBestSeller && (
          <span className="absolute top-2 left-2 bg-saffron text-white font-dm text-[11px] font-semibold px-2 py-1 rounded-full">
            Popular
          </span>
        )}
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-playfair text-[16px] font-bold text-charcoal mb-1">{name}</h3>
        {description && (
          <p className="font-dm text-[13px] text-muted line-clamp-2 mb-3">{description}</p>
        )}
        <div className="mt-auto flex items-center justify-between">
          <span className="font-dm text-[15px] font-bold text-saffron">PKR {price}</span>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleAdd}
            className="bg-burgundy text-white font-dm text-[13px] font-semibold px-4 py-2 rounded-full"
          >
            Add +
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}