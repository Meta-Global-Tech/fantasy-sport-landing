import {
  Zap,
  BarChart3,
  Shield,
  Smartphone,
  RefreshCw,
  Award,
  TrendingUp,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Live Score Updates",
    description: "Real-time ball-by-ball scoring so your fantasy points update as the match unfolds.",
    color: "#fbbf24",
    size: "large",
  },
  {
    icon: BarChart3,
    title: "Detailed Scorecards",
    description: "Full batting & bowling stats for every player. Every boundary, wicket, and catch tracked.",
    color: "#60a5fa",
    size: "normal",
  },
  {
    icon: Award,
    title: "Dynamic Point System",
    description: "Points for runs, fours, sixes, wickets, catches, stumpings. Captain 2x, Vice Captain 1.5x.",
    color: "#00e676",
    size: "normal",
  },
  {
    icon: TrendingUp,
    title: "Live Leaderboards",
    description: "Watch your rank climb in real time. See exactly where you stand against every opponent.",
    color: "#a78bfa",
    size: "large",
  },
  {
    icon: Shield,
    title: "Secure & Trusted",
    description: "Your data and funds are fully protected. Fair play guaranteed on every contest.",
    color: "#f472b6",
    size: "normal",
  },
  {
    icon: Globe,
    title: "All Major Tournaments",
    description: "ICC World Cup, IPL, BBL, CPL, The Hundred — all the biggest events covered.",
    color: "#34d399",
    size: "normal",
  },
  {
    icon: RefreshCw,
    title: "Multiple Teams Per Match",
    description: "Enter multiple teams in the same contest to maximize your winning chances.",
    color: "#fb923c",
    size: "normal",
  },
  {
    icon: Smartphone,
    title: "iOS & Android Apps",
    description: "Native mobile apps with push notifications, live widgets, and seamless contest entry.",
    color: "#38bdf8",
    size: "normal",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-28 px-6 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,230,118,0.04), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="section-tag justify-center mb-4">
            <span className="w-8 h-px" style={{ background: "var(--green-neon)" }} />
            Platform Features
            <span className="w-8 h-px" style={{ background: "var(--green-neon)" }} />
          </div>
          <h2 className="font-display text-[clamp(3rem,7vw,6rem)] leading-none tracking-wide mb-4">
            EVERYTHING YOU NEED
            <br />
            <span className="text-gradient-green">TO DOMINATE</span>
          </h2>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <div
              key={i}
              className={`feature-card ${f.size === "large" ? "lg:col-span-2" : ""}`}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: `${f.color}15`, border: `1px solid ${f.color}25` }}
              >
                <f.icon size={22} style={{ color: f.color }} />
              </div>
              <h3 className="font-display text-2xl tracking-wide mb-2" style={{ color: "white" }}>
                {f.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
