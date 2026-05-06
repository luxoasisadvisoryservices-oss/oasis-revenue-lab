import '../styles/globals.css'

export const metadata = {
  title: 'Oasis Revenue Lab — AI Revenue Intelligence for Short-Term Rentals',
  description: 'AI-powered revenue monitoring, pricing intelligence, and real consultancy for STR operators. A division of Lux Oasis Advisory & Services LLC.',
  keywords: 'short term rental revenue management, Airbnb pricing, Dubai holiday homes, revenue management AI, STR pricing strategy',
  openGraph: {
    title: 'Oasis Revenue Lab',
    description: 'AI-powered revenue intelligence for short-term rental operators.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
