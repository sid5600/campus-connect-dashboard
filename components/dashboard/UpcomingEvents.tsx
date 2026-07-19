import Link from "next/link";
import EventCard from "./EventCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const events = [
    {
        title: "Tech Talk: AI in Everyday Life",
        club: "Tech Club",
        date: "24",
        month: "MAY",
        time: "4:00 PM",
        venue: "Auditorium",
        image: "/images/peakpx.jpg",
    },
    {
        title: "Photography Workshop",
        club: "Photography Club",
        date: "31",
        month: "MAY",
        time: "10:00 AM",
        venue: "Seminar Hall",
        image: "/images/peakpx2.jpg",
    },
];

export default function UpcomingEvents() {
    return (
        <Card className="h-full rounded-2xl p-6">

            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-semibold">
                    Upcoming Events
                </h2>

                <Link href="/events">
                    <Button variant="ghost" className="text-orange-600">
                        View all
                        <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                </Link>
            </div>

            <div className="space-y-4">
                {events.map((event) => (
                    <Link key={event.title} href="/events">
                        <EventCard
                            title={event.title}
                            club={event.club}
                            image={event.image}
                            date={event.date}
                            month={event.month}
                            time={event.time}
                            venue={event.venue}
                        />
                    </Link>
                ))}
            </div>

        </Card>
    );
}
