import workspace1 from "@/assets/workspace-1.jpg";
import workspace2 from "@/assets/workspace-2.jpg";
import workspace3 from "@/assets/workspace-3.jpg";
import workspace4 from "@/assets/workspace-4.jpg";
import workspace5 from "@/assets/workspace-5.jpg";
import workspace6 from "@/assets/workspace-6.jpg";

export interface CaseStudy {
  id: string;
  title: string;
  founder: string;
  revenue: number;
  expenses: number;
  model: string;
  description: string;
  image: string;
  category: string;
  verified: boolean;
  profitMargin: number;
  teamSize: number;
  timeToLaunch: string;
  growthRate: number;
  story: string;
  lessons: string[];
  toolsUsed: string[];
  revenueHistory: { month: string; revenue: number }[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "How Sarah built a $12,400/mo SEO Agency in 14 months",
    founder: "Sarah Chen",
    revenue: 12400,
    expenses: 4712,
    model: "Agency",
    description: "From freelancer to agency owner with a team of 5 remote specialists.",
    image: workspace1,
    category: "Agency",
    verified: true,
    profitMargin: 62,
    teamSize: 5,
    timeToLaunch: "3 weeks",
    growthRate: 18,
    story: "Sarah started as a freelance SEO consultant earning $2,000/month. She noticed that small businesses were desperate for reliable SEO help but couldn't afford enterprise agencies. She began packaging her services into standardized tiers—Basic Audit ($500), Growth Plan ($1,500), and Full-Service ($3,000/month). Within 6 months, she hired two junior SEO specialists from the Philippines and one content writer. By month 14, her agency was generating $12,400/month with a 62% profit margin. Her secret? She built SOPs for every single process, making it possible to delegate 90% of client work.",
    lessons: [
      "Productize your service—don't sell hours, sell outcomes",
      "SOPs are the backbone of any scalable agency",
      "Hire in emerging markets for cost efficiency without sacrificing quality",
      "Niche down aggressively—'SEO for dentists' beats 'SEO for everyone'",
      "Client retention is 5x cheaper than acquisition"
    ],
    toolsUsed: ["Ahrefs", "Notion", "Slack", "Stripe", "Loom"],
    revenueHistory: [
      { month: "Jan", revenue: 2000 }, { month: "Feb", revenue: 2800 },
      { month: "Mar", revenue: 3500 }, { month: "Apr", revenue: 4200 },
      { month: "May", revenue: 5100 }, { month: "Jun", revenue: 6400 },
      { month: "Jul", revenue: 7200 }, { month: "Aug", revenue: 8100 },
      { month: "Sep", revenue: 9000 }, { month: "Oct", revenue: 9800 },
      { month: "Nov", revenue: 10900 }, { month: "Dec", revenue: 11600 },
      { month: "Jan Y2", revenue: 12400 },
    ],
  },
  {
    id: "2",
    title: "From side project to $8,200/mo with a Micro-SaaS tool",
    founder: "Marcus Webb",
    revenue: 8200,
    expenses: 902,
    model: "Micro-SaaS",
    description: "A simple Chrome extension for email productivity that grew organically.",
    image: workspace2,
    category: "Micro-SaaS",
    verified: true,
    profitMargin: 89,
    teamSize: 1,
    timeToLaunch: "6 weeks",
    growthRate: 24,
    story: "Marcus was frustrated with how long it took to write professional emails. He built a Chrome extension that used templates and AI-assisted suggestions to cut email writing time by 70%. He launched on Product Hunt, got 450 upvotes, and converted 200 users on day one. With a $9/month pricing model and zero paid marketing, the extension grew purely through word-of-mouth and Chrome Web Store organic discovery. His only costs are a $20/month server and the OpenAI API.",
    lessons: [
      "Solve your own problem first—you'll understand the user deeply",
      "Chrome extensions have built-in distribution via the Web Store",
      "Keep pricing simple—one tier, no confusion",
      "Product Hunt is still valuable for initial traction",
      "Micro-SaaS margins are incredible when you keep the stack simple"
    ],
    toolsUsed: ["Vercel", "Stripe", "OpenAI API", "Tailwind CSS", "Supabase"],
    revenueHistory: [
      { month: "Jan", revenue: 400 }, { month: "Feb", revenue: 900 },
      { month: "Mar", revenue: 1800 }, { month: "Apr", revenue: 2600 },
      { month: "May", revenue: 3400 }, { month: "Jun", revenue: 4200 },
      { month: "Jul", revenue: 5000 }, { month: "Aug", revenue: 5800 },
      { month: "Sep", revenue: 6400 }, { month: "Oct", revenue: 7000 },
      { month: "Nov", revenue: 7600 }, { month: "Dec", revenue: 8200 },
    ],
  },
  {
    id: "3",
    title: "Building a $15,800/mo newsletter in the finance niche",
    founder: "Elena Rodriguez",
    revenue: 15800,
    expenses: 3476,
    model: "Newsletter",
    description: "Monetized through sponsorships and a premium paid tier.",
    image: workspace3,
    category: "Newsletters",
    verified: true,
    profitMargin: 78,
    teamSize: 2,
    timeToLaunch: "1 week",
    growthRate: 15,
    story: "Elena was a former Wall Street analyst who started writing a weekly newsletter about personal finance for millennials. She focused on making complex financial concepts simple and actionable. After hitting 5,000 subscribers through Twitter threads and SEO-optimized blog posts, sponsors started reaching out. She now charges $2,500 per sponsorship slot (3 per month) and runs a $15/month premium tier with 400 paying subscribers. Her content calendar is batched—she writes all 4 weekly issues on Sundays.",
    lessons: [
      "Consistency beats virality—publish on a strict schedule",
      "Sponsorship revenue is more predictable than you think",
      "Batch content creation to protect your creative energy",
      "Your personal brand is the moat—be opinionated",
      "Cross-promote on Twitter/X to grow your subscriber base"
    ],
    toolsUsed: ["ConvertKit", "Notion", "Stripe", "Twitter/X", "Canva"],
    revenueHistory: [
      { month: "Jan", revenue: 500 }, { month: "Feb", revenue: 1200 },
      { month: "Mar", revenue: 2400 }, { month: "Apr", revenue: 3800 },
      { month: "May", revenue: 5200 }, { month: "Jun", revenue: 6800 },
      { month: "Jul", revenue: 8200 }, { month: "Aug", revenue: 9600 },
      { month: "Sep", revenue: 11000 }, { month: "Oct", revenue: 12800 },
      { month: "Nov", revenue: 14200 }, { month: "Dec", revenue: 15800 },
    ],
  },
  {
    id: "4",
    title: "A $22,000/mo e-commerce brand built on organic TikTok",
    founder: "James Okafor",
    revenue: 22000,
    expenses: 14520,
    model: "E-commerce",
    description: "Sustainable home goods brand with zero paid advertising.",
    image: workspace4,
    category: "E-commerce",
    verified: true,
    profitMargin: 34,
    teamSize: 4,
    timeToLaunch: "8 weeks",
    growthRate: 28,
    story: "James noticed that eco-friendly home goods were expensive and boring. He created a brand that combined sustainability with modern design—bamboo kitchen sets, recycled glass vases, and organic cotton towels. Instead of running ads, he posted 2-3 TikTok videos per day showing the products in beautifully staged home settings. One video went viral (2.4M views), driving $8,000 in sales in 48 hours. He sources directly from manufacturers in Vietnam and uses a 3PL for fulfillment.",
    lessons: [
      "TikTok organic reach is unmatched for physical products",
      "Post volume matters more than production quality on TikTok",
      "Direct manufacturer relationships protect your margins",
      "3PL fulfillment is essential once you pass 100 orders/month",
      "Sustainability is a premium positioning, not just a feature"
    ],
    toolsUsed: ["Shopify", "TikTok", "ShipBob", "Canva", "Notion"],
    revenueHistory: [
      { month: "Jan", revenue: 1200 }, { month: "Feb", revenue: 2800 },
      { month: "Mar", revenue: 4500 }, { month: "Apr", revenue: 6200 },
      { month: "May", revenue: 8800 }, { month: "Jun", revenue: 11000 },
      { month: "Jul", revenue: 13500 }, { month: "Aug", revenue: 15200 },
      { month: "Sep", revenue: 17000 }, { month: "Oct", revenue: 19200 },
      { month: "Nov", revenue: 20800 }, { month: "Dec", revenue: 22000 },
    ],
  },
  {
    id: "5",
    title: "Scaling a content site to $6,500/mo with programmatic SEO",
    founder: "Priya Sharma",
    revenue: 6500,
    expenses: 585,
    model: "Content Site",
    description: "A niche comparison site generating revenue through affiliate partnerships.",
    image: workspace5,
    category: "Content Sites",
    verified: true,
    profitMargin: 91,
    teamSize: 1,
    timeToLaunch: "4 weeks",
    growthRate: 12,
    story: "Priya built a comparison website for project management tools using programmatic SEO. She created a template that auto-generates pages for queries like 'Asana vs Monday.com' and 'Best PM tool for agencies.' With 1,200+ pages indexed by Google and affiliate partnerships with 15 tools, the site earns $6,500/month through CPA commissions. She spends about 5 hours per week on maintenance and adding new tools to the database.",
    lessons: [
      "Programmatic SEO can build massive organic traffic with minimal effort",
      "Comparison content has incredibly high purchase intent",
      "Affiliate revenue compounds—each new page is a new revenue stream",
      "Technical SEO matters more than content quality for pSEO",
      "5 hours/week is the sweet spot for a passive income content site"
    ],
    toolsUsed: ["Vercel", "Next.js", "Ahrefs", "Google Search Console", "Impact.com"],
    revenueHistory: [
      { month: "Jan", revenue: 200 }, { month: "Feb", revenue: 450 },
      { month: "Mar", revenue: 800 }, { month: "Apr", revenue: 1400 },
      { month: "May", revenue: 2100 }, { month: "Jun", revenue: 2800 },
      { month: "Jul", revenue: 3400 }, { month: "Aug", revenue: 4000 },
      { month: "Sep", revenue: 4600 }, { month: "Oct", revenue: 5200 },
      { month: "Nov", revenue: 5800 }, { month: "Dec", revenue: 6500 },
    ],
  },
  {
    id: "6",
    title: "How a solo dev built a $31,000/mo SaaS in 18 months",
    founder: "David Kim",
    revenue: 31000,
    expenses: 8680,
    model: "SaaS",
    description: "Project management tool for freelance designers and agencies.",
    image: workspace6,
    category: "SaaS",
    verified: true,
    profitMargin: 72,
    teamSize: 3,
    timeToLaunch: "12 weeks",
    growthRate: 22,
    story: "David was a freelance designer who hated existing project management tools—they were either too complex (Jira) or too simple (Trello). He built a tool specifically for freelance designers with features like mood boards, client approval workflows, and invoice generation. He launched with a $29/month plan and grew through designer communities on Twitter and Dribbble. After 18 months, he had 1,070 paying customers and hired two contractors for support and feature development.",
    lessons: [
      "Build for a community you're already part of",
      "The best marketing is being genuinely helpful in niche communities",
      "Charge more than you think—$29/month is fine for B2B",
      "Feature requests from paying customers are gold",
      "Hire support before engineering—your time is better spent building"
    ],
    toolsUsed: ["Vercel", "Supabase", "Stripe", "Figma", "Linear"],
    revenueHistory: [
      { month: "Jan", revenue: 800 }, { month: "Feb", revenue: 1500 },
      { month: "Mar", revenue: 2800 }, { month: "Apr", revenue: 4200 },
      { month: "May", revenue: 6000 }, { month: "Jun", revenue: 8200 },
      { month: "Jul", revenue: 10500 }, { month: "Aug", revenue: 13000 },
      { month: "Sep", revenue: 15800 }, { month: "Oct", revenue: 18500 },
      { month: "Nov", revenue: 21000 }, { month: "Dec", revenue: 24000 },
      { month: "Jan Y2", revenue: 27000 }, { month: "Feb Y2", revenue: 29000 },
      { month: "Mar Y2", revenue: 31000 },
    ],
  },
];

export const categories = [
  "All",
  "SaaS",
  "E-commerce",
  "Agency",
  "Newsletters",
  "Micro-SaaS",
  "Content Sites",
];

export interface BusinessIdea {
  id: string;
  niche: string;
  difficulty: number;
  marketSize: string;
  trendReason: string;
  category: string;
  capitalRequired: string;
}

export const businessIdeas: BusinessIdea[] = [
  {
    id: "i1",
    niche: "AI Resume Builder",
    difficulty: 3,
    marketSize: "$2.4B",
    trendReason: "Job market is competitive; 73% of resumes are rejected by ATS. AI-powered formatting and optimization is in massive demand.",
    category: "Micro-SaaS",
    capitalRequired: "$0–$200",
  },
  {
    id: "i2",
    niche: "Pet Subscription Box",
    difficulty: 4,
    marketSize: "$6.1B",
    trendReason: "Pet ownership surged 15% post-pandemic. Recurring revenue model with high retention rates.",
    category: "E-commerce",
    capitalRequired: "$2,000–$5,000",
  },
  {
    id: "i3",
    niche: "Local SEO for Dentists",
    difficulty: 2,
    marketSize: "$890M",
    trendReason: "95% of dental patients search online first. Most dental practices have terrible websites and zero SEO.",
    category: "Agency",
    capitalRequired: "$0–$100",
  },
  {
    id: "i4",
    niche: "Notion Template Store",
    difficulty: 1,
    marketSize: "$340M",
    trendReason: "Notion has 30M+ users. Digital products have 95%+ margins and zero inventory.",
    category: "Content Sites",
    capitalRequired: "$0",
  },
  {
    id: "i5",
    niche: "B2B Cold Email Agency",
    difficulty: 3,
    marketSize: "$1.8B",
    trendReason: "Startups and SMBs need pipeline but can't afford enterprise sales teams. Done-for-you outbound is booming.",
    category: "Agency",
    capitalRequired: "$200–$500",
  },
  {
    id: "i6",
    niche: "Finance Newsletter for Gen Z",
    difficulty: 2,
    marketSize: "$520M",
    trendReason: "Gen Z is the first generation to start investing in their teens. Financial literacy content is exploding.",
    category: "Newsletters",
    capitalRequired: "$0–$50",
  },
  {
    id: "i7",
    niche: "Vertical SaaS for Gyms",
    difficulty: 4,
    marketSize: "$1.2B",
    trendReason: "Independent gyms are underserved by generic tools. Membership management + class booking is a clear pain point.",
    category: "SaaS",
    capitalRequired: "$1,000–$3,000",
  },
  {
    id: "i8",
    niche: "UGC Content Agency",
    difficulty: 2,
    marketSize: "$4.5B",
    trendReason: "Brands are shifting 40% of ad budgets to creator-style content. UGC outperforms polished ads by 3x on conversion.",
    category: "Agency",
    capitalRequired: "$0–$300",
  },
  {
    id: "i9",
    niche: "AI Chatbot for E-commerce",
    difficulty: 3,
    marketSize: "$3.1B",
    trendReason: "E-commerce stores lose 70% of carts. AI chat support recovers 15-25% of abandoned carts automatically.",
    category: "Micro-SaaS",
    capitalRequired: "$100–$500",
  },
  {
    id: "i10",
    niche: "Online Course for Excel",
    difficulty: 1,
    marketSize: "$410M",
    trendReason: "Excel skills are the #1 most requested skill by employers. Low competition in advanced Excel training.",
    category: "Content Sites",
    capitalRequired: "$0–$100",
  },
  {
    id: "i11",
    niche: "Sustainable Fashion Marketplace",
    difficulty: 5,
    marketSize: "$8.2B",
    trendReason: "Consumers aged 18-35 are 3x more likely to buy sustainable. Resale market growing 25% YoY.",
    category: "E-commerce",
    capitalRequired: "$5,000–$15,000",
  },
  {
    id: "i12",
    niche: "API Monitoring SaaS",
    difficulty: 4,
    marketSize: "$2.8B",
    trendReason: "API-first companies are growing 40% faster. Downtime monitoring is table stakes but most tools are overpriced.",
    category: "SaaS",
    capitalRequired: "$500–$2,000",
  },
];

export interface ToolEntry {
  id: string;
  name: string;
  description: string;
  category: string;
  rating: number;
  verdict: string;
  url: string;
  pricing: string;
}

export const toolEntries: ToolEntry[] = [
  {
    id: "t1", name: "Stripe", description: "Payment processing for internet businesses. Handles subscriptions, invoices, and global payouts.",
    category: "Payments", rating: 4.8, verdict: "The gold standard for online payments. Unbeatable developer experience.", url: "#", pricing: "2.9% + 30¢",
  },
  {
    id: "t2", name: "Shopify", description: "All-in-one commerce platform for starting, running, and growing a business online.",
    category: "E-commerce", rating: 4.6, verdict: "Best for non-technical founders who need a store up fast.", url: "#", pricing: "From $39/mo",
  },
  {
    id: "t3", name: "ConvertKit", description: "Email marketing platform built specifically for creators and small businesses.",
    category: "Email Marketing", rating: 4.5, verdict: "Perfect for newsletters and creator businesses. Clean automation builder.", url: "#", pricing: "Free up to 1k subs",
  },
  {
    id: "t4", name: "Vercel", description: "Frontend cloud platform for deploying web applications with zero configuration.",
    category: "Hosting", rating: 4.7, verdict: "Deploy in seconds. Best DX for React/Next.js projects.", url: "#", pricing: "Free tier available",
  },
  {
    id: "t5", name: "Notion", description: "All-in-one workspace for notes, docs, wikis, and project management.",
    category: "Productivity", rating: 4.4, verdict: "Great for SOPs and internal docs. Can replace 5 tools.", url: "#", pricing: "Free for personal",
  },
  {
    id: "t6", name: "Ahrefs", description: "SEO toolset for growing search traffic, researching competitors, and monitoring your niche.",
    category: "Marketing", rating: 4.7, verdict: "The most comprehensive SEO tool. Worth every penny for content sites.", url: "#", pricing: "From $99/mo",
  },
  {
    id: "t7", name: "Figma", description: "Collaborative interface design tool for teams building digital products.",
    category: "Design", rating: 4.8, verdict: "Industry standard for UI/UX design. Real-time collaboration is superb.", url: "#", pricing: "Free for individuals",
  },
  {
    id: "t8", name: "Supabase", description: "Open-source Firebase alternative with PostgreSQL, auth, and real-time subscriptions.",
    category: "Backend", rating: 4.6, verdict: "Best backend-as-a-service for indie hackers. Generous free tier.", url: "#", pricing: "Free tier available",
  },
  {
    id: "t9", name: "Linear", description: "Streamlined issue tracking and project management for software teams.",
    category: "Productivity", rating: 4.9, verdict: "The fastest project management tool. Beautiful UX sets the standard.", url: "#", pricing: "Free for small teams",
  },
  {
    id: "t10", name: "Framer", description: "No-code website builder with powerful animations and CMS capabilities.",
    category: "No-Code", rating: 4.3, verdict: "Best no-code option for marketing sites. Learning curve is worth it.", url: "#", pricing: "From $5/mo",
  },
  {
    id: "t11", name: "Loom", description: "Async video messaging for work. Record screen and camera instantly.",
    category: "Productivity", rating: 4.4, verdict: "Essential for remote teams and client communication.", url: "#", pricing: "Free up to 25 videos",
  },
  {
    id: "t12", name: "Beehiiv", description: "Newsletter platform built for growth with built-in referral programs and monetization.",
    category: "Email Marketing", rating: 4.5, verdict: "The new challenger to ConvertKit. Better growth features out of the box.", url: "#", pricing: "Free up to 2.5k subs",
  },
];

export const toolCategories = [
  "All",
  "Payments",
  "E-commerce",
  "Email Marketing",
  "Hosting",
  "Productivity",
  "Marketing",
  "Design",
  "Backend",
  "No-Code",
];

export const roadmapSteps = [
  {
    step: 1,
    title: "Pick a Niche",
    description: "Identify a profitable market with validated demand. Use our Idea Vault to find gaps.",
  },
  {
    step: 2,
    title: "Find Your Tools",
    description: "Select the right tech stack and tools. Browse our curated recommendations.",
  },
  {
    step: 3,
    title: "Build & Launch",
    description: "Follow our playbooks for step-by-step launch guides and SOPs.",
  },
  {
    step: 4,
    title: "Scale to $1k",
    description: "Learn growth tactics from founders who've done it. Verified case studies included.",
  },
];

export const revenueRanges = [
  { label: "$0 – $1k", min: 0, max: 1000 },
  { label: "$1k – $5k", min: 1000, max: 5000 },
  { label: "$5k – $10k", min: 5000, max: 10000 },
  { label: "$10k – $25k", min: 10000, max: 25000 },
  { label: "$25k+", min: 25000, max: Infinity },
];
