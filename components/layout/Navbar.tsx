'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCartStore } from '@/store/useCartStore'

const navLinks = [
  { label: 'Home',      href: '/'          },
  { label: 'Menu',      href: '/menu'       },
  { label: 'Our Story', href: '/our-story'  },
  { label: 'Gallery',   href: '/gallery'    },
  { label: 'Contact',   href: '/contact'    },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled]     = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [mounted, setMounted]           = useState(false)
  const pathname                         = usePathname()
  const { totalItems }                   = useCartStore()

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false)
  }, [pathname])

  return (
    <>
      <nav
        className={`sticky top-0 z-50 bg-white border-b border-gray-100 h-20 flex items-center transition-shadow duration-300
          ${isScrolled ? 'shadow-md' : 'shadow-sm'}`}
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">

          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-[#6B1E2E]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            NIHARI <span className="text-[#D4870A]">HOUSE</span>
          </Link>

          {/* Desktop Nav Links */}
          <div
            className="hidden md:flex items-center space-x-8 font-medium text-sm uppercase tracking-widest"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors hover:text-[#6B1E2E]
                  ${pathname === link.href
                    ? 'text-[#6B1E2E] border-b-2 border-[#D4870A] pb-0.5'
                    : 'text-[#1C1C1C]'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">

            {/* Track Order */}
            <Link
              href="/track-order"
              className="hidden md:block text-sm font-medium text-[#6B1E2E] hover:text-[#D4870A] transition-colors"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Track Order
            </Link>

            {/* Cart Icon with Badge */}
            <Link
              href="/checkout"
              className="relative p-2 text-[#6B1E2E] hover:text-[#D4870A] transition-colors"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>

              {/* Cart Count Badge */}
              {mounted && totalItems() > 0 && (
                <span
                  className="absolute -top-1 -right-1 bg-[#D4870A] text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {totalItems()}
                </span>
              )}
            </Link>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/923001234567?text=Hi!%20I'd%20like%20to%20place%20an%20order"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center space-x-2 bg-[#D4870A] hover:bg-[#F5C842] text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all active:scale-95 shadow-md"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              <svg fill="currentColor" height="18" width="18" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.06 3.973L0 16l4.204-1.102a7.934 7.934 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.601 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>
              <span>Order Now</span>
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMobileOpen(true)}
              className="md:hidden p-2 text-[#6B1E2E]"
              aria-label="Open menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-[100] bg-[#FDF6EC] flex flex-col">

          {/* Mobile Header */}
          <div className="flex justify-between items-center px-6 py-5 border-b border-[#EDE0D0]">
            <Link
              href="/"
              className="text-2xl font-bold text-[#6B1E2E]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              NIHARI <span className="text-[#D4870A]">HOUSE</span>
            </Link>
            <button
              onClick={() => setIsMobileOpen(false)}
              className="p-2 text-[#6B1E2E]"
              aria-label="Close menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Links */}
          <div className="flex flex-col px-6 py-8 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className={`text-2xl font-bold transition-colors
                  ${pathname === link.href
                    ? 'text-[#D4870A]'
                    : 'text-[#6B1E2E] hover:text-[#D4870A]'
                  }`}
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/track-order"
              onClick={() => setIsMobileOpen(false)}
              className="text-2xl font-bold text-[#6B1E2E] hover:text-[#D4870A] transition-colors"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Track Order
            </Link>

            {/* Mobile Cart Link */}
            <Link
              href="/checkout"
              onClick={() => setIsMobileOpen(false)}
              className="text-2xl font-bold text-[#6B1E2E] hover:text-[#D4870A] transition-colors flex items-center gap-3"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Cart
              {mounted && totalItems() > 0 && (
                <span
                  className="bg-[#D4870A] text-white text-sm font-bold rounded-full h-7 w-7 flex items-center justify-center"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {totalItems()}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile WhatsApp CTA */}
          <div className="px-6 mt-auto pb-10">
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-[#D4870A] text-white font-bold py-4 rounded-full shadow-lg"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.06 3.973L0 16l4.204-1.102a7.934 7.934 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.601 2.326z" />
              </svg>
              Order on WhatsApp
            </a>
          </div>

        </div>
      )}
    </>
  )
}