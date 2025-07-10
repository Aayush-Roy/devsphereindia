'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Trophy, Users, MapPin, Clock, ExternalLink, Share2, Heart, Link as LinkTr } from 'lucide-react';
import Link from "next/link";
import Image from 'next/image';
import EventMap from '@/app/components/EventMap';

export default function EventDetailClient({ event }) {
    const handleShare = async () => {
    const urlToShare = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title, // Page title
          text: 'Check out this event!',
          url: urlToShare, // Current page URL
        });
      } catch (error) {
        console.error('Sharing failed:', error);
      }
    } else {
      // Fallback: Copy to clipboard
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
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Event Not Found</h1>
          <button onClick={() => router.push('/')} className="btn-primary">
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-background-secondary border-b border-border">
          <div className="container-custom py-6">
            <button
              onClick={() => router.back()}
              className="flex items-center space-x-2 text-foreground-muted hover:text-primary transition-colors mb-4"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Events</span>
            </button>
          </div>
        </div>
  
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-r ${event.color} opacity-10`}></div>
          <div className="container-custom py-16 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Event Info */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <span className={`px-4 py-2 bg-gradient-to-r ${event.color} text-white rounded-full font-medium`}>
                    {event.status}
                  </span>
                  <div className="flex items-center space-x-2 text-foreground-muted">
                    <Users className="w-4 h-4" />
                    <span>{event.participants}/{event.maxParticipants} participants</span>
                  </div>
                </div>
  
                <h1 className="text-4xl md:text-5xl font-sora font-bold text-white mb-4">
                  {event.title}
                </h1>
                <p className="text-xl text-foreground-muted mb-6">
                  {event.subtitle}
                </p>
  
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center space-x-3">
                    <Trophy className="w-6 h-6 text-accent" />
                    <div>
                      <div className="text-sm text-foreground-muted">Prize Pool</div>
                      <div className="text-xl font-bold text-white">{event.prize}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-6 h-6 text-primary" />
                    <div>
                      <div className="text-sm text-foreground-muted">Duration</div>
                      <div className="text-lg font-medium text-white">{event.date} - {event.endDate}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-secondary" />
                    <div>
                      <div className="text-sm text-foreground-muted">Location</div>
                      <div className="text-lg font-medium text-white">{event.location}</div>
                     {event.coordinates && (
  <div className="mt-6 h-64 w-full rounded-xl overflow-hidden border border-border">
    <EventMap
      lat={event.coordinates.lat}
      lng={event.coordinates.lng}
      location={event.location}
    />
  </div>
)}

                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-accent" />
                    <div>
                      <div className="text-sm text-foreground-muted">Registration</div>
                      <div className="text-lg font-medium text-white">Open Now</div>
                    </div>
                  </div>
                </div>
  
                <div className="flex gap-4">
                  <button className="btn-primary flex items-center space-x-2">
                    <Link href="https://lu.ma/1o4evfqc?tk=gJnPp5">Register Now</Link>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                  <button onClick={handleShare} className="btn-outline flex items-center space-x-2">
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                  {/* <button className="p-3 border border-border rounded-lg hover:bg-background-secondary transition-colors">
                    <Heart className="w-5 h-5 text-foreground-muted" />
                  </button> */}
                </div>
              </motion.div>
  
              {/* Event Poster */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative w-full h-96 rounded-2xl overflow-hidden">
                  <Image
                    src={event.poster}
                    alt={`${event.title} poster`}
                    fill
                    className="object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${event.color} opacity-20`}></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
  
        {/* Content Sections */}
        <div className="container-custom py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h2 className="text-3xl font-sora font-bold text-white mb-6">About This Event</h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-foreground-muted leading-relaxed mb-6">
                    {event.description}
                  </p>
                  <div className="whitespace-pre-line text-foreground-muted leading-relaxed">
                    {event.longDescription}
                  </div>
                </div>
              </motion.section>
  
              {/* Schedule */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h2 className="text-3xl font-sora font-bold text-white mb-6">Event Schedule</h2>
                <div className="space-y-4">
                  {event.schedule.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-background-card border border-border rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="text-primary font-medium">{item.time}</div>
                        <div className="text-white">{item.event}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>
  
              {/* Prizes */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <h2 className="text-3xl font-sora font-bold text-white mb-6">Prizes & Awards</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {event.prizes.map((prize, index) => (
                    <div key={index} className="bg-background-card border border-border rounded-lg p-6 text-center">
                      <div className="text-2xl font-bold text-accent mb-2">{prize.amount}</div>
                      <div className="text-lg font-semibold text-white mb-2">{prize.place}</div>
                      <div className="text-foreground-muted text-sm">{prize.description}</div>
                    </div>
                  ))}
                </div>
              </motion.section>
            </div>
  
            {/* Sidebar */}
            <div className="space-y-8">
              {/* Requirements */}
              <motion.div
                className="bg-background-card border border-border rounded-lg p-6"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h3 className="text-xl font-sora font-bold text-white mb-4">Requirements</h3>
                <ul className="space-y-3">
                  {event.requirements.map((req, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-foreground-muted text-sm">{req}</span>
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
                <h3 className="text-xl font-sora font-bold text-white mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {event.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded-full text-sm"
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
                <h3 className="text-xl font-sora font-bold text-white mb-4">Organizers</h3>
                <div className="space-y-2">
                  {event.organizers.map((org, index) => (
                    <div key={index} className="text-foreground-muted">{org}</div>
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
                <h3 className="text-xl font-sora font-bold text-white mb-4">Sponsors</h3>
                <div className="space-y-2">
                  {event.sponsors.map((sponsor, index) => (
                    <div key={index} className="text-foreground-muted">{sponsor}</div>
                  ))}
                </div>
                 
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    );
   

}
