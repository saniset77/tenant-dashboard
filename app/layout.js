import './globals.css'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

export const metadata = {
  title: 'Dashboard',
  description: 'Next.js + Tailwind dashboard',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex">
          <Sidebar />
          <main className="pl-28 pr-4"></main>
          <div className="flex-1">
            <Header />
            <main className="p-6">
              <div className="container">{children}</div>
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
