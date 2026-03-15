export const heroContent = {
  title: "IEEE AP-S PESU",
  description: "Hands-on RF research, antenna design, and wireless innovation.",
  campus: "PES University • RR Campus",
  tagline: "From Inception to Impact",
  primaryCta: {
    href: "/events",
    label: "Explore Events",
  },
  secondaryCta: {
    href: "/contact",
    label: "Join the Community",
  },
} as const;

export const whatWeDoContent = {
  title: "WHAT WE DO",
  subtitle:
    "Building practical expertise in antennas, RF systems, and wireless communication.",
  activities: [
    {
      title: "Technical Learning",
      description:
        "Understand antenna design, RF systems, and electromagnetic theory through guided technical sessions and simulations.",
      image: "/activities/simulation.jpg",
    },
    {
      title: "Hands-on Projects",
      description:
        "Design and fabricate antennas, perform RF measurements, and experiment with wireless systems.",
      image: "/activities/antenna-fabrication.jpg",
    },
    {
      title: "Workshops & Events",
      description:
        "Participate in workshops, technical bootcamps, and IEEE events exploring wireless technologies.",
      image: "/activities/sdr-workshop.png",
    },
    {
      title: "Industry & Lab Exposure",
      description:
        "Explore real-world communication systems through lab visits and industry interactions.",
      image: "/activities/rf-lab.jpg",
    },
  ],
} as const;
