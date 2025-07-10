'use client';

import { Twitter, Linkedin, Github, Instagram, MessageCircle, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';
// import logo from '/logo.png';
export default function Footer() {
  const socialLinks = [
    // { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, href: '#' },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/company/devsphereindia-community/posts/?feedView=all' },
     { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, href: 'https://www.instagram.com/devsphereindia/' },
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, href: 'https://github.com/Aayush-Roy' },
    // { name: 'Discord', icon: <MessageCircle className="w-5 h-5" />, href: '#' },
  ];

  const footerLinks = [
    {
      title: 'Learn',
      links: [
        { name: 'Courses', href: '#' },
        { name: 'Tutorials', href: '#' },
        { name: 'Documentation', href: '#' },
        { name: 'Community', href: '#' },
      ]
    },
    // {
    //   title: 'Challenges',
    //   links: [
    //     { name: 'Active Challenges', href: '#' },
    //     { name: 'Leaderboard', href: '#' },
    //     { name: 'Past Winners', href: '#' },
    //     { name: 'Submit Challenge', href: '#' },
    //   ]
    // },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Partners', href: '#' },
        { name: 'Contact', href: '#' },
      ]
    },
    // {
    //   title: 'Legal',
    //   links: [
    //     { name: 'Privacy Policy', href: '#' },
    //     { name: 'Terms of Service', href: '#' },
    //     { name: 'Cookie Policy', href: '#' },
    //     { name: 'Support', href: '#' },
    //   ]
    // },
  ];

  return (
    <footer className="bg-background-secondary border-t border-border">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-6 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-11 h-11 rounded-lg flex items-center justify-center">
              <Image src="/assets/devspherelogo.png" height={500} width={500} alt="Logo" />

              </div>
              <span className="text-2xl font-sora font-bold text-white">DevSphereIndia</span>
            </div>
            <p className="text-foreground-muted mb-6 leading-relaxed">
              Your launchpad for hackathons, internships, and student collabs.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center space-x-2 text-foreground-muted">
                <Mail className="w-4 h-4" />
                <span className="text-sm">devsphereindia25@gmail.com</span>
              </div>
              
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground-muted hover:text-primary transition-colors duration-200 p-2 hover:bg-background-card rounded-lg"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-sora font-bold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-foreground-muted hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground-muted text-sm mb-4 md:mb-0">
              © 2025 DevSphereIndia. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-foreground-muted hover:text-primary transition-colors text-sm">
                Status
              </a>
              <a href="#" className="text-foreground-muted hover:text-primary transition-colors text-sm">
                API
              </a>
              <a href="#" className="text-foreground-muted hover:text-primary transition-colors text-sm">
                Changelog
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}