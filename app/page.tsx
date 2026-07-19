import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";
import MobileNavbar from "@/components/layout/MobileNavbar";
import MobileDrawer from "@/components/layout/MobileDrawer";
import Greeting from "@/components/dashboard/Greeting"
import StatsSection from "@/components/dashboard/StatsSection";
import MyClubs from "@/components/dashboard/MyClubs";
import AttentionSection from "@/components/dashboard/AttentionSection";
import ProTip from "@/components/dashboard/ProTip";
export default function Home() {
  return (
    <div className="h-screen overflow-hidden bg-gray-100">
      <Sidebar />

      <main className="main-content flex flex-col h-screen overflow-y-auto md:pl-16 pl-4">
        <Navbar />

        <div className="space-y-8 p-4 md:p-8">
          <Greeting />
          <StatsSection />
          <MyClubs />
          <AttentionSection />
          <ProTip />
        </div>
      </main>

      {/* Mobile bottom navigation */}
      <MobileNavbar />

      {/* Mobile drawer for sidebar */}
      <MobileDrawer />
    </div>
  );
}