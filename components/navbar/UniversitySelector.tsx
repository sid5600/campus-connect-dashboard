import Link from "next/link";
import { ChevronDown, GraduationCap } from "lucide-react";

export default function UniversitySelector() {
    return (
        <Link href="/settings/university" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <GraduationCap className="h-5 w-5 text-slate-700" />
            <span className="font-medium">GITAM University, Visakhapatnam</span>
            <ChevronDown className="h-4 w-4" />
        </Link>
    );
}