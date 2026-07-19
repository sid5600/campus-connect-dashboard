"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Users,
  Calendar,
  CheckSquare,
  User,
} from "lucide-react";

const items = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Clubs", href: "/clubs", icon: Users },
  { name: "Events", href: "/events", icon: Calendar },
  { name: "Tasks", href: "/tasks", icon: CheckSquare },
  { name: "Profile", href: "/profile", icon: User },
];

export default function MobileNavbar() {
  const pathname = usePathname() || "/";

  return (
    <nav
      className={
        "md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t shadow-lg"
      }
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      aria-label="Mobile navigation"
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {items.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex-1 flex flex-col items-center justify-center gap-1 py-2 px-2 transition-colors text-xs ${
                  active
                    ? "text-orange-600"
                    : "text-gray-600 hover:text-gray-800"
                }`}
                aria-current={active ? "page" : undefined}
                aria-label={item.name}
              >
                <Icon size={20} />
                <span className="text-[10px] leading-none">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
