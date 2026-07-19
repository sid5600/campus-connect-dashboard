import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    ArrowRight,
    CalendarClock,
    CalendarDays,
    Users,
    AtSign,
    ChevronRight,
} from "lucide-react";

const attentionItems = [
    {
        title: "Club Verifications Pending",
        count: 2,
        href: "/clubs?filter=pending",
        icon: CalendarClock,
        iconBg: "bg-orange-100",
        iconColor: "text-orange-600",
    },
    {
        title: "Inactive Clubs",
        count: 3,
        href: "/clubs?filter=inactive",
        icon: Users,
        iconBg: "bg-purple-100",
        iconColor: "text-purple-600",
    },
    {
        title: "Events Ending Soon",
        count: 2,
        href: "/events?filter=ending-soon",
        icon: CalendarDays,
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
    },
    {
        title: "Domain Verification Pending",
        count: 1,
        href: "/domains?filter=pending",
        icon: AtSign,
        iconBg: "bg-indigo-100",
        iconColor: "text-indigo-600",
    },
];

export default function NeedsAttention() {
    return (
        <Card className="rounded-2xl p-6">

            {/* Header */}
            <div className="mb-6 flex items-center justify-between">

                <h2 className="text-xl font-semibold">
                    Needs Your Attention
                </h2>

                <Link href="/tasks">
                    <Button variant="ghost" className="gap-1 text-orange-600">
                        View all
                        <ArrowRight className="h-4 w-4" />
                    </Button>
                </Link>

            </div>

            {/* Rows */}
            <div className="space-y-3">

                {attentionItems.map((item) => {

                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.title}
                            href={item.href}
                            className="flex items-center justify-between rounded-xl border p-4 transition hover:bg-slate-50"
                        >
                            <div className="flex items-center gap-4">

                                <div
                                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${item.iconBg}`}
                                >
                                    <Icon
                                        className={item.iconColor}
                                        size={20}
                                    />
                                </div>

                                <p className="font-medium">
                                    {item.title}
                                </p>

                            </div>

                            <div className="flex items-center gap-3">

                                <Badge variant="secondary">
                                    {item.count}
                                </Badge>

                                <ChevronRight className="h-5 w-5 text-slate-400" />

                            </div>
                        </Link>
                    );
                })}

            </div>

        </Card>
    );
}