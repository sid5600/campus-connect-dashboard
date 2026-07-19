import NeedsAttention from "./NeedsAttention";
import UpcomingEvents from "./UpcomingEvents";

export default function AttentionSection() {
    return (
        <section className="mt-8">

            <div className="grid grid-cols-1 gap-6 items-stretch lg:grid-cols-2">

                <NeedsAttention />

                <UpcomingEvents />

            </div>

        </section>
    );
}