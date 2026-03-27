'use client'

type Props = {
  currentStep: 1 | 2 | 3 | 4
}

const steps = [
  {
    label: 'Order Received',
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
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05a2.5 2.5 0 014.9 0H18a1 1 0 001-1V8a1 1 0 00-1-1h-4z" />
      </svg>
    ),
  },
  {
    label: 'Delivered',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd" />
      </svg>
    ),
  },
]

const progressMap = { 1: '8%', 2: '40%', 3: '66%', 4: '100%' }

export default function OrderProgressTracker({ currentStep }: Props) {
  return (
    <section className="bg-white rounded-3xl p-8 shadow-sm border border-orange-100 mb-8">
      <div className="relative flex justify-between items-start">

        {/* Track */}
        <div className="absolute top-5 left-0 w-full h-0.5 bg-slate-100 z-0">
          <div
            className="h-full bg-[#D4870A] transition-all duration-700"
            style={{ width: progressMap[currentStep] }}
          />
        </div>

        {/* Steps */}
        {steps.map((step, index) => {
          const stepNum     = index + 1
          const isActive    = stepNum === currentStep
          const isCompleted = stepNum < currentStep

          return (
            <div
              key={step.label}
              className="relative z-10 flex flex-col items-center text-center w-1/4"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mb-3
                  ${isActive
                    ? 'bg-[#D4870A] text-white pulse-active'
                    : isCompleted
                    ? 'bg-[#6B1E2E] text-white'
                    : 'bg-slate-200 text-slate-500'
                  }`}
              >
                {step.icon}
              </div>
              <span
                className={`text-xs font-medium
                  ${isActive
                    ? 'font-bold text-[#6B1E2E]'
                    : isCompleted
                    ? 'text-[#6B1E2E]'
                    : 'text-slate-400'
                  }`}
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                {step.label}
              </span>
            </div>
          )
        })}

      </div>
    </section>
  )
}