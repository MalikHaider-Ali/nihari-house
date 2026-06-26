'use client'

type Props = {
  orderNumber: string
  customerName?: string
}

export default function SuccessHeader({
  orderNumber,
  customerName = 'Customer',
}: Props) {
  return (
    <section className="text-center mb-10">

      {/* Animated Checkmark */}
      <div className="flex justify-center mb-6">
        <svg className="w-24 h-24" viewBox="0 0 52 52">
          <circle
            className="checkmark-circle"
            cx="26" cy="26" r="25"
            fill="none"
          />
          <path
            className="checkmark-check"
            d="M14.1 27.2l7.1 7.2 16.7-16.8"
            fill="none"
            stroke="#22C55E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Heading */}
      <h1
        className="text-4xl font-bold mb-2"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        Order Placed! 🎉
      </h1>

      <p
        className="text-lg text-slate-600 mb-6"
        style={{ fontFamily: 'DM Sans, sans-serif' }}
      >
        Thank you, {customerName}!
      </p>

      {/* Badges */}
      <div className="flex flex-wrap justify-center gap-3 items-center">
        <span
          className="bg-[#6B1E2E] text-white px-4 py-2 rounded-full font-bold text-sm tracking-wide"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          #{orderNumber}
        </span>
        <span
          className="bg-[#D4870A] text-white font-bold px-4 py-2 rounded-full text-sm flex items-center gap-2"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
              clipRule="evenodd" />
          </svg>
          30–45 minutes
        </span>
      </div>

    </section>
  )
}