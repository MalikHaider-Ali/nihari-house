'use client'
import Image from 'next/image'

export default function StoryHero() {
  return (
    <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
      <Image
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDV_Qfut1BiTTIqQ_D8NDIalarHWT8jETqapdKgDIA-vx_W0jFshAbrdCsYYiaVcIJBdkKhMkgPazURVcF4Bt8f6r2lkdm1H6na0s_th1Fe25eNuklbdGlJYoUSB6sq7wMdk2k9reg2YMKLQCIC2J1HpAzSYp4cFvA3AFSp7QNBX8hCXcjtWajpyCijiRuw0ssAcMPEGI1KMPi2EXpyh_1p89HyCBVjNJwxJBQSod2TSD5iFOVXUuKXw3xMP-opyGNS4TgqaPmzE0qO"
        alt="Our Kitchen"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative text-center z-10 px-4">
        <h1
          className="text-5xl md:text-7xl text-white font-bold mb-4"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Our Story
        </h1>
        <div className="w-24 h-1 bg-[#D4870A] mx-auto" />
      </div>
    </section>
  )
}