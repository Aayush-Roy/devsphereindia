'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';
export default function Testimonials() {
  const testimonials = [
  {
    name: 'Aman',
    role: 'Frontend Developer',
    quote:
      "Devsphere se judne ke baad mujhe hackathons, internships, aur open-source ke baare me kaafi kuch seekhne ko mila. Pehli baar kisi project me contribute kiya aur naye logo se connect hua.",
    rating: 5,
    imgSrc: '/assets/amancrop.jpg'
  },
  {
    name: 'Harsh Solanki',
    role: 'UI/UX Designer',
    quote:
      "Ye community ne meri learning ka style hi badal diya. Ab mai sirf YouTube videos nahi dekhta — real logon ke saath projects, events aur collabs me kaam karta hoon. Best decision ever!",
    rating: 5,
    imgSrc: '/assets/harshcrop.jpg'
  },
  {
    name: 'Kavya',
    role: 'Data Analyst',
    quote:
      "Joining Devsphere gave me exposure to real-world data problems and tools beyond classroom theory. I collaborated with others, worked on meaningful datasets, and grew more confident in my skills.",
    rating: 5,
    imgSrc: '/assets/kavyat.jpg' // update with correct path if needed
  },
  {
    name: 'Hemant',
    role: 'Graphic Designer',
    quote:
      "I never thought a community could help me grow creatively. At Devsphere, I got to design for actual events and campaigns — it really helped me build a strong portfolio and meet inspiring creators.",
    rating: 5,
    imgSrc: '/assets/hemantcrop.jpg' // update with correct path if needed
  },
];


  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-sora font-bold mb-4">
            What Our <span className="gradient-text">Community</span> Says
          </h2>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
            Real stories from learners who joined Devsphere and started exploring hackathons, open-source, and more.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="card relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary/20">
                <Quote className="w-12 h-12" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg text-foreground-muted mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src={testimonial.imgSrc}
                  height={100}
                  width={100}
                  alt="Profile"
                  className="rounded-full w-full h-full object-cover"
                />
              </div>

                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-foreground-muted">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
