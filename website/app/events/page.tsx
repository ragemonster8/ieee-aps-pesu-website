import PageShell from "@/components/PageShell";

export default function EventsPage() {
  return (
    <PageShell
      eyebrow="Events"
      title="Workshops, talks, and chapter activity"
      description="Track chapter events in a format that feels organized, credible, and easy to scan for students, faculty, and guest speakers."
    >
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-gray-300">
        IEEE AP-S events will be listed here with dates, speakers, and registration details.
      </div>
    </PageShell>
  );
}
