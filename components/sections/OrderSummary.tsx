'use client'
import Image from 'next/image'
import { useState } from 'react'
import { useCartStore } from '@/store/useCartStore'

export default function OrderSummary() {
  const { items, subtotal } = useCartStore()
  const [promoCode, setPromoCode]       = useState('')
  const [promoApplied, setPromoApplied] = useState(false)

  const discount    = promoApplied ? Math.round(subtotal() * 0.1) : 0
  const deliveryFee = subtotal() >= 1500 ? 0 : 100
  const total       = subtotal() - discount + deliveryFee

  const handlePromo = () => {
    if (promoCode.toUpperCase() === 'FIRSTORDER') setPromoApplied(true)
  }

  return (
    <aside className="lg:col-span-5">
      <div className="bg-[#FFFFF0] rounded-xl border border-yellow-100 shadow-md p-6 sticky top-8">

        <h2
          className="text-2xl font-bold text-[#6B1E2E] mb-6 pb-4 border-b border-yellow-200"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Order Summary
        </h2>

        {/* Items from cart */}
        {items.length === 0 ? (
          <div className="text-center py-8">
            <p
              className="text-gray-500 text-sm mb-4"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Your cart is empty
            </p>
            <a
              href="/menu"
              className="text-[#D4870A] font-bold text-sm underline"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Browse Menu
            </a>
          </div>
        ) : (
          <div className="space-y-4 mb-8 max-h-80 overflow-y-auto pr-2">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden border border-gray-200 flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4
                    className="font-semibold text-gray-800 text-sm"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {item.name}
                  </h4>
                  <div className="flex justify-between items-center mt-1">
                    <span
                      className="text-sm text-gray-500"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      Qty: {item.qty}
                    </span>
                    <span
                      className="font-bold text-[#6B1E2E]"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      PKR {(item.price * item.qty).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Promo */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Promo Code (FIRSTORDER)"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            disabled={promoApplied}
            className="flex-1 rounded-xl border border-[#EDE0D0] px-4 py-2 text-sm focus:outline-none focus:border-[#D4870A] disabled:bg-gray-50"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          />
          <button
            onClick={handlePromo}
            disabled={promoApplied}
            className="px-4 py-2 bg-[#6B1E2E] text-white rounded-xl text-sm font-bold hover:bg-black transition-colors disabled:opacity-50"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Apply
          </button>
        </div>

        {promoApplied && (
          <div
            className="mb-4 p-3 bg-green-50 border border-green-200 rounded-xl text-sm text-green-700 font-medium"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            ✅ FIRSTORDER applied — 10% discount!
          </div>
        )}

        {/* Totals */}
        <div
          className="space-y-3 border-t border-yellow-200 pt-6 mb-6"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          <div className="flex justify-between text-gray-600 text-sm">
            <span>Subtotal</span>
            <span>PKR {subtotal().toLocaleString()}</span>
          </div>
          {promoApplied && (
            <div className="flex justify-between text-green-600 text-sm">
              <span>Discount (10%)</span>
              <span>- PKR {discount.toLocaleString()}</span>
            </div>
          )}
          <div className="flex justify-between text-gray-600 text-sm">
            <span>Delivery Fee</span>
            <span className={deliveryFee === 0 ? 'text-green-600 font-medium' : ''}>
              {deliveryFee === 0 ? '🎉 FREE' : `PKR ${deliveryFee}`}
            </span>
          </div>
          <div className="flex justify-between text-xl font-bold text-[#6B1E2E] pt-2">
            <span>Total</span>
            <span>PKR {total.toLocaleString()}</span>
          </div>
          <p className="text-[10px] text-gray-400 text-center italic">
            Free delivery on orders over PKR 1,500
          </p>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 gap-4 border-t border-yellow-100 pt-4">
          {[
            {
              label: 'Secure Checkout',
              icon: (
                <svg className="h-6 w-6 text-[#6B1E2E] mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              ),
            },
            {
              label: '30–45 Min Delivery',
              icon: (
                <svg className="h-6 w-6 text-[#6B1E2E] mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
            },
          ].map((badge) => (
            <div
              key={badge.label}
              className="flex flex-col items-center text-center p-2 rounded-lg bg-white/50 border border-yellow-50"
            >
              {badge.icon}
              <span
                className="text-[10px] font-bold uppercase tracking-wider text-gray-500"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                {badge.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </aside>
  )
}