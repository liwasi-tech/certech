import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import LayoutFooter from '@/components/LayoutFooter'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Liwasi EdTech',
  description: 'Centros educativos rurales para la educación en tecnología.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <header>
          <Navbar />
        </header>
        <main>
          {children}
        </main>

        <LayoutFooter />
      </body>
    </html>
  )
}
