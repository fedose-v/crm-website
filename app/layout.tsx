import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import './globals.css'

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: '--font-space-grotesk' })

export const metadata: Metadata = {
  title: 'FlowCRM — CRM с BPMN конструктором',
  description: 'Современная CRM система с визуальным BPMN конструктором бизнес-процессов. Автоматизируйте работу вашей компании.',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a2e',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
