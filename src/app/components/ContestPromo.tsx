import Link from "next/link";
import { ArrowRight, CalendarPlus, Gem, Target } from "lucide-react";

const highlights = [
  {
    icon: CalendarPlus,
    color: "#00e676",
    title: "New Contests Every Match",
    text: "Fresh contests open for every upcoming fixture — there's always a new one to join.",
  },
  {
    icon: Gem,
    color: "#60a5fa",
    title: "TrophyToken Prize Pools",
    text: "Every contest pays out its prize pool in 💎, split across the top of the leaderboard.",
  },
  {
    icon: Target,
    color: "#fbbf24",
    title: "Skill Decides",
    text: "No luck involved — your cricket knowledge and team selection determine your rank.",
  },
];

export default function ContestPromo() {
  return (
    <section id="join-contest" className="py-28 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="orb orb-green w-[500px] h-[500px] top-0 -left-48 opacity-30" />
      <div className="orb orb-blue w-[400px] h-[400px] bottom-0 -right-32 opacity-20" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <div className="section-tag mb-6 inline-flex">
          <span
            className="w-2 h-2 rounded-full live-dot"
            style={{ backgroundColor: "var(--green-neon)" }}
          />
          New Contests Live
        </div>

        <h2 className="font-display text-[clamp(3rem,7vw,6rem)] leading-none tracking-wide mb-6">
          JOIN A NEW CONTEST
          <br />
          <span className="text-gradient-green">WIN 💎 TROPHYTOKEN</span>
        </h2>

        <p className="text-white/55 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
          New contests open for every match. Pick your fixture, build your
          dream team, and stand a chance to win TrophyToken (💎) — our Web3
          native token — every time you play.
        </p>

        {/* Highlights */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12 text-left">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="bg-glass-dark rounded-2xl p-6 card-hover"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${item.color}20` }}
              >
                <item.icon size={20} style={{ color: item.color }} />
              </div>
              <div className="font-semibold text-white mb-2">{item.title}</div>
              <p className="text-white/50 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="https://app.procrick.com"
            target="_blank"
            className="btn-primary"
          >
            Join a New Contest
            <ArrowRight size={20} />
          </Link>
          <a href="#how-it-works" className="btn-secondary">
            See How It Works
          </a>
        </div>

        <p className="text-white/30 text-xs mt-8">
          ProCrick is a skill-based game. Prizes are awarded in TrophyToken
          (💎) based on contest rank.
        </p>
      </div>
    </section>
  );
}
