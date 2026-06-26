'use client'
import { useState } from 'react'
import { getOrderByNumber } from '@/lib/order'
import TrackResult from './TrackResult'

export type OrderStatus =
  | 'pending'
  | 'confirmed'
  | 'preparing'
  | 'on_the_way'
  | 'delivered'
  | 'cancelled'

export type TrackedOrder = {
  orderNumber:  string
  customerName: string
  address:      string
  status:       OrderStatus
  currentStep:  1 | 2 | 3 | 4
  items:        { name: string; qty: number; price: string }[]
  subtotal:     string
  deliveryFee:  string
  total:        string
  times:        string[]
  paymentMethod: string
  createdAt:    string
}

// Map status to step number
function getStepFromStatus(status: OrderStatus): 1 | 2 | 3 | 4 {
  const map: Record<OrderStatus, 1 | 2 | 3 | 4> = {
    pending:    1,
    confirmed:  1,
    preparing:  2,
    on_the_way: 3,
    delivered:  4,
    cancelled:  1,
  }
  return map[status] || 1
}

// Format time from ISO string
function formatTime(iso: string): string {
  return new Date(iso).toLocaleTimeString('en-PK', {
    hour:   '2-digit',
    minute: '2-digit',
    hour12: true,
  })
}

export default function TrackSearch() {
  const [input, setInput]       = useState('')
  const [loading, setLoading]   = useState(false)
  const [result, setResult]     = useState<TrackedOrder | null>(null)
  const [notFound, setNotFound] = useState(false)
  const [searched, setSearched] = useState(false)

  const handleTrack = async () => {
    if (!input.trim()) return

    setLoading(true)
    setSearched(false)
    setNotFound(false)
    setResult(null)

    try {
      const order = await getOrderByNumber(input.trim())

      if (!order) {
        setNotFound(true)
        setSearched(true)
        setLoading(false)
        return
      }

      const status      = order.status as OrderStatus
      const currentStep = getStepFromStatus(status)
      const createdTime = formatTime(order.created_at)

      // Build time array based on status
      const times = [
        createdTime,
        status === 'preparing' || status === 'on_the_way' || status === 'delivered'
          ? formatTime(order.created_at) : 'Pending',
        status === 'on_the_way' || status === 'delivered'
          ? 'In Progress' : 'Pending',
        status === 'delivered'
          ? formatTime(order.created_at) : 'Est. 30-45 min',
      ]

      // Map items from jsonb
      const mappedItems = Array.isArray(order.items)
        ? order.items.map((item: { name: string; qty: number; price: number }) => ({
            name:  item.name,
            qty:   item.qty,
            price: `PKR ${(item.price * item.qty).toLocaleString()}`,
          }))
        : []

      const trackedOrder: TrackedOrder = {
        orderNumber:   order.order_number,
        customerName:  order.customer_name,
        address:       order.customer_address || 'N/A',
        status,
        currentStep,
        items:         mappedItems,
        subtotal:      `PKR ${Number(order.subtotal).toLocaleString()}`,
        deliveryFee:   order.delivery_fee === 0 ? 'Free' : `PKR ${order.delivery_fee}`,
        total:         `PKR ${Number(order.total).toLocaleString()}`,
        times,
        paymentMethod: order.payment_method || 'cash',
        createdAt:     order.created_at,
      }

      setResult(trackedOrder)
      setSearched(true)
    } catch (error) {
      console.error('Track error:', error)
      setNotFound(true)
      setSearched(true)
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleTrack()
  }

  return (
    <div className="max-w-3xl mx-auto px-6 -mt-12 relative z-20">

      {/* Search Card */}
      <div className="bg-white rounded-xl shadow-2xl p-8 border border-slate-100">
        <div className="flex flex-col gap-4">
          <label
            className="text-xs font-bold uppercase tracking-widest text-slate-500"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Enter Your Order Number
          </label>
          <div className="relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="#NH-2025-XXXX"
              className="w-full h-16 bg-slate-50 border-none rounded-xl px-6 text-xl focus:ring-2 focus:ring-[#6B1E2E]/50 transition-all text-slate-900 outline-none"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            />
            <button
              onClick={handleTrack}
              disabled={loading}
              className="absolute right-3 bg-[#6B1E2E] text-white h-10 px-6 rounded-lg font-bold text-sm shadow-lg hover:bg-black transition-all disabled:opacity-60 flex items-center gap-2"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12" cy="12" r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    />
                  </svg>
                  Checking...
                </>
              ) : (
                <>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  Track
                </>
              )}
            </button>
          </div>
          <p
            className="text-xs text-slate-400"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Enter the order number from your confirmation page
            e.g. <span className="text-[#D4870A] font-medium">NH-2025-1234</span>
          </p>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="mt-8 bg-white rounded-xl p-8 text-center border border-slate-100 shadow-sm">
          <div className="flex flex-col items-center gap-4">
            <svg
              className="animate-spin h-10 w-10 text-[#6B1E2E]"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12" cy="12" r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8z"
              />
            </svg>
            <p
              className="text-slate-500 font-medium"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Searching for your order...
            </p>
          </div>
        </div>
      )}

      {/* Not Found */}
      {searched && notFound && !loading && (
        <div className="mt-8 bg-red-50 border border-red-200 rounded-xl p-8 text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <h3
            className="text-xl font-bold text-red-700 mb-2"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Order Not Found
          </h3>
          <p
            className="text-sm text-red-500 mb-4"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            We could not find order{' '}
            <strong>{input}</strong>.
            Please check the number and try again.
          </p>
          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-2 rounded-full font-bold text-sm"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Contact us on WhatsApp
          </a>
        </div>
      )}

      {/* Result */}
      {result && !loading && <TrackResult order={result} />}

    </div>
  )
}