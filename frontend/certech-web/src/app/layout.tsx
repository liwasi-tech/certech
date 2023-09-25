import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Footer from '@/components/Footer'
import CookiesConsent from '@/components/CookiesConsent'

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["italic", "normal"],
  subsets: ["latin"],  
})

export const metadata: Metadata = {
  title: 'Liwasi EdTech',
  description: 'Centros Educativos Rurales para la educación en tecnología.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={roboto.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
