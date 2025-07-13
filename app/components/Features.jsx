
// "use client";

// import { motion } from "framer-motion";
// import { Zap, BookOpen, Smartphone } from "lucide-react";

// export default function Features() {
//   const features = [
//     {
//       icon: <Zap className="w-8 h-8" />,
//       title: "Collaborate Fast",
//       description:
//         "Post ideas, find teammates, and start building portfolio‑worthy projects in minutes.",
//       color: "text-primary",
//       bgColor: "bg-primary/10",
//       borderColor: "border-primary/20",
//     },
//     {
//       icon: <BookOpen className="w-8 h-8" />,
//       title: "Events & Opportunities",
//       description:
//         "Access exclusive hackathons, workshops, and curated internships to boost your career.",
//       color: "text-secondary",
//       bgColor: "bg-secondary/10",
//       borderColor: "border-secondary/20",
//     },
//     {
//       icon: <Smartphone className="w-8 h-8" />,
//       title: "Mentor‑Backed Growth",
//       description:
//         "Get guidance from industry mentors and peers—support that scales with you, wherever you are.",
//       color: "text-accent",
//       bgColor: "bg-accent/10",
//       borderColor: "border-accent/20",
//     },
//   ];

//   return (
//     <section id="features" className="section-padding">
//       <div className="container-custom">
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-4xl md:text-5xl font-sora font-bold mb-4">
//             Why Choose <span className="gradient-text">DevSphere</span>?
//           </h2>
//           <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
//             Your launchpad for hackathons, events, internships, and real‑world collaboration.
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               className={`card ${feature.bgColor} ${feature.borderColor} group cursor-pointer`}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               viewport={{ once: true }}
//               whileHover={{ scale: 1.05 }}
//             >
//               <div className={`${feature.color} mb-4`}>{feature.icon}</div>
//               <h3 className="text-2xl font-sora font-bold mb-4 text-white">
//                 {feature.title}
//               </h3>
//               <p className="text-foreground-muted leading-relaxed">
//                 {feature.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
'use client';

import { motion } from 'framer-motion';
import { Zap, BookOpen, Smartphone } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Zap size={48} strokeWidth={1.5} />, // Increased size and reduced stroke for a sleek look
      title: 'Collaborate Fast',
      description:
        'Share ideas, find like-minded teammates, and launch real projects—in minutes, not months. Empowering your journey with seamless connections.',
    },
    {
      icon: <BookOpen size={48} strokeWidth={1.5} />,
      title: 'Events & Opportunities',
      description:
        'Unlock exclusive hackathons, workshops, and curated internships—crafted to boost your tech journey and expand your horizons.',
    },
    {
      icon: <Smartphone size={48} strokeWidth={1.5} />,
      title: 'Mentor-Backed Growth',
      description:
        'Learn directly from experienced mentors and peers—grow with support that adapts to your pace, accelerating your skills development.',
    },
  ];

  return (
    <section id="features" className="relative section-padding overflow-hidden bg-background-dark">
      {/* Abstract Background Elements for Futuristic feel */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container-custom relative z-10"> {/* Ensure content is above background */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sora font-bold mb-4 leading-tight">
            Why Choose <span className="gradient-text">DevSphereIndia</span>?
          </h2>
          <p className="text-lg md:text-xl text-foreground-muted max-w-3xl mx-auto">
            Your ultimate launchpad for innovation, collaboration, and unparalleled growth in the tech ecosystem.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative p-8 rounded-xl border border-border/30 bg-background-card/50 backdrop-blur-sm shadow-xl
                         group cursor-pointer overflow-hidden transition-all duration-300 ease-in-out
                         hover:border-primary-light hover:shadow-primary-glow"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
            >
              {/* Icon with glowing effect - adjusted for subtlety */}
              <div className="text-primary mb-6 relative w-fit">
                {feature.icon}
                <span className="absolute inset-0 -m-2 bg-primary blur-sm opacity-40 group-hover:opacity-70 transition-opacity duration-300"></span> {/* Reduced blur and opacity */}
              </div>
              <h3 className="text-2xl font-sora font-bold mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-foreground-muted leading-relaxed text-base">
                {feature.description}
              </p>

              {/* Subtle overlay for active state/hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tailwind CSS keyframes for blob animation (add this to your global CSS or a dedicated styles file) */}
      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite cubic-bezier(0.6, 0.01, 0.5, 0.99);
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        /* Custom glow for hover */
        .hover\\:shadow-primary-glow {
          box-shadow: 0 0 15px rgba(var(--primary-rgb), 0.5), 0 0 30px rgba(var(--primary-rgb), 0.3);
        }
        /* Assuming you have these custom CSS variables or equivalent in Tailwind config */
        :root {
          --primary-rgb: 99, 102, 241; /* Example for indigo-500, adjust as per your theme */
        }
      `}</style>
    </section>
  );
}