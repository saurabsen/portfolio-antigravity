"use client";

import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import { useRef } from "react";

export default function Home() {
  const container = useRef<HTMLDivElement>(null);

  return (
    <main className="bg-background min-h-screen relative font-sans text-foreground selection:bg-white/30 selection:text-black">
      <div ref={container} className="relative h-[500vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <ScrollyCanvas containerRef={container} />
          <Overlay containerRef={container} />
        </div>
      </div>
      <Projects />
    </main>
  );
}
