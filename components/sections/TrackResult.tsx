'use client'
import { TrackedOrder, OrderStatus } from './TrackSearch'

const steps = [
  {
    label: 'Order Received',
    desc:  'Confirmed and sent to kitchen',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
        <path fillRule="evenodd"
          d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
          clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: 'Preparing',
    desc:  'Chef is simmering your Nihari to perfection',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd"
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: 'On the Way',
    desc:  'Our rider is approaching your location',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05a2.5 2.5 0 014.9 0H18a1 1 0 001-1V8a1 1 0 00-1-1h-4z" />
      </svg>
    ),
  },
  {
    label: 'Delivered',
    desc:  'Your order has arrived!',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd" />
      </svg>
    ),
  },
]

const statusColors: Record<OrderStatus, string> = {
  pending:    'bg-gray-100    text-gray-600',
  confirmed:  'bg-[#D4870A]/10 text-[#D4870A]',
  preparing:  'bg-orange-100  text-orange-600',
  on_the_way: 'bg-blue-100    text-blue-600',
  delivered:  'bg-green-100   text-green-600',
  cancelled:  'bg-red-100     text-red-600',
}

const statusLabels: Record<OrderStatus, string> = {
  pending:    '⏳ Pending',
  confirmed:  '✅ Confirmed',
  preparing:  '👨‍🍳 Preparing',
  on_the_way: '🛵 On the Way',
  delivered:  '📦 Delivered',
  cancelled:  '❌ Cancelled',
}

const paymentLabels: Record<string, string> = {
  cash:       'Cash on Delivery',
  easypaisa:  'Easypaisa',
  jazzcash:   'JazzCash',
}

type Props = { order: TrackedOrder }

export default function TrackResult({ order }: Props) {
  return (
    <section className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12 pb-20">

      {/* LEFT */}
      <div className="lg:col-span-2 space-y-12">

        {/* Header */}
        <div className="flex items-center gap-4 flex-wrap">
          <h3
            className="text-3xl text-slate-900"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Live Status Tracker
          </h3>
          <span
            className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider
              ${statusColors[order.status]}`}
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            {statusLabels[order.status]}
          </span>
        </div>

        {/* Steps */}
        <div className="relative">
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-slate-200 hidden md:block"
            style={{ left: '23px' }}
          />
          <div className="space-y-10">
            {steps.map((step, index) => {
              const stepNum     = index + 1
              const isCompleted = stepNum < order.currentStep
              const isCurrent   = stepNum === order.currentStep
              const isUpcoming  = stepNum > order.currentStep

              return (
                <div
                  key={step.label}
                  className="flex items-start gap-8 relative"
                >
                  {/* Icon */}
                  <div
                    className={`relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full
                      ${isCompleted
                        ? 'bg-[#6B1E2E] text-white shadow-lg'
                        : isCurrent
                        ? 'bg-white border-4 border-[#D4870A] text-[#D4870A] shadow-xl'
                        : 'bg-slate-100 text-slate-400'
                      }`}
                  >
                    {isCompleted ? (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      <span className={isCurrent ? 'animate-pulse' : ''}>
                        {step.icon}
                      </span>
                    )}
                  </div>

                  {/* Text */}
                  <div className={`flex flex-col ${isUpcoming ? 'opacity-40' : ''}`}>
                    <h4
                      className={`font-bold text-lg
                        ${isCurrent   ? 'text-[#D4870A]'
                        : isCompleted ? 'text-[#6B1E2E]'
                        : 'text-slate-800'}`}
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {step.label}
                    </h4>
                    <p
                      className="text-slate-500 italic text-sm"
                      style={{ fontFamily: 'Lora, serif' }}
                    >
                      {step.desc}
                    </p>
                    <span
                      className={`text-xs mt-1 uppercase tracking-widest font-bold
                        ${isCurrent ? 'text-[#D4870A]' : 'text-slate-400'}`}
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {order.times[index]}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Map */}
        <div className="w-full h-80 rounded-xl overflow-hidden border border-slate-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.083!2d73.0479!3d33.5651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df951b8a3ae847!2sRawalpindi!5e0!3m2!1sen!2s!4v1625123456789"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(0.3)' }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>

      {/* RIGHT */}
      <aside className="space-y-6">

        {/* Order Summary Card */}
        <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm">
          <h5
            className="text-xl font-bold mb-6 text-[#6B1E2E]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Order #{order.orderNumber}
          </h5>

          {/* Items */}
          <div className="space-y-4 border-b border-slate-100 pb-6 mb-6">
            {order.items.map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-start"
              >
                <div>
                  <p
                    className="font-bold text-sm text-slate-800"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {item.name}
                  </p>
                  <p
                    className="text-xs text-slate-400"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    x{item.qty}
                  </p>
                </div>
                <span
                  className="font-medium text-sm text-slate-700"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {item.price}
                </span>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div
            className="space-y-2 mb-6"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Subtotal</span>
              <span>{order.subtotal}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Delivery</span>
              <span
                className={order.deliveryFee === 'Free'
                  ? 'text-green-600 font-bold' : ''}
              >
                {order.deliveryFee}
              </span>
            </div>
            <div className="flex justify-between text-lg font-bold pt-2 border-t border-slate-100">
              <span style={{ fontFamily: 'Playfair Display, serif' }}>
                Total
              </span>
              <span className="text-[#6B1E2E]">{order.total}</span>
            </div>
          </div>

          {/* Customer Details */}
          <div className="pt-4 border-t border-slate-100 space-y-3">
            <h6
              className="text-xs font-bold uppercase tracking-widest text-slate-400"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Customer Details
            </h6>
            <p
              className="font-bold text-sm text-slate-800"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              {order.customerName}
            </p>
            <p
              className="text-xs text-slate-500 leading-relaxed"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              📍 {order.address}
            </p>
            <p
              className="text-xs text-slate-500"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              💳 {paymentLabels[order.paymentMethod] || 'Cash on Delivery'}
            </p>
          </div>
        </div>

        {/* WhatsApp Support */}
        <a
          href={`https://wa.me/923001234567?text=Hi!%20I%20have%20a%20question%20about%20order%20%23${order.orderNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white py-4 rounded-xl font-bold hover:opacity-90 transition-all shadow-lg"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Questions? WhatsApp us
        </a>

        {/* Order Again */}
        <a
          href="/menu"
          className="flex items-center justify-center w-full border-2 border-[#6B1E2E] text-[#6B1E2E] py-3 rounded-xl font-bold hover:bg-[#6B1E2E] hover:text-white transition-all"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          Order Again
        </a>

      </aside>
    </section>
  )
}