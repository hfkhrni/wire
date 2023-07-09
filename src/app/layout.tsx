import './globals.css'
import Providers from '@/components/Providers'

export const metadata = {
  title: 'wire',
  description: 'over the wire',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body><Providers>{children}</Providers></body>
    </html>
  )
}
