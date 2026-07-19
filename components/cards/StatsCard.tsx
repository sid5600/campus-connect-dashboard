import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

type StatsCardProps = {
    title: string;
    value: number;
    subtitle: string;
    linkText: string;
    valueColor: string;
    iconBg: string;
    icon: LucideIcon;
};

export default function StatsCard({
    title,
    value,
    valueColor,
    subtitle,
    icon: Icon,
    iconBg,
    linkText,
}: StatsCardProps) {
    return (
        <Card className="rounded-2xl px-5 py-4 shadow-md hover:shadow-lg transition">
            <div className="flex items-start gap-3">
                <div
                    className={`flex h-11 w-11 items-center justify-center rounded-full ${iconBg} flex-shrink-0`}
                >
                    <Icon className={valueColor} size={26} />
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-slate-900">
                        {value}
                    </h2>

                    <p className="font-medium text-gray-900">
                        {title}
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                        {subtitle}
                    </p>
                </div>
            </div>

            <p className="mt-4 font-medium text-orange-600">
                {linkText} →
            </p>
        </Card>
    );
}