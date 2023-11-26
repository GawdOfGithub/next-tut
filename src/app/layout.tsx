import type { Metadata } from 'next'
import { Inter,Space_Grotesk } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import ThemeContextProvider from '@/contexts/ThemeContext'
const inter = Inter({ subsets: ['latin'] ,
weight: [ '100', '200', '300', '400', '500', '600', '700', '800', '900' ],
variable:'--font-inter'
})

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] ,
weight: [ '300', '400', '500', '600', '700'],
variable:'--font-inter'
})

export const metadata: Metadata = {
  title: 'OverFlow',
  description: 'Clear your dev doubts today',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <ThemeContextProvider>
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>{children}</body>
      
    </html>
    </ThemeContextProvider>
    </ClerkProvider>
  )
}
