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

export const metadata = {
  title: 'Nihari House — Rawalpindi Ka Asli Zaika',
  description: 'Authentic Pakistani cuisine from Rawalpindi since 1987.',
}

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
      </body>
    </html>
  )
}