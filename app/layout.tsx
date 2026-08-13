import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Premier Window Care | Window Cleaning in Hudsonville, MI',
  description:
    'Reliable window cleaning for homes and businesses in West Michigan, backed by 50+ five-star Google reviews. Crystal-clear results and fully insured service.',

  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/android-icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/premier-06.png' },
    ],

    apple: [
      { url: '/apple-icon-57x57.png', sizes: '57x57' },
      { url: '/apple-icon-60x60.png', sizes: '60x60' },
      { url: '/apple-icon-72x72.png', sizes: '72x72' },
      { url: '/apple-icon-76x76.png', sizes: '76x76' },
      { url: '/apple-icon-114x114.png', sizes: '114x114' },
      { url: '/apple-icon-120x120.png', sizes: '120x120' },
      { url: '/apple-icon-144x144.png', sizes: '144x144' },
      { url: '/apple-icon-152x152.png', sizes: '152x152' },
      { url: '/apple-icon-180x180.png', sizes: '180x180' },
    ],
  },

  manifest: '/manifest.json',

  other: {
    'msapplication-TileColor': '#ffffff',
    'msapplication-TileImage': '/ms-icon-144x144.png',
  },

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
    'Byron Center',
    'Allendale',
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
    'local window cleaning company',
  ],
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Premier Window Care',
              url: 'https://cleanwithpremier.com',
              telephone: '+1-616-422-4749',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '4672 40th Ave',
                addressLocality: 'Hudsonville',
                addressRegion: 'MI',
                postalCode: '49426',
                addressCountry: 'US',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5.0',
                reviewCount: 37,
                bestRating: '5',
                worstRating: '1',
              },
            }),
          }}
        />
        {children}
        <Script id="tawk-to-agent" strategy="afterInteractive">
          {`
            var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
            (function() {
              var s1 = document.createElement("script");
              var s0 = document.getElementsByTagName("script")[0];
              s1.async = true;
              s1.src = "https://embed.tawk.to/6a345f11119a1f1d46e0792f/1jre96nil";
              s1.charset = "UTF-8";
              s1.setAttribute("crossorigin", "*");
              s0.parentNode.insertBefore(s1, s0);
            })();
          `}
        </Script>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
