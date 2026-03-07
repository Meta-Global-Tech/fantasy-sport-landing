import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function FairPlayPage() {
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
            <div className="section-tag mb-4">Integrity & Transparency</div>
            <h1 className="font-display text-5xl md:text-7xl mb-6">
              Fair Play <span className="text-gradient-green">Policy</span>
            </h1>
            <p className="text-white/60 text-lg">Last Updated: March 6, 2026</p>
          </div>

          <div className="bg-glass rounded-3xl p-8 md:p-12 border border-white/10 backdrop-blur-xl">
            <div className="prose prose-invert max-w-none space-y-10">
              <section>
                <h2 className="font-display text-3xl mb-4 text-white">
                  1. Our Commitment to Fair Play
                </h2>
                <p className="text-white/70 leading-relaxed font-body">
                  ProCrick is built on the foundation of trust, integrity, and
                  skill. We are committed to providing a transparent and fair
                  gaming environment for all our users. Our Fair Play Policy
                  outlines the standards we expect from our community and the
                  measures we take to ensure a level playing field.
                </p>
              </section>

              <section>
                <h2 className="font-display text-3xl mb-4 text-white">
                  2. Skill-Based Competition
                </h2>
                <div className="text-white/70 leading-relaxed font-body space-y-4">
                  <p>
                    Success on ProCrick is determined by your knowledge of
                    cricket, deep statistical analysis, and strategic
                    team-building skills. To maintain this:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Contest outcomes are based on real-world performance of
                      actual athletes.
                    </li>
                    <li>
                      Point systems are clearly defined and applied uniformly to
                      all participants.
                    </li>
                    <li>
                      Live score updates and leaderboard rankings are provided
                      in real-time for maximum transparency.
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="font-display text-3xl mb-4 text-white">
                  3. Strict Anti-Cheating Measures
                </h2>
                <div className="text-white/70 leading-relaxed font-body space-y-4">
                  <p>
                    We have zero tolerance for any activity that compromises the
                    integrity of our contests. Prohibited actions include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Multiple Accounts:</strong> Creating more than one
                      account to join the same contest is strictly prohibited.
                    </li>
                    <li>
                      <strong>Collusion:</strong> Any attempt to coordinate with
                      other users to manipulate contest outcomes.
                    </li>
                    <li>
                      <strong>Automated Bots:</strong> The use of software,
                      scripts, or bots to enter contests or gain data is
                      forbidden.
                    </li>
                    <li>
                      <strong>Exploitation:</strong> Knowingly exploiting bugs
                      or loopholes in the platform for unfair advantage.
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="font-display text-3xl mb-4 text-white">
                  4. Account Verification
                </h2>
                <p className="text-white/70 leading-relaxed font-body">
                  To ensure a secure environment, we may require users to
                  complete identity verification (KYC). This helps us prevent
                  fraud, ensure all participants are of legal age, and maintain
                  the security of financial transactions. Only verified users
                  are eligible for withdrawals.
                </p>
              </section>

              <section>
                <h2 className="font-display text-3xl mb-4 text-white">
                  5. Payment Security
                </h2>
                <p className="text-white/70 leading-relaxed font-body">
                  All financial transactions on ProCrick are handled through
                  secure, PCI-compliant payment gateways. We monitor for
                  suspicious financial activity and reserve the right to freeze
                  accounts pending investigation if fraudulent transactions are
                  detected.
                </p>
              </section>

              <section>
                <h2 className="font-display text-3xl mb-4 text-white">
                  6. Consequences of Violations
                </h2>
                <p className="text-white/70 leading-relaxed font-body">
                  Users found violating the Fair Play Policy may face immediate
                  consequences, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-white/70">
                  <li>Temporary or permanent account suspension.</li>
                  <li>Forfeiture of contest winnings and deposits.</li>
                  <li>Disqualification from current and future contests.</li>
                  <li>Legal action in cases of severe fraud or theft.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-3xl mb-4 text-white">
                  7. Reporting Unfair Play
                </h2>
                <p className="text-white/70 leading-relaxed font-body">
                  We encourage our community to help us maintain a fair
                  platform. If you suspect another user of cheating or violating
                  these policies, please report it immediately to our integrity
                  team at{" "}
                  <span className="text-green-neon underline">
                    support@procrick.com
                  </span>
                  .
                </p>
              </section>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-white/40 font-body text-sm mb-6">
              Play hard. Play fair. Become a ProCrick legend.
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
