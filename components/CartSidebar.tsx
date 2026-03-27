'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useCartStore } from '@/store/useCartStore'

export default function CartSidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const {
    items,
    updateQty,
    removeItem,
    clearCart,
    subtotal,
    totalItems,
  } = useCartStore()

  const deliveryFee = subtotal() >= 2000 ? 0 : 100
  const total       = subtotal() + deliveryFee

  return (
    <>
      {/* Floating Cart Button — Mobile */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-50 bg-[#6B1E2E] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl md:hidden"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
        {totalItems() > 0 && (
          <span className="absolute -top-1 -right-1 bg-[#D4870A] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
            {totalItems()}
          </span>
        )}
      </button>

      {/* WhatsApp Float */}
      <a
        href="https://wa.me/923001234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
      >
        <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 w-full sm:w-[420px] bg-white shadow-2xl z-[60]
          flex flex-col border-l border-gray-100 transform transition-transform duration-300
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >

        {/* ── HEADER ── */}
        <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-[#6B1E2E] text-white">
          <div className="flex items-center gap-3">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              />
            </svg>
            <h2
              className="text-xl font-bold"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Your Cart
            </h2>
            {totalItems() > 0 && (
              <span
                className="bg-[#D4870A] text-white text-xs font-bold px-2 py-0.5 rounded-full"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                {totalItems()} items
              </span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12"
                strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </button>
        </div>

        {/* ── ITEMS ── */}
        <div className="flex-grow overflow-y-auto">

          {items.length === 0 ? (

            /* Empty State */
            <div className="flex flex-col items-center justify-center h-full text-center px-6">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="h-12 w-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                  />
                </svg>
              </div>
              <h3
                className="text-lg font-bold text-gray-700 mb-2"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Your cart is empty
              </h3>
              <p
                className="text-sm text-gray-400 mb-6"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Add items from our menu to get started
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="px-8 py-3 bg-[#D4870A] text-white rounded-full font-bold text-sm hover:bg-[#F5C842] transition-colors"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Browse Menu
              </button>
            </div>

          ) : (

            <div className="p-4 space-y-3">

              {/* Free Delivery Progress Bar */}
              {subtotal() < 2000 && (
                <div className="bg-[#FDF6EC] border border-[#EDE0D0] rounded-xl p-4 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <p
                      className="text-xs font-bold text-[#6B1E2E]"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      🚚 Add PKR {(2000 - subtotal()).toLocaleString()} more for FREE delivery
                    </p>
                    <span
                      className="text-xs text-gray-400"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {Math.round((subtotal() / 2000) * 100)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-[#D4870A] h-2 rounded-full transition-all duration-500"
                      style={{ width: `${Math.min((subtotal() / 2000) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              )}

              {subtotal() >= 2000 && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-3 mb-2 text-center">
                  <p
                    className="text-sm font-bold text-green-600"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    🎉 You have FREE delivery!
                  </p>
                </div>
              )}

              {/* Cart Items */}
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm"
                >
                  <div className="flex gap-3">

                    {/* Image */}
                    <div className="h-20 w-20 flex-shrink-0 rounded-xl relative overflow-hidden border border-gray-100">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-2">
                        <h4
                          className="font-bold text-gray-800 text-sm leading-tight"
                          style={{ fontFamily: 'DM Sans, sans-serif' }}
                        >
                          {item.name}
                        </h4>

                        {/* Remove Button */}
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-300 hover:text-red-500 transition-colors flex-shrink-0 p-1"
                          title="Remove item"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                            />
                          </svg>
                        </button>
                      </div>

                      {/* Price per item */}
                      <p
                        className="text-xs text-gray-400 mt-0.5"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      >
                        {item.priceLabel} each
                      </p>

                      {/* Qty Controls + Item Total */}
                      <div className="flex items-center justify-between mt-3">

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-1 bg-gray-100 rounded-full p-1">
                          <button
                            onClick={() => updateQty(item.id, -1)}
                            className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-[#6B1E2E] hover:bg-[#6B1E2E] hover:text-white transition-colors shadow-sm font-bold text-lg leading-none"
                          >
                            −
                          </button>
                          <span
                            className="w-8 text-center font-bold text-sm text-gray-800"
                            style={{ fontFamily: 'DM Sans, sans-serif' }}
                          >
                            {item.qty}
                          </span>
                          <button
                            onClick={() => updateQty(item.id, 1)}
                            className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-[#6B1E2E] hover:bg-[#6B1E2E] hover:text-white transition-colors shadow-sm font-bold text-lg leading-none"
                          >
                            +
                          </button>
                        </div>

                        {/* Item Total */}
                        <span
                          className="font-bold text-[#6B1E2E] text-sm"
                          style={{ fontFamily: 'DM Sans, sans-serif' }}
                        >
                          PKR {(item.price * item.qty).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Clear Cart Button */}
              <button
                onClick={() => {
                  if (confirm('Clear all items from cart?')) clearCart()
                }}
                className="w-full py-2 text-xs text-red-400 hover:text-red-600 font-medium transition-colors flex items-center justify-center gap-1 mt-2"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Clear entire cart
              </button>

            </div>
          )}
        </div>

        {/* ── FOOTER ── */}
        {items.length > 0 && (
          <div className="border-t border-gray-100 bg-white">

            {/* Price Breakdown */}
            <div
              className="px-5 pt-4 pb-2 space-y-2"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              <div className="flex justify-between text-sm text-gray-500">
                <span>Subtotal ({totalItems()} items)</span>
                <span>PKR {subtotal().toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Delivery Fee</span>
                <span className={deliveryFee === 0 ? 'text-green-600 font-bold' : ''}>
                  {deliveryFee === 0 ? 'FREE 🎉' : `PKR ${deliveryFee}`}
                </span>
              </div>
              <div className="flex justify-between text-lg font-bold text-[#6B1E2E] pt-2 border-t border-gray-100">
                <span>Total</span>
                <span>PKR {total.toLocaleString()}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="px-5 pb-6 pt-3 space-y-3">

              {/* Checkout Button */}
              <Link
                href="/checkout"
                onClick={() => setIsOpen(false)}
                className="block w-full py-4 bg-[#6B1E2E] text-white font-bold rounded-xl text-center hover:bg-black transition-all shadow-lg text-sm uppercase tracking-widest"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Proceed to Checkout →
              </Link>

              {/* Continue Shopping */}
              <button
                onClick={() => setIsOpen(false)}
                className="w-full py-3 border-2 border-gray-200 text-gray-500 font-bold rounded-xl hover:border-[#6B1E2E] hover:text-[#6B1E2E] transition-all text-sm"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                ← Continue Shopping
              </button>

            </div>
          </div>
        )}

      </div>
    </>
  )
}