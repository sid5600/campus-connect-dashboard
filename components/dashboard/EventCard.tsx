import Image from "next/image";
import { CalendarDays, MapPin } from "lucide-react";

type EventCardProps = {
    title: string;
    club: string;
    image: string;
    date: string;
    month: string;
    time: string;
    venue: string;
};

export default function EventCard({
    title,
    club,
    image,
    date,
    month,
    time,
    venue,
}: EventCardProps) {
    return (
        <div className="flex items-center justify-between rounded-xl border p-4 transition hover:bg-slate-50">

            {/* Left Side */}
            <div className="flex items-center gap-5">

                {/* Event Image */}
                <Image
                    src={image}
                    alt={title}
                    width={110}
                    height={110}
                    className="h-28 w-28 rounded-xl object-cover"
                />

                {/* Event Details */}
                <div>

                    <h3 className="font-semibold">
                        {title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                        {club}
                    </p>

                    <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                        <CalendarDays size={16} />
                        <span>{date} {month} • {time}</span>
                    </div>

                    <div className="mt-1 flex items-center gap-2 text-sm text-slate-500">
                        <MapPin size={16} />
                        <span>{venue}</span>
                    </div>

                </div>

            </div>

            {/* Date Badge */}
            <div className="flex h-16 w-16 flex-col items-center justify-center rounded-xl bg-orange-50">

                <p className="text-xl font-bold text-orange-600">
                    {date}
                </p>

                <p className="text-xs font-semibold tracking-wide text-orange-600">
                    {month}
                </p>

            </div>

        </div>
    );
}