'use client'

export default function WhyOrderDirect() {
  const features = [
    {
      iconBg: 'bg-[#D4870A]/10 text-[#D4870A]',
      title: '10% Flat Discount',
      desc: 'Save more on every order when you use our direct website or WhatsApp ordering system.',
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      ),
    },
    {
      iconBg: 'bg-[#6B1E2E]/10 text-[#6B1E2E]',
      title: 'Priority Delivery',
      desc: 'Our dedicated riders ensure your Nihari reaches you piping hot, fresh from our tandoor.',
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      iconBg: 'bg-[#D4870A]/10 text-[#D4870A]',
      title: 'WhatsApp Updates',
      desc: 'Get real-time tracking and personalized support directly on your favorite messaging app.',
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="py-24 bg-[#FDF6EC]">
      <div className="container mx-auto px-4 md:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl text-[#6B1E2E] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Why Order Direct?
          </h2>
          <div className="w-24 h-1 bg-[#D4870A] mx-auto mb-6" />
          <p
            className="text-gray-600 max-w-xl mx-auto"
            style={{ fontFamily: 'Lora, serif' }}
          >
            Get the freshest food and the best deals by ordering through
            our official channels.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-10 rounded-3xl text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 border border-[#EDE0D0]"
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${feature.iconBg}`}
              >
                {feature.icon}
              </div>
              <h3
                className="text-xl font-bold text-[#1C1C1C] mb-3"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {feature.title}
              </h3>
              <p
                className="text-gray-600 text-sm leading-relaxed"
                style={{ fontFamily: 'Lora, serif' }}
              >
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div className="text-center mt-14">
          <a
            href="https://wa.me/923001234567?text=Hi!%20I'd%20like%20to%20place%20an%20order"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#D4870A] hover:bg-[#F5C842] text-white font-bold px-10 py-4 rounded-full shadow-lg transition-all hover:-translate-y-1 duration-200"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.06 3.973L0 16l4.204-1.102a7.934 7.934 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.601 2.326z" />
            </svg>
            Order on WhatsApp Now
          </a>
        </div>

      </div>
    </section>
  )
}