import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'KPI Library',
  description: 'Browse for assets needed to report and present analysis',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="m-2 p-4 bg-white border-2 border-solid rounded-[16px] border-gray-300">
        {children}
      </body>
    </html>
  )
}
