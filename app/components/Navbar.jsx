'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', isSection: true },
    { name: 'Learn', href: '#features', isSection: true },
    { name: 'Events', href: '#events', isSection: true },
    { name: 'Challenges', href: '#challenges', isSection: true },
    { name: 'About', href: '#about', isSection: true },
    { name: 'Contact', href: '/contact', isSection: false },
  ];

  const handleNavClick = (link) => {
    if (link.isSection) {
      // Check if we're on the home page
      if (window.location.pathname === '/') {
        scrollToSection(link.href);
      } else {
        // Navigate to home page with hash
        router.push(`/${link.href}`);
      }
    } else {
      // Navigate to the page
      router.push(link.href);
    }
    setIsOpen(false);
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = () => {
    router.push('/');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glassmorphism shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <button 
            onClick={handleLogoClick}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            {/* <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              <Image src="/assets/devspherelogo.png" width={100} height={50}></Image>
            </div> */}
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex-shrink-0">
    <Image
      src="/assets/devspherelogo.png"
      alt="DevSphereIndia Logo"
      fill
      style={{ objectFit: "contain" }}
      priority
    />
  </div>
            
            <span className="text-xl font-sora font-bold text-white">DevSphereIndia</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link)}
                className="text-foreground-muted hover:text-primary transition-colors duration-200 font-medium"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden glassmorphism mt-4 rounded-lg p-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link)}
                  className="text-foreground-muted hover:text-primary transition-colors duration-200 font-medium text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}