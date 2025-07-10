import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsStrip from './components/StatsStrip';
import Features from './components/Features';
import Showcase from './components/Showcase';
import CodeSnippet from './components/CodeSnippet';
import AboutSection from './components/AboutSection';
import EventsSlider from './components/EventsSlider';
import ChallengesSection from './components/ChallengesSection';
import Testimonials from './components/Testimonials';
import PartnersGrid from './components/PartnersGrid';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <StatsStrip />
      <Features />
      <Showcase />
      <CodeSnippet />
      <AboutSection />
      <EventsSlider />
      {/* <ChallengesSection /> */}
      <Testimonials />
      <PartnersGrid />
      <Footer />
    </main>
  );
}