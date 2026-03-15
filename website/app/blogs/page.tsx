import PageShell from "@/components/PageShell";

export default function BlogsPage() {
  return (
    <PageShell
      eyebrow="Blogs"
      title="Technical writing and chapter updates"
      description="Use this section for explainers, member reflections, and AP-S knowledge sharing presented in a clean research-oriented reading experience."
    >
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-gray-300">
        Read the latest IEEE AP-S blogs, chapter insights, and technical updates here.
      </div>
    </PageShell>
  );
}
