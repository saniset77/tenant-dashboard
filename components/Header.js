"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false); // Start with light mode since we set light colors

  // Set initial theme on component mount
  useEffect(() => {
    const root = document.documentElement;
    // Set light mode colors as default
    root.style.setProperty('--color-bg', '#B5ABBA');
    root.style.setProperty('--color-mbx', '#F0EEF1');
    root.style.setProperty('--color-sbx', '#D4CAD6');
    root.style.setProperty('--color-text', '#2C2633');
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    
    // Update CSS custom properties based on theme
    const root = document.documentElement;
    
    if (newMode) {
      // Dark mode colors
      root.style.setProperty('--color-bg', '#141019');
      root.style.setProperty('--color-mbx', '#232028');
      root.style.setProperty('--color-sbx', '#3C3645');
      root.style.setProperty('--color-text', '#E6D1F0');
    } else {
      // Light mode colors
      root.style.setProperty('--color-bg', '#B5ABBA');
      root.style.setProperty('--color-mbx', '#F0EEF1');
      root.style.setProperty('--color-sbx', '#D4CAD6');
      root.style.setProperty('--color-text', '#2C2633');
    }
  };
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
          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme}
            className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              // Sun icon for light mode
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              // Moon icon for dark mode
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
          
          <Link href="/notifications">
            <button className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 hover:from-purple-500 hover:to-purple-700 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5h-5a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2z" />
              </svg>
            </button>
          </Link>
          <Link href="/messages">
            <button className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 hover:from-purple-500 hover:to-purple-700 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </header>
  )
}
