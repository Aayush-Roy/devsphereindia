// 'use client';

// import { motion } from 'framer-motion';
// import Image from 'next/image';

// export default function Showcase() {
//   return (
//     <section className="section-padding bg-background-secondary">
//       <div className="container-custom">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-4xl md:text-5xl font-sora font-bold mb-6">
//               Sky's the limit, and{' '}
//               <span className="gradient-text">we mean it</span>
//             </h2>
//             <p className="text-xl text-foreground-muted mb-8 leading-relaxed">
//               Our students have been building killer dApps and landing incredible jobs at top Web3 companies. Join thousands of developers who've transformed their careers with EasyA.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4">
//               <button className="btn-primary">
//                 Start Learning
//               </button>
//               <button className="btn-outline">
//                 View Success Stories
//               </button>
//             </div>
//           </motion.div>

//           {/* Right Image */}
//           <motion.div
//             className="relative"
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <div className="relative w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl overflow-hidden">
//               {/* Placeholder for developer image */}
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="w-48 h-64 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-xl flex items-center justify-center">
//                   <div className="text-center">
//                     <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 glow-secondary"></div>
//                     <p className="text-sm text-foreground-muted">Developer with</p>
//                     <p className="text-sm text-foreground-muted">Glowing Phone</p>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Glowing effect */}
//               <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 animate-pulse-slow"></div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
'use client';

import { motion } from 'framer-motion';
import  Link  from 'next/link';
import Image from 'next/image';
export default function Showcase() {
  return (
    <section className="section-padding bg-background-secondary">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-sora font-bold mb-6">
              Sky's the limit with{' '}
              <span className="gradient-text">DevSphereIndia</span>
            </h2>
            <p className="text-xl text-foreground-muted mb-8 leading-relaxed">
              Join thousands of students building innovative projects, winning hackathons, and landing internships at top companies through DevSphere’s vibrant community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                Explore Events
              </button>
              <button className="btn-outline">
                <Link href="https://chat.whatsapp.com/HFiNqV56Mbc0MHL6GIHd3H?mode=r_t">Join Our Community</Link>
                
              </button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl overflow-hidden">
              {/* Placeholder for community image */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* <img src="https://i.pinimg.com/736x/64/af/d1/64afd1f6178eff73b29569f846bf7d78.jpg" alt="" /> */}
                <Image width={600} height={600} src="/assets/notsjs.jpg"/>
                {/* <div className="w-48 h-64 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 glow-secondary"></div>
                    <p className="text-sm text-foreground-muted">DevSphereIndia</p>
                    <p className="text-sm text-foreground-muted">Community & Collaboration</p>
                  </div>
                </div> */}
              </div>

              {/* Glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 animate-pulse-slow"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
