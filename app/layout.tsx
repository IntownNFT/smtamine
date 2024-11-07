import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })

const logoUrl = '/images/logo.png'

export const metadata: Metadata = {
  metadataBase: new URL('https://ironmind.academy'),
  title: 'IRONMIND ACADEMY - Professional Trading Education',
  description: 'Join IRONMIND ACADEMY to master trading with live sessions, mentorship, and proven strategies. Created by SMTamine.',
  keywords: 'trading education, forex trading, crypto trading, stock trading, IRONMIND, SMTamine, trading academy, trading mentorship',
  icons: {
    icon: [{ url: logoUrl, type: 'image/png' }],
    shortcut: [{ url: logoUrl, type: 'image/png' }],
    apple: [{ url: logoUrl, type: 'image/png' }],
    other: [{ url: logoUrl, type: 'image/png' }],
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    url: 'https://ironmind.academy',
    title: 'IRONMIND ACADEMY - Professional Trading Education',
    description: 'Master trading with IRONMIND ACADEMY. Live sessions, mentorship, and proven strategies by SMTamine.',
    siteName: 'IRONMIND ACADEMY',
    images: [{
      url: logoUrl,
      width: 800,
      height: 800,
      alt: 'IRONMIND ACADEMY Logo',
      type: 'image/png',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IRONMIND ACADEMY - Professional Trading Education',
    description: 'Master trading with IRONMIND ACADEMY. Live sessions, mentorship, and proven strategies by SMTamine.',
    site: '@ironmind',
    creator: '@SMTamine',
    images: {
      url: logoUrl,
      alt: 'IRONMIND ACADEMY Logo',
      type: 'image/png',
      width: 800,
      height: 800,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="canonical" href="https://ironmind.academy" />
        <meta name="image" content={logoUrl} />
        <meta itemProp="image" content={logoUrl} />
        <meta property="og:image" content={logoUrl} />
        <meta property="og:image:secure_url" content={logoUrl} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="800" />
        <meta property="og:image:alt" content="IRONMIND ACADEMY Logo" />
        <meta name="twitter:image" content={logoUrl} />
        <meta name="twitter:image:type" content="image/png" />
        <meta name="twitter:image:width" content="800" />
        <meta name="twitter:image:height" content="800" />
        <meta name="twitter:image:alt" content="IRONMIND ACADEMY Logo" />
      </head>
      <body className={inter.className}>
        {children}
        <Toaster position="bottom-right" theme="dark" />
      </body>
    </html>
  )
}