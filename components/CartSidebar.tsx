'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { useCartStore } from '@/store/useCartStore'
import { slideInRight, overlayFade } from '@/lib/animations'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function CartSidebar() {
  const { isCartOpen, closeCart, items, removeItem, updateQuantity, subtotal, deliveryFee, total, isEmpty } = useCartStore()
  const router = useRouter()
  const sub = subtotal()

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div {...overlayFade} className="fixed inset-0 bg-black/50 z-[80]" onClick={closeCart} />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-[90] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="font-playfair text-2xl text-burgundy font-bold">Your Order</h2>
              <button onClick={closeCart} className="p-1 hover:text-burgundy text-charcoal transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-6">
              {isEmpty() ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                  <svg className="w-16 h-16 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <p className="font-dm text-muted text-base">Your cart is empty</p>
                  <Link href="/menu" onClick={closeCart}
                    className="bg-saffron text-white font-dm text-sm font-semibold px-6 py-2 rounded-full">
                    Browse our menu
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  <AnimatePresence>
                    {items.map((item) => (
                      <motion.div key={item.id}
                        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                        className="flex gap-3 pb-4 border-b border-border"
                      >
                        <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-dm text-[15px] font-semibold text-charcoal truncate">{item.name}</p>
                          <p className="font-dm text-[14px] text-saffron font-bold">PKR {item.price}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <motion.button whileHover={{ scale: 1.1 }}
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-charcoal text-sm font-bold"
                            >−</motion.button>
                            <span className="font-dm text-[15px] font-semibold text-charcoal w-6 text-center">{item.quantity}</span>
                            <motion.button whileHover={{ scale: 1.1 }}
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-charcoal text-sm font-bold"
                            >+</motion.button>
                            <motion.button whileHover={{ color: '#DC2626' }}
                              onClick={() => removeItem(item.id)}
                              className="ml-auto text-muted transition-colors"
                            >
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Order Summary + Footer */}
            {!isEmpty() && (
              <div className="border-t border-border p-6 space-y-3">
                <div className="flex justify-between font-dm text-[14px] text-charcoal">
                  <span>Subtotal</span><span>PKR {sub}</span>
                </div>
                <div className="flex justify-between font-dm text-[14px] text-charcoal">
                  <span>Delivery Fee</span>
                  <span className={deliveryFee() === 0 ? 'text-success font-semibold' : ''}>
                    {deliveryFee() === 0 ? 'FREE 🎉' : 'PKR 100'}
                  </span>
                </div>
                {sub < 1500 && (
                  <p className="font-dm text-[12px] text-saffron">Add PKR {1500 - sub} more for free delivery</p>
                )}
                <div className="flex justify-between font-dm text-[16px] font-bold text-burgundy border-t border-border pt-3">
                  <span>Total</span>
                  <span className="text-saffron">PKR {total()}</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
                  onClick={() => { closeCart(); router.push('/checkout') }}
                  className="w-full bg-saffron text-white font-dm text-[15px] font-semibold py-4 rounded-full mt-2"
                >
                  Proceed to Checkout
                </motion.button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}