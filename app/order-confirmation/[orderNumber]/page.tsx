import SuccessHeader from '@/components/sections/SuccessHeader'
import OrderProgressTracker from '@/components/OrderProgressTracker'
import OrderCard from '@/components/sections/OrderCard'
import ActionButtons from '@/components/sections/ActionButtons'

export default async function OrderConfirmationPage({
  params,
}: {
  params: Promise<{ orderNumber: string }>
}) {
  const { orderNumber } = await params

  return (
    <>
      <main
        className="max-w-2xl mx-auto px-4 py-8 md:py-12"
        style={{ backgroundColor: '#FFFDD0', minHeight: '100vh' }}
      >
        <SuccessHeader orderNumber={orderNumber} />
        <OrderProgressTracker currentStep={1} />
        <OrderCard />
        <ActionButtons orderNumber={orderNumber} />
      </main>

      <footer
        className="mt-12 mb-8 text-center text-slate-400 text-sm"
        style={{ fontFamily: 'DM Sans, sans-serif' }}
      >
        <p>© 2025 Nihari House. All rights reserved.</p>
      </footer>
    </>
  )
}