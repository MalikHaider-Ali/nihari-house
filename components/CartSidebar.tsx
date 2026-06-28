import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type CartItem = {
  id: string
  name: string
  price: number
  priceLabel: string
  image: string
  quantity: number  // ← renamed from qty to match CartSidebar usage
}

type CartStore = {
  // — Items —
  items: CartItem[]
  addItem: (item: Omit<CartItem, 'quantity'>) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void  // ← renamed from updateQty
  clearCart: () => void

  // — Computed —
  totalItems: () => number
  subtotal: () => number
  deliveryFee: () => number   // ← missing
  total: () => number         // ← missing
  isEmpty: () => boolean      // ← missing

  // — Sidebar —
  isCartOpen: boolean
  openCart: () => void
  closeCart: () => void
}


export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      // — Items —
      items: [],

      addItem: (item) => {
        const existing = get().items.find((i) => i.id === item.id)
        if (existing) {
          set({
            items: get().items.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
          })
        } else {
          set({ items: [...get().items, { ...item, quantity: 1 }] })
        }
      },

      removeItem: (id) => {
        set({ items: get().items.filter((i) => i.id !== id) })
      },

      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          set({ items: get().items.filter((i) => i.id !== id) })
        } else {
          set({
            items: get().items.map((i) =>
              i.id === id ? { ...i, quantity } : i
            ),
          })
        }
      },

      clearCart: () => set({ items: [] }),

      // — Computed —
      totalItems: () =>
        get().items.reduce((sum, i) => sum + i.quantity, 0),

      subtotal: () =>
        get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),

      deliveryFee: () => (get().subtotal() >= 1500 ? 0 : 100),

      total: () => get().subtotal() + get().deliveryFee(),

      isEmpty: () => get().items.length === 0,

      // — Sidebar —
      isCartOpen: false,
      openCart: () => set({ isCartOpen: true }),
      closeCart: () => set({ isCartOpen: false }),
    }),
    {
      name: 'nihari-cart',
      // only persist items, not sidebar state
      partialize: (state) => ({ items: state.items }),
    }
  )
)

const { isCartOpen, closeCart } = useCartStore()