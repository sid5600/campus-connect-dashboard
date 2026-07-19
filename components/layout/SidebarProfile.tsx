import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function SidebarProfile() {
    return (
        <Link
            href="/profile"
            className="flex items-center justify-between border-t border-white/10 px-5 py-5 hover:bg-white/5 transition-colors"
        >
            <div className="flex items-center gap-3">
                <Image
                    src="/images/profile.jpg"
                    alt="Profile"
                    width={44}
                    height={44}
                    className="rounded-full object-cover"
                />

                <div>
                    <p className="text-sm font-semibold text-white">
                        Rohit Varma
                    </p>
                    <p className="text-xs text-slate-400">
                        Campus Ambassador
                    </p>
                </div>
            </div>

            <ChevronDown size={18} className="text-slate-400" />
        </Link>
    );
}