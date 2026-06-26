'use client'
import { useState } from 'react'

const faqs = [
  {
    q: 'How long is the Nihari slow-cooked for?',
    a: 'Our signature Nihari is slow-cooked for a minimum of 12 to 14 hours on a low flame to ensure the meat is tender and the flavors are fully infused.',
  },
  {
    q: 'Do you offer catering for events?',
    a: 'Yes, we provide full-service catering and bulk delivery for weddings, corporate events, and family gatherings. Contact us on WhatsApp for details.',
  },
  {
    q: 'What are your opening hours?',
    a: 'We are open from 8:00 AM for Breakfast (Paye & Nihari) until 11:30 PM for Dinner, seven days a week.',
  },
  {
    q: 'Is the food spicy?',
    a: 'Our spice levels are authentic medium-high, but you can request mild or extra spicy for specific dishes like Karahi and Handi.',
  },
  {
    q: 'Do you deliver in Bahria Town?',
    a: 'Yes, we deliver across Rawalpindi and Islamabad including Bahria Town, DHA, and surrounding areas. Delivery fee may vary by distance.',
  },
  {
    q: 'How do I place a WhatsApp order?',
    a: 'Simply click the Order on WhatsApp button anywhere on our site. It will open a chat with your order pre-filled, just send it!',
  },
  {
    q: 'Do you do corporate catering?',
    a: 'Absolutely. We offer special corporate packages for offices and events. Get in touch via WhatsApp or the contact form for a custom quote.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept Cash on Delivery, Easypaisa, and JazzCash for all orders placed directly through our website or WhatsApp.',
  },
]

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: { q: string; a: string }
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-gray-100 pb-4 mb-4">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center cursor-pointer text-left py-2 gap-4"
      >
        <span
          className="text-[#1C1C1C] font-semibold text-base"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          {faq.q}
        </span>
        <span
          className={`text-[#D4870A] text-xl font-bold flex-shrink-0 transition-transform duration-300
            ${isOpen ? 'rotate-45' : 'rotate-0'}`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p
          className="text-gray-600 text-sm leading-relaxed bg-[#FDF6EC] rounded-lg px-4 py-3 mt-2"
          style={{ fontFamily: 'Lora, serif' }}
        >
          {faq.a}
        </p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const left  = faqs.slice(0, 4)
  const right = faqs.slice(4, 8)

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl text-[#6B1E2E] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-[#D4870A] mx-auto" />
        </div>

        {/* 2-Col Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
          <div>
            {left.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>
          <div>
            {right.map((faq, i) => {
              const globalIndex = i + 4
              return (
                <FAQItem
                  key={globalIndex}
                  faq={faq}
                  isOpen={openIndex === globalIndex}
                  onToggle={() => toggle(globalIndex)}
                />
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}