import ActivityCard from "./ActivityCard";

const activities = [
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
];

export default function WhatWeDo() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div>
        <h2 className="text-3xl font-bold text-white md:text-4xl">WHAT WE DO</h2>
        <p className="mt-3 max-w-2xl text-gray-400">
          Building practical expertise in antennas, RF systems, and wireless
          communication.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {activities.map((activity) => (
          <ActivityCard
            key={activity.title}
            title={activity.title}
            description={activity.description}
            image={activity.image}
          />
        ))}
      </div>
    </section>
  );
}
