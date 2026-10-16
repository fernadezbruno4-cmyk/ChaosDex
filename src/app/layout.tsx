import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'CHAOSDEX — Two tokens enter. One wins.',
  description:
    'CHAOSDEX is a premium crypto platform for comparing the relative performance of two tokens. Discover which token outperforms the other.',
  metadataBase: new URL('https://chaosdex.example.com'),
  openGraph: {
    title: 'CHAOSDEX — Two tokens enter. One wins.',
    description:
      'CHAOSDEX is a premium crypto platform for comparing the relative performance of two tokens.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CHAOSDEX — Two tokens enter. One wins.',
    description:
      'CHAOSDEX is a premium crypto platform for comparing the relative performance of two tokens.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-forest-900 text-ivory`}>
        {children}
      </body>
    </html>
  )
}
