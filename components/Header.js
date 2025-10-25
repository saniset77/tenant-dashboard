import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[var(--color-bg)] border-b relative">
      

      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-4">
          <button className="sm:hidden p-2 rounded-md">☰</button>
          <div className="text-lg font-semibold">Project name</div>
        </div>

        <div className="flex items-center gap-4">
          <input
            className="hidden sm:block px-3 py-1 rounded bg-slate-100 border"
            placeholder="Search"
          />
          <div className="text-sm text-slate-600">Hello, User</div>
        </div>
      </div>
    </header>
  )
}
