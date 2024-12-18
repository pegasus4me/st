import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ST | Pragmatic by design',
  description: 'Pragmatic by design',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-[#3701B4]">
    <body className={`${inter.className} max-w-[820px] m-auto`}>
      {children}
      <Footer/>
    </body>
    </html>
  )
}
