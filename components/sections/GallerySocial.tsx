'use client'

export default function GallerySocial() {
  return (
    <div className="mt-20 text-center flex flex-col items-center gap-6">
      <h2
        className="text-3xl font-bold text-[#6B1E2E]"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        Follow Our Culinary Story
      </h2>
      <p
        className="max-w-md text-slate-600"
        style={{ fontFamily: 'Lora, serif' }}
      >
        Join our community on social media for daily specials and
        behind-the-scenes content.
      </p>
      <div className="flex gap-4">
        <a
          href="#"
          className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#6B1E2E] text-[#6B1E2E] font-bold hover:bg-[#6B1E2E] hover:text-white transition-all"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          Instagram
        </a>
        <a
          href="#"
          className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#6B1E2E] text-[#6B1E2E] font-bold hover:bg-[#6B1E2E] hover:text-white transition-all"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          Facebook
        </a>
      </div>
    </div>
  )
}