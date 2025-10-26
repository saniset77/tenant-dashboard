export default function DashboardPage() {
  return (
    <>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold mb-2">Hello Tenant !</h1>
        <p className="text-sm text-[var(--color-text)]">Here's What's Happening With Your Home.</p>
      </div>

      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Payment Card */}
        <div className="bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl p-4 text-white relative overflow-hidden">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div>
            <p className="text-2xl font-bold mb-1">$950</p>
            <p className="text-white/80 text-xs">Next Payment Due Apr 15</p>
          </div>
          <div className="absolute right-3 top-3 opacity-20">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
            </svg>
          </div>
        </div>

        {/* Lease End Card */}
        <div className="bg-gradient-to-r from-purple-400 to-purple-600 rounded-xl p-4 text-white relative overflow-hidden">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div>
            <p className="text-2xl font-bold mb-1">March 2026</p>
            <p className="text-white/80 text-xs">Lease Ends</p>
          </div>
          <div className="absolute right-3 top-3 opacity-20">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
            </svg>
          </div>
        </div>

        {/* Maintenance Card */}
        <div className="bg-gradient-to-r from-purple-300 to-purple-500 rounded-xl p-4 text-white relative overflow-hidden">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div>
            <p className="text-2xl font-bold mb-1">1 In Progress</p>
            <p className="text-white/80 text-xs">Maintenance Requests</p>
          </div>
          <div className="absolute right-3 top-3 opacity-20">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Action Needed Section */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Action needed</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Renew or Move Out Card */}
              <div className="bg-[var(--color-mbx)] rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-3">Renew Or Move-Out?</h3>
                <p className="text-sm text-[var(--color-text)] mb-6">Move-Out Notice Received. Please Chase Where To Renew Your Lease Or Move Out.</p>
                
                <div className="flex gap-3">
                  <button className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white px-6 py-2 rounded-full font-medium transition-all duration-200">
                    Choose
                  </button>
                  <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-200">
                    Move Out
                  </button>
                </div>
              </div>

              {/* Schedule Maintenance Card */}
              <div className="bg-[var(--color-mbx)] rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-1">Schedule With All-Star Plumbing On Mar 23, 2025</h3>
                
                <div className="space-y-3 my-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium">Assigned</p>
                      <p className="text-xs text-[var(--color-text)]">Mar 24, 09:15 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium">Scheduled</p>
                      <p className="text-xs text-[var(--color-text)]">Mar 27, 11:15 PM</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full font-medium transition-all duration-200 text-sm">
                    Reschedule
                  </button>
                  <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-full font-medium transition-all duration-200 text-sm">
                    Add Access Note
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Notifications Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Notifications</h2>
          
          <div className="space-y-3">
            <div className="bg-[var(--color-mbx)] rounded-2xl p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2L3 7v11a1 1 0 001 1h3v-8a1 1 0 011-1h4a1 1 0 011 1v8h3a1 1 0 001-1V7l-7-5z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Faucet Leaking</p>
                  <p className="text-sm text-[var(--color-text)]">Faucet Leaking</p>
                </div>
              </div>
            </div>

            <div className="bg-[var(--color-mbx)] rounded-2xl p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2L3 7v11a1 1 0 001 1h3v-8a1 1 0 011-1h4a1 1 0 011 1v8h3a1 1 0 001-1V7l-7-5z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Faucet Leaking</p>
                  <p className="text-sm text-[var(--color-text)]">Faucet Leaking</p>
                </div>
              </div>
            </div>

            <div className="bg-[var(--color-mbx)] rounded-2xl p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2L3 7v11a1 1 0 001 1h3v-8a1 1 0 011-1h4a1 1 0 011 1v8h3a1 1 0 001-1V7l-7-5z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Faucet Leaking</p>
                  <p className="text-sm text-[var(--color-text)]">Faucet Leaking</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Payment Section */}
      <div className="bg-[var(--color-mbx)] rounded-2xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-3xl font-bold mb-1">$950</p>
            <p className="text-sm text-[var(--color-text)]">Next Payment</p>
          </div>
          <button className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white px-6 py-3 rounded-full font-medium transition-all duration-200 shadow-lg">
            Pay Rent Now
          </button>
        </div>
      </div>
    </>
  )
}