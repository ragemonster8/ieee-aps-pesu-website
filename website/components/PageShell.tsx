type PageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: React.ReactNode;
};

export default function PageShell({
  eyebrow,
  title,
  description,
  children,
}: PageShellProps) {
  return (
    <main className="min-h-[75vh] bg-gradient-to-b from-[#020617] via-[#0a192f] to-[#020617] text-white">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-blue-300">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-gray-300">{description}</p>
        </div>
        <div className="mt-12">{children}</div>
      </section>
    </main>
  );
}
