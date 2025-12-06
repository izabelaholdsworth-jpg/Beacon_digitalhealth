import Header from '../components/Header';
import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import ValueProposition from '../components/ValueProposition';
import Services from '../components/Services';
import WhyBeacon from '../components/WhyBeacon';
import HowItWorks from '../components/HowItWorks';
import CaseStudies from '../components/CaseStudies';
import MarketSignals from '../components/MarketSignals';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import SectionSeparator from '../components/ui/section-separator';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <StatsBar />
      <ValueProposition />
      <SectionSeparator />
      <Services />
      <SectionSeparator />
      <WhyBeacon />
      <SectionSeparator />
      <HowItWorks />
      <SectionSeparator />
      <CaseStudies />
      <SectionSeparator />
      <MarketSignals />
      <SectionSeparator />
      <Contact />
      <Footer />
    </main>
  );
}