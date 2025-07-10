'use client';

import { motion } from 'framer-motion';
import { Trophy, Users, Clock, Star, Code, Shield, Coins } from 'lucide-react';

export default function ChallengesSection() {
  const challenges = [
    {
      title: 'Smart Contract Security',
      difficulty: 'Advanced',
      participants: 1250,
      timeLimit: '2 weeks',
      reward: '$5,000',
      description: 'Find vulnerabilities in smart contracts and propose solutions. Test your security skills against real-world scenarios.',
      tags: ['Security', 'Solidity', 'Auditing'],
      color: 'from-red-500 to-orange-500',
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: 'DeFi Protocol Design',
      difficulty: 'Intermediate',
      participants: 890,
      timeLimit: '3 weeks',
      reward: '$3,000',
      description: 'Design and implement a novel DeFi protocol with unique features. Innovation and creativity are key.',
      tags: ['DeFi', 'Protocol', 'Innovation'],
      color: 'from-blue-500 to-purple-500',
      icon: <Coins className="w-6 h-6" />,
    },
    {
      title: 'NFT Marketplace',
      difficulty: 'Beginner',
      participants: 2100,
      timeLimit: '1 week',
      reward: '$1,000',
      description: 'Build a fully functional NFT marketplace from scratch. Perfect for getting started with Web3 development.',
      tags: ['NFT', 'Marketplace', 'Frontend'],
      color: 'from-green-500 to-teal-500',
      icon: <Code className="w-6 h-6" />,
    },
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Intermediate':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Advanced':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <section id="challenges" className="section-padding">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-sora font-bold mb-4">
            Take on <span className="gradient-text">Challenges</span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
            Test your skills with real-world Web3 challenges and compete with developers worldwide for amazing prizes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              className="card group cursor-pointer relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Header Gradient */}
              <div className={`h-1 bg-gradient-to-r ${challenge.color} absolute top-0 left-0 right-0`}></div>
              
              {/* Icon and Difficulty */}
              <div className="flex items-center justify-between mb-4 pt-2">
                <div className={`p-3 bg-gradient-to-r ${challenge.color} rounded-lg text-white`}>
                  {challenge.icon}
                </div>
                <span className={`px-3 py-1 border rounded-full text-sm font-medium ${getDifficultyColor(challenge.difficulty)}`}>
                  {challenge.difficulty}
                </span>
              </div>

              {/* Title and Reward */}
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-sora font-bold text-white flex-1">
                  {challenge.title}
                </h3>
                <div className="flex items-center space-x-1 ml-4">
                  <Trophy className="w-4 h-4 text-accent" />
                  <span className="text-accent font-bold text-sm">{challenge.reward}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-foreground-muted mb-6 leading-relaxed text-sm">
                {challenge.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-secondary" />
                  <span className="text-sm text-foreground-muted">{challenge.participants.toLocaleString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm text-foreground-muted">{challenge.timeLimit}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {challenge.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-background-secondary text-foreground-muted text-xs rounded border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <button className="w-full btn-primary group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300">
                Join Challenge
              </button>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
      <motion.div
  className="bg-background-card border border-border rounded-xl p-8 text-center"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.6 }}
  viewport={{ once: true }}
>
  <h3 className="text-2xl font-sora font-bold text-white mb-4">
    Ready to Level Up?
  </h3>
  <p className="text-foreground-muted mb-6 max-w-2xl mx-auto">
    Join thousands of developers in our WhatsApp community.  
    Get instant help, share ideas, and collaborate on Web3 projects.
  </p>
  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <a
      href="https://chat.whatsapp.com/your-community-invite-link"
      target="_blank"
      rel="noopener noreferrer"
      className="btn-primary"
    >
      Join Our WhatsApp Group
    </a>
    <button className="btn-outline">
      View All Challenges
    </button>
  </div>
</motion.div>

      </div>
    </section>
  );
}