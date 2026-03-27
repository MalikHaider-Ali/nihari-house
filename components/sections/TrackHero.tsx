'use client'

export default function TrackHero() {
  return (
    <section
      className="py-24 px-6 text-center relative overflow-hidden"
      style={{ backgroundColor: '#4a0404' }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background:
            'radial-gradient(circle at center, rgba(255,255,255,0.2), transparent)',
        }}
      />
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2
          className="text-4xl md:text-6xl text-white mb-6"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Track Your Order
        </h2>
        <p
          className="text-slate-200 text-lg md:text-xl italic"
          style={{ fontFamily: 'Lora, serif' }}
        >
          Follow the journey of your authentic slow-cooked meal
        </p>
      </div>
    </section>
  )
}