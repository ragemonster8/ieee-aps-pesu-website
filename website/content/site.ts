export const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/team", label: "Team" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
] as const;

export const siteBranding = {
  eyebrow: "IEEE AP-S",
  title: "PESU Student Chapter",
  footerTitle: "IEEE AP-S PESU",
  footerDescription:
    "A technical student chapter focused on antennas, propagation, and research-led learning.",
  footerCopyright: "IEEE AP-S PES University",
} as const;

export const socialLinks = [
  {
    href: "https://www.linkedin.com/company/ieee-ap-s-antenna-and-propagation-society-pes-university/posts/?feedView=all",
    label: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/ieee.aps.pes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    label: "Instagram",
  },
] as const;
