import Link from "next/link";
import { Trophy, Crown, Medal } from "lucide-react";

const prizeStructure = [
  {
    rank: "1st Place",
    icon: Crown,
    prize: "USD 10",
    color: "#fbbf24",
    bgColor: "rgba(251, 191, 36, 0.1)",
    border: "rgba(251, 191, 36, 0.25)",
  },
  {
    rank: "2nd Place",
    icon: Medal,
    prize: "USD 5",
    color: "#94a3b8",
    bgColor: "rgba(148, 163, 184, 0.08)",
    border: "rgba(148, 163, 184, 0.2)",
  },
  {
    rank: "3rd Place",
    icon: Medal,
    prize: "USD 3",
    color: "#cd7f32",
    bgColor: "rgba(205, 127, 50, 0.08)",
    border: "rgba(205, 127, 50, 0.2)",
  },
];

const recentWinners = [
  { name: "Sachin W.", team: "Team #8039", points: 741, prize: "USD 10", rank: 1 },
  { name: "Sachin W.", team: "Team #5777", points: 547, prize: "USD 5", rank: 2 },
  { name: "Sachin W.", team: "Team #3241", points: 531, prize: "USD 3", rank: 3 },
  { name: "Raj P.", team: "Team #7395", points: 189, prize: "—", rank: 4 },
];

export default function Prizes() {
  return (
    <section id="prizes" className="py-28 px-6 relative overflow-hidden">
      {/* Dark bg variation */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, var(--navy-950) 0%, var(--navy-900) 50%, var(--navy-950) 100%)",
        }}
      />
      <div className="orb orb-gold w-[400px] h-[400px] top-0 right-0 opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Leaderboard mockup */}
          <div>
            <div
              className="rounded-3xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #0f1f38, #0a1628)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
              }}
            >
              {/* Header */}
              <div
                className="px-6 py-4 flex items-center justify-between"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="flex items-center gap-3">
                  <Trophy size={20} style={{ color: "#fbbf24" }} />
                  <span className="font-display text-xl tracking-wide">LEADERBOARD</span>
                </div>
                <span
                  className="text-xs px-3 py-1 rounded-full font-semibold"
                  style={{ background: "rgba(0,230,118,0.15)", color: "var(--green-neon)" }}
                >
                  SA vs NZ · Completed
                </span>
              </div>

              {/* Prize pool summary */}
              <div
                className="grid grid-cols-3 gap-0 px-0"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
              >
                {[
                  { label: "Prize Pool", val: "$18" },
                  { label: "Entry Fee", val: "USD 2" },
                  { label: "Players", val: "4" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="py-4 text-center"
                    style={{ borderRight: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none" }}
                  >
                    <div className="font-bold text-lg" style={{ color: i === 0 ? "#fbbf24" : "white" }}>
                      {item.val}
                    </div>
                    <div className="text-white/40 text-xs mt-0.5">{item.label}</div>
                  </div>
                ))}
              </div>

              {/* Rankings */}
              <div className="px-4 py-3">
                {recentWinners.map((winner, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 py-3 px-2 rounded-xl transition-colors hover:bg-white/5"
                    style={{
                      borderBottom: i < recentWinners.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                    }}
                  >
                    {/* Rank */}
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                      style={{
                        background:
                          i === 0
                            ? "rgba(251,191,36,0.2)"
                            : i === 1
                            ? "rgba(148,163,184,0.15)"
                            : i === 2
                            ? "rgba(205,127,50,0.15)"
                            : "rgba(255,255,255,0.05)",
                        color:
                          i === 0
                            ? "#fbbf24"
                            : i === 1
                            ? "#94a3b8"
                            : i === 2
                            ? "#cd7f32"
                            : "rgba(255,255,255,0.3)",
                      }}
                    >
                      {winner.rank}
                    </div>

                    {/* Avatar */}
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                      style={{ background: "rgba(0,230,118,0.2)", color: "var(--green-neon)" }}
                    >
                      SW
                    </div>

                    {/* Name */}
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm text-white truncate">{winner.name}</div>
                      <div className="text-white/40 text-xs">{winner.team}</div>
                    </div>

                    {/* Points */}
                    <div className="text-right">
                      <div className="font-bold text-sm" style={{ color: "var(--green-neon)" }}>
                        {winner.points}
                      </div>
                      <div className="text-white/40 text-xs">pts</div>
                    </div>

                    {/* Prize */}
                    <div
                      className="text-sm font-bold min-w-[50px] text-right"
                      style={{ color: winner.prize !== "—" ? "#fbbf24" : "rgba(255,255,255,0.2)" }}
                    >
                      {winner.prize}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Copy */}
          <div>
            <div className="section-tag mb-4">
              <Trophy size={16} />
              Real Cash Prizes
            </div>
            <h2 className="font-display text-[clamp(3rem,6vw,5.5rem)] leading-none tracking-wide mb-6">
              CLIMB THE
              <br />
              <span className="text-gradient-gold">LEADERBOARD</span>
              <br />
              WIN CASH
            </h2>
            <p className="text-white/55 text-lg leading-relaxed mb-10">
              Every contest has a prize pool distributed across top performers. The smarter your team selection, the higher you rank — and the more you earn.
            </p>

            {/* Prize cards */}
            <div className="space-y-3 mb-10">
              {prizeStructure.map((prize, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-2xl transition-all card-hover"
                  style={{
                    background: prize.bgColor,
                    border: `1px solid ${prize.border}`,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${prize.color}20` }}
                  >
                    <prize.icon size={20} style={{ color: prize.color }} />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-white">{prize.rank}</div>
                  </div>
                  <div className="font-display text-2xl" style={{ color: prize.color }}>
                    {prize.prize}
                  </div>
                </div>
              ))}
            </div>

            <Link href="https://app.procrick.com" target="_blank" className="btn-primary">
              Join a Contest Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
