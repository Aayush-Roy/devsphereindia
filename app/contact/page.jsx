'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle } from 'lucide-react';
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
    //   icon: <MapPin className="w-6 h-6" />,
    //   title: 'Visit Us',
    //   description: 'Come visit our headquarters in San Francisco',
    //   contact: '123 Tech Street, SF, CA 94105',
    //   color: 'text-accent',
    //   bgColor: 'bg-accent/10',
    //   borderColor: 'border-accent/20',
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
  //   question: 'How do I join DevSphereIndia?',
  //   answer:
  //     'Create a free account at devsphere.in (or sign up in our mobile app) and hop into our Discord. You’ll instantly see upcoming hackathons, events, and project channels.',
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
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-12 h-12 bg-gradient-to-r from-secondary to-accent rounded-lg opacity-20 animate-float-delayed"></div>
        
        <div className="container-custom relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-sora font-bold mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-foreground-muted mb-8 max-w-2xl mx-auto">
              Have questions about DevSphereIndia? Want to partner with us? We'd love to hear from you. 
              Our team is here to help you on your journey.
            </p>
            
            <div className="flex items-center justify-center space-x-6 text-foreground-muted">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-primary" />
                <span>24h Response Time</span>
              </div>
              <div className="w-px h-4 bg-border"></div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-5 h-5 text-secondary" />
                <span>Live Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      {/* <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className={`card ${info.bgColor} ${info.borderColor} text-center group cursor-pointer`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`${info.color} mb-4 flex justify-center`}>
                  {info.icon}
                </div>
                <h3 className="text-xl font-sora font-bold text-white mb-3">
                  {info.title}
                </h3>
                <p className="text-foreground-muted mb-4 text-sm">
                  {info.description}
                </p>
                <div className={`${info.color} font-medium`}>
                  {info.contact}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="section-padding bg-background-secondary">
  <div className="container-custom">
    {/* flexbox wrapper, now centered */}
    <div className="flex flex-col md:flex-row flex-wrap gap-8 mb-16
                justify-center items-center">
      {contactInfo.map((info, index) => (
        <motion.div
          key={index}
          className={`w-full md:w-1/3 card ${info.bgColor} ${info.borderColor}
                     text-center group cursor-pointer`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <div className={`${info.color} mb-4 flex justify-center`}>
            {info.icon}
          </div>
          <h3 className="text-xl font-sora font-bold text-white mb-3">
            {info.title}
          </h3>
          <p className="text-foreground-muted mb-4 text-sm">
            {info.description}
          </p>
          <div className={`${info.color} font-medium`}>{info.contact}</div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Contact Form & FAQ */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-sora font-bold text-white mb-6">
                Send us a Message
              </h2>
              <p className="text-foreground-muted mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-4">
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
                      className="w-full px-4 py-3 bg-background-card border border-border rounded-lg text-white placeholder-foreground-muted focus:border-primary focus:outline-none transition-colors"
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
                      className="w-full px-4 py-3 bg-background-card border border-border rounded-lg text-white placeholder-foreground-muted focus:border-primary focus:outline-none transition-colors"
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
                    className="w-full px-4 py-3 bg-background-card border border-border rounded-lg text-white focus:border-primary focus:outline-none transition-colors"
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
                    className="w-full px-4 py-3 bg-background-card border border-border rounded-lg text-white placeholder-foreground-muted focus:border-primary focus:outline-none transition-colors"
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
                    className="w-full px-4 py-3 bg-background-card border border-border rounded-lg text-white placeholder-foreground-muted focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full py-4 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 ${
                    isSubmitted
                      ? 'bg-secondary text-white'
                      : isSubmitting
                      ? 'bg-primary/50 text-white cursor-not-allowed'
                      : 'bg-primary hover:bg-primary-light text-white hover:shadow-lg hover:shadow-primary/25'
                  }`}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Message Sent!</span>
                    </>
                  ) : isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
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

            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-sora font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-foreground-muted mb-8">
                Quick answers to common questions about EasyA.
              </p>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    className="bg-background-card border border-border rounded-lg p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-lg font-sora font-bold text-white mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-foreground-muted leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Additional Help */}
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

      {/* Office Locations */}
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