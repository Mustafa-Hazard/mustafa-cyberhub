import type { Metadata } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-jetbrains',
  display: 'swap',
})

// Clash Display via local font (fontshare doesn't work with next/font)
// You'll need to download and place in /public/fonts/ClashDisplay-Variable.woff2
// OR we use a Google alternative - we'll use a fallback that looks similar
const clashDisplay = localFont({
  src: [
    { path: '../public/fonts/ClashDisplay-Medium.woff2', weight: '500' },
    { path: '../public/fonts/ClashDisplay-Semibold.woff2', weight: '600' },
    { path: '../public/fonts/ClashDisplay-Bold.woff2', weight: '700' },
  ],
  variable: '--font-clash',
  display: 'swap',
  fallback: ['Space Grotesk', 'sans-serif'],
})

export const metadata: Metadata = {
  title: 'Mustafa Iqbal | Full-Stack Developer · Cybersecurity — Karachi',
  description:
    'Mustafa Iqbal — BSCS student at SZABIST, Karachi. Full-stack developer and cybersecurity specialist building secure, production-ready software.',
  authors: [{ name: 'Mustafa Muhammad Iqbal' }],
  robots: 'index, follow',
  metadataBase: new URL('https://mustafa-cyberhub.vercel.app'), alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Mustafa Iqbal | Full-Stack · Cybersecurity',
    description:
      'BSCS student at SZABIST building secure, production-ready full-stack applications with a cybersecurity-first mindset.',
    images: [{ url: '/images/og-social.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/og-social.png'],
  },
  themeColor: '#080b12',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${clashDisplay.variable}`}>
      <body>{children}</body>
    </html>
  )
}
