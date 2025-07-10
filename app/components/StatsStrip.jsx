'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function StatsStrip() {
  const [counters, setCounters] = useState({
    queries: 0,
    members: 0,
    projects: 0,
    collabs: 0,
  });

  const finalStats = {
    queries: 350,
    members: 1200,
    projects: 1200,
    collabs: 50,
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 50;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setCounters(prev => ({
        queries: Math.min(prev.queries + Math.ceil(finalStats.queries / steps), finalStats.queries),
        members: Math.min(prev.members + Math.ceil(finalStats.members / steps), finalStats.members),
        projects: Math.min(prev.projects + Math.ceil(finalStats.projects / steps), finalStats.projects),
        collabs: Math.min(prev.collabs + Math.ceil(finalStats.collabs / steps), finalStats.collabs),
      }));
    }, interval);

    const cleanup = setTimeout(() => {
      clearInterval(timer);
    }, duration);

    return () => {
      clearInterval(timer);
      clearTimeout(cleanup);
    };
  }, []);

  const stats = [
    {
      value: `${counters.queries}+`,
      label: 'Queries Solved',
      color: 'text-primary',
    },
    {
      value: `${(counters.members / 1000).toFixed(0)}K+`,
      label: 'Active members',
      color: 'text-secondary',
    },
    {
      value: `100%`,
      label: 'Community Driven',
      color: 'text-accent',
    },
    {
      value: `${counters.collabs}+`,
      label: 'collabs',
      color: 'text-primary',
    },
  ];

  return (
    // <section className="py-16 bg-background-secondary">
    //   <div className="container-custom max-w-7xl mx-auto px-4">
    //     <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
    //       {stats.map((stat, index) => (
    //         <motion.div
    //           key={index}
    //           className="flex flex-col items-center text-center"
    //           initial={{ opacity: 0, y: 20 }}
    //           whileInView={{ opacity: 1, y: 0 }}
    //           transition={{ duration: 0.6, delay: index * 0.1 }}
    //           viewport={{ once: true }}
    //         >
    //           <div className={`text-3xl md:text-4xl font-bold font-sora ${stat.color} mb-2`}>
    //             {stat.value}
    //           </div>
    //           <div className="text-foreground-muted font-medium">
    //             {stat.label}
    //           </div>
    //         </motion.div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
    <section className="py-16 bg-background-secondary">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-center text-center">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <div className={`text-3xl md:text-4xl font-bold font-sora ${stat.color} mb-2`}>
            {stat.value}
          </div>
          <div className="text-foreground-muted font-medium">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

  );
}