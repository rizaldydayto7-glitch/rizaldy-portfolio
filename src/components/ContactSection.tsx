import { MapPin, Mail, Phone } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 sm:py-32 px-6 max-w-[900px] mx-auto border-t border-[#222222]/30 text-center">
      <div className="reveal-on-scroll flex flex-col items-center">
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

      <div className="reveal-on-scroll max-w-[750px] mx-auto space-y-12">
        <div className="space-y-4">
          <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
            Send me a direct line, or connect via any coordinates below.
          </h3>
          
          <p className="text-[#666666] text-sm leading-relaxed mx-auto max-w-md">
            I am usually responsive within 24 hours. Based in Manila (UTC +8), and open to discuss remote engagements or direct physical workspace collaborations.
          </p>
        </div>

        {/* Center aligned coordinates blocks with nice dark minimalist styling */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
          {/* Email coordinate */}
          <div className="flex flex-col items-center p-6 rounded-lg border border-[#222222]/80 bg-[#111111]/40 hover:border-accent-custom/50 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-full border border-[#222222] bg bg-[#111111] flex items-center justify-center text-[#666666] group-hover:text-accent-custom group-hover:border-accent-custom/50 transition-colors duration-300 mb-4 h-12 w-12 shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <span className="font-mono text-[10px] text-[#555] uppercase block mb-1">
              Email
            </span>
            <a
              href="mailto:rizaldy.dayto.7@gmail.com"
              className="font-medium text-white text-sm hover:text-accent-custom transition-all break-all"
            >
              rizaldy.dayto.7@gmail.com
            </a>
          </div>

          {/* Mobile coordinate */}
          <div className="flex flex-col items-center p-6 rounded-lg border border-[#222222]/80 bg-[#111111]/40 hover:border-accent-custom/50 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-full border border-[#222222] bg bg-[#111111] flex items-center justify-center text-[#666666] group-hover:text-accent-custom group-hover:border-accent-custom/50 transition-colors duration-300 mb-4 h-12 w-12 shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <span className="font-mono text-[10px] text-[#555] uppercase block mb-1">
              Phone
            </span>
            <a
              href="tel:+639060972241"
              className="font-medium text-white text-sm hover:text-accent-custom transition-all"
            >
              +63 906 097 2241
            </a>
          </div>

          {/* Location coordinate */}
          <div className="flex flex-col items-center p-6 rounded-lg border border-[#222222]/80 bg-[#111111]/40 hover:border-accent-custom/50 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-full border border-[#222222] bg bg-[#111111] flex items-center justify-center text-[#666666] group-hover:text-accent-custom group-hover:border-accent-custom/50 transition-colors duration-300 mb-4 h-12 w-12 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="font-mono text-[10px] text-[#555] uppercase block mb-1">
              Location
            </span>
            <span className="font-medium text-[#b8b8b8] text-sm text-center">
              Quezon City, Philippines
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
