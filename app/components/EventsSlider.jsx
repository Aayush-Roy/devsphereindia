'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Calendar, Trophy,  Link as LinkIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function EventsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  // const events = [
  //   {
  //     id: 'immutablex',
  //     title: 'Careerverse 2025',
  //     subtitle: 'Careerverse 2025',
  //     prize: '$10,000 USD',
  //     date: 'July 19, 2025',
  //     status: 'Registration Open',
  //     description: 'Build the next generation of NFT games and applications on ImmutableX.',
  //     tags: ['Web3', 'Resume Building', 'AI'],
  //     color: 'from-primary to-primary-light',
  //     poster: 'https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg',
  //   },
  //   {
  //     id: 'harvard',
  //     title: 'Harvard Blockchain x EasyA Hackathon',
  //     subtitle: 'Build the Future',
  //     prize: '$25,000 USD',
  //     date: 'Jan 20, 2025',
  //     status: 'Coming Soon',
  //     description: 'Join Harvard students in building revolutionary blockchain solutions.',
  //     tags: ['DeFi', 'Harvard', 'Innovation'],
  //     color: 'from-secondary to-secondary-light',
  //     poster: 'https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg',
  //   },
  //   {
  //     id: 'tezos',
  //     title: 'Tezos x EasyA',
  //     subtitle: 'Smart Contracts',
  //     prize: '$15,000 USD',
  //     date: 'Feb 10, 2025',
  //     status: 'View Details',
  //     description: 'Develop sustainable smart contracts on the Tezos blockchain.',
  //     tags: ['Tezos', 'Sustainability', 'Smart Contracts'],
  //     color: 'from-accent to-red-400',
  //     poster: 'https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg',
  //   },
  // ];
  const events = [
  {
    id: 'immutablex',
    title: 'Careerverse 2025',
    subtitle: 'Careerverse 2025',
    prize: '$10,000 USD',
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
    // prize: '$25,000 USD',
    // date: 'Jan 20, 2025',
    status: 'Coming Soon',
    description: '',
    tags: ['DeFi', 'Harvard', 'Innovation'],
    color: 'from-secondary to-secondary-light',
    poster: 'https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg',
    commingSoon:true,
  },
  {
    id: 'tezos',
    title: 'Coming Soon',
    subtitle: '',
    prize: '$15,000 USD',
    // date: 'Feb 10, 2025',
    status: 'Coming Soon',
    description: '',
    tags: ['Tezos', 'Sustainability', 'Smart Contracts'],
    color: 'from-accent to-red-400',
    poster: 'https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg',
    commingSoon:true,
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
      <div className="container-custom">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-sora font-bold mb-4">
            Featured <span className="gradient-text">Events</span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
            Join our hackathons and competitions to build, learn, and win amazing prizes.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={prevSlide}
              className="p-3 bg-background-card border border-border rounded-lg hover:bg-background-secondary transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-foreground-muted" />
            </button>
            
            <div className="flex space-x-2">
              {events.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-primary' : 'bg-border'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 bg-background-card border border-border rounded-lg hover:bg-background-secondary transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-foreground-muted" />
            </button>
          </div>

          {/* Event Cards */}
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {events.map((event, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Main Event Card */}
                    <div className="md:col-span-2">
                      <div className={`card bg-gradient-to-r ${event.color} p-0 text-white relative overflow-hidden`}>
                        {/* Event Poster */}
                        <div className="relative h-48 mb-6">
                          <Image
                            src={event.poster}
                            alt={`${event.title} poster`}
                            fill
                            className="object-cover"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-t ${event.color} opacity-60`}></div>
                          <div className="absolute top-4 right-4 flex items-center space-x-2">
                            <Trophy className="w-5 h-5" />
                            {/* <span className="font-bold">{event.prize}</span> */}
                          </div>
                          <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{event.date}</span>
                          </div>
                        </div>

                        <div className="px-8 pb-8">
                          {/* Background Pattern */}
                          <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full transform translate-x-16 -translate-y-16"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full transform -translate-x-12 translate-y-12"></div>
                          </div>
                          
                          <div className="relative z-10">
                            <h3 className="text-3xl font-sora font-bold mb-2">{event.title}</h3>
                            <p className="text-lg mb-4 opacity-90">{event.subtitle}</p>
                            <p className="mb-6 opacity-80">{event.description}</p>
                            
                            <div className="flex flex-wrap gap-2 mb-6">
                              {event.tags.map((tag, tagIndex) => (
                                <span
                                  key={tagIndex}
                                  className="px-3 py-1 bg-white/20 rounded-full text-sm"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            {
                              event.commingSoon ? "" :
                            
                            <div className="flex gap-4">
                              <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                                <Link href='https://lu.ma/1o4evfqc?tk=gJnPp5'>
                                Register
                                </Link>
                              </button>
                              <button 
                                onClick={() => handleViewDetails(event.id)}
                                className="border border-white/30 px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors flex items-center space-x-2"
                              >
                                <span>View Details</span>
                                <ExternalLink className="w-4 h-4" />
                              </button>
                            </div>
}
                          </div>

                        </div>
                      </div>
                    </div>
                    
                    {/* Side Info */}
                    <div className="space-y-6">
                      <div className="card">
                        <h4 className="font-sora font-bold text-lg mb-3">Event Details</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-foreground-muted">Status</span>
                            <span className="text-secondary font-medium">{event.status}</span>
                          </div>
                          {/* <div className="flex justify-between">
                            <span className="text-foreground-muted">Prize Pool</span>
                            <span className="text-white font-bold">{event.prize}</span>
                          </div> */}
                          <div className="flex justify-between">
                            <span className="text-foreground-muted">Date</span>
                            <span className="text-white">{event.date}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="card">
                        <h4 className="font-sora font-bold text-lg mb-3">Requirements</h4>
                        
                        <ul className="space-y-2 text-foreground-muted text-sm">
                          {/* <li>• DevsphereIndia account required</li>
                          <li>• Basic blockchain knowledge</li>
                          <li>• Team of 1-4 members</li>
                          <li>• Original project submission</li> */}
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