'use client'

import { useState } from 'react'

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState('notification')

  return (
    <>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold mb-2">Notification</h1>
        <div className="flex items-center gap-2 text-sm text-[var(--color-text)]">
          <span>Home</span>
          <span>{'>'}</span>
          <span>Notification</span>
        </div>
      </div>

      {/* Main Layout */}
      <div className="flex gap-6">
        {/* Left Sidebar */}
        <div className="w-64 space-y-2">
          <button
            onClick={() => setActiveTab('notification')}
            className={`w-full text-left px-4 py-3 rounded-2xl font-medium transition-all duration-200 ${
              activeTab === 'notification'
                ? 'bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-lg'
                : 'bg-[var(--color-mbx)] hover:bg-gray-200/10'
            }`}
          >
            Notification
          </button>
          <button
            onClick={() => setActiveTab('messages')}
            className={`w-full text-left px-4 py-3 rounded-2xl font-medium transition-all duration-200 ${
              activeTab === 'messages'
                ? 'bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-lg'
                : 'bg-[var(--color-mbx)] hover:bg-gray-200/10'
            }`}
          >
            Messages
          </button>
        </div>

        {/* Right Content */}
        <div className="flex-1">
          {activeTab === 'notification' && (
            <div className="space-y-4">
              {/* Notification Item 1 */}
              <div className="bg-[var(--color-mbx)] rounded-2xl p-6 flex items-center gap-4">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2L3 7v11a1 1 0 001 1h3v-8a1 1 0 011-1h4a1 1 0 011 1v8h3a1 1 0 001-1V7l-7-5z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Faucet Leaking</h3>
                  <p className="text-[var(--color-text)]">Faucet Leaking</p>
                </div>
              </div>

              {/* Notification Item 2 */}
              <div className="bg-[var(--color-mbx)] rounded-2xl p-6 flex items-center gap-4">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2L3 7v11a1 1 0 001 1h3v-8a1 1 0 011-1h4a1 1 0 011 1v8h3a1 1 0 001-1V7l-7-5z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Faucet Leaking</h3>
                  <p className="text-[var(--color-text)]">Faucet Leaking</p>
                </div>
              </div>

              {/* Notification Item 3 */}
              <div className="bg-[var(--color-mbx)] rounded-2xl p-6 flex items-center gap-4">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2L3 7v11a1 1 0 001 1h3v-8a1 1 0 011-1h4a1 1 0 011 1v8h3a1 1 0 001-1V7l-7-5z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Faucet Leaking</h3>
                  <p className="text-[var(--color-text)]">Faucet Leaking</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'messages' && (
            <div className="flex items-center justify-center h-64 text-[var(--color-text)]">
              <p>Messages will be displayed here</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}