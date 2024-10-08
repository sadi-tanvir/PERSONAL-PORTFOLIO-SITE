import type { Metadata } from 'next'
import { Montserrat, Josefin_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

const inter = Josefin_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Home - Tanvir Hossain Sadi",
  description: "Explore my personal portfolio website, your gateway to discovering my diverse skill set and passion for creating innovative projects. Dive into my world of creativity, where each project tells a unique story, and let's connect to turn your ideas into reality.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </head>
      <body className={`${inter.className} bg-[#111a28]`}>
        <Navbar></Navbar>
        {children}
        {/* <Footer></Footer> */}
      </body>
    </html>
  )
}
