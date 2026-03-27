'use client'
import Image from 'next/image'
import { useEffect } from 'react'

export default function OurStory() {

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
      observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 bg-white overflow-hidden" id="story">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div className="reveal-on-scroll">
            <h4
              className="text-[#D4870A] font-bold text-sm uppercase tracking-widest mb-4"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Inherited Legacy
            </h4>
            <h2
              className="text-4xl md:text-5xl text-[#6B1E2E] mb-8 leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              The Art of Slow Cooking Since 1987
            </h2>
            <div
              className="space-y-6 text-gray-700 text-lg leading-relaxed"
              style={{ fontFamily: 'Lora, serif' }}
            >
              <p>
                Our story began in the bustling streets of Rawalpindi, where
                our grandfather perfected the art of Nihari. What started as
                a small street-side kitchen has evolved into a premium
                destination for food connoisseurs.
              </p>
              <p>
                We believe that true flavor cannot be rushed. That is why our
                signature Nihari is simmered for exactly 12 hours, allowing
                the bone marrow to infuse the gravy with its characteristic
                richness and depth.
              </p>
              <p>
                Today, Nihari House stands as a testament to authentic
                Pakistani hospitality, bringing the true taste of heritage
                to your table.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-12 flex items-center space-x-8">
              <div className="text-center">
                <div
                  className="text-3xl font-bold text-[#6B1E2E]"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  35+
                </div>
                <div
                  className="text-xs uppercase tracking-widest text-gray-500 mt-1"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Years Experience
                </div>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div className="text-center">
                <div
                  className="text-3xl font-bold text-[#6B1E2E]"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  50+
                </div>
                <div
                  className="text-xs uppercase tracking-widest text-gray-500 mt-1"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Family Recipes
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[600px] rounded-3xl overflow-hidden group reveal-on-scroll">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlier2qumcg3yTP18RFSwtAsjTyBCqymh5y_4y6W1i3nJ57I1H2cqtEMar1JpXihuqLW5CCjNtYFKpHSAreVVKKp-qwMqgXG3IdgadjEptLj8szS6Nuk7k7vGAV3z1NEUAAXnOWYNUm7QidqQ3TZVi-BUcqW7ruAl1I2uEj50du4J8xRL6I9muxkq3l_m4UZwsaCiT3PCKXMxdKIdP0grW0JNOCW3iwaUXF20mz7FRurCxg3W1dmA0hF3lGgFXtFqp3or6Ji1o-2SI"
              alt="Our Kitchen Heritage"
              fill
              className="object-cover transition-transform duration-[3s] group-hover:scale-110"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
          </div>

        </div>
      </div>
    </section>
  )
}