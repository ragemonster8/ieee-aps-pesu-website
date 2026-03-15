import PageShell from "@/components/PageShell";

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title="A student chapter rooted in antennas and propagation"
      description="Frame the chapter with a voice that feels both academic and modern, aligned with IEEE standards and the chapter&rsquo;s research-focused identity."
    >
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-gray-300">
        Learn more about IEEE AP-S PESU, its mission, and the chapter&rsquo;s role in fostering technical excellence.
      </div>
    </PageShell>
  );
}
