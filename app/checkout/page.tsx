import CheckoutForm from '@/components/sections/CheckoutForm'
import OrderSummary from '@/components/sections/OrderSummary'
import Link from 'next/link'

export default function CheckoutPage() {
  return (
    <>
      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-4 mb-8">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#6B1E2E] rounded-full flex items-center justify-center text-[#D4870A] font-bold text-xl">
              NH
            </div>
            <span
              className="text-2xl font-bold text-[#6B1E2E]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Nihari House
            </span>
          </div>
          <Link
            href="/menu"
            className="text-sm font-medium text-gray-600 hover:text-[#6B1E2E]"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            ← Back to Menu
          </Link>
        </div>
      </header>

      {/* Main */}
      <main className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <CheckoutForm />
          <OrderSummary />
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-10 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <p
            className="text-gray-400 text-sm"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            © 2025 Nihari House. Authentically Prepared.
          </p>
        </div>
      </footer>
    </>
  )
}