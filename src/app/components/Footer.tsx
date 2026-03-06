import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="py-14 px-6"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: "var(--green-neon)" }}
              >
                <span
                  className="font-display text-xl"
                  style={{ color: "#060d1a" }}
                >
                  PRO
                </span>
              </div>
              <span className="font-display text-2xl tracking-widest">
                CRICK
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              The ultimate fantasy cricket platform for fans who know the game.
              Build teams, join contests, win real cash.
            </p>
            <div className="flex gap-4 mt-6">
              <Link
                href="https://app.procrick.com"
                target="_blank"
                className="text-sm font-semibold px-5 py-2.5 rounded-xl transition-all"
                style={{
                  background: "var(--green-neon)",
                  color: "#060d1a",
                }}
              >
                Play Now
              </Link>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-5">
              Platform
            </h4>
            <ul className="space-y-3">
              {[
                "How It Works",
                "Features",
                "Contests",
                "Leaderboard",
                "Live Scores",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/40 hover:text-white text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-5">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/terms"
                  className="text-white/40 hover:text-white text-sm transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              {["Privacy Policy", "Fair Play Policy", "Contact Us"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/40 hover:text-white text-sm transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p className="text-white/25 text-sm">
            © 2026 ProCrick. All rights reserved.
          </p>
          <p className="text-white/25 text-xs text-center max-w-sm">
            Fantasy cricket involves skill and cricket knowledge. Please play
            responsibly.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-white/25 hover:text-white/60 text-sm transition-colors"
            >
              Privacy
            </a>
            <Link
              href="/terms"
              className="text-white/25 hover:text-white/60 text-sm transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
