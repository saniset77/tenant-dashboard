import StatCard from '../components/StatCard'
import ChartPlaceholder from '../components/ChartPlaceholder'

export default function Page() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard title="Users" value="12.4k" delta="+4.3%" />
        <StatCard title="Revenue" value="$48.2k" delta="+1.9%" />
        <StatCard title="Orders" value="1.2k" delta="-2.1%" />
        <StatCard title="Conversion" value="4.2%" delta="+0.2%" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-[var(--color-mbx)] rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-medium mb-4">Action Needed</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-[var(--color-bg)] rounded-xl p-4 border border-gray-200/10">
              <h3 className="text-sm font-medium mb-2">Pending Tasks</h3>
              <p className="text-xs text-[var(--color-text)] mb-3">Important tasks that require your attention.</p>
              <div className="flex gap-2">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded-full text-xs font-medium transition-colors">
                  Reschedule
                </button>
                <button className="bg-purple-500 hover:bg-purple-600 text-white px-3 py-1.5 rounded-full text-xs font-medium transition-colors">
                  Access Note
                </button>
              </div>
            </div>
            <div className="bg-[var(--color-bg)] rounded-xl p-4 border border-gray-200/10">
              <h3 className="text-sm font-medium mb-2">Urgent Alerts</h3>
              <p className="text-xs text-[var(--color-text)] mb-3">Critical alerts and notifications.</p>
              <div className="flex gap-2">
                <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-full text-xs font-medium transition-colors">
                  Move Out
                </button>
                <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded-full text-xs font-medium transition-colors">
                  Renew
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[var(--color-mbx)] rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-medium mb-4">Notifications</h2>
          <div className="space-y-3">
            <div className="bg-[var(--color-bg)] rounded-full p-3 border border-gray-200/10">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div>
                  <p className="text-xs font-medium">Maintenance Completed</p>
                  <p className="text-xs text-[var(--color-text)]">Unit 205 - HVAC repair finished</p>
                </div>
              </div>
            </div>
            <div className="bg-[var(--color-bg)] rounded-full p-3 border border-gray-200/10">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div>
                  <p className="text-xs font-medium">Payment Received</p>
                  <p className="text-xs text-[var(--color-text)]">Unit 102 - Monthly rent processed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-[var(--color-mbx)] rounded-full p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-medium mb-2">Make a Payment</h2>
            <p className="text-sm text-[var(--color-text)]">Quick payment options and transaction management.</p>
          </div>
          <button className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white px-6 py-3 rounded-full font-medium transition-all duration-200 shadow-lg hover:shadow-xl">
            Pay Now
          </button>
        </div>
      </div>
    </>
  )
}
