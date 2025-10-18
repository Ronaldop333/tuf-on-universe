import './globals.css'

export const metadata = {
  title: 'TUF-on Universe - Universal Flow Theory',
  description: 'Scientific portal exploring the limits of conventional physics through the Universal Flow Theory',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-inter relative">
        {children}
      </body>
    </html>
  )
}
