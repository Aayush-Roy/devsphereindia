// 'use client';

// import { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';
// import { useRouter } from 'next/navigation';
// import { motion } from 'framer-motion';
// import Image from 'next/image';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const router = useRouter();

//   // Effect to handle scroll for navbar background
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Effect to close mobile menu on route change
//   useEffect(() => {
//     const handleRouteChange = () => {
//       setIsOpen(false); // Close menu on navigation
//     };
//     router.events?.on('routeChangeComplete', handleRouteChange); // Listen for route changes if using Next.js 12 router
//     // For Next.js 13+ app router, you might not have router.events directly.
//     // If router.events is undefined, this part will be skipped, which is fine
//     // as you're already closing the menu on `handleNavClick`.
//     return () => {
//       router.events?.off('routeChangeComplete', handleRouteChange);
//     };
//   }, [router]);


//   const navLinks = [
//     { name: 'Home', href: '#home', isSection: true },
//     { name: 'Learn', href: '#features', isSection: true },
//     { name: 'Events', href: '#events', isSection: true },
//     // { name: 'Challenges', href: '#challenges', isSection: true },
//     { name: 'About', href: '#about', isSection: true },
//     { name: 'Contact', href: '/contact', isSection: false },
//   ];

//   const handleNavClick = (link) => {
//     // If the current path is not the root ('/') and it's a section link,
//     // navigate to '/' first with the hash.
//     if (link.isSection && window.location.pathname !== '/') {
//       router.push(`/${link.href}`);
//     } else if (link.isSection) {
//       // If already on the root and it's a section link, just scroll.
//       scrollToSection(link.href);
//     } else {
//       // For non-section links, navigate directly.
//       router.push(link.href);
//     }
//     setIsOpen(false); // Always close menu after clicking a link
//   };

//   const scrollToSection = (href) => {
//     const element = document.querySelector(href);
//     if (element) {
//       // Use scrollIntoView with optional offset if you have a fixed header
//       const headerOffset = document.querySelector('nav').offsetHeight; // Get height of navbar
//       const elementPosition = element.getBoundingClientRect().top + window.scrollY;
//       window.scrollTo({
//         top: elementPosition - headerOffset - 20, // Adjust by navbar height + some extra padding
//         behavior: 'smooth'
//       });
//     }
//   };

//   const handleLogoClick = () => {
//     router.push('/');
//     setIsOpen(false); // Close mobile menu if open
//   };

//   return (
//     <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//       scrolled ? 'glassmorphism shadow-lg' : 'bg-transparent'
//     }`}>
//       {/* Increased horizontal padding for the container */}
//       <div className="container-custom px-4 sm:px-6 lg:px-8"> 
//         <div className="flex items-center justify-between py-3 sm:py-4"> {/* Adjusted vertical padding */}
//           {/* Logo */}
//           <button 
//             onClick={handleLogoClick}
//             className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
//           >
//             <div className="relative w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg flex-shrink-0"> {/* Adjusted logo size */}
//               <Image
//                 src="/assets/devspherelogo.png"
//                 alt="DevSphereIndia Logo"
//                 fill
//                 style={{ objectFit: "contain" }}
//                 priority
//               />
//             </div>
//             {/* Adjusted font size for brand name */}
//             <span className="text-lg sm:text-xl md:text-2xl font-sora font-bold text-white whitespace-nowrap">DevSphereIndia</span>
//           </button>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-4 lg:space-x-8"> {/* Adjusted spacing */}
//             {navLinks.map((link) => (
//               <button
//                 key={link.name}
//                 onClick={() => handleNavClick(link)}
//                 className="text-foreground-muted hover:text-primary transition-colors duration-200 font-medium text-sm lg:text-base" // Adjusted font size
//               >
//                 {link.name}
//               </button>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-white p-2" // Added padding to the button itself
//             onClick={() => setIsOpen(!isOpen)}
//             aria-label={isOpen ? "Close menu" : "Open menu"}
//           >
//             {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {/* Added motion for smooth entry/exit (optional, but good for UX) */}
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.2 }}
//             className="md:hidden glassmorphism mt-2 sm:mt-4 rounded-lg p-3 sm:p-4 absolute left-0 right-0 mx-4 sm:mx-6 lg:mx-8 z-40" // Adjusted positioning and padding
//           >
//             <div className="flex flex-col space-y-3 sm:space-y-4"> {/* Adjusted vertical spacing */}
//               {navLinks.map((link) => (
//                 <button
//                   key={link.name}
//                   onClick={() => handleNavClick(link)}
//                   className="text-foreground-muted hover:text-primary transition-colors duration-200 font-medium text-base sm:text-lg text-left py-2" // Adjusted font size and added vertical padding for touch
//                 >
//                   {link.name}
//                 </button>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </nav>
//   );
// }
'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // Initialize scrolled based on an assumption for faster initial render
  // If you want it always transparent initially, keep `false`.
  // If you want it to appear scrolled if the user loads below the threshold,
  // you'd need a more complex hydration strategy or server-side scroll detection (not common for navbar).
  // For most cases, `false` is fine as the JS will quickly update it.
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  // Effect to handle scroll for navbar background
  useEffect(() => {
    // Only add scroll listener if window exists (client-side)
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };
      // Immediately check scroll position on mount
      handleScroll();
      window.addEventListener('scroll', handleScroll, { passive: true }); // Use passive listener for performance
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Effect to close mobile menu on route change
  // Note: For Next.js 13+ App Router, `router.events` is deprecated/removed.
  // The `handleNavClick` already closes the menu, which is usually sufficient.
  // Keeping this for compatibility if you're mixing with Pages Router or older App Router versions.
  useEffect(() => {
    const handleRouteChangeComplete = () => {
      setIsOpen(false);
    };
    // Check if router.events exists before subscribing (Next.js 13+ app router)
    if (router && router.events) {
      router.events.on('routeChangeComplete', handleRouteChangeComplete);
      return () => {
        router.events.off('routeChangeComplete', handleRouteChangeComplete);
      };
    }
  }, [router]);

  const navLinks = [
    { name: 'Home', href: '#home', isSection: true },
    { name: 'Learn', href: '#features', isSection: true },
    { name: 'Events', href: '#events', isSection: true },
    // { name: 'Challenges', href: '#challenges', isSection: true },
    { name: 'About', href: '#about', isSection: true },
    { name: 'Contact', href: '/contact', isSection: false },
  ];

  const handleNavClick = (link) => {
    if (link.isSection) {
      // If navigating to a section, ensure we are on the homepage first
      // and then scroll. This prevents navigating from, say, /events to #about directly
      // without being on the root.
      if (window.location.pathname !== '/') {
        router.push(`/${link.href}`); // Navigate to root and then scroll
      } else {
        scrollToSection(link.href); // Already on root, just scroll
      }
    } else {
      router.push(link.href); // For non-section links, navigate directly
    }
    setIsOpen(false); // Always close menu after clicking a link
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const navElement = document.querySelector('nav');
      const headerOffset = navElement ? navElement.offsetHeight : 0; // Safely get height
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - headerOffset - 20, // Adjust by navbar height + some extra padding
        behavior: 'smooth'
      });
    }
  };

  const handleLogoClick = () => {
    router.push('/');
    setIsOpen(false); // Close mobile menu if open
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glassmorphism shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 sm:py-4">
          <button
            onClick={handleLogoClick}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <div className="relative w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg flex-shrink-0">
              <Image
                src="/assets/devspherelogo.png"
                alt="DevSphereIndia Logo"
                fill
                style={{ objectFit: "contain" }}
                priority // Keep priority for critical image
                sizes="(max-width: 768px) 28px, (max-width: 1024px) 36px, 40px" // Add sizes for better performance
              />
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-sora font-bold text-white whitespace-nowrap">DevSphereIndia</span>
          </button>

          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link)}
                className="text-foreground-muted hover:text-primary transition-colors duration-200 font-medium text-sm lg:text-base"
              >
                {link.name}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden glassmorphism mt-2 sm:mt-4 rounded-lg p-3 sm:p-4 absolute left-0 right-0 mx-4 sm:mx-6 lg:mx-8 z-40"
          >
            <div className="flex flex-col space-y-3 sm:space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link)}
                  className="text-foreground-muted hover:text-primary transition-colors duration-200 font-medium text-base sm:text-lg text-left py-2"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}