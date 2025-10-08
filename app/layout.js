import './globals.css'

export const metadata = {
  title: 'Calculator',
  description: 'Simple Calculator App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
