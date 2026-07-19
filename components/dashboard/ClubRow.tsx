import Link from "next/link";

type ClubRowProps = {
    name: string;
    category: string;
    members: number;
    events: number;
    status: string;
    lastActivity: string;
};

const statusStyles = {
    Active: "bg-green-100 text-green-700",
    Inactive: "bg-red-100 text-red-700",
    Pending: "bg-yellow-100 text-yellow-700",
};

export default function ClubRow({
    name,
    category,
    members,
    events,
    status,
    lastActivity,
}: ClubRowProps) {
    const slug = name.toLowerCase().replace(/\s+/g, "-");

    return (
        <div className="grid grid-cols-[2.5fr_3fr] items-center py-4">

            <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                    🎵
                </div>

                <div>
                    <h3 className="font-semibold">{name}</h3>
                    <p className="text-sm text-slate-500">{category}</p>
                </div>
            </div>

            <div className="flex items-center justify-between">

                <div className="text-center">
                    <p className="text-xl font-semibold">{members}</p>
                    <p className="text-sm text-slate-500">Members</p>
                </div>

                <div className="text-center">
                    <p className="text-xl font-semibold">{events}</p>
                    <p className="text-sm text-slate-500">Events</p>
                </div>

                <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${statusStyles[status as keyof typeof statusStyles]}`}
                >
                    {status}
                </span>

                <div className="text-center">
                    <p className="text-sm text-slate-500">Last activity</p>
                    <p className="font-medium">{lastActivity}</p>
                </div>

                <Link
                    href={`/clubs/${slug}`}
                    className="text-slate-400 hover:text-slate-700 transition-colors"
                >
                    →
                </Link>

            </div>

        </div>
    );
}