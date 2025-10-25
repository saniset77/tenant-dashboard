"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Wallet2, Wrench, FileText, CalendarDays, LogOut } from "lucide-react";

const nav = [
  { href: "/dashboard", label: "Dashboard", icon: Home },
  { href: "/payments",  label: "Payments",  icon: Wallet2 },
  { href: "/maintenance", label: "Maintenance", icon: Wrench },
  { href: "/docs", label: "Docs", icon: FileText },
  { href: "/calendar", label: "Calendar", icon: CalendarDays },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
  className="
    group
    hidden sm:flex
    fixed left-10 top-20 bottom-4        /* was bottom-15 (invalid) */
    w-16 lg:w-20                          /* was w-18 (invalid) */
    hover:w-56 lg:hover:w-56
    transition-[width] duration-300 ease-out
    rounded-[50px]                        /* fixed radius so corners don’t morph */
    bg-[var(--color-mbx)]/90
    border border-white/5
    shadow-[0_10px_30px_rgba(0,0,0,.35)]  /* keep a single shadow */
    backdrop-blur-md
    p-3
    flex-col items-center justify-between
    overflow-hidden
    z-40
  "
>
     

      {/* rail */}
      <div className="flex flex-col items-center justify-center py-6 gap-4 w-full">
        {nav.map(({ href, label, icon: Icon }) => {
          const active = pathname?.startsWith(href);
          return (
            <Link key={href} href={href} aria-label={label} className="w-full">
              <div
                className={`
                mx-2 rounded-full px-2
                h-10 w-auto
                flex items-center gap-3
                transition-colors
                ${active
                ? "bg-gradient-to-b from-purple-400 to-purple-600 ring-2 ring-white/10 shadow-lg"
                : "hover:bg-white/[0.07]"}
                `}
             >

                <span className="inline-flex h-8 w-8 min-w-8 items-center justify-center rounded-full">
                  <Icon
                    className={
                      active
                        ? "h-5 w-5 text-white"
                        : "h-5 w-5 text-white/70 group-hover:text-white"
                    }
                  />
                </span>

                {/* label — hidden until sidebar expands */}
                <span
                  className="
                    text-sm text-white/90
                    opacity-0 max-w-0
                    group-hover:opacity-100 group-hover:max-w-[160px]
                    transition-all duration-300 ease-out
                    overflow-hidden whitespace-nowrap
                  "
                >
                  {label}
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      {/* logout button */}
      <button
        aria-label="Logout"
        className="
          h-10 w-10 rounded-full
          bg-rose-500/15
          shadow-[inset_0_0_0_1px_rgba(255,255,255,.06)]
          flex items-center justify-center
          hover:bg-rose-500/25 transition-colors
          mb-1
        "
      >
        <LogOut className="h-4 w-4 text-rose-400" />
      </button>
    </aside>
  );
}



