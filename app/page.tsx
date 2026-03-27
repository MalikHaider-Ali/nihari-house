import Hero from '@/components/sections/Hero'
import SignatureDishes from '@/components/sections/SignatureDishes'
import OurStory from '@/components/sections/OurStory'
import WhyOrderDirect from '@/components/sections/WhyOrderDirect'
import FAQ from '@/components/sections/FAQ'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <SignatureDishes />
      <OurStory />
      <WhyOrderDirect />
      <FAQ />
    </main>
  )
}