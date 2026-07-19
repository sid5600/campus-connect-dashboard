"use client";

import {
    Area,
    AreaChart,
    ResponsiveContainer,
} from "recharts";

const data = [
    { value: 25 },
    { value: 18 },
    { value: 22 },
    { value: 16 },
    { value: 24 },
    { value: 21 },
    { value: 32 },
    { value: 30 },
    { value: 42 },
];

export default function ImpactChart() {
    return (
        <div className="h-14 w-full">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                    <defs>
                        <linearGradient
                            id="impactGradient"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop
                                offset="0%"
                                stopColor="#22C55E"
                                stopOpacity={0.35}
                            />
                            <stop
                                offset="100%"
                                stopColor="#22C55E"
                                stopOpacity={0}
                            />
                        </linearGradient>
                    </defs>

                    <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#22C55E"
                        strokeWidth={3}
                        fill="url(#impactGradient)"
                        dot={false}
                        activeDot={false}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}