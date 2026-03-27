'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'

export default function Hero() {

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
    <section className="relative h-[85vh] flex items-center overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxO2W8EBueU7GxyPWVw8KARGc_dLhOMTpK-nGHa2wOzUokPo-deyT08yXt0U94S1NU1D49YOdhSHQhkyBp_YK3BjvtL9WXT6J24MUHCV0hoD-tjrLaC_usC8AYr68FNunAD7n4yTvdWZJdIpXK9UFLMsPXwsCypjvPT1wNphR7uZ-CHlP09zH7IYVUvJOFEn5s4Iq54A_VB5ptwr9EX2xzbEU-sK1VgXDZvahkho9dOz7iASaCmK5f2UHpOtRFDQf0KO8SQIzW9v8w"
          alt="Authentic Nihari"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a0a0e]/80 via-[#1a0a0e]/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-2xl animate-fade-up">

          <span
            className="inline-block px-4 py-1.5 bg-[#D4870A] text-white font-bold text-xs uppercase tracking-widest rounded-full mb-6"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Established 1987
          </span>

          <h1
            className="text-5xl md:text-7xl text-white leading-tight mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Rawalpindi Ka <br />
            <span className="text-[#D4870A] italic font-normal">
              Asli Zaika
            </span>
          </h1>

          <p
            className="text-lg md:text-xl text-white/90 mb-10 max-w-lg leading-relaxed"
            style={{ fontFamily: 'Lora, serif' }}
          >
            The legacy of authentic Pakistani cuisine. Our original family
            recipes are slow-cooked for 12 hours with secret spices and love.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/menu"
              className="bg-[#D4870A] hover:bg-opacity-90 text-white px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:-translate-y-1 shadow-xl"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Discover Menu
            </Link>
            <Link
              href="/checkout"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-[#6B1E2E] text-white px-10 py-4 rounded-full font-bold text-lg transition-all"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Order Now
            </Link>
          </div>

        </div>
      </div>

      {/* Floating Cards */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 z-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Special Beef Nihari',
                label: "Chef's Top Pick",
                price: 'Rs. 850',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZBAjRwYwkHy_KrJiLP34FjCUTlNZpTkPZUGSmYANg8laV-SnQq2EfuKiZ05Zd4Xmx2c8GWGatpgPOOOySnbGMOENCCxGIae4KHNuOAIm5AWvu1iK8WRBtYQfawd18BVIjs0GtzjFiBMiESLnBLiBKqSK8xJU_1aT8LGXWetGGO85qzfeftV3wxm6n9IrzTqGi9BLru9SiT327FqgZKf-z7Zi69h2qhoj_EeU-rdfd-ARuYzXgGhiNjcA-ClTown1Ff9bRSL9yDOwH',
              },
              {
                name: 'Royal Mutton Paye',
                label: 'Breakfast Special',
                price: 'Rs. 1,200',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAequ8MbNI-SqEpWfhAoZ2OpJagEIaKVZsWaVJCWfxTY5i0VU647XfardDEggWqBLF0Xh3BBxojJNUORad705LyHfFqzNDLjzAdP75hZyTHfZFvwXA9_BQA--m3puCt1m7BeurmO2yGdFGq0F2B_dcsM3HfbJlkUUt_Rg10dbV48wBoD4iEHpn06MqfBgyGXMlTl3WsnwM9aaKzlMjvEwlKANK3qRQGRVu4mwmHF3wXvv_cwpLW2WOVRYMgrJu9LjjKq7pUD_dgnPee',
              },
              {
                name: 'Saffron Sheermal',
                label: 'Freshly Tandoored',
                price: 'Rs. 150',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHjlvTqR64udCTbrZYF1E_3dOjo0Gau_DEehMmVJiiNhfjv0ZWvkDZZqQpoCZsVLDLex9MDXjm1HN5TlxSwmvNpiJe0j00bQbbpl0aMMrxpI-WOLTSN091bff44NL3TJg3LTt-OQNOaQLepkJFayDbDuoKiGl-czMgmj3oGU54ukSrRzOhWO82HgumbBSiXRV-dPzmhEZXE7GMMgnMB3m4y64yFLkC9QM2pnIBHhcPv8QYvaemVAG6BtvnRPGHqtp8tL2w0giGSiRo',
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`glass-card p-6 rounded-2xl shadow-xl flex items-center space-x-4 border border-white/20 hover:-translate-y-2 transition-transform duration-300 ${i > 0 ? 'hidden md:flex' : ''}`}
              >
                <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 relative">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4
                    className="font-bold text-[#6B1E2E] text-lg"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-500 mb-1 italic">
                    {item.label}
                  </p>
                  <span
                    className="text-[#D4870A] font-bold"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}