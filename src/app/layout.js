import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer/Footer'
// 
import Providers from '@/providers'
import Toaster from '@/components/Toaster/Toaster'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'UNICO',
  description: 'Generated by UNICO',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
        <Toaster />
      </body>
    </html>
  )
}
