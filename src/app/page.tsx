import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBanner from "./components/StatsBanner";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import Prizes from "./components/Prizes";
import ContestPromo from "./components/ContestPromo";
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
      <ContestPromo />
      <Download />
      <Footer />
    </main>
  );
}
