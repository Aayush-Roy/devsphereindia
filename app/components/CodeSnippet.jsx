'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Play, Copy } from 'lucide-react';

export default function CodeSnippet() {
  const [progress, setProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 0 : prev + 2));
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const codeSnippet = `/// Ignite your potential with DevSphere!
import { DevSphere } from '@devsphere/sdk';

// Define your dream project
const project = new DevSphere.DreamProject({
  name: 'Innovation Hub',
  vision: 'Empowering builders to turn ideas into reality.',
  initialSpark: 'A single motivated individual',
  communityGoal: 'Connect, learn, and grow together'
});

// Launch your project and inspire others!
await project.ignite();
console.log('Your project is igniting the DevSphere community!');
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-sora font-bold mb-4">
            Ignite Your <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
            Start your journey with DevSphereIndia — where ambition meets opportunity. Build, launch, and grow alongside a powerful student community.
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-background-card border border-border rounded-xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center space-x-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-foreground-muted text-sm">ignite.js</span>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 hover:bg-background-secondary rounded-lg transition-colors">
                  <Play className="w-4 h-4 text-secondary" />
                </button>
                <button 
                  onClick={handleCopy}
                  className="p-2 hover:bg-background-secondary rounded-lg transition-colors"
                >
                  <Copy className="w-4 h-4 text-foreground-muted" />
                </button>
              </div>
            </div>

            {/* Code */}
            <div className="p-6 bg-background font-mono text-sm overflow-x-auto">
              <pre className="text-foreground-muted leading-relaxed whitespace-pre-wrap">
                <span className="text-secondary">// Ignite your potential with DevSphere!</span>{'\n'}
                <span className="text-primary">import</span> <span className="text-white">{'{ DevSphere }'}</span> <span className="text-primary">from</span> <span className="text-accent">'@devsphere/sdk'</span>;
                {'\n\n'}
                <span className="text-primary">const</span> <span className="text-white">project</span> = <span className="text-primary">new</span> <span className="text-white">DevSphere.DreamProject</span>({'{'}
                {'\n'}  <span className="text-white">name:</span> <span className="text-accent">'Innovation Hub'</span>,
                {'\n'}  <span className="text-white">vision:</span> <span className="text-accent">'Empowering builders to turn ideas into reality.'</span>,
                {'\n'}  <span className="text-white">initialSpark:</span> <span className="text-secondary">'A single motivated individual'</span>,
                {'\n'}  <span className="text-white">communityGoal:</span> <span className="text-secondary">'Connect, learn, and grow together'</span>
                {'\n'}{'}'});
                {'\n\n'}
                <span className="text-primary">await</span> <span className="text-white">project.ignite</span>();
                {'\n'}<span className="text-white">console.log</span>(<span className="text-accent">'Your project is igniting the DevSphere community!'</span>);
              </pre>
            </div>

            {/* Progress Bar */}
            <div className="p-4 border-t border-border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-foreground-muted">Ignition Progress</span>
                <span className="text-sm text-secondary font-medium">{progress}%</span>
              </div>
              <div className="w-full bg-background-secondary rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>

          {copied && (
            <div className="text-center mt-4">
              <span className="text-secondary text-sm">Code copied to clipboard!</span>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
