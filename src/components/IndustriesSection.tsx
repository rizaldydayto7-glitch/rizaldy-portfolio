const industries = [
  "Automobile",
  "Ecommerce",
  "Electronics & Appliances",
  "Energy, Power & Renewables",
  "Education Sector",
  "Construction & Real Estate",
  "Experiences & Amusement Parks",
  "Fintech, Banking & Insurance",
  "Farming & Flowershop",
  "Food & Beverages",
  "Healthcare & MedTech",
  "Home Living",
  "Industrial, Equipment & Repair",
  "Logistics & Freight",
  "Non-Governmental Organizations (NGO)",
  "Skincare, Beauty & Wellness",
  "Lifestyle & Editorial",
  "Retail Commerce",
  "Safety & Physical Security",
  "Services & Digital Agencies",
  "Space, Condos & Lodging"
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-24 sm:py-32 px-6 max-w-[1200px] mx-auto border-t border-[#222222]/30">
      {/* Title block */}
      <div className="reveal-on-scroll">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#666666] mb-3 block">
          04 / Sectors
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-8">
          Industries Served
        </h2>
        <p className="text-[#666666] max-w-xl text-base leading-relaxed mb-16">
          A truly diverse background. Having solved complex workflow, commercial, and strategy problems across more than 20 local and global market sectors.
        </p>
      </div>

      {/* Wrapping Tag Cloud with staggered delay */}
      <div className="flex flex-wrap gap-3 max-w-4xl">
        {industries.map((ind, index) => {
          return (
            <div
              key={ind}
              style={{ transitionDelay: `${index * 40}ms` }}
              className="reveal-on-scroll inline-flex items-center px-5 py-3 rounded-full bg-[#111111] hover:bg-[#161616] border border-[#222222] hover:border-accent-custom hover:shadow-[0_0_15px_rgba(124,58,237,0.1)] text-[#b8b8b8] hover:text-white transition-all duration-300 font-sans text-sm select-none cursor-default"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#333333] hover-target group-hover:bg-accent-custom mr-3 transition-colors duration-300" />
              <span>{ind}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
