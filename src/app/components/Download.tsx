import Link from "next/link";
import { Smartphone, Monitor, ArrowRight } from "lucide-react";

export default function Download() {
  return (
    <section id="download" className="py-28 px-6 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0, 230, 118, 0.06), transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <div className="section-tag justify-center mb-6">
          <span className="w-8 h-px" style={{ background: "var(--green-neon)" }} />
          Play Anywhere
          <span className="w-8 h-px" style={{ background: "var(--green-neon)" }} />
        </div>

        <h2 className="font-display text-[clamp(3.5rem,8vw,7rem)] leading-none tracking-wide mb-6">
          PLAY ON ANY
          <br />
          <span className="text-gradient-green">DEVICE</span>
        </h2>

        <p className="text-white/55 text-xl max-w-xl mx-auto mb-14 leading-relaxed">
          Native iOS and Android apps for the best mobile experience, plus a full web app at app.procrick.com for desktop play.
        </p>

        {/* Download options */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {/* App Store */}
          <a
            href="#"
            className="flex items-center gap-4 px-6 py-4 rounded-2xl transition-all card-hover"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div className="text-left">
              <div className="text-white/50 text-xs">Download on the</div>
              <div className="font-semibold text-white text-lg">App Store</div>
            </div>
          </a>

          {/* Google Play */}
          <a
            href="#"
            className="flex items-center gap-4 px-6 py-4 rounded-2xl transition-all card-hover"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <svg viewBox="0 0 24 24" className="w-8 h-8">
              <path fill="#ea4335" d="m3.18 23.76 10.45-10.45-2.94-2.94z" />
              <path fill="#fbbc04" d="M21.26 10.52 18.44 9l-3.44 3.44 3.43 3.43 2.84-1.54a1.9 1.9 0 0 0 0-3.81z" />
              <path fill="#4285f4" d="m3.18.24 10.45 10.45-2.94 2.94z" />
              <path fill="#34a853" d="M2 1.04v21.92l10.69-10.96z" />
            </svg>
            <div className="text-left">
              <div className="text-white/50 text-xs">Get it on</div>
              <div className="font-semibold text-white text-lg">Google Play</div>
            </div>
          </a>

          {/* Web app */}
          <Link
            href="https://app.procrick.com"
            target="_blank"
            className="flex items-center gap-4 px-6 py-4 rounded-2xl transition-all card-hover"
            style={{
              background: "rgba(0,230,118,0.08)",
              border: "1px solid rgba(0,230,118,0.25)",
            }}
          >
            <Monitor size={32} style={{ color: "var(--green-neon)" }} />
            <div className="text-left">
              <div className="text-white/50 text-xs">Open in browser</div>
              <div className="font-semibold text-lg" style={{ color: "var(--green-neon)" }}>
                Web App
              </div>
            </div>
          </Link>
        </div>

        {/* Big CTA */}
        <div
          className="rounded-3xl p-12 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(0,230,118,0.1), rgba(22,40,69,0.8))",
            border: "1px solid rgba(0,230,118,0.2)",
          }}
        >
          <div className="orb orb-green w-96 h-96 -right-24 -bottom-24 opacity-30" />
          <div className="relative z-10">
            <h3 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none tracking-wide mb-4">
              READY TO START
              <br />
              <span className="text-gradient-green">WINNING?</span>
            </h3>
            <p className="text-white/55 text-lg mb-8 max-w-md mx-auto">
              Thousands of cricket fans are already earning. Join the action — your first contest is just one click away.
            </p>
            <Link href="https://app.procrick.com" target="_blank" className="btn-primary glow-green">
              Create Free Account
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
