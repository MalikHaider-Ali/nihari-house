'use client'
import Link from 'next/link'

const quickLinks = [
  { label: 'Home',        href: '/'           },
  { label: 'Menu',        href: '/menu'        },
  { label: 'Our Story',   href: '/our-story'   },
  { label: 'Gallery',     href: '/gallery'     },
  { label: 'Contact',     href: '/contact'     },
  { label: 'Track Order', href: '/track-order' },
]

export default function Footer() {
  return (
    <footer
      className="text-white py-16"
      style={{ backgroundColor: '#4A1220' }}
    >
      <div className="container mx-auto px-4 md:px-8">

        {/* 3-col Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Col 1 — Brand */}
          <div>
            <Link
              href="/"
              className="text-3xl font-bold text-white tracking-tight mb-4 block"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              NIHARI <span className="text-[#D4870A]">HOUSE</span>
            </Link>
            <p
              className="text-gray-400 leading-relaxed mb-6 text-sm"
              style={{ fontFamily: 'Lora, serif' }}
            >
              The authentic taste of Rawalpindi, bringing you heritage on a
              plate. Experience the finest slow-cooked delicacies since 1987.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D4870A] transition-colors"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V1h-4.3c-4.3,0-5.3,3.2-5.3,5.3v1.1H6.1v3.4h2.8v11.2h4.5V10.9h3.8l.5-3.4Z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D4870A] transition-colors"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12,2.16c3.2,0,3.58.01,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s-.01,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.15-3.23,1.66-4.77,4.92-4.92,1.27-.06,1.65-.07,4.85-.07m0-2.16C8.74,0,8.33.01,7.05.07,2.73.27.27,2.73.07,7.05,0.01,8.33,0,8.74,0,12s0.01,3.67.07,4.95c.2,4.32,2.66,6.78,6.98,6.98,1.28.06,1.69.07,4.95.07s3.67-.01,4.95-.07c4.32-.2,6.78-2.66,6.98-6.98,0.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.32-2.66-6.78-6.98-6.98C15.67,0.01,15.26,0,12,0Z" />
                  <path d="M12,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84Zm0,10.16A4,4,0,1,1,16,12,4,4,0,0,1,12,16Z" />
                  <circle cx="18.41" cy="5.59" r="1.44" />
                </svg>
              </a>
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#25D366] transition-colors"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4
              className="text-xl mb-6 border-b border-white/10 pb-2 inline-block"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[#D4870A] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <h4
              className="text-xl mb-6 border-b border-white/10 pb-2 inline-block"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Get In Touch
            </h4>
            <ul
              className="space-y-4 text-gray-400 text-sm"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              <li className="flex items-start space-x-3">
                <svg className="h-5 w-5 text-[#D4870A] flex-shrink-0 mt-0.5" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Main Saddar Road, Near Cantonment Board, Rawalpindi, Pakistan</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="h-5 w-5 text-[#D4870A] flex-shrink-0 mt-0.5" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+92 51 555 1234<br />+92 300 123 4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="h-5 w-5 text-[#D4870A] flex-shrink-0 mt-0.5" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Mon–Sun: 8:00 AM – 11:30 PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p
              className="text-gray-500 text-xs"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              © 2025 Nihari House. All rights reserved.
            </p>
            <p
              className="text-gray-500 text-xs"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Made by TechUp Agency —{' '}
              <a
                href="https://techup.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D4870A] transition-colors"
              >
                techup.ai
              </a>
            </p>
          </div>
        </div>

      </div>
    </footer>
  )
}