import StatsCard from "@/components/cards/StatsCard";
import {
    Clock3,
    CheckCircle2,
    CalendarDays,
} from "lucide-react";
const stats = [
    {
        title: "Pending Clubs",
        value: 3,
        valueColor: "text-orange-600",
        subtitle: "Requires your review",
        linkText: "View pending",
        iconBg: "bg-orange-100",
        icon: Clock3,
    },
    {
        title: "Active Clubs",
        value: 16,
        valueColor: "text-green-600",
        subtitle: "Across your campus",
        linkText: "View all clubs",
        iconBg: "bg-green-100",
        icon: CheckCircle2,
    },
    {
        title: "Events This Month",
        value: 7,
        valueColor: "text-purple-600",
        subtitle: "+2 from last month",
        linkText: "View events",
        iconBg: "bg-purple-100",
        icon: CalendarDays,
    },
];

export default function StatsSection() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat) => (
                <StatsCard
                    key={stat.title}
                    title={stat.title}
                    value={stat.value}
                    valueColor={stat.valueColor}
                    subtitle={stat.subtitle}
                    linkText={stat.linkText}
                    iconBg={stat.iconBg}
                    icon={stat.icon}
                />
            ))}
        </section>
    );
}