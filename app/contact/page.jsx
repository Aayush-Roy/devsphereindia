'use client'; // This component uses client-side interactivity (useState, framer-motion)

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle, ChevronDown } from 'lucide-react'; // Import ChevronDown
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openAccordionIndex, setOpenAccordionIndex] = useState(null); // State for the accordion

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        type: 'general'
      });
    }, 3000);
  };

  // Function to toggle accordion items
  const toggleAccordion = (index) => {
    setOpenAccordionIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      description: 'Send us an email and we\'ll respond within 24 hours',
      contact: 'devsphereindia@gmail.com',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      borderColor: 'border-primary/20',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      description: 'Speak directly with our support team',
      contact: '9716387381',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      borderColor: 'border-secondary/20',
    },
    // {
    //   icon: <MapPin className="w-6 h-6" />,
    //   title: 'Visit Us',
    //   description: 'Come visit our headquarters in San Francisco',
    //   contact: '123 Tech Street, SF, CA 94105',
    //   color: 'text-accent',
    //   bgColor: 'bg-accent/10',
    //   borderColor: 'border-accent/20',
    // },
  ];

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'support', label: 'Technical Support' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'press', label: 'Press & Media' },
    { value: 'careers', label: 'Careers' },
  ];

  const faqs = [
    // {
    //   question: 'How do I join DevSphereIndia?',
    //   answer:
    //     'Create a free account at devsphere.in (or sign up in our mobile app) and hop into our Discord. You’ll instantly see upcoming hackathons, events, and project channels.',
    // },
    {
      question: 'Is DevSphereIndia beginner‑friendly?',
      answer:
        'Absolutely! We run “first‑time builder” tracks, starter tutorials, and pair you with mentors so you can ship your first project—even if HTML/CSS is all you know today.',
    },
    {
      question: 'Do I have to pay to use DevSphereIndia?',
      answer:
        'The core community, hackathon entries, and most workshops are free. We do offer optional Pro subscriptions for 1‑on‑1 mentor hours, premium courses, and early access to job boards.',
    },
    {
      question: 'Can I join hackathons as a newbie developer?',
      answer:
        'Yes! Every DevSphereIndia hackathon includes beginner‑friendly challenges, recommended tech stacks, and live mentor support so you can learn while you build.',
    },
  ];


  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10"></div>

        {/* Floating Elements - Adjusted positions for responsiveness */}
        <div className="absolute top-10 left-5 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-primary to-secondary rounded-xl opacity-20 animate-float"></div>
        <div className="absolute bottom-10 right-5 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-secondary to-accent rounded-lg opacity-20 animate-float-delayed"></div>

        <div className="container-custom relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-sora font-bold mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-base sm:text-xl text-foreground-muted mb-8 max-w-2xl mx-auto">
              Have questions about DevSphereIndia? Want to partner with us? We'd love to hear from you.
              Our team is here to help you on your journey.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 text-foreground-muted text-sm sm:text-base">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                <span>24h Response Time</span>
              </div>
              <div className="w-px h-4 bg-border hidden sm:block"></div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                <span>Live Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-background-secondary px-4 sm:px-6 lg:px-8">
        <div className="container-custom">
          {/* flexbox wrapper, now centered */}
          <div className="flex flex-col md:flex-row flex-wrap gap-6 sm:gap-8 mb-16 justify-center items-center">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className={`w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] card ${info.bgColor} ${info.borderColor}
                           text-center group cursor-pointer p-6 sm:p-8`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`${info.color} mb-4 flex justify-center`}>
                  {info.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-sora font-bold text-white mb-3">
                  {info.title}
                </h3>
                <p className="text-foreground-muted mb-4 text-sm sm:text-base">
                  {info.description}
                </p>
                <div className={`${info.color} font-medium text-sm sm:text-base`}>{info.contact}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Form & FAQ */}
      <section className="section-padding px-4 sm:px-6 lg:px-8">
        <div className="container-custom">
          {/* Responsive grid for form and FAQ */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-sora font-bold text-white mb-4 sm:mb-6">
                Send us a Message
              </h2>
              <p className="text-base sm:text-lg text-foreground-muted mb-6 sm:mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-background-card border border-border rounded-lg text-white placeholder-foreground-muted focus:border-primary focus:outline-none transition-colors text-sm sm:text-base"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-background-card border border-border rounded-lg text-white placeholder-foreground-muted focus:border-primary focus:outline-none transition-colors text-sm sm:text-base"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Inquiry Type */}
                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-white mb-2">
                    Inquiry Type
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-background-card border border-border rounded-lg text-white focus:border-primary focus:outline-none transition-colors text-sm sm:text-base"
                  >
                    {inquiryTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-background-card border border-border rounded-lg text-white placeholder-foreground-muted focus:border-primary focus:outline-none transition-colors text-sm sm:text-base"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-background-card border border-border rounded-lg text-white placeholder-foreground-muted focus:border-primary focus:outline-none transition-colors resize-none text-sm sm:text-base"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full py-3 px-4 sm:py-4 sm:px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 text-base sm:text-lg ${
                    isSubmitted
                      ? 'bg-secondary text-white'
                      : isSubmitting
                        ? 'bg-primary/50 text-white cursor-not-allowed'
                        : 'bg-primary hover:bg-primary-light text-white hover:shadow-lg hover:shadow-primary/25'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* FAQ Section - Accordion created directly here */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-sora font-bold text-white mb-4 sm:mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-base sm:text-lg text-foreground-muted mb-6 sm:mb-8">
                Quick answers to common questions about DevSphereIndia.
              </p>

              {/* Accordion JSX starts here */}
              <div className="space-y-4">
                {faqs.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-background-card border border-border rounded-lg overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <button
                      className="w-full flex justify-between items-center text-left p-4 sm:p-6 cursor-pointer focus:outline-none"
                      onClick={() => toggleAccordion(index)}
                    >
                      <h3 className="text-lg sm:text-xl font-sora font-bold text-white pr-4">
                        {item.question}
                      </h3>
                      <motion.div
                        initial={false}
                        animate={{ rotate: openAccordionIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-5 h-5 text-primary" />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {openAccordionIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="text-foreground-muted leading-relaxed text-base sm:text-lg p-4 sm:p-6 pt-0">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
              {/* Accordion JSX ends here */}

              {/* Additional Help (Commented out) */}
              {/* <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg">
                <h3 className="text-lg font-sora font-bold text-white mb-2">
                  Still have questions?
                </h3>
                <p className="text-foreground-muted mb-4">
                  Join our Discord community for real-time support and discussions with other developers.
                </p>
                <button className="btn-outline">
                  Join Discord
                </button>
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations (Commented out) */}
      {/* <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-sora font-bold text-white mb-4">
              Our <span className="gradient-text">Locations</span>
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              We're a global team with offices around the world, always ready to help you succeed.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                city: 'San Francisco',
                country: 'United States',
                address: '123 Tech Street, SF, CA 94105',
                timezone: 'PST (UTC-8)',
              },
              {
                city: 'London',
                country: 'United Kingdom',
                address: '456 Innovation Ave, London, UK',
                timezone: 'GMT (UTC+0)',
              },
              {
                city: 'Singapore',
                country: 'Singapore',
                address: '789 Blockchain Blvd, Singapore',
                timezone: 'SGT (UTC+8)',
              },
            ].map((location, index) => (
              <motion.div
                key={index}
                className="card text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-sora font-bold text-white mb-2">
                  {location.city}
                </h3>
                <p className="text-foreground-muted mb-3">{location.country}</p>
                <p className="text-sm text-foreground-muted mb-2">{location.address}</p>
                <p className="text-sm text-primary">{location.timezone}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
}