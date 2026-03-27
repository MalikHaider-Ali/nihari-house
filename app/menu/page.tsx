import MenuHero from '@/components/sections/MenuHero'
import CategoryTabs from '@/components/sections/CategoryTabs'
import MenuGrid from '@/components/sections/MenuGrid'
import CartSidebar from '@/components/CartSidebar'

export default function MenuPage() {
  return (
    <main>
      <MenuHero />
      <CategoryTabs />
      <MenuGrid />
      <CartSidebar />
    </main>
  )
}