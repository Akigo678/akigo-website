import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://akigo.org"),
  title: { default: "AkiGO | Rides, Delivery & Local Mobility", template: "%s | AkiGO" },
  description: "Explore AkiGO rides, delivery, driver opportunities, and local business services.",
  openGraph: {
    type: "website",
    siteName: "AkiGO",
    url: "https://akigo.org",
    title: "AkiGO | Rides, Delivery & Local Mobility",
    description: "Rides, delivery, and local business services with AkiGO.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
