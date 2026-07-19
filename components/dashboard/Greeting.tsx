import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function Greeting() {
    return (
        <section className="flex items-center justify-between">

            <div>
                <h1 className="text-l font-bold text-orange-600">
                    Welcome back, Rohit! 👋
                </h1>

                <p className="mt-2 text-xl text-gray-500">
                    Here's what's happening with your clubs today.
                </p>

                <p className="mt-1 text-gray-500">
                    3 clubs need your help today.
                </p>
            </div>

            <Link href="/clubs/new">
                <Button className="gap-2 rounded-xl bg-orange-600 hover:bg-orange-700">
                    <Plus className="h-4 w-4" />
                    Add Club
                </Button>
            </Link>

        </section>
    );
}