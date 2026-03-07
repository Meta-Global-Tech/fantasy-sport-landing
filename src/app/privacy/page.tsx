import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicyPage() {
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
              Privacy <span className="text-gradient-green">Policy</span>
            </h1>
            <p className="text-white/60 text-lg">Last Updated: March 6, 2026</p>
          </div>

          <div className="bg-glass rounded-3xl p-8 md:p-12 border border-white/10 backdrop-blur-xl">
            <div className="prose prose-invert max-w-none space-y-10">
              <section>
                <h2 className="font-display text-3xl mb-4 text-white">
                  1. Introduction
                </h2>
                <p className="text-white/70 leading-relaxed font-body">
                  At ProCrick, we are committed to protecting your privacy. This
                  Privacy Policy explains how we collect, use, and safeguard
                  your personal information when you use our platform. By
                  accessing ProCrick, you consent to the data practices
                  described in this policy.
                </p>
              </section>

              <section>
                <h2 className="font-display text-3xl mb-4 text-white">
                  2. Information We Collect
                </h2>
                <div className="text-white/70 leading-relaxed font-body space-y-4">
                  <p>
                    To provide you with the best experience, we collect several
                    types of information:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong className="text-white">
                        Personal Identification:
                      </strong>{" "}
                      Name, email address, phone number, and date of birth.
                    </li>
                    <li>
                      <strong className="text-white">
                        Financial Information:
                      </strong>{" "}
                      Payment details for deposits and bank account details for
                      processing withdrawals.
                    </li>
                    <li>
                      <strong className="text-white">Usage Data:</strong>{" "}
                      Information about how you interact with our platform,
                      including contest participation and team selections.
                    </li>
                    <li>
                      <strong className="text-white">
                        Device Information:
                      </strong>{" "}
                      IP address, browser type, and device identifiers to ensure
                      security and prevent fraud.
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="font-display text-3xl mb-4 text-white">
                  3. How We Use Your Information
                </h2>
                <div className="text-white/70 leading-relaxed font-body space-y-4">
                  <p>Your information is used to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Facilitate account registration and login.</li>
                    <li>Process financial transactions and contest entries.</li>
                    <li>
                      Verify your identity and eligibility (e.g., age and
                      location).
                    </li>
                    <li>
                      Personalize your experience and provide customer support.
                    </li>
                    <li>
                      Communicate updates, promotions, and security alerts.
                    </li>
                    <li>
                      Detect and prevent fraudulent or unauthorized activity.
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="font-display text-3xl mb-4 text-white">
                  4. Data Security
                </h2>
                <p className="text-white/70 leading-relaxed font-body">
                  We implement industry-standard security measures, including
                  SSL encryption and secure server hosting, to protect your
                  personal and financial data. However, no method of
                  transmission over the internet is 100% secure, and we cannot
                  guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="font-display text-3xl mb-4 text-white">
                  5. Sharing Your Information
                </h2>
                <p className="text-white/70 leading-relaxed font-body">
                  We do not sell your personal data. We may share information
                  with trusted third-party service providers (such as payment
                  processors or analytics tools) only as necessary to provide
                  our services or as required by law.
                </p>
              </section>

              <section>
                <h2 className="font-display text-3xl mb-4 text-white">
                  6. Cookies & Tracking
                </h2>
                <p className="text-white/70 leading-relaxed font-body">
                  ProCrick uses cookies and similar tracking technologies to
                  understand platform usage, remember your preferences, and
                  improve site navigation. You can manage cookie preferences
                  through your browser settings.
                </p>
              </section>

              <section>
                <h2 className="font-display text-3xl mb-4 text-white">
                  7. Your Rights
                </h2>
                <p className="text-white/70 leading-relaxed font-body">
                  You have the right to access, update, or delete your personal
                  information at any time. If you wish to close your account or
                  request a copy of your data, please contact our support team.
                </p>
              </section>

              <section>
                <h2 className="font-display text-3xl mb-4 text-white">
                  8. Contact Information
                </h2>
                <p className="text-white/70 leading-relaxed font-body">
                  If you have any questions or concerns regarding our Privacy
                  Policy, please reach out to us at{" "}
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
              Your trust is our priority. If you need further assistance, feel
              free to contact us.
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
