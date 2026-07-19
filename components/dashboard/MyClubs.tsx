import Link from "next/link";
import ClubRow from "./ClubRow";

const clubs = [
    {
        id: 1,
        name: "Music Club",
        category: "Cultural",
        members: 156,
        events: 12,
        status: "Active",
        lastActivity: "2 Days ago",
    },
    {
        id: 2,
        name: "Coding Club",
        category: "Technology",
        members: 98,
        events: 20,
        status: "Active",
        lastActivity: "Today",
    },
    {
        id: 3,
        name: "Photography Club",
        category: "Creative",
        members: 72,
        events: 8,
        status: "Inactive",
        lastActivity: "1 Week ago",
    },
];

export default function MyClubs() {
    return (
        <section className="mt-8">

            <div className="flex items-center justify-between">

                <h2 className="text-2xl font-bold">
                    My Clubs
                </h2>

                <Link href="/clubs" className="font-medium text-orange-600 hover:text-orange-700">
                    View all clubs →
                </Link>

            </div>

            <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm">
                {clubs.map((club, index) => (
                    <div key={club.id}>
                        <ClubRow
                            name={club.name}
                            category={club.category}
                            members={club.members}
                            events={club.events}
                            status={club.status}
                            lastActivity={club.lastActivity}
                        />

                        {index < clubs.length - 1 && (
                            <div className="my-5 border-b border-slate-200" />
                        )}
                    </div>
                ))}
            </div>

        </section>
    );
}