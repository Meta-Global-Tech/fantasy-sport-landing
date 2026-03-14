import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RulesPage() {
  const scoringRules = [
    {
      title: "1. Base Points",
      description: "Standard rewards for fundamental player actions.",
      table: [
        { action: "Runs", points: "+1", notes: "Per run scored" },
        {
          action: "Four Hit",
          points: "+1",
          notes: "Bonus per boundary (in addition to the run points)",
        },
        {
          action: "Six Hit",
          points: "+2",
          notes: "Bonus per six (in addition to the run points)",
        },
        { action: "Wicket", points: "+25", notes: "Per wicket taken" },
        {
          action: "Maiden Over",
          points: "+12",
          notes: "Per maiden over bowled",
        },
        { action: "Catch", points: "+8", notes: "Per catch taken" },
        { action: "Stumping", points: "+12", notes: "Per stumping" },
        {
          action: "Direct Run Out",
          points: "+12",
          notes: "For a direct hit resulting in a run out",
        },
        {
          action: "Indirect Run Out",
          points: "+6",
          notes: "For an indirect assist in a run out",
        },
      ],
    },
    {
      title: "2. Milestone Bonuses & Penalties",
      description:
        "Rewards for reaching significant milestones and penalties for poor performances.",
      subSections: [
        {
          name: "Batting Milestones",
          table: [
            { item: "Century Bonus (100+ Runs)", points: "+16" },
            { item: "Half-Century Bonus (50 to 99 Runs)", points: "+8" },
            { item: "Duck Penalty (Dismissed for 0 Runs)", points: "-2" },
          ],
        },
        {
          name: "Bowling Milestones",
          note: "Only the highest applicable bonus is awarded.",
          table: [
            { item: "5-Wicket Haul", points: "+12" },
            { item: "4-Wicket Haul", points: "+8" },
            { item: "3-Wicket Haul", points: "+4" },
          ],
        },
        {
          name: "Fielding Milestones",
          table: [{ item: "3-Catch Bonus (3 or more catches)", points: "+4" }],
        },
      ],
    },
    {
      title: "3. Strike Rate Modifiers",
      description: "Evaluated based on the batsman's scoring speed.",
      highlights: [
        "Applicable Only For: Batsmen and All-Rounders",
        "Minimum Requirement: Player must face at least 10 balls",
      ],
      table: [
        { range: "> 170", points: "+6" },
        { range: "> 150 to 170", points: "+4" },
        { range: "130 to 150", points: "+2" },
        { range: "60 to < 70", points: "-2" },
        { range: "50 to < 60", points: "-4" },
        { range: "< 50", points: "-6" },
      ],
    },
    {
      title: "4. Economy Rate Modifiers",
      description: "Evaluated based on the bowler's run conceding rate.",
      highlights: [
        "Applicable Only For: Bowlers and All-Rounders",
        "Minimum Requirement: Player must bowl at least 12 balls (2 overs)",
      ],
      table: [
        { range: "< 5", points: "+6" },
        { range: "5.0 to < 6.0", points: "+4" },
        { range: "6.0 to 7.0", points: "+2" },
        { range: "10.0 to < 11.0", points: "-2" },
        { range: "11.01 to 12.0", points: "-4" },
        { range: "> 12.0", points: "-6" },
      ],
    },
    {
      title: "5. Other Events",
      description:
        "Additional points based on the match format and player status.",
      table: [
        { event: "In Starting Lineup", points: "+4" },
        { event: "Substitute Player", points: "+4" },
        { event: "Man of the Match", points: "+50" },
      ],
    },
    {
      title: "6. End-Game Multipliers",
      description:
        "Once the final points are tallied, multipliers are applied based on team roles.",
      list: [
        "Captain: 2x multiplier",
        "Vice-Captain: 1.5x multiplier",
        "Resulting values are rounded to the nearest integer.",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-navy-950 text-white selection:bg-green-neon/30">
      <Navbar />

      {/* Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="orb orb-green w-[500px] h-[500px] -top-24 -left-24 opacity-20" />
        <div className="orb orb-blue w-[600px] h-[600px] top-1/2 -right-24 opacity-10" />
      </div>

      <div className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="section-tag mb-4">Game Mechanics</div>
            <h1 className="font-display text-5xl md:text-7xl mb-6">
              Scoring <span className="text-gradient-green">Rules</span>
            </h1>
            <p className="text-white/60 text-lg">
              Understand how points are calculated for your fantasy team.
            </p>
          </div>

          <div className="bg-glass rounded-3xl p-8 md:p-12 border border-white/10 backdrop-blur-xl space-y-16">
            {/* Tie-breaker Rule */}
            <div className="bg-green-neon/10 border border-green-neon/20 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-neon text-navy-950 rounded-full p-2 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-2xl text-green-neon mb-2">
                    Tie-Breaker Rule
                  </h3>
                  <p className="text-white/80 leading-relaxed font-body">
                    In the event of a tie in total points between two or more
                    teams, the{" "}
                    <span className="text-white font-bold">
                      team that was submitted first
                    </span>{" "}
                    will be declared the winner.
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-invert max-w-none space-y-12">
              {scoringRules.map((section, idx) => (
                <section key={idx} className="space-y-6">
                  <div>
                    <h2 className="font-display text-3xl mb-2 text-white">
                      {section.title}
                    </h2>
                    <p className="text-white/60 font-body">
                      {section.description}
                    </p>
                  </div>

                  {section.highlights && (
                    <div className="flex flex-wrap gap-4">
                      {section.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-sm text-white/80"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  )}

                  {section.table && (
                    <div className="overflow-x-auto rounded-2xl border border-white/10">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-white/5">
                            {Object.keys(section.table[0]).map((key) => (
                              <th
                                key={key}
                                className="px-6 py-4 text-sm font-display uppercase tracking-wider text-green-neon"
                              >
                                {key}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                          {section.table.map((row, i) => (
                            <tr
                              key={i}
                              className="hover:bg-white/5 transition-colors"
                            >
                              {Object.values(row).map((val, j) => (
                                <td
                                  key={j}
                                  className="px-6 py-4 text-white/70 font-body"
                                >
                                  {val}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {section.subSections && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {section.subSections.map((sub, i) => (
                        <div
                          key={i}
                          className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4"
                        >
                          <h4 className="font-display text-xl text-white">
                            {sub.name}
                          </h4>
                          {sub.note && (
                            <p className="text-xs text-white/40 italic">
                              {sub.note}
                            </p>
                          )}
                          <table className="w-full text-left">
                            <tbody className="divide-y divide-white/5 text-sm">
                              {sub.table.map((row, j) => (
                                <tr key={j}>
                                  <td className="py-2 text-white/60">
                                    {row.item}
                                  </td>
                                  <td className="py-2 text-right text-green-neon font-bold">
                                    {row.points}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.list && (
                    <ul className="list-disc pl-6 space-y-2 text-white/70 font-body">
                      {section.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-white/40 font-body text-sm mb-6">
              Ready to lead your team to victory?
            </p>
            <div className="flex justify-center gap-4">
              <a href="/" className="btn-secondary !text-base !px-6 !py-3">
                Go Back Home
              </a>
              <a
                href="https://app.procrick.com"
                target="_blank"
                className="btn-primary !text-base !px-6 !py-3"
              >
                Join a Contest
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
