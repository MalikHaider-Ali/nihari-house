'use client'
import Image from 'next/image'

export default function TheBeginning() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Text */}
        <div className="space-y-6">
          <h2
            className="text-4xl text-[#6B1E2E] font-bold"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            The Beginning
          </h2>
          <p
            className="text-lg leading-relaxed text-gray-700"
            style={{ fontFamily: 'Lora, serif' }}
          >
            Founded in the heart of Rawalpindi, Nihari House began as a small
            family kitchen with a single goal: to preserve the authentic,
            slow-cooked traditions of our ancestors. Our signature Nihari
            recipe has been passed down through three generations, simmering
            for hours to achieve that perfect, melt-in-the-mouth consistency.
          </p>
          <p
            className="text-lg leading-relaxed text-gray-700 italic"
            style={{ fontFamily: 'Lora, serif' }}
          >
            Cooking is not just about ingredients; it is about the soul we
            pour into every copper pot.
          </p>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#D4870A] z-0" />
          <div className="relative z-10 overflow-hidden shadow-2xl group">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkJ9rzitcchk27Vd22FD8KczVhZPL_BEQ_mdBnCBaCDfAdpoNa-40lODGcci8hnFjck3qQC_FPqLUfYRZ0YcOOzCgtHt8__qCa_vKw3XdKzhWrAsfE3ZD1_uAoNps9weO_l26QevHT5Xw-IrWCBGYwxAjWtDgGx6NevaovJl5nNqQUzwYg8azNZ7oTwkMe6z2Z3v4oBwFLWVgNYna7dQIoEEsH9R0c8-pzVdcA41qvn5jOE3jzdWiCbmwIAsiqcsqJ7gdKflta03UK"
              alt="Heritage Kitchen"
              width={600}
              height={400}
              className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>

      </div>
    </section>
  )
}