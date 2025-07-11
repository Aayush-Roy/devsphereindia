'use client';

import { motion } from 'framer-motion';
import Image from 'next/image'; // Import Image component

export default function PartnersGrid() {
  const partners = [
    { name: 'Genesis', logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQHlzpkxhXCkwQ/img-crop_100/B4DZd8GqqxGYAM-/0/1750133813680?e=1757548800&v=beta&t=yNboNm_ho2dRej_T4TF9H0IcdZk65gWoqU89lXZlESA' },
    { name: 'Physics Wallah', logo: 'https://i.pinimg.com/736x/21/20/e9/2120e90de87c898a11c1be79bc372277.jpg' },
    // Add more partners here to see the grid in action, e.g.:
    // { name: 'Solana', logo: 'https://placehold.co/128x128/000000/FFFFFF?text=SOL' },
    // { name: 'BNB Chain', logo: 'https://placehold.co/128x128/000000/FFFFFF?text=BNB' },
    // { name: 'Immutable', logo: 'https://placehold.co/128x128/000000/FFFFFF?text=IMM' },
    // { name: 'Tezos', logo: 'https://placehold.co/128x128/000000/FFFFFF?text=TEZ' },
    // { name: 'Polkadot', logo: 'https://placehold.co/128x128/000000/FFFFFF?text=DOT' },
    // { name: 'Klaytn', logo: 'https://placehold.co/128x128/000000/FFFFFF?text=KLA' },
  ];

  return (
    <section className="section-padding bg-background-secondary">
      <div className="container-custom px-4 sm:px-6 lg:px-8"> {/* Added responsive padding */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sora font-bold mb-4"> {/* Adjusted font sizes */}
            Our <span className="gradient-text">Partners</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto"> {/* Adjusted font sizes */}
            Trusted by leading blockchain networks and organizations worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto justify-items-center"> {/* Responsive grid */}
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer w-full max-w-[160px] sm:max-w-[180px] md:max-w-[200px]" // Max width for each card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-background-card border border-border rounded-xl p-4 sm:p-6 hover:border-primary/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/10 h-full flex flex-col items-center justify-between"> {/* Adjusted padding and added flex for content alignment */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center group-hover:from-primary/40 group-hover:to-secondary/40 transition-all duration-300 overflow-hidden"> {/* Made container relative and responsive */}
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill // Fill the parent div
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Optimize image loading
                    className="object-contain p-2" // Ensures logo fits within the rounded area
                    onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/128x128/000000/FFFFFF?text=${partner.name.substring(0, 2).toUpperCase()}`; }} // Fallback for broken images
                  />
                </div>
                <div className="text-center mt-4">
                  <h3 className="font-semibold text-white group-hover:text-primary transition-colors text-sm sm:text-base md:text-lg"> {/* Adjusted font size */}
                    {partner.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-foreground-muted mb-6 text-sm sm:text-base md:text-lg"> {/* Adjusted font size */}
            Want to partner with us? Let's build the future of Web3 education together.
          </p>
          <button className="btn-outline px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base"> {/* Adjusted button padding and font size */}
            Become a Partner
          </button>
        </motion.div>
      </div>
    </section>
  );
}