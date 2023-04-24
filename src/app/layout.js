import Header from '@/components/Header'
import './globals.css'
import { Mulish } from 'next/font/google'
import Footer from '@/components/Footer'

const mulish = Mulish({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: 'H-Flix App',
  description: 'Best Movie App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={mulish.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
