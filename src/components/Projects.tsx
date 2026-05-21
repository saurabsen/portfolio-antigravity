"use client";

import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  const projects = [
    { title: "Omnifi.ai", category: "Senior Software Developer (SDE3)" },
    { title: "Xtract One Technologies", category: "Software Developer" },
    { title: "Neudesic (IBM)", category: "Software Developer" },
    { title: "Open Source", category: "nwHacks2023, Swayam2k18" },
  ];

  return (
    <section className="relative z-20 bg-[#121212] py-32 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-4xl md:text-6xl font-medium mb-16 text-white tracking-tight">Experience & Work</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((p, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="w-full aspect-[4/3] bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="flex justify-between items-center mt-8">
                <div>
                  <h4 className="text-2xl md:text-3xl font-medium text-white group-hover:text-gray-300 transition-colors">{p.title}</h4>
                  <p className="text-gray-500 mt-2 text-sm md:text-base">{p.category}</p>
                </div>
                <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
