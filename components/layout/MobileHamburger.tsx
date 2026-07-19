"use client";

import { Menu } from "lucide-react";
import { useMobileNav } from "./MobileNavProvider";

export default function MobileHamburger() {
  const { toggle } = useMobileNav();

  return (
    <button aria-label="Open menu" onClick={toggle} className="md:hidden mr-3 p-2 rounded-md hover:bg-gray-100">
      <Menu size={20} />
    </button>
  );
}
