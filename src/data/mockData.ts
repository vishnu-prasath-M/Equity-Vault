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
  model: string;
  description: string;
  image: string;
  category: string;
  verified: boolean;
  profitMargin: number;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "How Sarah built a $12,400/mo SEO Agency in 14 months",
    founder: "Sarah Chen",
    revenue: 12400,
    model: "Agency",
    description: "From freelancer to agency owner with a team of 5 remote specialists.",
    image: workspace1,
    category: "Agency",
    verified: true,
    profitMargin: 62,
  },
  {
    id: "2",
    title: "From side project to $8,200/mo with a Micro-SaaS tool",
    founder: "Marcus Webb",
    revenue: 8200,
    model: "Micro-SaaS",
    description: "A simple Chrome extension for email productivity that grew organically.",
    image: workspace2,
    category: "Micro-SaaS",
    verified: true,
    profitMargin: 89,
  },
  {
    id: "3",
    title: "Building a $15,800/mo newsletter in the finance niche",
    founder: "Elena Rodriguez",
    revenue: 15800,
    model: "Newsletter",
    description: "Monetized through sponsorships and a premium paid tier.",
    image: workspace3,
    category: "Newsletters",
    verified: true,
    profitMargin: 78,
  },
  {
    id: "4",
    title: "A $22,000/mo e-commerce brand built on organic TikTok",
    founder: "James Okafor",
    revenue: 22000,
    model: "E-commerce",
    description: "Sustainable home goods brand with zero paid advertising.",
    image: workspace4,
    category: "E-commerce",
    verified: true,
    profitMargin: 34,
  },
  {
    id: "5",
    title: "Scaling a content site to $6,500/mo with programmatic SEO",
    founder: "Priya Sharma",
    revenue: 6500,
    model: "Content Site",
    description: "A niche comparison site generating revenue through affiliate partnerships.",
    image: workspace5,
    category: "Content Sites",
    verified: true,
    profitMargin: 91,
  },
  {
    id: "6",
    title: "How a solo dev built a $31,000/mo SaaS in 18 months",
    founder: "David Kim",
    revenue: 31000,
    model: "SaaS",
    description: "Project management tool for freelance designers and agencies.",
    image: workspace6,
    category: "SaaS",
    verified: true,
    profitMargin: 72,
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

export const tools = [
  { name: "Stripe", description: "Payment processing for internet businesses", category: "Payments", url: "#" },
  { name: "Shopify", description: "Commerce platform for online stores", category: "E-commerce", url: "#" },
  { name: "Notion", description: "All-in-one workspace for notes and docs", category: "Productivity", url: "#" },
  { name: "Vercel", description: "Frontend cloud for web applications", category: "Hosting", url: "#" },
  { name: "ConvertKit", description: "Email marketing for creators", category: "Marketing", url: "#" },
  { name: "Figma", description: "Collaborative interface design tool", category: "Design", url: "#" },
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
