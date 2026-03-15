import Image from "next/image";
import Link from "next/link";
import { Space_Grotesk } from "next/font/google";
import { heroContent } from "../data";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 text-center text-white">
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
            {heroContent.title}
          </h1>
        </div>
        <p className="mt-4 max-w-2xl text-lg text-gray-300 md:text-xl">
          {heroContent.description}
        </p>
        <p className="mt-2 text-sm text-gray-400">{heroContent.campus}</p>
        <p className="mt-3 text-blue-400 font-medium tracking-wide">
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
