import { whatWeDoContent } from "@/features/home/data";
import ActivityCard from "./ActivityCard";

export default function WhatWeDoSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div>
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          {whatWeDoContent.title}
        </h2>
        <p className="mt-3 max-w-2xl text-gray-400">{whatWeDoContent.subtitle}</p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {whatWeDoContent.activities.map((activity) => (
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
