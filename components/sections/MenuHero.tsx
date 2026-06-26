'use client'

export default function MenuHero() {
  return (
    <section
      className="py-20 md:py-32 text-white text-center"
      style={{
        background:
          "linear-gradient(rgba(107,30,46,0.75), rgba(107,30,46,0.75)), url('https://images.unsplash.com/photo-1585937421612-70a0f2455f75?auto=format&fit=crop&q=80&w=2000')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4">
        <h1
          className="text-4xl md:text-6xl mb-4"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Our Menu
        </h1>
        <p
          className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-6"
          style={{ fontFamily: 'Lora, serif' }}
        >
          A curated collection of time-honored recipes, slow-cooked to
          perfection using traditional Mughlai techniques.
        </p>
        <nav
          aria-label="Breadcrumb"
          className="flex justify-center text-sm opacity-80"
          style={{ fontFamily: 'Lora, serif' }}
        >
          <ol className="flex items-center space-x-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><span className="mx-2">/</span></li>
            <li className="font-bold">Menu</li>
          </ol>
        </nav>
      </div>
    </section>
  )
}