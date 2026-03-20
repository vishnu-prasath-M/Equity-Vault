import { Search, Command, Sparkles, ArrowRight } from "lucide-react";
import { motion, useAnimationFrame } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { brandLogos } from "@/data/mockData";
import { AuroraBackground } from "@/components/ui/aurora-background";

interface HeroSectionProps {
  onSearchOpen: () => void;
}

// Floating logos for the background grid
const floatingLogos = [
  { name: "Stripe", logo: brandLogos.stripe, x: 10, y: 20, delay: 0 },
  { name: "Shopify", logo: brandLogos.shopify, x: 85, y: 15, delay: 0.5 },
  { name: "Notion", logo: brandLogos.notion, x: 75, y: 70, delay: 1 },
  { name: "Figma", logo: brandLogos.figma, x: 15, y: 75, delay: 1.5 },
  { name: "Vercel", logo: brandLogos.vercel, x: 90, y: 45, delay: 0.8 },
  { name: "Linear", logo: brandLogos.linear, x: 5, y: 45, delay: 1.2 },
  { name: "Slack", logo: brandLogos.slack, x: 25, y: 10, delay: 0.3 },
  { name: "Supabase", logo: brandLogos.supabase, x: 70, y: 85, delay: 0.7 },
];

// Typing animation words
const typingWords = ["SaaS", "Agency", "Newsletter", "E-commerce", "Micro-SaaS"];

const FloatingLogo = ({ logo, x, y, delay }: { logo: string; x: number; y: number; delay: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useAnimationFrame((time) => {
    const floatX = Math.sin((time / 3000) + delay * 2) * 15;
    const floatY = Math.cos((time / 4000) + delay * 2) * 10;
    setOffset({ x: floatX, y: floatY });
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.15, scale: 1 }}
      transition={{ duration: 0.8, delay: delay * 0.5 }}
      className="absolute pointer-events-none z-10"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: `translate(${offset.x}px, ${offset.y}px)`,
      }}
    >
      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-white/80 backdrop-blur-sm border border-slate-200/50 shadow-lg flex items-center justify-center p-2">
        <img src={logo} alt="" className="w-full h-full object-contain opacity-60 grayscale" />
      </div>
    </motion.div>
  );
};

const TypingEffect = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const word = typingWords[currentWordIndex];

    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 1500);
      return () => clearTimeout(pauseTimeout);
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setCurrentText(word.substring(0, currentText.length - 1));
        if (currentText.length === 1) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % typingWords.length);
        }
      } else {
        setCurrentText(word.substring(0, currentText.length + 1));
        if (currentText.length === word.length - 1) {
          setIsPaused(true);
        }
      }
    }, isDeleting ? 80 : 120);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, isPaused, currentWordIndex]);

  return (
    <span className="text-success font-mono-data">
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-0.5 h-6 sm:h-7 bg-success ml-1 align-middle"
      />
    </span>
  );
};

const HeroSection = ({ onSearchOpen }: HeroSectionProps) => {
  return (
    <AuroraBackground className="px-4 sm:px-6 w-full max-w-none rounded-none !h-auto min-h-[700px] overflow-hidden">
      {/* Floating logos grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingLogos.map((item) => (
          <FloatingLogo
            key={item.name}
            logo={item.logo}
            x={item.x}
            y={item.y}
            delay={item.delay}
          />
        ))}
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50/90 border border-emerald-100 rounded-full mb-8 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-xs font-medium text-emerald-700">5,204 verified income reports</span>
          </div>
        </motion.div>

        {/* Main headline with typing effect */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.2, 0, 0, 1] }}
          className="mb-6"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight text-balance">
            The database of<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <TypingEffect /> businesses
            <br />
            <span className="font-mono-data text-emerald-600">$10k+/mo</span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.2, 0, 0, 1] }}
          className="text-lg sm:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto text-pretty mb-10"
        >
          Explore 5,000+ verified income reports and business playbooks.
          Learn from founders who have actually done it.
        </motion.p>

        {/* Spotlight-style search bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.2, 0, 0, 1] }}
          className="max-w-2xl mx-auto"
        >
          <motion.button
            onClick={onSearchOpen}
            whileHover={{ scale: 1.01, boxShadow: "0 20px 40px -12px rgba(0,0,0,0.1)" }}
            whileTap={{ scale: 0.99 }}
            className="group w-full flex items-center gap-4 px-5 py-4 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-100 text-slate-400 group-hover:bg-slate-200 group-hover:text-slate-600 transition-colors">
              <Search className="w-4 h-4" />
            </div>
            <span className="flex-1 text-left text-sm text-slate-400 group-hover:text-slate-500 transition-colors">
              Search case studies, tools, or business models...
            </span>
            <div className="flex items-center gap-1.5 px-2 py-1 bg-slate-100 rounded-md">
              <Command className="w-3 h-3 text-slate-400" />
              <span className="text-xs font-medium text-slate-500">K</span>
            </div>
          </motion.button>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: [0.2, 0, 0, 1] }}
          className="flex items-center justify-center gap-4 mt-8"
        >
          <motion.a
            href="/case-studies"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors"
          >
            Explore Case Studies
            <ArrowRight className="w-4 h-4" />
          </motion.a>
          <motion.a
            href="/idea-vault"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-slate-700 text-sm font-medium rounded-lg border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-colors"
          >
            Browse Ideas
          </motion.a>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 flex items-center justify-center gap-6 text-xs text-slate-400"
        >
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-7 h-7 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 border-2 border-white"
              />
            ))}
          </div>
          <span>Trusted by 50,000+ founders</span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">Updated daily</span>
        </motion.div>
      </div>
    </AuroraBackground>
  );
};

export default HeroSection;
