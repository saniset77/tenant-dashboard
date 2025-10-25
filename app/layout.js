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
        <div className="min-h-screen">
          <Header />
          <div className="flex">
            <Sidebar />
            <main className="flex-1 p-6 transition-all duration-300 ease-out">
              <div className="container max-w-full">{children}</div>
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
