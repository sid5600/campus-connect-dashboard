import Link from "next/link";
import { ChevronDown } from "lucide-react";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";

export default function UserProfile() {
    return (
        <Link href="/profile" className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer">
            <Avatar className="h-10 w-10">
                <AvatarImage src="/profile.jpg" />
                <AvatarFallback>RV</AvatarFallback>
            </Avatar>

            <div>
                <p className="font-semibold">Rohit Varma</p>
                <p className="text-sm text-gray-500">Campus Ambassador</p>
            </div>

            <ChevronDown className="h-4 w-4" />
        </Link>
    );
}