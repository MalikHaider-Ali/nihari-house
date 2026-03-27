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
      </body>
    </html>
  )
}