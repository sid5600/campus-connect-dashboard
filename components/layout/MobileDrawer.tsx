"use client";

import Link from "next/link";
import { X } from "lucide-react";
import menuItems from "./menuItems";
import { useMobileNav } from "./MobileNavProvider";
import { usePathname } from "next/navigation";

export default function MobileDrawer() {
  const { open, setOpen } = useMobileNav();
  const pathname = usePathname();

  if (!open) return null;

  return (
    <div className="md:hidden fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />

      <aside className="absolute left-0 top-0 bottom-0 w-72 bg-[#081B33] text-white p-4 overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-sm font-bold">Campus Connect</h2>
            <p className="text-xs text-gray-300">by BAATASARI</p>
          </div>
          <button aria-label="Close menu" onClick={() => setOpen(false)} className="p-2 rounded-md hover:bg-white/5">
            <X />
          </button>
        </div>

        <nav className="flex flex-col gap-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 rounded-lg px-3 py-3 transition-colors ${
                  active ? "bg-[#C44A17]" : "hover:bg-white/5"
                }`}
              >
                <Icon size={18} />
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </div>
  );
}
