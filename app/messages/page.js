export default function MessagesPage() {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold mb-2">Messages</h1>
        <div className="flex items-center gap-2 text-sm text-[var(--color-text)]">
          <span>Home</span>
          <span>{'>'}</span>
          <span>Messages</span>
        </div>
      </div>

      <div className="bg-[var(--color-mbx)] rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>
        <h2 className="text-xl font-semibold mb-2">No Messages Yet</h2>
        <p className="text-[var(--color-text)]">Your messages will appear here when you receive them.</p>
      </div>
    </>
  )
}