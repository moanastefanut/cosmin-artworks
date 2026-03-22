import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cosmin Artworks',
  description: 'Premium graphic design services.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro" className="scroll-smooth">
      <body className="bg-black text-white antialiased font-sans selection:bg-[#0a84ff]/30">
        {children}
      </body>
    </html>
  )
}