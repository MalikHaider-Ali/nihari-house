import HeroSection from '@/components/home/HeroSection'
import MostLovedSection from '@/components/home/MostLovedSection'
import SignatureDishesSection from '@/components/home/SignatureDishesSection'
import OurStorySection from '@/components/home/OurStorySection'
import WhyOrderDirectSection from '@/components/home/WhyOrderDirectSection'
import FaqSection from '@/components/home/FaqSection'
import StoriesSection from '@/components/home/StoriesSection'
import CtaBannerSection from '@/components/home/CtaBannerSection'
import FooterSection from '@/components/home/FooterSection'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MostLovedSection />
      <SignatureDishesSection />
      <OurStorySection />
      <WhyOrderDirectSection />
      <FaqSection />
      <StoriesSection />
      <CtaBannerSection />
      <FooterSection />
      <WhatsAppFloat />
    </>
  )
}