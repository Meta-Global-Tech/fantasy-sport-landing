const stats = [
  { value: "$50K+", label: "Total Prizes Paid" },
  { value: "1K+", label: "Active Players" },
  { value: "100+", label: "Contests Hosted" },
  // { value: "4.8★", label: "App Rating" },
  { value: "T20 & ODI", label: "Match Formats" },
  { value: "24/7", label: "Live Scores" },
];

export default function StatsBanner() {
  const doubled = [...stats, ...stats];

  return (
    <section
      className="relative py-6 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(0, 230, 118, 0.08), rgba(22, 40, 69, 0.8))",
        borderTop: "1px solid rgba(0, 230, 118, 0.15)",
        borderBottom: "1px solid rgba(0, 230, 118, 0.15)",
      }}
    >
      <div className="ticker-track flex gap-16 whitespace-nowrap">
        {doubled.map((stat, i) => (
          <div key={i} className="flex items-center gap-4 flex-shrink-0">
            <div className="text-center">
              <span
                className="font-display text-2xl tracking-wide"
                style={{ color: "var(--green-neon)" }}
              >
                {stat.value}
              </span>
              <span className="text-white/50 text-sm ml-2">{stat.label}</span>
            </div>
            {i % stats.length !== stats.length - 1 && (
              <div className="w-1 h-1 rounded-full bg-white/20" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
