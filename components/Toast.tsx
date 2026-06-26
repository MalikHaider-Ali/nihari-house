'use client'
import { create } from 'zustand'
import { AnimatePresence, motion } from 'framer-motion'

// ── Types ─────────────────────────────────────────────────────────
interface Toast {
  id: string
  message: string
  type: 'success' | 'error' | 'cart'
}

interface ToastStore {
  toasts: Toast[]
  addToast: (t: Omit<Toast, 'id'>) => void
  removeToast: (id: string) => void
}

// ── Zustand Store ─────────────────────────────────────────────────
export const useToastStore = create<ToastStore>((set) => ({
  toasts: [],

  addToast: (t) => {
    const id = Math.random().toString(36).slice(2)
    set((s) => ({ toasts: [...s.toasts, { ...t, id }] }))
    // Auto-remove after 3 seconds
    setTimeout(() => {
      set((s) => ({ toasts: s.toasts.filter((x) => x.id !== id) }))
    }, 3000)
  },

  removeToast: (id) =>
    set((s) => ({ toasts: s.toasts.filter((x) => x.id !== id) })),
}))

// ── Icon per type ─────────────────────────────────────────────────
function ToastIcon({ type }: { type: Toast['type'] }) {
  if (type === 'success') {
    return (
      <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
      </svg>
    )
  }
  if (type === 'error') {
    return (
      <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
      </svg>
    )
  }
  // cart
  return (
    <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
  )
}

// ── Background color per type ─────────────────────────────────────
const BG: Record<Toast['type'], string> = {
  success: 'bg-success',
  error:   'bg-error',
  cart:    'bg-burgundy',
}

// ── Single Toast Item ─────────────────────────────────────────────
function ToastItem({ toast, onRemove }: { toast: Toast; onRemove: () => void }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0,  scale: 1   }}
      exit={{    opacity: 0, y: -10, scale: 0.9 }}
      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      className={`
        ${BG[toast.type]}
        text-white
        flex items-center gap-3
        px-4 py-3
        rounded-2xl
        shadow-lg
        min-w-[260px] max-w-[340px]
        font-dm text-[14px]
        cursor-pointer
        select-none
      `}
      onClick={onRemove}
    >
      <ToastIcon type={toast.type} />
      <span className="flex-1 leading-snug">{toast.message}</span>
      {/* Close X */}
      <button
        onClick={(e) => { e.stopPropagation(); onRemove() }}
        className="ml-1 opacity-70 hover:opacity-100 transition-opacity flex-shrink-0"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </motion.div>
  )
}

// ── Toast Container (add to layout.tsx) ──────────────────────────
export default function ToastContainer() {
  const { toasts, removeToast } = useToastStore()

  return (
    <div className="fixed bottom-6 right-6 z-[200] flex flex-col gap-2 items-end pointer-events-none">
      <AnimatePresence initial={false}>
        {toasts.map((toast) => (
          <div key={toast.id} className="pointer-events-auto">
            <ToastItem
              toast={toast}
              onRemove={() => removeToast(toast.id)}
            />
          </div>
        ))}
      </AnimatePresence>
    </div>
  )
}