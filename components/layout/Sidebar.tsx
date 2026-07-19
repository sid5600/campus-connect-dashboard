"use client";

// imports
import { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ImpactCard from "./ImpactCard";
import SidebarProfile from "./SidebarProfile";
import menuItems from "./menuItems";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const asideRef = useRef<HTMLElement>(null);

    const handleNavClick = () => {
        setIsOpen(false);
    };

    return (
        <aside
            ref={asideRef}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            className={[
                // layout & positioning — fixed so it overlays the page
                "fixed top-0 left-0 z-50",
                "hidden md:flex flex-col",
                "h-screen overflow-y-auto",
                // colours
                "bg-[#081B33] text-white",
                // shadow when open
                isOpen ? "shadow-2xl" : "",
                // width transition
                "transition-all duration-300 ease-in-out",
                isOpen ? "w-64" : "w-16",
                // CSS hook classes for the :has() blur rule
                "sidebar-overlay",
                isOpen ? "sidebar-open" : "",
            ].join(" ")}
        >
            {/* logo */}
            <div className="flex items-center h-20 border-b border-slate-700 px-3 shrink-0 overflow-hidden">
                <div className="w-10 h-10 rounded-full bg-yellow-400 shrink-0" />

                {isOpen && (
                    <div className="ml-3 overflow-hidden whitespace-nowrap">
                        <h1 className="text-sm font-bold leading-none">
                            Campus Connect
                        </h1>
                        <p className="text-xs text-gray-400 mt-1">by BAATASARI</p>
                    </div>
                )}
            </div>

            {/* navigation */}
            <nav className="mt-4 flex flex-col gap-1 px-2">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;

                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={handleNavClick}
                            title={item.name}
                            className={`
                                flex items-center gap-3 rounded-xl px-3 py-3
                                transition-colors duration-150
                                ${isActive
                                    ? "bg-[#C44A17] text-white"
                                    : "hover:bg-white/10 text-white/80"
                                }
                            `}
                        >
                            <Icon size={20} className="shrink-0" />
                            {isOpen && (
                                <span className="text-sm font-medium whitespace-nowrap overflow-hidden">
                                    {item.name}
                                </span>
                            )}
                        </Link>
                    );
                })}
            </nav>

            {/* bottom section — only visible when expanded */}
            {isOpen && (
                <div className="mt-auto">
                    <ImpactCard />
                    <SidebarProfile />
                </div>
            )}
        </aside>
    );
}
