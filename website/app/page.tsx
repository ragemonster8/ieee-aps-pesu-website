import Image from "next/image";
import Link from "next/link";
import { Space_Grotesk } from "next/font/google";
import WhatWeDo from "@/components/what-we-do/WhatWeDo";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export default function Home() {
  return (
    <main className="text-white">
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-6 text-white bg-gradient-to-b from-black via-[#020617] to-[#071428]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 pointer-events-none" />
        <div className="relative z-10 flex flex-col items-center">
          <Image
            src="/aps-logo.svg"
            alt="IEEE Antennas and Propagation Society logo"
            width={240}
            height={240}
            className="mb-8 opacity-95"
          />
          <div className="bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_70%)] px-8 py-6">
            <h1
              className={`${spaceGrotesk.className} bg-gradient-to-r from-blue-400 via-blue-500 to-sky-400 bg-clip-text text-6xl font-semibold tracking-tight leading-tight text-transparent md:text-7xl`}
            >
              IEEE AP-S PESU
            </h1>
          </div>
          <p className="mt-4 max-w-2xl text-lg text-gray-300 md:text-xl">
            Hands-on RF research, antenna design, and wireless innovation.
          </p>
          <p className="mt-2 text-sm text-gray-400">PES University &bull; RR Campus</p>
          <p className="mt-3 text-blue-400 font-medium tracking-wide">
            From Inception to Impact
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/events"
              className="rounded-lg bg-blue-600 px-6 py-3 transition hover:scale-[1.02] hover:bg-blue-700"
            >
              Explore Events
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-gray-600 px-6 py-3 transition hover:border-gray-400 hover:bg-gray-800"
            >
              Join the Community
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 bg-gradient-to-b from-[#071428] to-[#020617]">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.28em] text-blue-300">Design Direction</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
            A clean academic-tech experience for chapter identity and technical work
          </h2>
          <p className="mt-4 text-gray-300">
            The homepage now follows the plan&rsquo;s core ideas: strong hierarchy, dark technical
            surfaces, minimal content blocks, and a structure that can scale across events,
            research, and chapter resources.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur">
            <p className="text-sm font-medium text-blue-300">Events</p>
            <h3 className="mt-3 text-xl font-semibold text-white">Workshops and chapter sessions</h3>
            <p className="mt-3 text-sm leading-6 text-gray-300">
              Present upcoming workshops, expert talks, and technical sessions with clear calls to
              action and polished chapter branding.
            </p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur">
            <p className="text-sm font-medium text-blue-300">Projects</p>
            <h3 className="mt-3 text-xl font-semibold text-white">Research and student innovation</h3>
            <p className="mt-3 text-sm leading-6 text-gray-300">
              Create a showcase for simulations, fabrication work, publications, and student-led
              engineering outcomes in a credible academic format.
            </p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur">
            <p className="text-sm font-medium text-blue-300">Resources</p>
            <h3 className="mt-3 text-xl font-semibold text-white">Blogs, updates, and learning</h3>
            <p className="mt-3 text-sm leading-6 text-gray-300">
              Organize educational content and chapter updates using the same minimal, technical
              style established by the rest of the site.
            </p>
          </article>
        </div>
      </section>

      <WhatWeDo />
    </main>
  );
}
