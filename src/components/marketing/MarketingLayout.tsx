import type { ReactNode } from "react";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white selection:bg-[#96ed08] selection:text-black">
      <SiteHeader />
      {children}
      <SiteFooter />
    </main>
  );
}
