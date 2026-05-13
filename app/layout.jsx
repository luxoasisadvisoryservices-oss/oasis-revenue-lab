import { DM_Sans, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata = {
  title: 'Oasis Revenue Lab — AI Revenue Intelligence for Short-Term Rentals',
  description: 'AI-powered revenue monitoring, pricing intelligence, and real consultancy for STR operators. Built by active Dubai holiday home operators. A division of Lux Oasis Advisory & Services LLC.',
  keywords: 'short term rental revenue management, Airbnb pricing Dubai, holiday homes revenue, STR pricing strategy, PriceLabs expert, Dubai STR management, AI revenue manager',
  openGraph: {
    title: 'Oasis Revenue Lab — AI Revenue Intelligence for STR Operators',
    description: 'Daily AI revenue briefings, floor price protection, and real operator expertise. Built in Dubai.',
    url: 'https://www.oasisrevenuelab.com',
    siteName: 'Oasis Revenue Lab',
    type: 'website',
    images: [
      {
        url: 'https://www.oasisrevenuelab.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Oasis Revenue Lab — AI Revenue Intelligence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oasis Revenue Lab — AI Revenue Intelligence for STR Operators',
    description: 'Daily AI revenue briefings, floor price protection, and real operator expertise. Built in Dubai.',
    images: ['https://www.oasisrevenuelab.com/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.oasisrevenuelab.com',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  )
}
