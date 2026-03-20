import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Twitter, Linkedin, Youtube, Github } from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = {
  Product: [
    { label: "Case Studies", href: "/case-studies" },
    { label: "Idea Vault", href: "/idea-vault" },
    { label: "The Stack", href: "/tools" },
    { label: "Calculator", href: "/calculator" },
  ],
  Resources: [
    { label: "Newsletter", href: "#newsletter" },
    { label: "Guides", href: "/guides" },
    { label: "Resources", href: "/resources" },
    { label: "Blog", href: "/blog" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Cookies", href: "#" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Github, href: "#", label: "GitHub" },
];

const FooterSection = () => {
  return (
    <footer className="bg-white border-t border-slate-200">
      {/* CTA Section */}
      <div id="newsletter" className="bg-[#050505] border-y border-white/[0.04] relative overflow-hidden">
        {/* Subtle dot pattern for depth */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 sm:py-32 z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24"
          >
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-5 leading-tight">
                The top 1% of founders read this.
              </h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">
                Join 50,000+ builders getting verified income reports, step-by-step business playbooks, and raw founder insights delivered straight to their inbox.
              </p>

              <div className="flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-emerald-500/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  One email a week
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-emerald-500/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  Zero fluff
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="w-full lg:w-[420px] shrink-0">
              <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 text-white rounded-xl placeholder:text-slate-500 outline-none focus:border-white/30 focus:bg-white/10 transition-all font-medium"
                />
                <Button
                  type="submit"
                  className="w-full h-14 bg-white hover:bg-slate-200 text-black font-semibold rounded-xl transition-colors text-[15px] border-none"
                >
                  Join the Vault
                </Button>
              </form>
              <p className="mt-5 text-xs text-slate-500 text-center lg:text-left tracking-wide">
                No spam. Unsubscribe at any time.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Links Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logo.png"
                alt="EquityVault"
                className="h-7 w-auto"
              />
            </div>
            <p className="text-sm text-slate-500 mb-4">
              The database of 5,000+ verified income reports and business playbooks.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-slate-200 hover:text-slate-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-slate-400">
            © 2026 FoundersVault. All rights reserved.
          </span>
          <span className="text-xs text-slate-400 font-mono-data">
            SOP-Ready • Production Grade
          </span>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
