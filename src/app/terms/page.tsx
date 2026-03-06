import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsPage() {
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
            <div className="section-tag mb-4">Legal Information</div>
            <h1 className="font-display text-5xl md:text-7xl mb-6">
              Terms of <span className="text-gradient-green">Service</span>
            </h1>
            <p className="text-white/60 text-lg">Last Updated: March 6, 2026</p>
          </div>

          <div className="bg-glass rounded-3xl p-8 md:p-12 border border-white/10 backdrop-blur-xl">
            <div className="prose prose-invert max-w-none space-y-10">
              <section>
                <h2 className="font-display text-3xl mb-4 text-white">
                  1. Acceptance of Terms
                </h2>
                <p className="text-white/70 leading-relaxed font-body">
                  By accessing or using ProCrick (the "Platform"), you agree to
                  be bound by these Terms of Service. If you do not agree to
                  these terms, please do not use our services. We reserve the
                  right to modify these terms at any time, and your continued
                  use of the platform constitutes acceptance of those changes.
                </p>
              </section>

              <section>
                <h2 className="font-display text-3xl mb-4 text-white">
                  2. User Accounts
                </h2>
                <div className="text-white/70 leading-relaxed font-body space-y-4">
                  <p>
                    To use certain features of the Platform, you must register
                    for an account. You agree to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Provide accurate, current, and complete information.
                    </li>
                    <li>
                      Maintain the security of your password and identification.
                    </li>
                    <li>
                      Promptly update your registration information to keep it
                      accurate.
                    </li>
                    <li>
                      Be fully responsible for all use of your account and for
                      any actions that take place using your account.
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="font-display text-3xl mb-4 text-white">
                  3. Skill-Based Gaming
                </h2>
                <p className="text-white/70 leading-relaxed font-body">
                  ProCrick is a platform for skill-based fantasy sports.
                  Participation in contests depends on your knowledge of
                  cricket, statistical analysis, and player performance. While
                  we offer real cash prizes, these are awarded based on the
                  outcome of contests which are determined by the skill of the
                  participants, not by chance.
                </p>
              </section>

              <section>
                <h2 className="font-display text-3xl mb-4 text-white">
                  4. Eligibility & Restricted Regions
                </h2>
                <p className="text-white/70 leading-relaxed font-body">
                  You must be at least 18 years of age to participate in paid
                  contests. Users from certain jurisdictions may be restricted
                  from participating in paid contests due to local laws. It is
                  your responsibility to ensure that your participation is legal
                  in your current location.
                </p>
              </section>

              <section>
                <h2 className="font-display text-3xl mb-4 text-white">
                  5. Wallet & Financial Transactions
                </h2>
                <p className="text-white/70 leading-relaxed font-body">
                  Deposits and withdrawals are processed through secure payment
                  gateways. Funds in your ProCrick wallet can be used to join
                  contests. Withdrawals are subject to verification and may take
                  2-5 business days to process. We reserve the right to withhold
                  payments if we suspect fraudulent activity.
                </p>
              </section>

              <section>
                <h2 className="font-display text-3xl mb-4 text-white">
                  6. Fair Play Policy
                </h2>
                <p className="text-white/70 leading-relaxed font-body">
                  We maintain a strict Fair Play Policy. Any attempt to
                  manipulate contest outcomes, use automated bots, or create
                  multiple accounts to gain an unfair advantage will result in
                  immediate account termination and forfeiture of any winnings.
                </p>
              </section>

              <section>
                <h2 className="font-display text-3xl mb-4 text-white">
                  7. Limitation of Liability
                </h2>
                <p className="text-white/70 leading-relaxed font-body">
                  ProCrick is provided "as is" without warranty of any kind. We
                  shall not be liable for any indirect, incidental, special, or
                  consequential damages resulting from the use or inability to
                  use the Platform.
                </p>
              </section>

              <section>
                <h2 className="font-display text-3xl mb-4 text-white">
                  8. Contact Information
                </h2>
                <p className="text-white/70 leading-relaxed font-body">
                  If you have any questions about these Terms of Service, please
                  contact us at{" "}
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
              Need more clarification? Check our Frequently Asked Questions or
              reach out to our team.
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
                Start Playing
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
