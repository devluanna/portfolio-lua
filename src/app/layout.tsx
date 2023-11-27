import type { Metadata } from 'next'
import './globals.scss'

import { Poppins } from 'next/font/google'

const inter = Poppins({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600']
})


export const metadata: Metadata = {
  title: 'Luana Alves',
  description: 'My portfolio Luana Alves',
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
