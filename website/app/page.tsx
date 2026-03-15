import HeroSection from "@/features/home/components/HeroSection";
import WhatWeDoSection from "@/features/home/components/WhatWeDoSection";

export default function Home() {
  return (
    <main className="relative bg-gradient-to-b from-black via-[#020617] to-[#071428] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
      <div className="relative z-10">
        <HeroSection />
      </div>
      <div className="relative z-10">
        <WhatWeDoSection />
      </div>
    </main>
  );
}
