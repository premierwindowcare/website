import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
})

export const metadata: Metadata = {
  title: 'Premier Window Care | Reliable Window Cleaning',
  description: 'Reliable window cleaning for homes and businesses in West Michigan. Crystal clear windows, streak-free guarantee, fully insured.',
  keywords: [
  // Core
  'window cleaning',
  'professional window cleaning',
  'West Michigan window cleaning',
  'window washing service',
  'streak free window cleaning',

  // Locations
  'West Michigan',
  'Grand Rapids',
  'Holland',
  'Muskegon',
  'Kalamazoo',
  'Grand Haven',
  'Jenison',
  'Wyoming MI',
  'Allendale MI',
  'Zeeland MI',
  'Saugatuck MI',

  // Residential
  'residential window cleaning',
  'house window cleaning service',
  'home window washing',
  'exterior house window cleaning',
  'interior window cleaning',

  // Commercial
  'commercial window cleaning',
  'office window cleaning',
  'storefront window cleaning',
  'business window cleaning service',
  'property management window cleaning',

  // High intent
  'window cleaning near me',
  'hire window cleaner',
  'window cleaning quote',
  'affordable window cleaning',
  'local window cleaning company'
]
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
