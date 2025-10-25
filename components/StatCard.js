export default function StatCard({ title, value, delta }) {
  return (
    <div className="bg-[var(--color-sbx)] rounded-2xl p-4 shadow-sm">
      <div className="text-sm text-[var(--color-text)]">{title}</div>
      <div className="mt-2 flex items-baseline gap-2">
        <div className="text-2xl font-semibold">{value}</div>
        <div className="text-sm text-green-600">{delta}</div>
      </div>
    </div>
  )
}
