'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Trophy, Users, MapPin, Clock, ExternalLink, Share2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export default function EventDetailClient({ event }) {
  const [activeTab, setActiveTab] = useState('about'); // State to manage active tab

  const handleShare = async () => {
    const urlToShare = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          text: `Check out this event: ${event.title}`,
          url: urlToShare,
        });
      } catch (error) {
        console.error('Sharing failed:', error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(urlToShare);
        alert('Link copied to clipboard!');
      } catch (err) {
        alert('Could not copy the link. Please try manually.');
      }
    }
  };
  const router = useRouter();

  if (!event) {
    return (
      <>
     
      <div className="min-h-screen bg-background flex items-center justify-center px-4 sm:px-6 lg:px-8">
        
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">Event Not Found</h1>
          <button onClick={() => router.push('/')} className="btn-primary text-base sm:text-lg px-6 py-3">
            Back to Home
          </button>
        </div>
        </div>
      </> 
    );
   
  }

  const tabContent = {
    about: (
      <motion.section
        key="about-tab" // Add a key for Framer Motion to animate transitions between tabs
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-2xl sm:text-3xl font-sora font-bold text-white mb-4 sm:mb-6">About This Event</h2>
        <div className="prose prose-invert max-w-none">
          <p className="text-base sm:text-lg text-foreground-muted leading-relaxed mb-4 sm:mb-6">
            {event.description}
          </p>
          <div className="whitespace-pre-line text-base sm:text-lg text-foreground-muted leading-relaxed">
            {event.longDescription}
          </div>
        </div>
      </motion.section>
    ),
    schedule: (
      <motion.section
        key="schedule-tab"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-2xl sm:text-3xl font-sora font-bold text-white mb-4 sm:mb-6">Event Schedule</h2>
        <div className="space-y-3 sm:space-y-4">
          {event.schedule.map((item, index) => (
            <div key={index} className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-background-card border border-border rounded-lg">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
              <div className="flex-1">
                <div className="text-primary font-medium text-sm sm:text-base">{item.time}</div>
                <div className="text-white text-base sm:text-lg">{item.event}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    ),
    prizes: (
      <motion.section
        key="prizes-tab"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-2xl sm:text-3xl font-sora font-bold text-white mb-4 sm:mb-6">Prizes & Awards</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {event.prizes.map((prize, index) => (
            <div key={index} className="bg-background-card border border-border rounded-lg p-4 sm:p-6 text-center">
              <div className="text-xl sm:text-2xl font-bold text-accent mb-1 sm:mb-2">{prize.amount}</div>
              <div className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">{prize.place}</div>
              <div className="text-foreground-muted text-xs sm:text-sm">{prize.description}</div>
            </div>
          ))}
        </div>
      </motion.section>
    ),
  };

  return (
    <>
     <Navbar/>
      <div className="mt-20 min-h-screen bg-background">
        
        {/* Header */}
        <div className="bg-background-secondary border-b border-border">
          <div className="container-custom py-4 sm:py-6 px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => router.back()}
              className="flex items-center space-x-2 text-foreground-muted hover:text-primary transition-colors mb-4 text-sm sm:text-base"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Back to Events</span>
            </button>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-r ${event.color} opacity-10`}></div>
          <div className="container-custom py-12 sm:py-16 relative z-10 px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Event Info */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className={`px-3 py-1 sm:px-4 sm:py-2 bg-gradient-to-r ${event.color} text-white rounded-full font-medium text-sm sm:text-base`}>
                    {event.status}
                  </span>
                  <div className="flex items-center space-x-2 text-foreground-muted text-sm sm:text-base">
                    <Users className="w-4 h-4" />
                    <span>{event.participants}/{event.maxParticipants} participants</span>
                  </div>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-sora font-bold text-white mb-4 leading-tight">
                  {event.title}
                </h1>
                <p className="text-base sm:text-xl text-foreground-muted mb-6">
                  {event.subtitle}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center space-x-3">
                    <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                    <div>
                      <div className="text-xs sm:text-sm text-foreground-muted">Prize Pool</div>
                      <div className="text-xl sm:text-2xl font-bold text-white">{event.prize}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    <div>
                      <div className="text-xs sm:text-sm text-foreground-muted">Duration</div>
                      <div className="text-base sm:text-lg font-medium text-white">{event.date} - {event.endDate}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
                    <div>
                      <div className="text-xs sm:text-sm text-foreground-muted">Location</div>
                      <div className="text-base sm:text-lg font-medium text-white">{event.location}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                    <div>
                      <div className="text-xs sm:text-sm text-foreground-muted">Registration</div>
                      <div className="text-base sm:text-lg font-medium text-white">Open Now</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="btn-primary flex items-center justify-center space-x-2 px-6 py-3 text-base sm:text-lg">
                    <Link href="https://lu.ma/1o4evfqc?tk=gJnPp5">Register Now</Link>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                  <button onClick={handleShare} className="btn-outline flex items-center justify-center space-x-2 px-6 py-3 text-base sm:text-lg">
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                </div>
              </motion.div>

              {/* Event Poster */}
              <motion.div
                className="relative order-first lg:order-last"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={event.poster}
                    alt={`${event.title} poster`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${event.color} opacity-20`}></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content Sections with Tabs */}
        <div className="container-custom py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
            {/* Main Content Area (Tabbed) */}
            <div className="lg:col-span-2">
              <div className="flex border-b border-border mb-8 overflow-x-auto">
                <TabButton name="about" activeTab={activeTab} setActiveTab={setActiveTab}>
                  About
                </TabButton>
                <TabButton name="schedule" activeTab={activeTab} setActiveTab={setActiveTab}>
                  Schedule
                </TabButton>
                <TabButton name="prizes" activeTab={activeTab} setActiveTab={setActiveTab}>
                  Prizes
                </TabButton>
              </div>

              {/* AnimatePresence for smooth tab content transitions */}
              <motion.div> 
                {tabContent[activeTab]}
              </motion.div>
            </div>

            {/* Sidebar (remains as is) */}
            <div className="space-y-8 mt-10 lg:mt-0">
              {/* Requirements */}
              <motion.div
                className="bg-background-card border border-border rounded-lg p-6"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h3 className="text-xl sm:text-2xl font-sora font-bold text-white mb-4">Requirements</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {event.requirements.map((req, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-foreground-muted text-sm sm:text-base">{req}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Tags */}
              <motion.div
                className="bg-background-card border border-border rounded-lg p-6"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h3 className="text-xl sm:text-2xl font-sora font-bold text-white mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {event.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-primary/20 text-primary border border-primary/30 rounded-full text-xs sm:text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Organizers */}
              <motion.div
                className="bg-background-card border border-border rounded-lg p-6"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <h3 className="text-xl sm:text-2xl font-sora font-bold text-white mb-4">Organizers</h3>
                <div className="space-y-2">
                  {event.organizers.map((org, index) => (
                    <div key={index} className="text-foreground-muted text-sm sm:text-base">{org}</div>
                  ))}
                </div>
              </motion.div>

              {/* Sponsors */}
              <motion.div
                className="bg-background-card border border-border rounded-lg p-6"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <h3 className="text-xl sm:text-2xl font-sora font-bold text-white mb-4">Sponsors</h3>
                <div className="space-y-2">
                  {event.sponsors.map((sponsor, index) => (
                    <div key={index} className="text-foreground-muted text-sm sm:text-base">{sponsor}</div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

// Helper component for Tab Buttons
function TabButton({ name, activeTab, setActiveTab, children }) {
  const isActive = name === activeTab;
  const commonClasses = "px-4 py-3 text-sm sm:text-base font-medium relative transition-colors duration-300 ease-in-out";
  const activeClasses = "text-primary bg-primary/10 rounded-t-lg"; // Changed for a button-like active state
  const inactiveClasses = "text-foreground-muted hover:text-white hover:bg-background-secondary rounded-t-lg"; // Added hover background

  return (
    <button
      className={`${commonClasses} ${isActive ? activeClasses : inactiveClasses}`}
      onClick={() => setActiveTab(name)}
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="tab-underline" // Unique ID for Framer Motion layout animations
          className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary rounded-t-sm" // Underline for active tab
        />
      )}
    </button>
  );
}