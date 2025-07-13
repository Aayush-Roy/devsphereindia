// 'use client';

// import { motion } from 'framer-motion';
// import { BookOpen, Zap, Code, Target } from 'lucide-react';

// export default function AboutSection() {
//   return (
//     <section id="about" className="section-padding bg-background-secondary">
//       <div className="container-custom">
//         <motion.div
//           className="max-w-6xl mx-auto"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <div className="text-center mb-12">
//             <h2 className="text-4xl md:text-5xl font-sora font-bold mb-6">
//               Don't waste your time <span className="gradient-text">reading the docs</span>
//             </h2>
            
//             <p className="text-xl text-foreground-muted mb-8">
//               New, update the code to print something meaningful to the console. 
//               You can see the output in the terminal below. Try adding some logic 
//               to make it more interesting.
//             </p>
            
//             <div className="text-2xl font-sora font-bold text-primary mb-12">
//               Devs on DevSphere learn up to <span className="text-accent">100x faster</span>
//             </div>
//           </div>
          
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Traditional Learning */}
//             <motion.div
//               className="bg-background-card border border-border rounded-xl p-8"
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               viewport={{ once: true }}
//             >
//               <div className="flex items-center mb-6">
//                 <BookOpen className="w-8 h-8 text-foreground-muted mr-3" />
//                 <h3 className="text-2xl font-sora font-bold text-foreground-muted">Traditional Learning</h3>
//               </div>
//               <ul className="space-y-4">
//                 <li className="flex items-start space-x-3">
//                   <div className="w-2 h-2 bg-foreground-muted rounded-full mt-2 flex-shrink-0"></div>
//                   <span className="text-foreground-muted">Read lengthy documentation for hours</span>
//                 </li>
//                 <li className="flex items-start space-x-3">
//                   <div className="w-2 h-2 bg-foreground-muted rounded-full mt-2 flex-shrink-0"></div>
//                   <span className="text-foreground-muted">Watch endless video tutorials</span>
//                 </li>
//                 <li className="flex items-start space-x-3">
//                   <div className="w-2 h-2 bg-foreground-muted rounded-full mt-2 flex-shrink-0"></div>
//                   <span className="text-foreground-muted">Struggle with complex environment setup</span>
//                 </li>
//                 <li className="flex items-start space-x-3">
//                   <div className="w-2 h-2 bg-foreground-muted rounded-full mt-2 flex-shrink-0"></div>
//                   <span className="text-foreground-muted">Learn theory without practical application</span>
//                 </li>
//                 <li className="flex items-start space-x-3">
//                   <div className="w-2 h-2 bg-foreground-muted rounded-full mt-2 flex-shrink-0"></div>
//                   <span className="text-foreground-muted">Get stuck on outdated examples</span>
//                 </li>
//               </ul>
//             </motion.div>
            
//             {/* EasyA Approach */}
//             <motion.div
//               className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-xl p-8"
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               viewport={{ once: true }}
//             >
//               <div className="flex items-center mb-6">
//                 <Zap className="w-8 h-8 text-primary mr-3" />
//                 <h3 className="text-2xl font-sora font-bold text-primary">EasyA Approach</h3>
//               </div>
//               <ul className="space-y-4">
//                 <li className="flex items-start space-x-3">
//                   <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
//                   <span className="text-white">Interactive, bite-sized lessons that stick</span>
//                 </li>
//                 <li className="flex items-start space-x-3">
//                   <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
//                   <span className="text-white">Hands-on coding from day one</span>
//                 </li>
//                 <li className="flex items-start space-x-3">
//                   <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
//                   <span className="text-white">Zero setup required - start immediately</span>
//                 </li>
//                 <li className="flex items-start space-x-3">
//                   <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
//                   <span className="text-white">Build real projects that matter</span>
//                 </li>
//                 <li className="flex items-start space-x-3">
//                   <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
//                   <span className="text-white">Learn from industry experts and peers</span>
//                 </li>
//               </ul>
//             </motion.div>
//           </div>

//           {/* Stats */}
//           <motion.div
//             className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <div className="text-center">
//               <div className="text-3xl font-bold text-primary mb-2">100x</div>
//               <div className="text-foreground-muted">Faster Learning</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-secondary mb-2">95%</div>
//               <div className="text-foreground-muted">Completion Rate</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-accent mb-2">24/7</div>
//               <div className="text-foreground-muted">Support</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-primary mb-2">50K+</div>
//               <div className="text-foreground-muted">Developers</div>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
'use client';

import { motion } from 'framer-motion';
import { BookOpen, Zap } from 'lucide-react';
// Import additional icons if needed for the new list items, e.g.,
// import { Users, Award, Briefcase, Network, Lightbulb } from 'lucide-react';


export default function AboutSection() {
  // Animation variants for staggered appearance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1 // Stagger children by 0.1 seconds
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section id="about" className="section-padding bg-background-secondary relative overflow-hidden">
      {/* Subtle background gradient/shape for visual interest */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-full h-full bg-gradient-to-br from-primary/5 to-transparent blur-3xl rounded-full translate-x-1/4 -translate-y-1/4"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }} // Trigger earlier
        >
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sora font-bold mb-4 leading-tight">
              Stop just scrolling, <span className="gradient-text">start collaborating</span>
            </h2>

            <p className="text-lg md:text-xl text-foreground-muted max-w-3xl mx-auto mb-8">
              DevSphere empowers students and early professionals to build impactful projects, excel in hackathons, join exclusive events, and secure internships—all within a vibrant, supportive tech community.
            </p>

            {/* Emphasized call to action/subtitle */}
            <h3 className="text-xl md:text-2xl font-sora font-bold text-primary mb-12 md:mb-16">
              Level up your skills <span className="text-accent">with real-world experience</span>
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-stretch"> {/* Use items-stretch for equal height cards */}
            {/* Traditional Learning - Slightly desaturated/less vibrant */}
            <motion.div
              className="bg-background-card border border-border rounded-xl p-8 shadow-lg
                         flex flex-col justify-between" // Ensure content pushes to ends
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div>
                <div className="flex items-center mb-6">
                  <BookOpen className="w-9 h-9 text-foreground-muted mr-4 opacity-70" /> {/* Larger, slightly muted icon */}
                  <h3 className="text-3xl font-sora font-bold text-foreground-muted">The Old Way</h3>
                </div>
                <motion.ul
                  className="space-y-4"
                  variants={containerVariants} // Apply container variants
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.li className="flex items-start space-x-3 text-foreground-muted" variants={itemVariants}>
                    <div className="w-2 h-2 bg-foreground-muted rounded-full mt-2.5 flex-shrink-0"></div>
                    <span>Only theory, lacking hands-on project experience</span>
                  </motion.li>
                  <motion.li className="flex items-start space-x-3 text-foreground-muted" variants={itemVariants}>
                    <div className="w-2 h-2 bg-foreground-muted rounded-full mt-2.5 flex-shrink-0"></div>
                    <span>Limited to no networking and community engagement</span>
                  </motion.li>
                  <motion.li className="flex items-start space-x-3 text-foreground-muted" variants={itemVariants}>
                    <div className="w-2 h-2 bg-foreground-muted rounded-full mt-2.5 flex-shrink-0"></div>
                    <span>Outdated learning resources and scattered information</span>
                  </motion.li>
                  <motion.li className="flex items-start space-x-3 text-foreground-muted" variants={itemVariants}>
                    <div className="w-2 h-2 bg-foreground-muted rounded-full mt-2.5 flex-shrink-0"></div>
                    <span>Unclear career paths with minimal job or internship support</span>
                  </motion.li>
                </motion.ul>
              </div>
            </motion.div>

            {/* DevSphere Approach - Vibrant, active, with subtle glow */}
            <motion.div
              className="bg-gradient-to-br from-primary/15 to-secondary/10 border border-primary/30 rounded-xl p-8 shadow-xl
                         flex flex-col justify-between relative overflow-hidden" // Added relative/overflow for pseudo-element glow
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Subtle inner glow effect */}
              <div className="absolute inset-0 z-0 rounded-xl pointer-events-none opacity-50
                          bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>

              <div className="relative z-10"> {/* Ensure content is above glow */}
                <div className="flex items-center mb-6">
                  <Zap className="w-9 h-9 text-primary mr-4" /> {/* Larger, vibrant icon */}
                  <h3 className="text-3xl font-sora font-bold text-primary">The DevSphere Way</h3>
                </div>
                <motion.ul
                  className="space-y-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.li className="flex items-start space-x-3 text-white" variants={itemVariants}>
                    <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                    <span>Hands-on collaboration on real hackathons and projects</span>
                  </motion.li>
                  <motion.li className="flex items-start space-x-3 text-white" variants={itemVariants}>
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2.5 flex-shrink-0"></div>
                    <span>Direct mentorship from industry experts and experienced peers</span>
                  </motion.li>
                  <motion.li className="flex items-start space-x-3 text-white" variants={itemVariants}>
                    <div className="w-2 h-2 bg-accent rounded-full mt-2.5 flex-shrink-0"></div>
                    <span>Exclusive access to verified internships and job opportunities</span>
                  </motion.li>
                  <motion.li className="flex items-start space-x-3 text-white" variants={itemVariants}>
                    <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                    <span>Expand your professional network and build personal brand</span>
                  </motion.li>
                  <motion.li className="flex items-start space-x-3 text-white" variants={itemVariants}>
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2.5 flex-shrink-0"></div>
                    <span>Learn continuously in a vibrant, supportive, and active community</span>
                  </motion.li>
                </motion.ul>
              </div>
            </motion.div>
          </div>

          {/* If you want to re-introduce stats later, this is a good place. */}
          {/* <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">350+</div>
              <div className="text-foreground-muted">Queries Solved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">50+</div>
              <div className="text-foreground-muted">Collaborations Formed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">1k+</div>
              <div className="text-foreground-muted">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-foreground-muted">Community Driven</div>
            </div>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
}