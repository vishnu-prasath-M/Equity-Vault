import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const footerLinks = {
  Company: ["About", "Careers", "Blog", "Press"],
  Explore: ["Case Studies", "Idea Vault", "Playbooks", "The Stack"],
  Resources: ["Income Reports", "Guides", "Newsletter", "Community"],
  Legal: ["Privacy", "Terms", "Cookies", "Licenses"],
};

const FooterSection = () => {
  return (
    <footer className="border-t border-border/50">
      {/* Newsletter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground tracking-tight">
            Join 50,000 founders.
          </h2>
          <p className="text-sm text-muted-foreground mt-2">
            Get weekly income reports, playbooks, and business ideas delivered to your inbox.
          </p>
          <div className="mt-6 flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="you@example.com"
              className="flex-1 px-4 py-2.5 text-sm bg-secondary rounded-lg border-0 text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-ring"
            />
            <Button className="rounded-lg gap-1.5 shrink-0">
              Send me the playbooks
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">
                  {category}
                </h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-6 border-t border-border/50 flex items-center justify-between">
            <span className="text-xs text-muted-foreground">
              © 2026 FoundersVault. All rights reserved.
            </span>
            <span className="text-xs text-muted-foreground font-mono-data">
              SOP-Ready
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
