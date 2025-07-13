'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Calendar, Trophy } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function EventsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  const events = [
    {
      id: 'immutablex',
      title: 'Careerverse 2025',
      subtitle: 'Careerverse 2025',
      // prize: '$10,000 USD',
      date: 'July 19, 2025',
      status: 'Registration Open',
      description: 'To equip students with practical insights, confidence, and clarity to kick-start their career prep journeys — with a focus on real conversation, expert-driven guidance, and actionable takeaways.',
      tags: ['Web3', 'Resume Building', 'AI'],
      color: 'from-primary to-primary-light',
      poster: 'https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg',
    },
    {
      id: 'harvard',
      title: 'Coming Soon',
      subtitle: '',
      // prize: '$25,000 USD', // Removed for "Coming Soon"
      // date: 'Jan 20, 2025', // Removed for "Coming Soon"
      status: 'Coming Soon',
      description: '',
      tags: ['DeFi', 'Harvard', 'Innovation'],
      color: 'from-secondary to-secondary-light',
      poster: 'https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg',
      commingSoon: true,
    },
    {
      id: 'tezos',
      title: 'Coming Soon',
      subtitle: '',
      // prize: '$15,000 USD', // Kept for consistency, but won't display if prize is empty
      // date: 'Feb 10, 2025', // Removed for "Coming Soon"
      status: 'Coming Soon',
      description: '',
      tags: ['Tezos', 'Sustainability', 'Smart Contracts'],
      color: 'from-accent to-red-400',
      poster: 'https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg',
      commingSoon: true,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
  };

  const handleViewDetails = (eventId) => {
    router.push(`/event/${eventId}`);
  };

  return (
    <section id="events" className="section-padding bg-background-secondary">
      <div className="container-custom px-4 sm:px-6 lg:px-8"> {/* Added responsive padding */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sora font-bold mb-4"> {/* Adjusted font sizes */}
            Featured <span className="gradient-text">Events</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto"> {/* Adjusted font sizes */}
            Join our hackathons and competitions to build, learn, and win amazing prizes.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mb-8 px-4 sm:px-0"> {/* Adjusted padding for buttons */}
            <button
              onClick={prevSlide}
              className="p-2 sm:p-3 bg-background-card border border-border rounded-lg hover:bg-background-secondary transition-colors"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-foreground-muted" /> {/* Adjusted icon size */}
            </button>

            <div className="flex space-x-2">
              {events.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-primary' : 'bg-border'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2 sm:p-3 bg-background-card border border-border rounded-lg hover:bg-background-secondary transition-colors"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-foreground-muted" /> {/* Adjusted icon size */}
            </button>
          </div>

          {/* Event Cards */}
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {events.map((event, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2 sm:px-4"> {/* Adjusted horizontal padding for cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> {/* Changed to 1 column on small, 3 on md */}
                    {/* Main Event Card */}
                    <div className="md:col-span-2">
                      <div className={`card bg-gradient-to-r ${event.color} p-0 text-white relative overflow-hidden`}>
                        {/* Event Poster */}
                        <div className="relative h-40 sm:h-48 mb-6"> {/* Adjusted height */}
                          <Image
                            src={event.poster}
                            alt={`${event.title} poster`}
                            fill
                            className="object-cover"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-t ${event.color} opacity-60`}></div>
                          {/* {event.prize && ( // Conditionally render prize
                            <div className="absolute top-4 right-4 flex items-center space-x-2">
                              <Trophy className="w-4 h-4 sm:w-5 sm:h-5" />
                              <span className="font-bold text-sm sm:text-base">{event.prize}</span>
                            </div>
                          )} */}
                          {event.date && ( // Conditionally render date
                            <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                              <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                              <span className="text-xs sm:text-sm">{event.date}</span>
                            </div>
                          )}
                        </div>

                        <div className="px-4 pb-4 sm:px-8 sm:pb-8"> {/* Adjusted padding */}
                          {/* Background Pattern */}
                          <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-full transform translate-x-1/4 -translate-y-1/4"></div>
                            <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full transform -translate-x-1/4 translate-y-1/4"></div>
                          </div>

                          <div className="relative z-10">
                            <h3 className="text-2xl sm:text-3xl font-sora font-bold mb-2">{event.title}</h3> {/* Adjusted font sizes */}
                            <p className="text-base sm:text-lg mb-4 opacity-90">{event.subtitle}</p> {/* Adjusted font sizes */}
                            <p className="text-sm sm:text-base mb-6 opacity-80">{event.description}</p> {/* Adjusted font sizes */}

                            <div className="flex flex-wrap gap-2 mb-6">
                              {event.tags.map((tag, tagIndex) => (
                                <span
                                  key={tagIndex}
                                  className="px-2 py-1 bg-white/20 rounded-full text-xs sm:text-sm" // Adjusted font size and padding
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            {
                              event.commingSoon ? (
                                <div className="text-lg font-semibold text-white">
                                  Stay tuned for more updates!
                                </div>
                              ) : (
                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4"> {/* Stack buttons on small screens */}
                                  <button className="bg-white text-gray-900 px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors text-sm sm:text-base">
                                    <Link href='https://lu.ma/1o4evfqc?tk=gJnPp5' target="_blank" rel="noopener noreferrer"> {/* Added target and rel for external link */}
                                      Register
                                    </Link>
                                  </button>
                                  <button
                                    onClick={() => handleViewDetails(event.id)}
                                    className="border border-white/30 px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-medium hover:bg-white/10 transition-colors flex items-center justify-center space-x-2 text-sm sm:text-base"
                                  >
                                    <span>View Details</span>
                                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                                  </button>
                                </div>
                              )
                            }
                          </div>

                        </div>
                      </div>
                    </div>

                    {/* Side Info */}
                    <div className="space-y-4 sm:space-y-6"> {/* Adjusted vertical spacing */}
                      <div className="card">
                        <h4 className="font-sora font-bold text-base sm:text-lg mb-3">Event Details</h4> {/* Adjusted font size */}
                        <div className="space-y-2 sm:space-y-3"> {/* Adjusted vertical spacing */}
                          <div className="flex justify-between text-sm sm:text-base"> {/* Adjusted font size */}
                            <span className="text-foreground-muted">Status</span>
                            <span className="text-secondary font-medium">{event.status}</span>
                          </div>
                          {event.prize && ( // Conditionally render prize
                            <div className="flex justify-between text-sm sm:text-base">
                              <span className="text-foreground-muted">Prize Pool</span>
                              <span className="text-white font-bold">{event.prize}</span>
                            </div>
                          )}
                          {event.date && ( // Conditionally render date
                            <div className="flex justify-between text-sm sm:text-base">
                              <span className="text-foreground-muted">Date</span>
                              <span className="text-white">{event.date}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="card">
                        <h4 className="font-sora font-bold text-base sm:text-lg mb-3">Requirements</h4> {/* Adjusted font size */}

                        <ul className="space-y-2 text-foreground-muted text-xs sm:text-sm"> {/* Adjusted font size and spacing */}
                          <li>No Requirements</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}