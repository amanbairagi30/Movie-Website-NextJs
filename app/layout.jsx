import './globals.css'
import { Montserrat } from 'next/font/google'


export const metadata = {
  title: 'Flixify',
  description: 'A movie streaming app',
}

const montserrat = Montserrat({
  weight:["400","700"],
  subsets : ["latin"],
  variable : "--font-main",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} mx-32`}>{children}</body>
    </html>
  )
}
