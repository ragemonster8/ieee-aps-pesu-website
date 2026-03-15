import PageShell from "@/components/PageShell";

export default function TeamPage() {
  return (
    <PageShell
      eyebrow="Team"
      title="The people behind the chapter"
      description="Introduce the student leadership, faculty advisors, and contributors with a layout that feels formal enough for IEEE while still approachable."
    >
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-gray-300">
        Meet the IEEE AP-S PESU team and chapter leadership here.
      </div>
    </PageShell>
  );
}
