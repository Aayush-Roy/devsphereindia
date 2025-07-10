// 'use client';

// import { motion } from 'framer-motion';
// import { useParams, useRouter } from 'next/navigation';
// import { ArrowLeft, Calendar, Trophy, Users, MapPin, Clock, ExternalLink, Share2, Heart } from 'lucide-react';
// import Image from 'next/image';

// // Event data - in a real app, this would come from an API
// const events = {
//   'immutablex': {
//     id: 'immutablex',
//     title: 'ImmutableX x EasyA',
//     subtitle: 'Build on ImmutableX',
//     prize: '$10,000 USD',
//     date: 'Dec 15, 2024',
//     endDate: 'Dec 22, 2024',
//     location: 'Online',
//     status: 'Registration Open',
//     participants: 1250,
//     maxParticipants: 2000,
//     description: 'Build the next generation of NFT games and applications on ImmutableX. This hackathon focuses on creating innovative gaming experiences that leverage the power of NFTs and blockchain technology.',
//     longDescription: `Join us for an exciting week-long hackathon where you'll build cutting-edge NFT games and applications on the ImmutableX platform. This event is perfect for developers who want to explore the intersection of gaming and blockchain technology.

// You'll have access to:
// • ImmutableX SDK and documentation
// • Mentorship from ImmutableX team members
// • Workshops on NFT game development
// • Networking opportunities with industry leaders

// Whether you're a seasoned blockchain developer or new to Web3, this hackathon offers something for everyone. Build innovative solutions, learn from experts, and compete for amazing prizes!`,
//     tags: ['Gaming', 'NFTs', 'ImmutableX'],
//     color: 'from-primary to-primary-light',
//     poster: 'https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg',
//     requirements: [
//       'Basic knowledge of JavaScript/TypeScript',
//       'Understanding of blockchain concepts',
//       'Team of 1-4 members',
//       'Original project submission'
//     ],
//     prizes: [
//       { place: '1st Place', amount: '$5,000', description: 'Best overall project' },
//       { place: '2nd Place', amount: '$3,000', description: 'Most innovative solution' },
//       { place: '3rd Place', amount: '$2,000', description: 'Best technical implementation' }
//     ],
//     schedule: [
//       { time: 'Dec 15, 9:00 AM', event: 'Registration Opens & Kickoff' },
//       { time: 'Dec 15, 10:00 AM', event: 'ImmutableX Workshop' },
//       { time: 'Dec 18, 2:00 PM', event: 'Mid-hackathon Check-in' },
//       { time: 'Dec 22, 6:00 PM', event: 'Submission Deadline' },
//       { time: 'Dec 22, 8:00 PM', event: 'Judging & Awards Ceremony' }
//     ],
//     organizers: ['ImmutableX', 'EasyA'],
//     sponsors: ['Polygon', 'Chainlink', 'The Graph']
//   },
//   'harvard': {
//     id: 'harvard',
//     title: 'Harvard Blockchain x EasyA Hackathon',
//     subtitle: 'Build the Future',
//     prize: '$25,000 USD',
//     date: 'Jan 20, 2025',
//     endDate: 'Jan 27, 2025',
//     location: 'Harvard University, Cambridge, MA',
//     status: 'Coming Soon',
//     participants: 890,
//     maxParticipants: 1500,
//     description: 'Join Harvard students in building revolutionary blockchain solutions that can change the world.',
//     longDescription: `Partner with Harvard University for this prestigious blockchain hackathon. Work alongside some of the brightest minds in academia and industry to build solutions that address real-world problems.

// This hybrid event combines the best of in-person collaboration with global remote participation. You'll have access to Harvard's resources, world-class mentors, and a network of innovators.

// Focus areas include:
// • DeFi and financial inclusion
// • Sustainable blockchain solutions
// • Healthcare and blockchain
// • Education technology`,
//     tags: ['DeFi', 'Harvard', 'Innovation'],
//     color: 'from-secondary to-secondary-light',
//     poster: 'https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg',
//     requirements: [
//       'University student or recent graduate',
//       'Strong programming background',
//       'Interest in blockchain technology',
//       'Team of 2-5 members'
//     ],
//     prizes: [
//       { place: '1st Place', amount: '$15,000', description: 'Grand prize winner' },
//       { place: '2nd Place', amount: '$7,000', description: 'Runner-up' },
//       { place: '3rd Place', amount: '$3,000', description: 'Third place' }
//     ],
//     schedule: [
//       { time: 'Jan 20, 8:00 AM', event: 'Registration & Breakfast' },
//       { time: 'Jan 20, 9:00 AM', event: 'Opening Ceremony' },
//       { time: 'Jan 23, 3:00 PM', event: 'Mentor Office Hours' },
//       { time: 'Jan 27, 5:00 PM', event: 'Final Presentations' },
//       { time: 'Jan 27, 7:00 PM', event: 'Awards & Networking' }
//     ],
//     organizers: ['Harvard Blockchain', 'EasyA'],
//     sponsors: ['Ethereum Foundation', 'Consensys', 'Coinbase']
//   },
//   'tezos': {
//     id: 'tezos',
//     title: 'Tezos x EasyA',
//     subtitle: 'Smart Contracts',
//     prize: '$15,000 USD',
//     date: 'Feb 10, 2025',
//     endDate: 'Feb 17, 2025',
//     location: 'Online',
//     status: 'View Details',
//     participants: 750,
//     maxParticipants: 1200,
//     description: 'Develop sustainable smart contracts on the Tezos blockchain with a focus on environmental responsibility.',
//     longDescription: `Explore the world of sustainable blockchain development with Tezos. This hackathon emphasizes building environmentally conscious smart contracts and dApps that showcase the energy-efficient nature of the Tezos blockchain.

// Key themes:
// • Sustainable DeFi protocols
// • Carbon credit marketplaces
// • Green NFT platforms
// • Energy-efficient dApps

// Learn about Tezos' proof-of-stake consensus mechanism and how it enables sustainable blockchain applications. Work with experienced mentors from the Tezos ecosystem to build impactful solutions.`,
//     tags: ['Tezos', 'Sustainability', 'Smart Contracts'],
//     color: 'from-accent to-red-400',
//     poster: 'https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg',
//     requirements: [
//       'Experience with smart contract development',
//       'Interest in sustainability',
//       'Knowledge of functional programming (preferred)',
//       'Team of 1-3 members'
//     ],
//     prizes: [
//       { place: '1st Place', amount: '$8,000', description: 'Most sustainable solution' },
//       { place: '2nd Place', amount: '$4,500', description: 'Best technical innovation' },
//       { place: '3rd Place', amount: '$2,500', description: 'Community choice award' }
//     ],
//     schedule: [
//       { time: 'Feb 10, 10:00 AM', event: 'Kickoff & Tezos Workshop' },
//       { time: 'Feb 12, 2:00 PM', event: 'Sustainability Panel' },
//       { time: 'Feb 15, 4:00 PM', event: 'Technical Q&A Session' },
//       { time: 'Feb 17, 6:00 PM', event: 'Demo Day' },
//       { time: 'Feb 17, 8:00 PM', event: 'Winner Announcement' }
//     ],
//     organizers: ['Tezos Foundation', 'EasyA'],
//     sponsors: ['Nomadic Labs', 'TQ Tezos', 'Baking Bad']
//   }
// };

// // Required for static export with dynamic routes
// export async function generateStaticParams() {
//   return Object.keys(events).map((eventId) => ({
//     id: eventId,
//   }));
// }

// export default function EventDetail() {
//   const params = useParams();
//   const router = useRouter();
//   const eventId = params.id;

//   const event = events[eventId];

//   if (!event) {
//     return (
//       <div className="min-h-screen bg-background flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-2xl font-bold text-white mb-4">Event Not Found</h1>
//           <button 
//             onClick={() => router.push('/')}
//             className="btn-primary"
//           >
//             Back to Home
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-background">
//       {/* Header */}
//       <div className="bg-background-secondary border-b border-border">
//         <div className="container-custom py-6">
//           <button
//             onClick={() => router.back()}
//             className="flex items-center space-x-2 text-foreground-muted hover:text-primary transition-colors mb-4"
//           >
//             <ArrowLeft className="w-5 h-5" />
//             <span>Back to Events</span>
//           </button>
//         </div>
//       </div>

//       {/* Hero Section */}
//       <section className="relative overflow-hidden">
//         <div className={`absolute inset-0 bg-gradient-to-r ${event.color} opacity-10`}></div>
//         <div className="container-custom py-16 relative z-10">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Event Info */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <div className="flex items-center space-x-4 mb-6">
//                 <span className={`px-4 py-2 bg-gradient-to-r ${event.color} text-white rounded-full font-medium`}>
//                   {event.status}
//                 </span>
//                 <div className="flex items-center space-x-2 text-foreground-muted">
//                   <Users className="w-4 h-4" />
//                   <span>{event.participants}/{event.maxParticipants} participants</span>
//                 </div>
//               </div>

//               <h1 className="text-4xl md:text-5xl font-sora font-bold text-white mb-4">
//                 {event.title}
//               </h1>
//               <p className="text-xl text-foreground-muted mb-6">
//                 {event.subtitle}
//               </p>

//               <div className="grid grid-cols-2 gap-6 mb-8">
//                 <div className="flex items-center space-x-3">
//                   <Trophy className="w-6 h-6 text-accent" />
//                   <div>
//                     <div className="text-sm text-foreground-muted">Prize Pool</div>
//                     <div className="text-xl font-bold text-white">{event.prize}</div>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <Calendar className="w-6 h-6 text-primary" />
//                   <div>
//                     <div className="text-sm text-foreground-muted">Duration</div>
//                     <div className="text-lg font-medium text-white">{event.date} - {event.endDate}</div>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <MapPin className="w-6 h-6 text-secondary" />
//                   <div>
//                     <div className="text-sm text-foreground-muted">Location</div>
//                     <div className="text-lg font-medium text-white">{event.location}</div>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <Clock className="w-6 h-6 text-accent" />
//                   <div>
//                     <div className="text-sm text-foreground-muted">Registration</div>
//                     <div className="text-lg font-medium text-white">Open Now</div>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex gap-4">
//                 <button className="btn-primary flex items-center space-x-2">
//                   <span>Register Now</span>
//                   <ExternalLink className="w-4 h-4" />
//                 </button>
//                 <button className="btn-outline flex items-center space-x-2">
//                   <Share2 className="w-4 h-4" />
//                   <span>Share</span>
//                 </button>
//                 <button className="p-3 border border-border rounded-lg hover:bg-background-secondary transition-colors">
//                   <Heart className="w-5 h-5 text-foreground-muted" />
//                 </button>
//               </div>
//             </motion.div>

//             {/* Event Poster */}
//             <motion.div
//               className="relative"
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               <div className="relative w-full h-96 rounded-2xl overflow-hidden">
//                 <Image
//                   src={event.poster}
//                   alt={`${event.title} poster`}
//                   fill
//                   className="object-cover"
//                 />
//                 <div className={`absolute inset-0 bg-gradient-to-t ${event.color} opacity-20`}></div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Content Sections */}
//       <div className="container-custom py-16">
//         <div className="grid lg:grid-cols-3 gap-12">
//           {/* Main Content */}
//           <div className="lg:col-span-2 space-y-12">
//             {/* Description */}
//             <motion.section
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//             >
//               <h2 className="text-3xl font-sora font-bold text-white mb-6">About This Event</h2>
//               <div className="prose prose-invert max-w-none">
//                 <p className="text-foreground-muted leading-relaxed mb-6">
//                   {event.description}
//                 </p>
//                 <div className="whitespace-pre-line text-foreground-muted leading-relaxed">
//                   {event.longDescription}
//                 </div>
//               </div>
//             </motion.section>

//             {/* Schedule */}
//             <motion.section
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//             >
//               <h2 className="text-3xl font-sora font-bold text-white mb-6">Event Schedule</h2>
//               <div className="space-y-4">
//                 {event.schedule.map((item, index) => (
//                   <div key={index} className="flex items-start space-x-4 p-4 bg-background-card border border-border rounded-lg">
//                     <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
//                     <div className="flex-1">
//                       <div className="text-primary font-medium">{item.time}</div>
//                       <div className="text-white">{item.event}</div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </motion.section>

//             {/* Prizes */}
//             <motion.section
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.8 }}
//             >
//               <h2 className="text-3xl font-sora font-bold text-white mb-6">Prizes & Awards</h2>
//               <div className="grid md:grid-cols-3 gap-6">
//                 {event.prizes.map((prize, index) => (
//                   <div key={index} className="bg-background-card border border-border rounded-lg p-6 text-center">
//                     <div className="text-2xl font-bold text-accent mb-2">{prize.amount}</div>
//                     <div className="text-lg font-semibold text-white mb-2">{prize.place}</div>
//                     <div className="text-foreground-muted text-sm">{prize.description}</div>
//                   </div>
//                 ))}
//               </div>
//             </motion.section>
//           </div>

//           {/* Sidebar */}
//           <div className="space-y-8">
//             {/* Requirements */}
//             <motion.div
//               className="bg-background-card border border-border rounded-lg p-6"
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//             >
//               <h3 className="text-xl font-sora font-bold text-white mb-4">Requirements</h3>
//               <ul className="space-y-3">
//                 {event.requirements.map((req, index) => (
//                   <li key={index} className="flex items-start space-x-2">
//                     <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
//                     <span className="text-foreground-muted text-sm">{req}</span>
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>

//             {/* Tags */}
//             <motion.div
//               className="bg-background-card border border-border rounded-lg p-6"
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//             >
//               <h3 className="text-xl font-sora font-bold text-white mb-4">Technologies</h3>
//               <div className="flex flex-wrap gap-2">
//                 {event.tags.map((tag, index) => (
//                   <span
//                     key={index}
//                     className="px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded-full text-sm"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Organizers */}
//             <motion.div
//               className="bg-background-card border border-border rounded-lg p-6"
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.8 }}
//             >
//               <h3 className="text-xl font-sora font-bold text-white mb-4">Organizers</h3>
//               <div className="space-y-2">
//                 {event.organizers.map((org, index) => (
//                   <div key={index} className="text-foreground-muted">{org}</div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Sponsors */}
//             <motion.div
//               className="bg-background-card border border-border rounded-lg p-6"
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 1 }}
//             >
//               <h3 className="text-xl font-sora font-bold text-white mb-4">Sponsors</h3>
//               <div className="space-y-2">
//                 {event.sponsors.map((sponsor, index) => (
//                   <div key={index} className="text-foreground-muted">{sponsor}</div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import EventDetailClient from './EventDetailClient';
// import events from '@/data/events'; // or wherever your events object is
import {events} from '@/app/helpers/eventsData.js';

export async function generateStaticParams() {
  return Object.keys(events).map((id) => ({ id }));
}

export default function EventPage({ params }) {
  const event = events[params.id];
  return <EventDetailClient event={event} />;
}
