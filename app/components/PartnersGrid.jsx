'use client';

import { motion } from 'framer-motion';

export default function PartnersGrid() {
  const partners = [
   
    { name: 'Genesis', logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQHlzpkxhXCkwQ/img-crop_100/B4DZd8GqqxGYAM-/0/1750133813680?e=1757548800&v=beta&t=yNboNm_ho2dRej_T4TF9H0IcdZk65gWoqU89lXZlESA' },
 { name: 'Physics Wallah', logo: 'https://i.pinimg.com/736x/21/20/e9/2120e90de87c898a11c1be79bc372277.jpg' },
    // { name: 'Solana', logo: '/solana-logo.svg' },
    // { name: 'BNB Chain', logo: '/bnb-logo.svg' },
    // { name: 'Immutable', logo: '/immutable-logo.svg' },
    // { name: 'Tezos', logo: '/tezos-logo.svg' },
    // { name: 'Polkadot', logo: '/polkadot-logo.svg' },
    // { name: 'Klaytn', logo: '/klaytn-logo.svg' },
  ];

  return (
    <section className="section-padding bg-background-secondary">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-sora font-bold mb-4">
            Our <span className="gradient-text">Partners</span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
            Trusted by leading blockchain networks and organizations worldwide.
          </p>
        </motion.div>

        <div className="flex justify-center gap-8 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-background-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/10">
                <div className="w-32 h-32 mx-auto bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center group-hover:from-primary/40 group-hover:to-secondary/40 transition-all duration-300">
                  <span className="text-white font-bold text-lg">
                    {/* {partner.name.substring(0, 2).toUpperCase()} */}
                    <img  className='rounded w-full' src={`${partner.logo}`} alt="" />
                  </span>
                </div>
                <div className="text-center mt-4">
                  <h3 className="font-semibold text-white group-hover:text-primary transition-colors">
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
          <p className="text-foreground-muted mb-6">
            Want to partner with us? Let's build the future of Web3 education together.
          </p>
          <button className="btn-outline">
            Become a Partner
          </button>
        </motion.div>
      </div>
    </section>
  );
}