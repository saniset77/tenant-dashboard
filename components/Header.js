import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-[var(--color-bg)] relative">
      

      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-4">
          <button className="sm:hidden p-2 rounded-md">☰</button>
          <Image
            src="/logov2.svg"
            alt="Logo"
            width={120}
            height={40}
            className="h-8 w-auto ml-4"
          />
        </div>

        <div className="flex items-center gap-3">
          <button className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 hover:from-purple-500 hover:to-purple-700 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5v-12a5 5 0 0110 0v12z" />
            </svg>
          </button>
          <button className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 hover:from-purple-500 hover:to-purple-700 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
