import './globals.css'

export const metadata = {
  title: 'Stevie Parallax',
  description: `Parallax effect on Stevie Wonder's Songs in the Key of Life`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
