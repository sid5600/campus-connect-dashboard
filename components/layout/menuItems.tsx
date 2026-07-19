import {
  LayoutDashboard,
  Users,
  Calendar,
  AtSign,
  UserRound,
  CircleCheck,
  BookOpen,
  Trophy,
  Gift,
} from "lucide-react";

export const menuItems = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Clubs", href: "/clubs", icon: Users },
  { name: "Events", href: "/events", icon: Calendar },
  { name: "Domains", href: "/domains", icon: AtSign },
  { name: "Members", href: "/members", icon: UserRound },
  { name: "Tasks", href: "/tasks", icon: CircleCheck },
  { name: "Resources", href: "/resources", icon: BookOpen },
  { name: "Leaderboard", href: "/leaderboard", icon: Trophy },
  { name: "Rewards", href: "/rewards", icon: Gift },
];

export default menuItems;
