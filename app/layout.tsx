import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "@fontsource/open-sans"; // Defaults to weight 400
import "@fontsource/open-sans/400.css"; // Specify weight
import "@fontsource/open-sans/400-italic.css"; // Specify weight and style

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pedram Mirshah | Frontend Developer & Tech Enthusiast',
  description: 'Pedram Mirshah - Experienced frontend developer specializing in React, Next.js, and modern web technologies. Explore my portfolio, projects, and contributions to innovative web solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
