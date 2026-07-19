import UniversitySelector from "@/components/navbar/UniversitySelector";
import NotificationBell from "@/components/navbar/NotificationBell";
import UserProfile from "@/components/navbar/UserProfile";
import MobileHamburger from "./MobileHamburger";

export default function Navbar() {
    return (
        <header className="flex h-20 items-center justify-between border-b bg-white px-8 sticky top-0 z-10">

            <div className="flex items-center">
                {/* Mobile hamburger */}
                <MobileHamburger />

                <UniversitySelector />
            </div>

            <div className="flex items-center gap-6">
                <NotificationBell />
                <UserProfile />
            </div>

        </header>
    );
}