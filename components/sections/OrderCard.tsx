'use client'
import { useCartStore } from '@/store/useCartStore'
import { useEffect } from 'react'

export default function OrderCard() {
  const { items, subtotal, clearCart } = useCartStore()

  const deliveryFee = subtotal() >= 1500 ? 0 : 80
  const total       = subtotal() + deliveryFee

  // Clear cart after order is placed
  useEffect(() => {
    return () => {
      // Cart will be cleared when user navigates away
    }
  }, [])

  return (
    <section className="bg-white rounded-3xl overflow-hidden shadow-sm border border-orange-100 mb-8">

      {/* Header */}
      <div className="p-6 border-b border-slate-50">
        <h2
          className="text-xl font-bold text-[#6B1E2E]"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Order Summary
        </h2>
      </div>

      {/* Items */}
      <div className="p-6 space-y-4">
        <div className="space-y-3">
          {items.length === 0 ? (
            <p
              className="text-gray-500 text-sm text-center py-4"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              No items in order
            </p>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center text-sm"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                <span className="text-slate-600">
                  {item.qty}x {item.name}
                </span>
                <span className="font-bold">
                  PKR {(item.price * item.qty).toLocaleString()}
                </span>
              </div>
            ))
          )}
        </div>

        <hr className="border-slate-100" />

        {/* Totals */}
        <div
          className="space-y-2"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          <div className="flex justify-between text-sm">
            <span className="text-slate-500">Subtotal</span>
            <span className="text-slate-700">
              PKR {subtotal().toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-500">Delivery Fee</span>
            <span className={deliveryFee === 0 ? 'text-green-600 font-bold' : 'text-slate-700'}>
              {deliveryFee === 0 ? 'FREE 🎉' : `PKR ${deliveryFee}`}
            </span>
          </div>
          <div className="flex justify-between text-lg font-bold text-[#6B1E2E] pt-2">
            <span>Total</span>
            <span>PKR {total.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-slate-50 p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p
            className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Delivery Address
          </p>
          <p
            className="text-sm text-slate-700 leading-relaxed"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Raja Bazaar, Rawalpindi,<br />
            Punjab, Pakistan
          </p>
        </div>
        <div>
          <p
            className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Payment Method
          </p>
          <div className="flex items-center gap-2">
            <svg
              className="h-4 w-4 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span
              className="text-sm font-medium"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Cash on Delivery
            </span>
          </div>
        </div>
      </div>

    </section>
  )
}