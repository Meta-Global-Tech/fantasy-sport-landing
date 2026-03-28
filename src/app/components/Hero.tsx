"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Play, Trophy, Users, TrendingUp } from "lucide-react";

const floatingStats = [
  { label: "Prize Pool", value: "USD 200", icon: Trophy, color: "#fbbf24" },
  {
    label: "Live Matches",
    value: "3 Active",
    icon: TrendingUp,
    color: "#00e676",
  },
  { label: "Players Online", value: "1.2K", icon: Users, color: "#60a5fa" },
];

export default function Hero() {
  const ballRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ballRef.current;
    if (!el) return;
    let angle = 0;
    const animate = () => {
      angle += 0.5;
      const x = Math.sin((angle * Math.PI) / 180) * 15;
      const y = Math.cos((angle * Math.PI) / 180) * 8;
      el.style.transform = `translate(${x}px, ${y}px) rotate(${angle * 2}deg)`;
      requestAnimationFrame(animate);
    };
    const id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden hero-grid">
      {/* Background orbs */}
      <div className="orb orb-green w-[600px] h-[600px] -top-32 -left-32 opacity-60" />
      <div
        className="orb orb-blue w-[500px] h-[500px] top-1/4 -right-48 opacity-50"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="orb orb-gold w-[300px] h-[300px] bottom-1/4 left-1/3 opacity-30"
        style={{ animationDelay: "5s" }}
      />

      {/* Radial fade overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 20%, var(--navy-950) 80%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Copy */}
        <div>
          <div className="section-tag mb-6">
            <span
              className="w-2 h-2 rounded-full live-dot"
              style={{ backgroundColor: "var(--green-neon)" }}
            />
            Live Contests Available Now
          </div>

          <h1 className="font-display text-[clamp(4rem,10vw,8rem)] leading-[0.9] mb-6 tracking-wide">
            TURN CRICKET
            <br />
            <span className="text-gradient-green">KNOWLEDGE</span>
            <br />
            INTO CASH
          </h1>

          <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-md">
            Build your dream squad, join high-stakes fantasy contests, and watch
            your picks dominate the leaderboard — with real cash prizes on the
            line.
          </p>

          <div className="flex flex-wrap gap-4 mb-14">
            <Link
              href="https://app.procrick.com"
              target="_blank"
              className="btn-primary"
            >
              Start Winning Free
              <ArrowRight size={20} />
            </Link>
            <a href="#how-it-works" className="btn-secondary">
              <Play size={18} />
              See How It Works
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2 text-white/50 text-sm">
              <svg
                className="w-4 h-4 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                style={{ color: "#4ade80" }}
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Free to join
            </div>
            <div className="flex items-center gap-2 text-white/50 text-sm">
              <svg
                className="w-4 h-4 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                style={{ color: "#4ade80" }}
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Instant payouts
            </div>
            <div className="flex items-center gap-2 text-white/50 text-sm">
              <svg
                className="w-4 h-4 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                style={{ color: "#4ade80" }}
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              iOS &amp; Android (Soon)
            </div>
          </div>
        </div>

        {/* Right: Mockup / Visual */}
        <div className="relative flex justify-center items-center">
          {/* Cricket ball */}
          <div ref={ballRef} className="absolute top-8 right-16 z-10">
            <div
              className="w-20 h-20 rounded-full shadow-2xl flex items-center justify-center"
              style={{
                background:
                  "radial-gradient(circle at 35% 35%, #ef4444, #b91c1c, #7f1d1d)",
                boxShadow:
                  "0 0 40px rgba(239, 68, 68, 0.5), inset -6px -6px 15px rgba(0,0,0,0.4)",
              }}
            >
              <div className="w-full h-full rounded-full relative overflow-hidden">
                <div
                  className="absolute top-1/2 left-0 right-0 h-px"
                  style={{
                    background: "rgba(255,255,255,0.3)",
                    boxShadow: "0 2px 0 rgba(255,255,255,0.1)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Main card */}
          <div
            className="relative bg-glass-dark rounded-3xl p-1 w-full max-w-sm"
            style={{ boxShadow: "0 40px 80px rgba(0, 0, 0, 0.6)" }}
          >
            {/* Match card */}
            <div
              className="rounded-2xl p-6 overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #0f1f38, #162845)",
              }}
            >
              {/* Match header */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-white/40 uppercase tracking-widest">
                  ICC Men's T20 World Cup
                </span>
                <span
                  className="text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1"
                  style={{
                    background: "rgba(0, 230, 118, 0.15)",
                    color: "var(--green-neon)",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full live-dot"
                    style={{ background: "var(--green-neon)" }}
                  />
                  READY
                </span>
              </div>

              {/* Teams */}
              <div className="flex items-center justify-between py-4">
                <div className="text-center">
                  <div className="text-4xl mb-2">🇮🇳</div>
                  <div className="font-display text-2xl tracking-wider">
                    IND
                  </div>
                </div>
                <div className="text-center">
                  <div
                    className="font-display text-3xl"
                    style={{ color: "rgba(255,255,255,0.3)" }}
                  >
                    VS
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">🏴󠁧󠁢󠁥󠁮󠁧󠁿</div>
                  <div className="font-display text-2xl tracking-wider">
                    ENG
                  </div>
                </div>
              </div>

              {/* Match info */}
              <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-white/5">
                <div className="text-center">
                  <div className="text-white/40 text-xs mb-1">Contests</div>
                  <div className="font-bold text-white">3</div>
                </div>
                <div className="text-center">
                  <div className="text-white/40 text-xs mb-1">Prize Pool</div>
                  <div
                    className="font-bold"
                    style={{ color: "var(--green-neon)" }}
                  >
                    USD 200
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-white/40 text-xs mb-1">Date</div>
                  <div className="font-bold text-white text-xs">Mar 5</div>
                </div>
              </div>

              {/* CTA button */}
              <Link
                href="https://app.procrick.com"
                target="_blank"
                className="mt-4 w-full flex items-center justify-center gap-2 py-3 rounded-xl font-display text-lg tracking-wider transition-all"
                style={{
                  background: "var(--green-neon)",
                  color: "#060d1a",
                }}
              >
                VIEW CONTESTS
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Floating stat cards */}
          {floatingStats.map((stat, i) => (
            <div
              key={stat.label}
              className="absolute bg-glass-dark rounded-xl px-4 py-3 flex items-center gap-3 animate-float"
              style={{
                ...(i === 0
                  ? { top: "10%", right: "-10%" }
                  : i === 1
                    ? { bottom: "25%", left: "-12%" }
                    : { bottom: "5%", right: "5%" }),
                animationDelay: `${i * 2}s`,
                boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
              }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: `${stat.color}20` }}
              >
                <stat.icon size={16} style={{ color: stat.color }} />
              </div>
              <div>
                <div className="text-white/40 text-xs">{stat.label}</div>
                <div className="font-bold text-sm text-white">{stat.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--navy-950))",
        }}
      />
    </section>
  );
}
