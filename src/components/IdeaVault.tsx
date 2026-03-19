import { TrendingUp, DollarSign, BarChart3, Sparkles, Zap, ArrowRight, Lightbulb, Target } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { businessIdeas } from "@/data/mockData";

const IdeaVault = () => {
  // Get featured and trending ideas
  const featuredIdea = businessIdeas.find(i => i.featured);
  const trendingIdeas = businessIdeas.filter(i => i.trending).slice(0, 2);
  const lowCapitalIdeas = businessIdeas.filter(i => 
    i.capitalRequired.includes('$0') || i.capitalRequired.includes('$100')
  ).slice(0, 2);

  return (
    <section className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1.5 rounded-lg bg-slate-100">
                <Lightbulb className="w-4 h-4 text-slate-600" />
              </div>
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Weekly Updates</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Idea Vault</h2>
            <p className="text-sm text-slate-500 mt-1">Curated business opportunities with market data</p>
          </div>
          <Link 
            to="/idea-vault" 
            className="group flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Explore all ideas
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Featured Idea - Large Card */}
          {featuredIdea && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="md:col-span-2 lg:col-span-2 lg:row-span-2 group relative overflow-hidden rounded-2xl bg-slate-900 text-white cursor-pointer"
            >
              {featuredIdea.image && (
                <div className="absolute inset-0">
                  <img 
                    src={featuredIdea.image} 
                    alt={featuredIdea.niche}
                    className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40" />
                </div>
              )}
              
              <Link to="/idea-vault" className="relative block h-full p-6 flex flex-col justify-between min-h-[320px]">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-medium rounded-full border border-emerald-500/30">
                      Featured
                    </span>
                    <span className="px-2.5 py-1 bg-white/10 text-white/80 text-xs font-medium rounded-full border border-white/20">
                      {featuredIdea.category}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center p-2">
                    <img 
                      src={featuredIdea.brandLogo} 
                      alt="" 
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.innerHTML = `<span class="text-sm font-bold text-white">${featuredIdea.niche.charAt(0)}</span>`;
                      }}
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-emerald-300 transition-colors">
                    {featuredIdea.niche}
                  </h3>
                  <p className="text-sm text-slate-300 line-clamp-2 mb-4">
                    {featuredIdea.howToStart}
                  </p>
                  
                  <div className="flex items-center gap-4 text-xs">
                    <div>
                      <p className="text-slate-400">Market Size</p>
                      <p className="font-semibold text-emerald-400">{featuredIdea.marketSize}</p>
                    </div>
                    <div className="w-px h-8 bg-white/20" />
                    <div>
                      <p className="text-slate-400">Capital</p>
                      <p className="font-semibold text-white">{featuredIdea.capitalRequired}</p>
                    </div>
                    <div className="w-px h-8 bg-white/20" />
                    <div>
                      <p className="text-slate-400">Difficulty</p>
                      <div className="flex gap-0.5 mt-1">
                        {Array.from({ length: 5 }, (_, i) => (
                          <div 
                            key={i} 
                            className={`w-1.5 h-1.5 rounded-full ${
                              i < featuredIdea.difficulty ? 'bg-emerald-400' : 'bg-white/20'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm font-medium text-slate-400 group-hover:text-slate-300 transition-colors">
                  View Playbook
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          )}

          {/* Trending Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 hover:border-slate-300 cursor-pointer transition-colors"
          >
            <Link to="/idea-vault?filter=trending" className="block h-full p-5">
              <div className="flex items-start justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-slate-100">
                  <TrendingUp className="w-5 h-5 text-slate-600" />
                </div>
                <span className="font-mono-data text-3xl font-bold text-slate-900">+340%</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-1">Trending Now</h3>
              <p className="text-sm text-slate-500 mb-4">AI-Powered Resume Builders</p>
              
              <div className="space-y-2">
                {trendingIdeas.map((idea) => (
                  <div key={idea.id} className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
                    <div className="w-5 h-5 rounded bg-slate-200 flex items-center justify-center shrink-0">
                      <img 
                        src={idea.brandLogo} 
                        alt="" 
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.innerHTML = `<span class="text-[10px] font-bold text-slate-500">${idea.niche.charAt(0)}</span>`;
                        }}
                      />
                    </div>
                    <span className="text-xs font-medium text-slate-700 truncate">{idea.niche}</span>
                  </div>
                ))}
              </div>
            </Link>
          </motion.div>

          {/* Low Capital Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 hover:border-slate-300 cursor-pointer transition-colors"
          >
            <Link to="/idea-vault?filter=low-capital" className="block h-full p-5">
              <div className="flex items-start justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-slate-100">
                  <DollarSign className="w-5 h-5 text-slate-600" />
                </div>
                <span className="font-mono-data text-3xl font-bold text-slate-900">127</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-1">Low Capital</h3>
              <p className="text-sm text-slate-500 mb-4">$0 – $500 to start</p>
              
              <div className="space-y-2">
                {lowCapitalIdeas.map((idea) => (
                  <div key={idea.id} className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
                    <div className="w-5 h-5 rounded bg-slate-200 flex items-center justify-center shrink-0">
                      <img 
                        src={idea.brandLogo} 
                        alt="" 
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.innerHTML = `<span class="text-[10px] font-bold text-slate-500">${idea.niche.charAt(0)}</span>`;
                        }}
                      />
                    </div>
                    <span className="text-xs font-medium text-slate-700 truncate">{idea.niche}</span>
                  </div>
                ))}
              </div>
            </Link>
          </motion.div>

          {/* Market Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 p-5"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-2.5 rounded-xl bg-slate-100">
                <BarChart3 className="w-5 h-5 text-slate-600" />
              </div>
              <span className="font-mono-data text-3xl font-bold text-slate-900">48</span>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-1">Market Gaps</h3>
            <p className="text-sm text-slate-500">Underserved markets with high demand</p>
            
            <div className="mt-4 flex flex-wrap gap-2">
              {['AI Tools', 'Local Services', 'Niche E-com'].map((tag) => (
                <span key={tag} className="px-2 py-1 bg-slate-100 text-xs text-slate-600 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="group relative overflow-hidden rounded-2xl bg-slate-100 border border-slate-200 hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <Link to="/idea-vault" className="block h-full p-5 flex flex-col justify-between">
              <div className="p-2.5 rounded-xl bg-slate-200 w-fit group-hover:bg-slate-300 transition-colors">
                <Target className="w-5 h-5 text-slate-700" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">Find Your Niche</h3>
                <p className="text-sm text-slate-600 mb-3">Browse all opportunities</p>
                <div className="flex items-center gap-1 text-sm font-medium text-slate-700">
                  Explore
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mt-6 flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200"
        >
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-slate-400" />
              <span className="text-sm text-slate-600">
                <span className="font-semibold text-slate-900">{businessIdeas.filter(i => i.trending).length}</span> trending now
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-slate-400" />
              <span className="text-sm text-slate-600">
                <span className="font-semibold text-slate-900">{businessIdeas.length}+</span> verified ideas
              </span>
            </div>
          </div>
          <p className="text-xs text-slate-500">Updated weekly with new opportunities</p>
        </motion.div>
      </div>
    </section>
  );
};

export default IdeaVault;
