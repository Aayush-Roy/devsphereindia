
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
"use client";

import { motion } from "framer-motion";
import { Zap, BookOpen, Smartphone } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: "🔌",
      title: "Collaborate Fast",
      description:
        "Share ideas, find like-minded teammates, and launch real projects—in minutes, not months.",
    },
    {
      icon: "📚",
      title: "Events & Opportunities",
      description:
        "Unlock exclusive hackathons, workshops, and curated internships—crafted to boost your tech journey.",
    },
    {
      icon: "📱",
      title: "Mentor-Backed Growth",
      description:
        "Learn directly from experienced mentors and peers—grow with support that adapts to your pace.",
    },
  ];

  return (
    <section id="features" className="section-padding">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-sora font-bold mb-4">
            Why Choose <span className="gradient-text">DevSphereIndia</span>?
          </h2>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
            Your launchpad for hackathons, events, internships, and real‑world collaboration.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="card bg-muted border border-border/20 group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-sora font-bold mb-4 text-white">
                {feature.title}
              </h3>
              <p className="text-foreground-muted leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
