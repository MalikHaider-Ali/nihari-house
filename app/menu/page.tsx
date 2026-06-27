import Hero from '@/components/sections/Hero'
import SignatureDishes from '@/components/sections/SignatureDishes'
import OurStory from '@/components/sections/OurStory'
import WhyOrderDirect from '@/components/sections/WhyOrderDirect'
import FAQ from '@/components/sections/FAQ'
import Footer from '@/components/layout/Footer'

export default function HomePage() {
  return (
    <>
      <Hero />
      <SignatureDishes />
      <OurStory />
      <WhyOrderDirect />
      <FAQ />
      <Footer />
    </>
  )
}