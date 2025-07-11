'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      // Added pt-24 for mobile/tablet to push content below a potential navbar
      // On large screens (lg), we remove the padding-top as content is side-by-side
      className="relative min-h-[90vh] pt-24 lg:pt-0 flex items-center justify-center overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background-secondary to-background pointer-events-none"></div>

      {/* Floating Tokens (background decorations) */}
      {/* Using responsive sizing + positions to prevent horizontal overflow on very small screens */}
      <motion.div
        className="absolute top-16 left-4 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-primary to-secondary rounded-xl opacity-20 animate-float pointer-events-none"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      />
      <motion.div
        className="absolute top-36 right-4 sm:right-20 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-secondary to-accent rounded-full opacity-20 animate-float-delayed pointer-events-none"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 2, delay: 1 }}
      />
      <motion.div
        className="absolute bottom-32 left-4 sm:left-20 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-accent to-primary rounded-lg opacity-20 animate-float pointer-events-none"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
      />

      {/* Main Content Container - Added responsive padding */}
      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8"> 
        <div className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16 items-center"> {/* Adjusted gap for responsiveness */}
          {/* Left Content */}
          <div className="text-center lg:text-left"> {/* Removed px-4 sm:px-0 as container-custom handles it */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sora font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Hack. Build. Rise{' '}
              <span className="gradient-text">Welcome to Devsphere</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-foreground-muted mb-8 max-w-md sm:max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Your launchpad for hackathons, internships, and student collabs.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button className="btn-primary flex items-center justify-center space-x-2 text-base sm:text-lg px-6 py-3"> {/* Added responsive text and padding */}
                <Play className="w-5 h-5" />
                <span>Get Started</span>
              </button>
              <button className="btn-outline flex items-center justify-center space-x-2 text-base sm:text-lg px-6 py-3"> {/* Added responsive text and padding */}
                <ArrowRight className="w-5 h-5" />
                <span>Learn More</span>
              </button>
            </motion.div>
          </div>

          {/* Right Content - 3D Tokens */}
          <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0"> {/* Added responsive top margin */}
            <motion.div
              className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              {/* Main Token */}
              <div className="absolute w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-r from-primary to-secondary rounded-2xl transform rotate-12 glow animate-pulse-slow"></div>

              {/* Secondary Tokens */}
              <div className="absolute top-6 -right-4 w-14 h-14 sm:top-8 sm:-right-6 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-secondary to-accent rounded-full transform -rotate-12 glow-secondary animate-float"></div> {/* Adjusted positioning for smaller screens */}
              <div className="absolute -bottom-4 -left-4 w-12 h-12 sm:-bottom-6 sm:-left-6 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-accent to-primary rounded-lg transform rotate-45 opacity-80 animate-float-delayed"></div> {/* Adjusted positioning for smaller screens */}

              {/* Center Logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-hero rounded-xl flex items-center justify-center shadow-2xl">
                  <span className="text-white font-bold text-lg sm:text-xl lg:text-2xl">DS</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}