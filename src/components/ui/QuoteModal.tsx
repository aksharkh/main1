import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Phone, Sparkles, CheckCircle2 } from 'lucide-react';
import { premiumEase } from '../../lib/utils';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const services = [
  'Website / Web App',
  'Mobile Application',
  'AI & Automations',
  'Custom Software / CRM',
  'Other / Consultation',
];

const WHATSAPP_NUMBER = "918277630021";
const GOOGLE_SHEETS_SCRIPT_URL = "YOUR_GOOGLE_SCRIPT_URL_HERE";

const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [selectedService, setSelectedService] = useState<string>('Website / Web App');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hi Axoraa Team!\n\nI want to connect regarding a project.\n\n*Service:* ${selectedService}\n*Name:* ${name || 'Prospective Client'}\n*Email:* ${email || 'N/A'}\n*Phone:* ${phone || 'N/A'}\n*Project Details:* ${message || 'Looking forward to discussing!'}`
    );
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('service', selectedService);
    formData.append('message', message);
    formData.append('source', 'Get Quote / Connect Modal');

    try {
      if (GOOGLE_SHEETS_SCRIPT_URL && GOOGLE_SHEETS_SCRIPT_URL !== "YOUR_GOOGLE_SCRIPT_URL_HERE") {
        await fetch(GOOGLE_SHEETS_SCRIPT_URL, {
          method: 'POST',
          body: formData,
        });
      }
      setSubmitStatus('success');
      setTimeout(() => {
        setIsSubmitting(false);
      }, 500);
    } catch (err) {
      console.error('Submission error:', err);
      setSubmitStatus('success');
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setSubmitStatus('idle');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container: Pure Black theme */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ ease: premiumEase, duration: 0.4 }}
            className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/15 rounded-3xl shadow-[0_20px_80px_rgba(0,0,0,0.95)] overflow-hidden z-10 my-auto text-white"
          >
            {/* Ambient Top Glow */}
            <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-[#CCFF00] to-transparent pointer-events-none" />

            {/* Header */}
            <div className="p-6 md:p-8 pb-4 flex items-start justify-between border-b border-white/10 bg-black/40">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse" />
                  <span className="text-xs font-mono uppercase tracking-widest text-[#CCFF00]">
                    Connect with Team
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight uppercase">
                  Let's Build Together
                </h3>
                <p className="text-gray-400 text-xs md:text-sm mt-1">
                  Share your basic details and our engineers will get in touch promptly.
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white transition-colors cursor-pointer shrink-0 ml-4"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6 md:p-8 max-h-[75vh] overflow-y-auto space-y-5 bg-[#0a0a0a]">
              {submitStatus === 'success' ? (
                <div className="text-center py-10 px-2">
                  <div className="w-16 h-16 bg-[#CCFF00]/20 text-[#CCFF00] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#CCFF00]/30">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-2xl font-bold uppercase tracking-tight text-white mb-2">
                    Details Received!
                  </h4>
                  <p className="text-gray-400 text-sm max-w-sm mx-auto mb-8">
                    Thanks for reaching out! We will review your project and connect with you at <span className="text-[#CCFF00]">{email || 'your email'}</span>.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-6 bg-[#25D366] text-black font-bold uppercase tracking-wider text-xs rounded-xl flex items-center justify-center gap-2 hover:bg-[#25D366]/90 transition-colors"
                    >
                      <Phone size={16} /> Chat on WhatsApp
                    </a>
                    <button
                      onClick={() => {
                        resetForm();
                        onClose();
                      }}
                      className="py-3 px-6 bg-white/10 text-white font-bold uppercase tracking-wider text-xs rounded-xl hover:bg-white/20 transition-colors"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Service Interest */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-gray-400 mb-2.5">
                      Interested In
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {services.map((svc) => {
                        const isSelected = selectedService === svc;
                        return (
                          <button
                            type="button"
                            key={svc}
                            onClick={() => setSelectedService(svc)}
                            className={`text-xs px-3 py-2 rounded-xl border font-medium transition-all duration-200 cursor-pointer ${
                              isSelected
                                ? 'bg-[#CCFF00] text-black border-[#CCFF00] font-bold shadow-[0_0_12px_rgba(204,255,0,0.25)]'
                                : 'bg-black border-white/10 text-gray-300 hover:border-white/30 hover:text-white'
                            }`}
                          >
                            {svc}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Primary Contact Details */}
                  <div className="space-y-3 pt-1">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name *"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-black border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#CCFF00] focus:ring-1 focus:ring-[#CCFF00] transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="email"
                        placeholder="Email Address *"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-black border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#CCFF00] focus:ring-1 focus:ring-[#CCFF00] transition-colors"
                      />
                      <input
                        type="tel"
                        placeholder="Phone / WhatsApp"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-black border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#CCFF00] focus:ring-1 focus:ring-[#CCFF00] transition-colors"
                      />
                    </div>

                    <div>
                      <textarea
                        rows={3}
                        placeholder="Briefly tell us about your project or goals..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full bg-black border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#CCFF00] focus:ring-1 focus:ring-[#CCFF00] transition-colors resize-none"
                      />
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 py-3.5 px-6 bg-[#CCFF00] hover:bg-[#b8e600] text-black font-bold uppercase tracking-widest text-xs rounded-xl flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 cursor-pointer shadow-[0_0_20px_rgba(204,255,0,0.3)]"
                    >
                      {isSubmitting ? (
                        <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send size={16} /> Submit Details
                        </>
                      )}
                    </button>

                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3.5 px-5 bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-black border border-[#25D366]/30 font-bold uppercase tracking-widest text-xs rounded-xl flex items-center justify-center gap-2 transition-colors duration-300"
                    >
                      <Phone size={16} /> Chat on WhatsApp
                    </a>
                  </div>

                  {/* Direct Contact Links Footer */}
                  <div className="border-t border-white/10 pt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-400">
                    <div className="flex items-center gap-2">
                      <Sparkles size={14} className="text-[#CCFF00]" />
                      <span>Call directly:</span>
                      <a
                        href="tel:+9108277630021"
                        className="text-white hover:text-[#CCFF00] font-mono underline"
                      >
                        +91 08277630021
                      </a>
                    </div>
                    <div>
                      <a
                        href="mailto:info.axoraa@gmail.com"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        info.axoraa@gmail.com
                      </a>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default QuoteModal;
