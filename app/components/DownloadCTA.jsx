'use client';

import { motion } from 'framer-motion';
import { Apple, Smartphone, Download } from 'lucide-react';

export default function DownloadCTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-12 h-12 bg-gradient-to-r from-secondary to-accent rounded-lg opacity-20 animate-float-delayed"></div>
      <div className="absolute top-40 right-40 w-8 h-8 bg-gradient-to-r from-accent to-primary rounded-full opacity-20 animate-float"></div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sora font-bold mb-6">
              Download the <span className="gradient-text">App</span>
            </h2>
            <p className="text-xl text-foreground-muted mb-8 max-w-lg mx-auto lg:mx-0">
              Learn and launch your Web3 project fast, right from your phone.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn-primary flex items-center justify-center space-x-2 text-lg px-8 py-4">
                <Apple className="w-6 h-6" />
                <span>App Store</span>
              </button>
              <button className="btn-secondary flex items-center justify-center space-x-2 text-lg px-8 py-4">
                <Smartphone className="w-6 h-6" />
                <span>Google Play</span>
              </button>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start space-x-4">
              <div className="flex items-center space-x-2">
                <Download className="w-5 h-5 text-secondary" />
                <span className="text-foreground-muted">50K+ Downloads</span>
              </div>
              <div className="w-px h-4 bg-border"></div>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-accent rounded-full"></div>
                ))}
                <span className="text-foreground-muted ml-2">4.8 Rating</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - 3D Token Cluster */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-96 flex items-center justify-center">
              {/* Main Token Stack */}
              <div className="relative">
                {/* Bottom Token */}
                <div className="absolute w-40 h-40 bg-gradient-to-r from-primary to-secondary rounded-2xl transform rotate-12 glow opacity-80 animate-float"></div>
                
                {/* Middle Token */}
                <div className="absolute w-32 h-32 bg-gradient-to-r from-secondary to-accent rounded-2xl transform -rotate-6 translate-x-8 -translate-y-4 glow-secondary opacity-90 animate-float-delayed"></div>
                
                {/* Top Token */}
                <div className="absolute w-24 h-24 bg-gradient-to-r from-accent to-primary rounded-2xl transform rotate-45 translate-x-16 -translate-y-8 opacity-100 animate-float"></div>
              </div>
              
              {/* Floating Particles */}
              <div className="absolute top-0 left-0 w-3 h-3 bg-primary rounded-full animate-float opacity-60"></div>
              <div className="absolute top-20 right-0 w-2 h-2 bg-secondary rounded-full animate-float-delayed opacity-60"></div>
              <div className="absolute bottom-0 right-10 w-4 h-4 bg-accent rounded-full animate-float opacity-60"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}