"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2, ArrowRight } from "lucide-react";
import Button from "./Button";

export default function Form() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    let valid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  // Stagger variants for content columns
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="contact" className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Side: Text and Contact details */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-5 flex flex-col space-y-8"
        >
          <div className="space-y-4">
            <motion.span 
              variants={itemVariants}
              className="text-sm font-bold tracking-wider text-brand-primary uppercase block"
            >
              Get In Touch
            </motion.span>
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-semibold text-black leading-tight tracking-tight"
            >
              Let's build something real.
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-neutral-600 text-base md:text-lg leading-relaxed max-w-md font-normal"
            >
              Let's turn your ideas into meaningful products that solve real problems and create real impact.
            </motion.p>
          </div>

          {/* Quick contact list */}
          <motion.div variants={itemVariants} className="space-y-4 pt-4 border-t border-neutral-200/50">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-neutral-400 font-semibold uppercase tracking-wider">Email Me</p>
                <a href="mailto:rupeshjagtap157@gmail.com" className="text-sm sm:text-base text-black font-semibold hover:text-brand-primary transition-colors">
                  rupeshjagtap157@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-neutral-400 font-semibold uppercase tracking-wider">Location</p>
                <p className="text-sm sm:text-base text-black font-semibold">
                  Pune, India
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Animated Card Form */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 w-full bg-white rounded-3xl border border-neutral-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] p-8 md:p-10 relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="contact-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold text-black mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Input */}
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="name" className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                      Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full bg-neutral-50/50 border ${
                          errors.name ? "border-red-500 focus:border-red-500 focus:ring-red-100" : "border-neutral-200/80 focus:border-brand-primary focus:ring-brand-primary/10"
                        } rounded-xl px-4 py-3.5 text-sm text-neutral-800 placeholder-neutral-400 outline-none focus:ring-4 transition-all duration-200`}
                        disabled={isLoading}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-xs text-red-500 font-medium mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="email" className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`w-full bg-neutral-50/50 border ${
                          errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-100" : "border-neutral-200/80 focus:border-brand-primary focus:ring-brand-primary/10"
                        } rounded-xl px-4 py-3.5 text-sm text-neutral-800 placeholder-neutral-400 outline-none focus:ring-4 transition-all duration-200`}
                        disabled={isLoading}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-xs text-red-500 font-medium mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Message Input */}
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="message" className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                      Your Message
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can I help you build something great?"
                        rows={4}
                        className={`w-full bg-neutral-50/50 border ${
                          errors.message ? "border-red-500 focus:border-red-500 focus:ring-red-100" : "border-neutral-200/80 focus:border-brand-primary focus:ring-brand-primary/10"
                        } rounded-xl px-4 py-3.5 text-sm text-neutral-800 placeholder-neutral-400 outline-none focus:ring-4 transition-all duration-200 resize-none`}
                        disabled={isLoading}
                      />
                    </div>
                    {errors.message && (
                      <p className="text-xs text-red-500 font-medium mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full flex items-center justify-center gap-2 group/btn relative overflow-hidden py-3.5"
                    >
                      {isLoading ? (
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                          <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                          <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                        </div>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success-message"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center text-center py-10"
              >
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-green-500 mb-6 shadow-sm border border-green-100">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-2">Message Sent!</h3>
                <p className="text-neutral-500 text-sm max-w-sm mb-8 leading-relaxed">
                  Thank you for reaching out. I've received your request and will get back to you within 24 hours. Let's make something amazing!
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  className="inline-flex items-center gap-2 text-xs py-2 px-5 rounded-xl border-neutral-200 text-neutral-700 hover:bg-neutral-50 hover:text-black hover:border-neutral-300"
                >
                  <span>Send another message</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}