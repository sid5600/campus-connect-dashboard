"use client";

import React, { createContext, useContext, useState } from "react";

type MobileNavContext = {
  open: boolean;
  setOpen: (v: boolean) => void;
  toggle: () => void;
};

const ctx = createContext<MobileNavContext | undefined>(undefined);

export function MobileNavProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((v) => !v);

  return (
    <ctx.Provider value={{ open, setOpen, toggle }}>{children}</ctx.Provider>
  );
}

export function useMobileNav() {
  const c = useContext(ctx);
  if (!c) throw new Error("useMobileNav must be used inside MobileNavProvider");
  return c;
}

export default MobileNavProvider;
