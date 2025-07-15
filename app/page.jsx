// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import StatsStrip from './components/StatsStrip';
// import Features from './components/Features';
// import Showcase from './components/Showcase';
// import CodeSnippet from './components/CodeSnippet';
// import AboutSection from './components/AboutSection';
// import EventsSlider from './components/EventsSlider';
// import ChallengesSection from './components/ChallengesSection';
// import Testimonials from './components/Testimonials';
// import PartnersGrid from './components/PartnersGrid';
// import Footer from './components/Footer';

// export default function Home() {
//   return (
//     <main className="min-h-screen">
//       <Navbar />
//       <Hero />
//       <StatsStrip />
//       <Features />
//       <Showcase />
//       <CodeSnippet />
//       <AboutSection />
//       <EventsSlider />
//       {/* <ChallengesSection /> */}
//       <Testimonials />
//       <PartnersGrid />
//       <Footer />
//     </main>
//   );
// }
'use client';                        // if you’re in the /app directory
// or leave this line out if you’re in /pages

import { useState, useEffect, useRef } from 'react';
import HashLoader from 'react-spinners/HashLoader';

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
  const MIN_DISPLAY = 3 * 1000;  
  /* 1️⃣ loader state */
  const [isLoading, setIsLoading] = useState(true);
  const startTimeRef = useRef(Date.now());

  useEffect(() => {
    const finish = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const timeout = Math.max(0, MIN_DISPLAY - elapsed); // ensure min duration
      setTimeout(() => setIsLoading(false), timeout);
    };

    if (document.readyState === 'complete') {
      finish();
    } else {
      window.addEventListener('load', finish);
      return () => window.removeEventListener('load', finish);
    }
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <HashLoader color="#895df4" size={80} />
      </div>
    );
  }
  /* 4️⃣ real page once loaded */
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
