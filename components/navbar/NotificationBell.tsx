import Link from "next/link";
import { Bell } from "lucide-react";

export default function NotificationBell() {
    return (
        <Link href="/notifications" className="relative cursor-pointer hover:opacity-80 transition-opacity">
            <Bell className="h-6 w-6" />
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                3
            </span>
        </Link>
    );
}