'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createOrder } from '@/lib/order'
import { useCartStore } from '@/store/useCartStore'

type DeliveryMethod = 'delivery' | 'pickup'
type PaymentMethod  = 'cash' | 'easypaisa' | 'jazzcash'

export default function CheckoutForm() {
  const router                              = useRouter()
  const { items, subtotal }                 = useCartStore()
  const [step, setStep]                     = useState(1)
  const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod>('delivery')
  const [paymentMethod, setPaymentMethod]   = useState<PaymentMethod>('cash')
  const [loading, setLoading]               = useState(false)
  const [fullName, setFullName]             = useState('')
  const [phone, setPhone]                   = useState('')
  const [address, setAddress]               = useState('')

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!fullName || !phone) return
    setStep(2)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleStep2Submit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(3)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handlePlaceOrder = async () => {
    setLoading(true)
    try {
      const deliveryFee = subtotal() >= 1500 ? 0 : 100
      const { orderNumber } = await createOrder({
        customerName:    fullName,
        customerPhone:   phone,
        customerAddress: deliveryMethod === 'delivery' ? address : 'Self Pickup',
        deliveryType:    deliveryMethod,
        items:           items.map((i) => ({
          id:    i.id,
          name:  i.name,
          price: i.price,
          qty:   i.qty,
        })),
        subtotal:      subtotal(),
        deliveryFee:   deliveryFee,
        total:         subtotal() + deliveryFee,
        paymentMethod: paymentMethod,
      })
      router.push(`/order-confirmation/${orderNumber}`)
    } catch (error) {
      console.error('Order failed:', error)
      setLoading(false)
    }
  }

  return (
    <section className="lg:col-span-7 space-y-8">

      {/* Step Indicator */}
      <div className="flex items-center gap-4 mb-6">
        <span
          className="flex items-center justify-center w-8 h-8 rounded-full bg-[#6B1E2E] text-white text-sm font-bold"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          {step}
        </span>
        <h1
          className="text-3xl font-bold text-[#6B1E2E]"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {step === 1 ? 'Delivery Details'
            : step === 2 ? 'Payment Method'
            : 'Review & Confirm'}
        </h1>
        <div className="h-px flex-1 bg-gray-200" />
        <span
          className="text-gray-400 text-sm"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          Step {step} of 3
        </span>
      </div>

      {/* ── STEP 1 ── */}
      {step === 1 && (
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">

          {/* Delivery Toggle */}
          <div className="mb-8">
            <label
              className="block text-sm font-semibold mb-3 text-gray-700"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Delivery Method
            </label>
            <div className="inline-flex p-1 bg-gray-100 rounded-full w-full max-w-sm">
              {(['delivery', 'pickup'] as DeliveryMethod[]).map((method) => (
                <button
                  key={method}
                  type="button"
                  onClick={() => setDeliveryMethod(method)}
                  className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-all duration-200
                    ${deliveryMethod === method
                      ? 'bg-[#6B1E2E] text-white'
                      : 'bg-transparent text-gray-600'
                    }`}
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {method === 'delivery' ? '🛵 Home Delivery' : '🏪 Self Pickup'}
                </button>
              ))}
            </div>
          </div>

          {/* Pickup Info */}
          {deliveryMethod === 'pickup' && (
            <div className="mb-6 p-4 bg-[#FDF6EC] border border-[#EDE0D0] rounded-xl">
              <p
                className="text-sm text-[#6B1E2E] font-medium"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                📍 Pickup from: Raja Bazaar Branch, Rawalpindi
              </p>
              <p
                className="text-xs text-[#7A6652] mt-1"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                ⏱ Ready in 20–30 minutes
              </p>
            </div>
          )}

          {/* Form */}
          <form
            onSubmit={handleStep1Submit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Full Name */}
            <div className="md:col-span-2">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Full Name *
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Muhammad Ali"
                className="w-full rounded-xl border border-[#EDE0D0] bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#D4870A] focus:ring-2 focus:ring-[#D4870A]/20"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              />
            </div>

            {/* Phone */}
            <div className="md:col-span-1">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Phone Number *
              </label>
              <div className="relative">
                <span
                  className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 text-sm border-r border-gray-300 pr-3"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  +92
                </span>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="300 1234567"
                  className="w-full pl-16 rounded-xl border border-[#EDE0D0] bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#D4870A] focus:ring-2 focus:ring-[#D4870A]/20"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                />
              </div>
            </div>

            {/* City */}
            <div className="md:col-span-1">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                City
              </label>
              <input
                type="text"
                value="Rawalpindi"
                disabled
                className="w-full rounded-xl border border-[#EDE0D0] bg-gray-50 px-4 py-3 text-sm text-gray-500 cursor-not-allowed"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              />
            </div>

            {/* Address */}
            {deliveryMethod === 'delivery' && (
              <div className="md:col-span-2">
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Delivery Address *
                </label>
                <textarea
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Street, House No, Area Name"
                  rows={3}
                  className="w-full rounded-xl border border-[#EDE0D0] bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#D4870A] focus:ring-2 focus:ring-[#D4870A]/20"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                />
              </div>
            )}

            {/* Submit */}
            <div className="md:col-span-2 pt-4">
              <button
                type="submit"
                className="w-full bg-[#D4870A] hover:bg-[#F5C842] text-white font-bold py-4 rounded-xl shadow-lg transition-colors duration-200 flex items-center justify-center gap-2"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Continue to Payment
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ── STEP 2 ── */}
      {step === 2 && (
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
          <h2
            className="text-xl font-bold text-[#6B1E2E] mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Choose Payment Method
          </h2>

          <form onSubmit={handleStep2Submit} className="space-y-4">
            {[
              {
                id:    'cash' as PaymentMethod,
                icon:  '💵',
                title: 'Cash on Delivery',
                desc:  'Pay when your order arrives',
              },
              {
                id:    'easypaisa' as PaymentMethod,
                icon:  '📱',
                title: 'Easypaisa',
                desc:  'Send to: 0300-1234567 — share screenshot on WhatsApp',
              },
              {
                id:    'jazzcash' as PaymentMethod,
                icon:  '📱',
                title: 'JazzCash',
                desc:  'Send to: 0300-7654321 — share screenshot on WhatsApp',
              },
            ].map((option) => (
              <div
                key={option.id}
                onClick={() => setPaymentMethod(option.id)}
                className={`flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all
                  ${paymentMethod === option.id
                    ? 'border-[#D4870A] bg-[#FDF6EC]'
                    : 'border-gray-200 bg-white hover:border-[#D4870A]/40'
                  }`}
              >
                <span className="text-2xl mt-0.5">{option.icon}</span>
                <div className="flex-1">
                  <p
                    className="font-bold text-[#1C1C1C] text-sm"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {option.title}
                  </p>
                  <p
                    className="text-xs text-gray-500 mt-0.5"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {option.desc}
                  </p>
                </div>
                <div
                  className={`w-5 h-5 rounded-full border-2 mt-0.5 flex items-center justify-center
                    ${paymentMethod === option.id
                      ? 'border-[#D4870A] bg-[#D4870A]'
                      : 'border-gray-300'
                    }`}
                >
                  {paymentMethod === option.id && (
                    <div className="w-2 h-2 rounded-full bg-white" />
                  )}
                </div>
              </div>
            ))}

            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="flex-1 py-3 border-2 border-[#6B1E2E] text-[#6B1E2E] font-bold rounded-xl hover:bg-[#6B1E2E] hover:text-white transition-colors"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                ← Back
              </button>
              <button
                type="submit"
                className="flex-1 py-3 bg-[#D4870A] text-white font-bold rounded-xl hover:bg-[#F5C842] transition-colors"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Review Order →
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ── STEP 3 ── */}
      {step === 3 && (
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 space-y-6">
          <h2
            className="text-xl font-bold text-[#6B1E2E]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Review Your Order
          </h2>

          {/* Customer Details */}
          <div className="bg-[#FDF6EC] rounded-xl p-4 space-y-2">
            <p
              className="text-sm font-bold text-[#6B1E2E]"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Delivery Details
            </p>
            <p
              className="text-sm text-[#1C1C1C]"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              👤 {fullName}
            </p>
            <p
              className="text-sm text-[#1C1C1C]"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              📞 +92 {phone}
            </p>
            {deliveryMethod === 'delivery' ? (
              <p
                className="text-sm text-[#1C1C1C]"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                📍 {address}
              </p>
            ) : (
              <p
                className="text-sm text-[#1C1C1C]"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                🏪 Self Pickup — Raja Bazaar Branch
              </p>
            )}
            <p
              className="text-sm text-[#1C1C1C]"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              💳 {paymentMethod === 'cash' ? 'Cash on Delivery'
                : paymentMethod === 'easypaisa' ? 'Easypaisa' : 'JazzCash'}
            </p>
          </div>

          {/* Items in order */}
          <div className="bg-white border border-gray-100 rounded-xl p-4">
            <p
              className="text-sm font-bold text-[#6B1E2E] mb-3"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              🛒 Your Items ({items.length})
            </p>
            <div className="space-y-2">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center text-sm"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  <span className="text-gray-600">
                    {item.qty}x {item.name}
                  </span>
                  <span className="font-bold text-[#6B1E2E]">
                    PKR {(item.price * item.qty).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
            <div
              className="flex justify-between items-center font-bold text-[#6B1E2E] mt-3 pt-3 border-t border-gray-100"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              <span>Total</span>
              <span>PKR {(subtotal() + (subtotal() >= 1500 ? 0 : 100)).toLocaleString()}</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="flex-1 py-3 border-2 border-[#6B1E2E] text-[#6B1E2E] font-bold rounded-xl hover:bg-[#6B1E2E] hover:text-white transition-colors"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              ← Back
            </button>
            <button
              type="button"
              onClick={handlePlaceOrder}
              disabled={loading}
              className="flex-grow py-4 bg-[#6B1E2E] text-white font-bold rounded-xl hover:bg-black transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10"
                      stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Placing Order...
                </>
              ) : '✓ Place Order'}
            </button>
          </div>
        </div>
      )}

    </section>
  )
}