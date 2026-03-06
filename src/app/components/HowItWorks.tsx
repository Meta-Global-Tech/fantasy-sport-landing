import { UserPlus, Users2, Trophy } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Create Your Account",
    description:
      "Sign up in seconds. No credit card needed to start. Create your profile and explore upcoming matches instantly.",
    color: "#00e676",
  },
  {
    number: "02",
    icon: Users2,
    title: "Build Your Dream Team",
    description:
      "Pick 11 players from both squads. Mix wicket-keepers, batters, all-rounders, and bowlers. Assign your captain (2x) and vice-captain (1.5x).",
    color: "#60a5fa",
  },
  {
    number: "03",
    icon: Trophy,
    title: "Win Real Cash Prizes",
    description:
      "Join contests, climb the leaderboard as players score, and collect your winnings. Payouts are instant, directly to your wallet.",
    color: "#fbbf24",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--green-neon), transparent 60%)" }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="section-tag justify-center mb-4">
            <span className="w-8 h-px" style={{ background: "var(--green-neon)" }} />
            Simple Process
            <span className="w-8 h-px" style={{ background: "var(--green-neon)" }} />
          </div>
          <h2 className="font-display text-[clamp(3rem,7vw,6rem)] leading-none tracking-wide mb-4">
            THREE STEPS TO
            <br />
            <span className="text-gradient-green">WINNING</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            ProCrick makes fantasy cricket dead simple. If you know cricket, you&apos;re already halfway there.
          </p>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-6 relative">
          {/* Connector line (desktop) */}
          <div
            className="absolute top-16 left-[16.7%] right-[16.7%] h-px hidden lg:block"
            style={{ background: "linear-gradient(90deg, transparent, rgba(0,230,118,0.3), rgba(96,165,250,0.3), rgba(251,191,36,0.3), transparent)" }}
          />

          {steps.map((step, i) => (
            <div
              key={i}
              className="relative bg-glass rounded-3xl p-8 card-hover"
              style={{
                border: "1px solid rgba(255,255,255,0.06)",
                animationDelay: `${i * 0.15}s`,
              }}
            >
              {/* Number */}
              <div className="step-number mb-2">{step.number}</div>

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 -mt-2"
                style={{ background: `${step.color}15`, border: `1px solid ${step.color}30` }}
              >
                <step.icon size={26} style={{ color: step.color }} />
              </div>

              {/* Content */}
              <h3 className="font-display text-3xl tracking-wide mb-3" style={{ color: step.color }}>
                {step.title}
              </h3>
              <p className="text-white/55 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="https://app.procrick.com"
            target="_blank"
            className="btn-primary inline-flex"
          >
            Get Started – It's Free
          </Link>
        </div>
      </div>
    </section>
  );
}
