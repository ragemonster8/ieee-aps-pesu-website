import Image from "next/image";

type ActivityCardProps = {
  title: string;
  description: string;
  image: string;
};

export default function ActivityCard({
  title,
  description,
  image,
}: ActivityCardProps) {
  return (
    <article className="group overflow-hidden rounded-xl border border-white/10 bg-[#0B1120] transition hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-xl">
      <Image
        src={image}
        alt={title}
        width={640}
        height={320}
        className="h-40 w-full object-cover"
      />
      <div className="p-5">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm text-gray-400">{description}</p>
      </div>
    </article>
  );
}
