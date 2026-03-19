import Image from "next/image";
import Link from "next/link";
import { Sora } from "next/font/google";
import { heroContent } from "../data";

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-black via-[#010816] to-[#020617] px-6 text-center text-white">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-15" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,58,138,0.18),rgba(15,23,42,0.08)_28%,transparent_52%)]" />
      <div className="relative z-10 flex flex-col items-center">
        <Link
          href="https://ieeeaps.org/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit the official IEEE AP-S website"
          className="group relative mb-6 inline-flex scale-110 cursor-pointer opacity-90 transition hover:opacity-100"
        >
          <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 rounded-md border border-white/10 bg-[#030712]/90 px-4 py-2 text-xs text-gray-200 opacity-0 shadow-lg shadow-black/30 transition duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
            Visit IEEE AP-S
          </span>
          <Image
            src="/aps-logo.svg"
            alt="IEEE Antennas and Propagation Society logo"
            width={370}
            height={370}
            className="h-auto w-55 md:w-65"
          />
        </Link>
        <h1
          className={`${sora.className} bg-gradient-to-r from-blue-800 via-sky-600 to-cyan-500 bg-clip-text text-6xl font-semibold leading-tight tracking-tight text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.2)] md:text-7xl`}
        >
          {heroContent.title}
        </h1> 
        <p className="mt-4 max-w-2xl text-lg text-gray-300 md:text-xl">
          {heroContent.description}
        </p>
        <p className="mt-2 text-sm text-gray-400">{heroContent.campus}</p>
        <p className="mt-3 text-sm font-medium tracking-wide text-blue-400">
          {heroContent.tagline}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href={heroContent.primaryCta.href}
            className="rounded-lg bg-blue-600 px-6 py-3 transition hover:scale-[1.02] hover:bg-blue-700"
          >
            {heroContent.primaryCta.label}
          </Link>
          <Link
            href={heroContent.secondaryCta.href}
            className="rounded-lg border border-gray-600 px-6 py-3 transition hover:border-gray-400 hover:bg-gray-800"
          >
            {heroContent.secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
