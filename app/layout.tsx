import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
})

export const metadata: Metadata = {
  title: 'Premier Window Care | Professional Window Cleaning',
  description: 'Professional window cleaning for homes and businesses in West Michigan. Crystal clear windows, streak-free guarantee, fully insured.',
  keywords: ['window cleaning', 'West Michigan', 'Grand Rapids', 'Holland', 'professional cleaning', 'residential', 'commercial'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
