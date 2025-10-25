import StatCard from '../components/StatCard'
import ChartPlaceholder from '../components/ChartPlaceholder'

export default function Page() {
  return (
    <>
      <h1 className="text-2xl font-semibold mb-6">Overview</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard title="Users" value="12.4k" delta="+4.3%" />
        <StatCard title="Revenue" value="$48.2k" delta="+1.9%" />
        <StatCard title="Orders" value="1.2k" delta="-2.1%" />
        <StatCard title="Conversion" value="4.2%" delta="+0.2%" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-[var(--color-mbx)] rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-medium mb-4">Action Needed</h2>
          <ChartPlaceholder />
        </div>

        <div className="bg-[var(--color-mbx)] rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-medium mb-4">Notifications</h2>
          <p className="text-sm text-[var(--color-text)]">Recent activity and quick links go here.</p>
        </div>
      </div>
    </>
  )
}
