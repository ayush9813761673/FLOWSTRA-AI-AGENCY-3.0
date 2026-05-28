import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { fadeUp, stagger } from "../constants";
import { PixelLogoGrid } from "./ui/pixel-logo-grid";
import { 
  TrendingUp, 
  BarChart2, 
  Layers, 
  Globe, 
  Sparkles, 
  Workflow, 
  Activity, 
  LineChart, 
  ChevronDown, 
  ChevronUp, 
  Zap,
  ShoppingBag,
  Home
} from "lucide-react";

// The 12 authentic real-world case studies with precise niches and metrics
const cases = [
  {
    brand: "G.P. Real Estate Services",
    category: "Premium Brokerage CRM",
    impact: "85% Response Speed Improvement",
    quote: "Instantly routes international property buyer inquiries directly to assigned field agents.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600&h=400",
    metrics: "Instant buyer match",
    icon: Globe,
    color: "from-amber-500/10 to-transparent",
    accent: "text-amber-400"
  },
  {
    brand: "Homeplex Nepal",
    category: "Real Estate & Construction",
    impact: "3x Inquiries in 8 Months",
    quote: "Three new design engineers hired simply to handle the business volume directed to us.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=600&h=400",
    metrics: "+280% organic leads",
    icon: Home,
    color: "from-blue-500/10 to-transparent",
    accent: "text-blue-400"
  },
  {
    brand: "Naulo Koseli",
    category: "Nepal's Premier E-Commerce Brand",
    impact: "10,000+ Automated Orders",
    quote: "Bridges the gap between physical boutique gifting orders and instant automated fulfillment.",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=600&h=400",
    metrics: "2x order capacity",
    icon: ShoppingBag,
    color: "from-pink-500/10 to-transparent",
    accent: "text-pink-400"
  },
  {
    brand: "Leading Sanitation Group",
    category: "Industrial Showroom & Supply Chain",
    impact: "Zero Processing Errors",
    quote: "Fully automated supply chain booking dispatch systems linked directly with custom chat flows.",
    image: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=600&h=400",
    metrics: "-98% scheduling delays",
    icon: Workflow,
    color: "from-emerald-500/10 to-transparent",
    accent: "text-emerald-400"
  },
  {
    brand: "Core Perform",
    category: "Fitness & Wellness",
    impact: "25+ Hours Admin Saved/Wk",
    quote: "Saved gym staff massive hours weekly, allowing focusing on high-ticket training.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600&h=400",
    metrics: "100% manual tasks automated",
    icon: Activity,
    color: "from-violet-500/10 to-transparent",
    accent: "text-violet-400"
  },
  {
    brand: "Mamy Poko (Nepal Distributor)",
    category: "FMCG Wholesale Retail Network",
    impact: "32% Warehouse Velocity Up",
    quote: "Stock re-orders calculated and dispatched with intelligent automated WhatsApp alerts.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600&h=400",
    metrics: "32% warehouse speed",
    icon: LineChart,
    color: "from-cyan-500/10 to-transparent",
    accent: "text-cyan-400"
  },
  {
    brand: "French E-Com Network",
    category: "Multi-Brand Shopify Engine",
    impact: "18,000+ Support Tickets Saved",
    quote: "Automated multilingual e-com helpdesks operating effortlessly 24/7 without delays.",
    image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&q=80&w=600&h=400",
    metrics: "70% lower support cost",
    icon: Sparkles,
    color: "from-rose-500/10 to-transparent",
    accent: "text-rose-400"
  },
  {
    brand: "National IVF Centre",
    category: "Medical Records & Coordination",
    impact: "100% HIPAA Compliance",
    quote: "Automates coordination flows of records, clinic scheduling, and diagnostic alerts safely.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600&h=400",
    metrics: "Zero filing delay",
    icon: Layers,
    color: "from-sky-500/10 to-transparent",
    accent: "text-sky-400"
  },
  {
    brand: "Modern Kitchens",
    category: "Premium Custom Interiors",
    impact: "45% Design Booking Conversion",
    quote: "Dynamic interior configuration on chat generates auto-conceptual previews instantly.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=600&h=400",
    metrics: "+45% sales conversion",
    icon: Zap,
    color: "from-yellow-500/10 to-transparent",
    accent: "text-yellow-400"
  },
  {
    brand: "Apex Physics Labs",
    category: "Deep Structured Material Data",
    impact: "99.8% Sorting Accuracy",
    quote: "Sorted and parsed complex structural lab research data seamlessly into searchable digital matrices.",
    image: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&q=80&w=600&h=400",
    metrics: "99.8% precision index",
    icon: TrendingUp,
    color: "from-indigo-500/10 to-transparent",
    accent: "text-indigo-400"
  },
  {
    brand: "Vasas Bespoke Suits",
    category: "Luxury Custom Tailoring",
    impact: "Zero Missed Measurement Windows",
    quote: "No-wait interactive custom timing scheduler and automated followups on CRM.",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=600&h=400",
    metrics: "100% automated followups",
    icon: BarChart2,
    color: "from-teal-500/10 to-transparent",
    accent: "text-teal-400"
  },
  {
    brand: "Peak Performance Coach",
    category: "High-Ticket Course Launch",
    impact: "75k+ Organic Direct DM Outreaches",
    quote: "Social outreach and DM leads streamlined immediately into optimized lead CRM loops.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600&h=400",
    metrics: "75k+ organic impressions",
    icon: Globe,
    color: "from-purple-500/10 to-transparent",
    accent: "text-purple-400"
  }
];

export function CaseStudies() {
  const [showAll, setShowAll] = useState(false);

  // Show the top 3 case studies by default, and expand to 12
  const visibleCases = showAll ? cases : cases.slice(0, 3);

  return (
    <section
      id="case-studies"
      className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto overflow-hidden"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col gap-16"
      >
        {/* Top interactive brand client grid */}
        <motion.div
          variants={fadeUp}
          className="w-full"
        >
          <PixelLogoGrid 
            heading="Brands that trust us" 
            subheading="From global brands to fast-scaling local leaders, we build digital systems that succeed"
            badge="Case Studies" 
          />
        </motion.div>

        {/* Content Section: Case Studies Cards Grid */}
        <div className="flex flex-col gap-10">
          <motion.div 
            variants={fadeUp}
            className="flex flex-col gap-4 text-center md:text-left md:flex-row md:items-end md:justify-between border-b border-zinc-800 pb-6"
          >
            <div>
              <span className="text-emerald-400 text-xs font-semibold tracking-wider uppercase">
                Proven Impact Showcase
              </span>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mt-1">
                Deep Dive Case Studies
              </h3>
            </div>
            <p className="text-sm md:text-base text-zinc-400 max-w-md">
              Explore concrete examples of how we automated operations and supercharged conversion workflows for each specific niche.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <AnimatePresence mode="popLayout">
              {visibleCases.map((c, idx) => {
                const IconComponent = c.icon;
                return (
                  <motion.div
                    key={c.brand}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="group relative flex flex-col justify-between h-[500px] rounded-2xl border border-zinc-800/80 bg-zinc-950/40 p-6 md:p-8 backdrop-blur-md transition-all duration-300 hover:border-zinc-700/80 hover:bg-zinc-900/40 cursor-default"
                  >
                    {/* Glowing Accent Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-b ${c.color} opacity-30 rounded-2xl transition-opacity duration-300 group-hover:opacity-50 pointer-events-none`} />

                    <div>
                      {/* Grid Item Header Card Picture */}
                      <div className="relative h-44 w-full overflow-hidden rounded-xl border border-zinc-900 bg-zinc-900 mb-6 shrink-0">
                        <img
                          src={c.image}
                          alt={c.brand}
                          referrerPolicy="no-referrer"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                        
                        {/* Dynamic category badge */}
                        <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-300 text-[11px] font-bold uppercase tracking-wider backdrop-blur-md">
                          <IconComponent className={`w-3.5 h-3.5 ${c.accent}`} />
                          {c.brand}
                        </span>

                        <span className="absolute bottom-3 right-3 text-xs font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2 rounded-md py-0.5 backdrop-blur-md">
                          {c.metrics}
                        </span>
                      </div>

                      {/* Brand Label & Title */}
                      <div className="space-y-1 mb-4">
                        <span className={`text-xs font-semibold ${c.accent} tracking-wider uppercase`}>
                          {c.category}
                        </span>
                        <h4 className="text-xl font-bold text-white tracking-tight">
                          {c.impact}
                        </h4>
                      </div>

                      {/* Professional Quote */}
                      <p className="text-sm text-zinc-400 leading-relaxed italic">
                        "{c.quote}"
                      </p>
                    </div>

                    {/* Footer action detail */}
                    <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                      <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
                        Niche Automation
                      </span>
                      <span className="text-xs text-zinc-400 font-medium bg-zinc-900 px-2.5 py-1 rounded-md border border-zinc-800/80">
                        Verified Result
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Expand Toggle Button */}
          <motion.div 
            variants={fadeUp}
            className="flex justify-center mt-4 shrink-0"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-sm font-semibold text-white transition-all duration-200 active:scale-95 shadow-lg group"
            >
              {showAll ? (
                <>
                  Show Less Case Studies
                  <ChevronUp className="w-4 h-4 text-emerald-400 transition-transform duration-200 group-hover:-translate-y-0.5" />
                </>
              ) : (
                <>
                  Explore All 12 Case Studies
                  <ChevronDown className="w-4 h-4 text-emerald-400 transition-transform duration-200 group-hover:translate-y-0.5" />
                </>
              )}
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
