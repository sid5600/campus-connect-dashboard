import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb } from "lucide-react";

export default function ProTip() {
    return (
        <Card className="mt-8 rounded-2xl border-orange-100 bg-orange-50 px-8 py-6">

            <div className="flex items-center justify-between">

                <div className="flex items-center gap-6">

                    <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-orange-200 bg-white">

                        <Lightbulb
                            className="text-orange-500"
                            size={30}
                        />

                    </div>

                    <div>

                        <h3 className="text-lg font-semibold">
                            Pro tip for you
                        </h3>

                        <p className="mt-2 text-sm text-slate-600">
                            Clubs that host regular events grow <strong>3× faster.</strong>
                        </p>

                        <p className="text-sm text-slate-600">
                            Encourage them to host their next event on Baatasari!
                        </p>

                    </div>

                </div>

                <Link href="/guide">
                    <Button className="h-12 rounded-xl bg-[#081B33] px-8 hover:bg-[#102745]">
                        View Guide
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </Link>

            </div>

        </Card>
    );
}