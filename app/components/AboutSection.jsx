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

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-background-secondary">
      <div className="container-custom">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-sora font-bold mb-6">
              Stop just scrolling, <span className="gradient-text">start collaborating</span>
            </h2>
            
            <p className="text-xl text-foreground-muted mb-8">
              DevSphere empowers students and early professionals to build projects, participate in hackathons, join events, and land internships — all while connecting with a thriving Web3 community.
            </p>
            
            <div className="text-2xl font-sora font-bold text-primary mb-12">
              Level up your skills <span className="text-accent">with real-world experience</span>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Traditional Learning */}
            <motion.div
              className="bg-background-card border border-border rounded-xl p-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <BookOpen className="w-8 h-8 text-foreground-muted mr-3" />
                <h3 className="text-2xl font-sora font-bold text-foreground-muted">Old Ways</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-foreground-muted rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-foreground-muted">Only theory without practical projects</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-foreground-muted rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-foreground-muted">Limited networking opportunities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-foreground-muted rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-foreground-muted">Outdated resources and scattered info</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-foreground-muted rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-foreground-muted">No clear path to internships or jobs</span>
                </li>
              </ul>
            </motion.div>
            
            {/* DevSphere Approach */}
            <motion.div
              className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-xl p-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <Zap className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-sora font-bold text-primary">DevSphere Way</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white">Collaborate on real hackathons and projects</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white">Connect with mentors and industry experts</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white">Access verified internships and opportunities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white">Grow your network and personal brand</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-white">Learn and build in a supportive community</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
