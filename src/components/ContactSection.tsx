import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import { Send, MapPin, Mail, Phone, CheckCircle } from 'lucide-react';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    
    // Simulate frontend check delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // clean form values
      setFormState({ name: '', email: '', message: '' });

      // auto-dismiss success message in 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1200);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-6 max-w-[1200px] mx-auto border-t border-[#222222]/30">
      <div className="reveal-on-scroll">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#666666] mb-3 block">
          08 / Connection
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-8">
          Get In Touch
        </h2>
        <p className="text-[#666666] max-w-xl text-base leading-relaxed mb-16">
          Whether you need a senior design consultant to audit custom complex software systems, or looking for a passionate Design Lead.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Column: Direct coordinates */}
        <div className="lg:col-span-5 space-y-8 reveal-on-scroll">
          <h3 className="font-display font-bold text-xl text-white">
            Send me a direct line, or connect via any coordinates below.
          </h3>
          
          <p className="text-[#666666] text-sm leading-relaxed max-w-sm">
            I am usually responsive within 24 hours. Based in Manila (UTC +8), and open to discuss remote engagements or direct physical workspace collaborations.
          </p>

          <div className="space-y-6 pt-6">
            {/* Email coordinate */}
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded border border-[#222222] bg-surface flex items-center justify-center text-[#666666] group-hover:text-accent-custom group-hover:border-accent-custom/50 transition-colors duration-300">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-[#555] uppercase block">
                  Email
                </span>
                <a
                  href="mailto:rizaldy.dayto.7@gmail.com"
                  className="font-medium text-white text-sm hover:text-accent-custom transition-all"
                >
                  rizaldy.dayto.7@gmail.com
                </a>
              </div>
            </div>

            {/* Mobile coordinate */}
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded border border-[#222222] bg-surface flex items-center justify-center text-[#666666] group-hover:text-accent-custom group-hover:border-accent-custom/50 transition-colors duration-300">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-[#555] uppercase block">
                  Phone
                </span>
                <a
                  href="tel:+639060972241"
                  className="font-medium text-white text-sm hover:text-accent-custom transition-all"
                >
                  +63 906 097 2241
                </a>
              </div>
            </div>

            {/* Location coordinate */}
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded border border-[#222222] bg-surface flex items-center justify-center text-[#666666] group-hover:text-accent-custom group-hover:border-accent-custom/50 transition-colors duration-300">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-[#555] uppercase block">
                  Location
                </span>
                <span className="font-medium text-[#b8b8b8] text-sm">
                  Quezon City, Philippines
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Simplistic frontend form */}
        <div className="lg:col-span-7 reveal-on-scroll" style={{ transitionDelay: '150ms' }}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Full Name field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name-input" className="font-mono text-[10px] text-[#666666] uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  id="name-input"
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. John Doe"
                  className="w-full bg-[#111111]/80 hover:bg-[#111] focus:bg-[#111] text-white text-sm border border-[#222222] focus:border-accent-custom transition-all rounded py-3.5 px-4 outline-none placeholder-[#444]"
                />
              </div>

              {/* Email field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email-input" className="font-mono text-[10px] text-[#666666] uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  id="email-input"
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. john@example.com"
                  className="w-full bg-[#111111]/80 hover:bg-[#111] focus:bg-[#111] text-white text-sm border border-[#222222] focus:border-accent-custom transition-all rounded py-3.5 px-4 outline-none placeholder-[#444]"
                />
              </div>
            </div>

            {/* Message field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message-input" className="font-mono text-[10px] text-[#666666] uppercase tracking-wider">
                Message & Proposal Context
              </label>
              <textarea
                id="message-input"
                name="message"
                value={formState.message}
                onChange={handleInputChange}
                required
                rows={5}
                placeholder="Brief outline of your product, scope, or timeline parameters..."
                className="w-full bg-[#111111]/80 hover:bg-[#111] focus:bg-[#111] text-white text-sm border border-[#222222] focus:border-accent-custom transition-all rounded py-3.5 px-4 outline-none resize-none placeholder-[#444]"
              />
            </div>

            {/* Simulated Submit feedback status banner */}
            {submitSuccess && (
              <div className="bg-emerald-500/10 border border-emerald-500/20 text-[#6ff9ff]/90 text-xs py-3 px-4 rounded flex items-center gap-2.5 animate-slide-up">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Thank you! Your message has been simulated successfully. I will follow up soon.</span>
              </div>
            )}

            {/* Submit button layout with layout shift handling */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 bg-accent-custom hover:bg-accent-cyan text-white font-semibold text-sm tracking-wide rounded border border-transparent shadow-lg transition-all duration-300 pointer-events-auto disabled:opacity-50"
              >
                <span>{isSubmitting ? 'Transmitting...' : 'Send Message'}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
