import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function DeleteAccountPage() {

  return (
    <main className="min-h-screen bg-navy-950 text-white selection:bg-green-neon/30">
      <Navbar />

      {/* Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="orb orb-green w-[500px] h-[500px] -top-24 -left-24 opacity-20" />
        <div className="orb orb-blue w-[600px] h-[600px] top-1/2 -right-24 opacity-10" />
      </div>

      <div className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <div className="section-tag mb-4">Account Management</div>
            <h1 className="font-display text-5xl md:text-7xl mb-6">
              Delete <span className="text-gradient-green">Account</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              We're sorry to see you go. Please fill out the form below to request the deletion of your account and all associated data.
            </p>
          </div>

          <div className="bg-glass rounded-3xl p-8 md:p-12 border border-white/10 backdrop-blur-xl text-center">
            <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-red-500/20">
              <svg
                className="w-10 h-10 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>

            <h2 className="font-display text-3xl mb-4">Request Data Deletion</h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              To process your request securely, please fill out our official data deletion request form. 
              <br className="hidden md:block" />
              <span className="text-red-400 font-semibold">Important:</span> This action is permanent and cannot be undone.
            </p>

            <div className="space-y-4">
              <a
                href="https://forms.gle/gdguuiSKC4N8Ha63A"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-primary justify-center !py-5"
              >
                Fill Deletion Request Form
              </a>
              <p className="text-white/40 text-xs mt-4">
                You will be redirected to Google Forms to complete this request.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-white/40 font-body text-sm mb-6">
              Changed your mind? You can still keep your passion for cricket alive.
            </p>
            <div className="flex justify-center gap-4">
              <a href="/" className="btn-secondary !text-base !px-6 !py-3">
                Cancel & Go Home
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
