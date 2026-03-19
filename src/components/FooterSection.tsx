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
    { label: "Newsletter", href: "#" },
    { label: "Guides", href: "#" },
    { label: "Community", href: "#" },
    { label: "Blog", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Contact", href: "#" },
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
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
              <Zap className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-medium text-emerald-300">Join 50,000+ founders</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
              Ready to join
              <span className="block text-emerald-400">the top 1%?</span>
            </h2>
            
            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-lg mx-auto">
              Get weekly income reports, verified business playbooks, and exclusive founder insights delivered to your inbox.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="founder@startup.com"
                className="flex-1 px-4 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all backdrop-blur-sm"
              />
              <Button 
                type="submit"
                className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold rounded-xl gap-2 transition-colors"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
            
            <p className="mt-4 text-xs text-slate-400">
              No spam. Unsubscribe anytime. Join the founders who actually build.
            </p>
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
