import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBanner from "./components/StatsBanner";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import Prizes from "./components/Prizes";
import Download from "./components/Download";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBanner />
      <HowItWorks />
      <Features />
      <Prizes />
      <Download />
      <Footer />
    </main>
  );
}
