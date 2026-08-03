export const primaryNavigation = [
  { label: "Ride", href: "/ride" },
  { label: "Drive", href: "/drive" },
  { label: "Deliver", href: "/deliver" },
  { label: "Business", href: "/business" },
  { label: "Safety", href: "/safety" },
  { label: "About", href: "/about" },
] as const;

export const footerGroups = [
  {
    title: "Services",
    links: [
      { label: "Ride", href: "/ride" },
      { label: "Drive", href: "/drive" },
      { label: "Deliver", href: "/deliver" },
      { label: "Business", href: "/business" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Safety", href: "/safety" },
      { label: "Contact", href: "mailto:akigo678@gmail.com" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Accessibility", href: "/accessibility" },
    ],
  },
] as const;
