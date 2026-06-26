<<<<<<< HEAD
import { Playfair_Display, Lora, DM_Sans } from 'next/font/google'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'
import Navbar from '@/components/layout/Navbar'
import CartSidebar from '@/components/CartSidebar'
import ToastContainer from '@/components/Toast'
import Footer from '@/components/layout/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-playfair',
})

const lora = Lora({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-lora',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${lora.variable} ${dmSans.variable}`}>
      <body>
        <SmoothScroll>
          <Navbar />
          <CartSidebar />
          <ToastContainer />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
=======
import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Nihari House | Rawalpindi Ka Asli Zaika',
  description: 'Authentic Pakistani cuisine since 1987',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#FDF6EC] text-[#1C1C1C]">
        <Navbar />
        {children}
        <Footer />
>>>>>>> 0768f49a95b25af791e42f06ffb6bfeabdb2a5f9
      </body>
    </html>
  )
}