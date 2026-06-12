import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Phone } from 'lucide-react';
import { premiumEase } from '../../lib/utils';

// Replace this with your actual Google Apps Script Web App URL
const GOOGLE_SHEETS_SCRIPT_URL = "YOUR_GOOGLE_SCRIPT_URL_HERE";
// Replace this with your actual WhatsApp number with country code (e.g., 1234567890)
const WHATSAPP_NUMBER = "1234567890";

const ContactWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Sending form data to Google Sheets via Apps Script Web App
      const response = await fetch(GOOGLE_SHEETS_SCRIPT_URL, {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        form.reset();
        setTimeout(() => setIsOpen(false), 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Floating Pulsing Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-8 z-50 w-16 h-16 bg-[#CCFF00] rounded-full flex items-center justify-center text-black shadow-[0_0_20px_rgba(204,255,0,0.4)] hover:scale-110 transition-transform duration-300 group"
      >
        <div className="absolute inset-0 rounded-full bg-[#CCFF00] animate-ping opacity-75"></div>
        <MessageSquare size={28} className="relative z-10 group-hover:-rotate-12 transition-transform duration-300" />
      </button>

      {/* Contact Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ ease: premiumEase, duration: 0.5 }}
              className="bg-zinc-950 border border-white/10 rounded-3xl w-full max-w-md overflow-hidden relative"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors"
              >
                <X size={20} />
              </button>

              <div className="p-8 pb-6 border-b border-white/10">
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-2 text-white">Let's Connect</h3>
                <p className="text-gray-400 text-sm">Choose your preferred way to reach out.</p>
              </div>

              <div className="p-8 pt-6">
                {/* WhatsApp Option */}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mb-6 py-4 px-6 bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-black border border-[#25D366]/30 rounded-xl flex items-center justify-center gap-3 font-bold uppercase tracking-widest text-sm transition-colors duration-300"
                >
                  <Phone size={18} />
                  Chat on WhatsApp
                </a>

                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px bg-white/10 flex-1"></div>
                  <span className="text-xs text-gray-500 uppercase tracking-widest font-mono">Or send a message</span>
                  <div className="h-px bg-white/10 flex-1"></div>
                </div>

                {/* Contact Form */}
                {submitStatus === 'success' ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-[#CCFF00]/20 text-[#CCFF00] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send size={24} />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                    <p className="text-gray-400 text-sm">We'll get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#CCFF00] focus:ring-1 focus:ring-[#CCFF00] transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#CCFF00] focus:ring-1 focus:ring-[#CCFF00] transition-colors"
                      />
                    </div>
                    <div>
                      <textarea
                        name="message"
                        placeholder="Tell us about your project..."
                        required
                        rows={4}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#CCFF00] focus:ring-1 focus:ring-[#CCFF00] transition-colors resize-none"
                      ></textarea>
                    </div>
                    
                    {submitStatus === 'error' && (
                      <p className="text-red-400 text-xs mt-1">Failed to send message. Please try again or use WhatsApp.</p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 mt-2 bg-white text-black hover:bg-[#CCFF00] rounded-xl font-bold uppercase tracking-widest text-sm transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <>
                          <Send size={18} />
                          Send Request
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactWidget;
