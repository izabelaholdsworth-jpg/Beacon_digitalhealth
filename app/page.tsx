import Header from '../components/Header';
import Hero from '../components/Hero';
import PowerStatement from '../components/PowerStatement';
import PlatformPositioning from '../components/PlatformPositioning';
import PlatformModules from '../components/PlatformModules';
import Credibility from '../components/Credibility';
import CaseStudies from '../components/CaseStudies';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20">
      <Header />
      <Hero />
      <PowerStatement />
      <PlatformPositioning />
      <PlatformModules />
      <Credibility />
      <CaseStudies />
      <Contact />
      <Footer />
    </main>
  );
}