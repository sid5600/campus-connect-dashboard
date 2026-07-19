import { TrendingUp } from "lucide-react";
import ImpactChart from "./ImpactChart";

export default function ImpactCard() {
    return (
        <div className="mx-5 mt-8 rounded-2xl bg-brand-panel p-5">

            {/* Header */}
            <div className="mb-4 flex items-center justify-between">

                <h3 className="text-sm font-semibold text-white">
                    Your Impact
                </h3>

                <TrendingUp
                    size={18}
                    className="text-orange-500"
                />

            </div>

            {/* Description */}
            <p className="text-xs leading-5 text-slate-300">
                Every club you onboard creates experiences that shape our campus.
            </p>

            {/* Stats */}
            <div className="mt-6">

                <h2 className="text-4xl font-bold text-white">
                    5,940
                </h2>

                <p className="mt-1 text-sm text-slate-400">
                    Students Reached
                </p>

            </div>

            {/* Graph */}
            <div className="mt-5">
                <ImpactChart />
            </div>

        </div>
    );
}