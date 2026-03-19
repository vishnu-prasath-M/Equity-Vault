export interface BusinessIdea {
  id: string;
  title: string;
  category: "weekend" | "nocode" | "saas" | "service" | "content";
  description: string;

  // Core Metrics
  potentialRevenue: string;
  initialInvestment: string;
  timeToFirstDollar: string;
  difficultyScore: number;
  marketSize: string;
  profitMargin: string;
  recommendedTools: string[];
  marketingChannel: string;
  scalingPotential: "Low" | "Medium" | "High";

  // New fields for Directory & Filtering
  startupCost: number;       // numeric USD for ?capital=low filter
  monthlyRevenue: number;    // numeric for sorting
  margin: string;            // e.g. "70%"
  growthMoM: string;         // e.g. "15% MoM"
  skillset: string;          // e.g. "No-code + Cold Email"
  monetizationStack: string; // e.g. "Stripe + Carrd + Beehiiv"
  marketTrend: string;       // e.g. "Growing at 22% CAGR"

  // Detailed Content
  executionPlaybook: {
    summary: string;
    steps: string[];
    tools: { name: string; url: string; logo: string }[];
    timeline: string;
    successStory: {
      founder: string;
      revenue: string;
      timeframe: string;
      strategy: string;
    };
  };

  // Metadata
  trending: boolean;
  tags: string[];
  lastUpdated: string;
}

export const detailedBusinessIdeas: BusinessIdea[] = [
  {
    id: "local-lead-gen-solar",
    title: "Local Lead Gen for Solar Installers",
    category: "service",
    description: "Build a directory of local solar installers, rank it on Google, then sell verified homeowner leads to installers at $30–80 per lead.",
    potentialRevenue: "$6,000-$12,000/mo",
    initialInvestment: "$200-$500",
    timeToFirstDollar: "3-6 weeks",
    difficultyScore: 2,
    marketSize: "$150B Solar Industry",
    profitMargin: "80%",
    recommendedTools: ["Webflow", "Google Ads", "Stripe", "Calendly"],
    marketingChannel: "SEO + Google Ads",
    scalingPotential: "High",
    startupCost: 300,
    monthlyRevenue: 8000,
    margin: "80%",
    growthMoM: "15% MoM",
    skillset: "SEO + Cold Email",
    monetizationStack: "Stripe + Webflow + Calendly",
    marketTrend: "Growing at 24% CAGR",
    executionPlaybook: {
      summary: "Rank a local solar installer directory, capture homeowner leads via a simple form, then sell those leads to installers on a per-lead basis.",
      steps: [
        "Build a Webflow site targeting 'solar installers [city]' keywords",
        "Install a lead capture form with Typeform or HubSpot Free",
        "Cold email 50 solar installers offering a 5 free leads trial",
        "Set up Stripe payments for $40/lead or $800/mo flat fee",
        "Scale by adding new cities with templated pages"
      ],
      tools: [
        { name: "Webflow", url: "https://webflow.com", logo: "https://clearbit.com/logo/webflow.com" },
        { name: "Stripe", url: "https://stripe.com", logo: "https://clearbit.com/logo/stripe.com" },
        { name: "Calendly", url: "https://calendly.com", logo: "https://clearbit.com/logo/calendly.com" }
      ],
      timeline: "6 weeks to first paid lead",
      successStory: {
        founder: "Mike S.",
        revenue: "$8,000/mo",
        timeframe: "3 months",
        strategy: "Ranked a Webflow directory for 3 Texas cities, sold leads to 12 installers at $55 each"
      }
    },
    trending: true,
    tags: ["Lead Gen", "Solar", "Local SEO"],
    lastUpdated: "2024-03-19"
  },
  {
    id: "newsletter-growth-agency",
    title: "Productized Newsletter Growth Agency",
    category: "service",
    description: "Help Beehiiv and Substack creators grow their newsletters using Meta ads and cross-promotions. Charge a flat monthly retainer.",
    potentialRevenue: "$8,000-$18,000/mo",
    initialInvestment: "$50-$200",
    timeToFirstDollar: "1-2 weeks",
    difficultyScore: 2,
    marketSize: "$20B Newsletter Economy",
    profitMargin: "85%",
    recommendedTools: ["Meta Ads Manager", "Beehiiv", "Notion", "Stripe"],
    marketingChannel: "Twitter + LinkedIn",
    scalingPotential: "High",
    startupCost: 100,
    monthlyRevenue: 12000,
    margin: "85%",
    growthMoM: "20% MoM",
    skillset: "Meta Ads + Email Copywriting",
    monetizationStack: "Stripe + Notion + Beehiiv",
    marketTrend: "Growing at 18% CAGR",
    executionPlaybook: {
      summary: "Run Meta ads for newsletter creators to grow their subscriber count, charging a flat monthly fee plus ad spend management.",
      steps: [
        "Grow your own newsletter to 1,000 subs to demonstrate expertise",
        "Create a case study showing cost-per-subscriber metrics",
        "Package service: $1,500/mo for up to $3k ad spend managed",
        "Reach out to 100 newsletter creators on Twitter/LinkedIn",
        "Upsell cross-promotion swaps between clients"
      ],
      tools: [
        { name: "Beehiiv", url: "https://beehiiv.com", logo: "https://clearbit.com/logo/beehiiv.com" },
        { name: "Meta", url: "https://meta.com", logo: "https://clearbit.com/logo/meta.com" },
        { name: "Notion", url: "https://notion.so", logo: "https://clearbit.com/logo/notion.so" }
      ],
      timeline: "2 weeks to first retainer",
      successStory: {
        founder: "Amir K.",
        revenue: "$12,000/mo",
        timeframe: "6 weeks",
        strategy: "Landed 8 newsletter clients at $1,500/mo each after posting a cost-per-subscriber case study on Twitter"
      }
    },
    trending: true,
    tags: ["Newsletter", "Meta Ads", "Growth Agency"],
    lastUpdated: "2024-03-19"
  },
  {
    id: "saas-church-management",
    title: "SaaS for Church Management",
    category: "saas",
    description: "A simple web app for churches to manage member directories, donations, and event scheduling — high retention, low churn niche.",
    potentialRevenue: "$4,000-$10,000/mo",
    initialInvestment: "$500-$1,500",
    timeToFirstDollar: "4-6 weeks",
    difficultyScore: 3,
    marketSize: "$5B Church Tech Market",
    profitMargin: "75%",
    recommendedTools: ["Bubble", "Stripe", "SendGrid", "Airtable"],
    marketingChannel: "Word of Mouth + Church Conferences",
    scalingPotential: "High",
    startupCost: 800,
    monthlyRevenue: 6000,
    margin: "75%",
    growthMoM: "10% MoM",
    skillset: "No-code (Bubble) + Sales",
    monetizationStack: "Stripe + Bubble + SendGrid",
    marketTrend: "Stable $5B niche, 95%+ retention",
    executionPlaybook: {
      summary: "Build a no-code church management SaaS with Bubble, handle member directories, donations tracking, and email communication.",
      steps: [
        "Interview 10 church admins about their biggest pain points",
        "Build MVP in Bubble covering donations + member directory",
        "Offer free 60-day trial to first 5 churches",
        "Price at $99/mo per church after trial",
        "Partner with church consultant networks for referrals"
      ],
      tools: [
        { name: "Bubble", url: "https://bubble.io", logo: "https://clearbit.com/logo/bubble.io" },
        { name: "Stripe", url: "https://stripe.com", logo: "https://clearbit.com/logo/stripe.com" },
        { name: "SendGrid", url: "https://sendgrid.com", logo: "https://clearbit.com/logo/sendgrid.com" }
      ],
      timeline: "6 weeks to first paying church",
      successStory: {
        founder: "Daniel Osei",
        revenue: "$6,800/mo",
        timeframe: "5 months",
        strategy: "Built in Bubble, onboarded 68 churches at $99/mo, near-zero churn due to sticky database feature"
      }
    },
    trending: false,
    tags: ["SaaS", "Niche", "High Retention"],
    lastUpdated: "2024-03-19"
  },
  {
    id: "faceless-youtube-luxury-travel",
    title: "Faceless YouTube: Luxury Travel Data",
    category: "content",
    description: "A faceless YouTube channel posting AI-narrated, data-driven luxury travel guides. High CPM ($15–30) due to affluent audience.",
    potentialRevenue: "$3,000-$9,000/mo",
    initialInvestment: "$100-$300",
    timeToFirstDollar: "4-8 weeks",
    difficultyScore: 2,
    marketSize: "$1.5T Travel Industry",
    profitMargin: "90%",
    recommendedTools: ["ElevenLabs", "Canva", "CapCut", "ChatGPT"],
    marketingChannel: "YouTube SEO",
    scalingPotential: "Medium",
    startupCost: 200,
    monthlyRevenue: 5000,
    margin: "90%",
    growthMoM: "25% MoM",
    skillset: "Video Editing + YouTube SEO",
    monetizationStack: "YouTube AdSense + Affiliate + Sponsorships",
    marketTrend: "Luxury travel searches +40% YoY",
    executionPlaybook: {
      summary: "Create a faceless YouTube channel using AI voiceovers and stock footage to publish luxury travel ranking videos targeting high-CPM keywords.",
      steps: [
        "Research high-CPM luxury travel keywords using TubeBuddy",
        "Script 10 videos using ChatGPT ($5k budget hotels, private jets, etc.)",
        "Generate voiceover with ElevenLabs ($22/mo)",
        "Edit with CapCut using stock Pexels/Storyblocks footage",
        "Post 2 videos/week consistently for 90 days"
      ],
      tools: [
        { name: "ElevenLabs", url: "https://elevenlabs.io", logo: "https://clearbit.com/logo/elevenlabs.io" },
        { name: "CapCut", url: "https://capcut.com", logo: "https://clearbit.com/logo/capcut.com" },
        { name: "Canva", url: "https://canva.com", logo: "https://clearbit.com/logo/canva.com" }
      ],
      timeline: "90 days to monetization threshold",
      successStory: {
        founder: "Anonymous Creator",
        revenue: "$5,200/mo",
        timeframe: "4 months",
        strategy: "Posted 48 videos in 4 months, reached 1,000 subs + 4,000 watch hours, CPM averaging $22"
      }
    },
    trending: true,
    tags: ["YouTube", "Faceless", "High CPM"],
    lastUpdated: "2024-03-19"
  },
  {
    id: "ai-resume-niche-markets",
    title: "AI-Powered Resume Builder for Niche Markets",
    category: "saas",
    description: "A targeted resume builder using AI for specific niches: nurses, software engineers, MBAs. Sell as one-time or subscription.",
    potentialRevenue: "$5,000-$15,000/mo",
    initialInvestment: "$300-$1,000",
    timeToFirstDollar: "2-3 weeks",
    difficultyScore: 3,
    marketSize: "$8B Career Services",
    profitMargin: "82%",
    recommendedTools: ["OpenAI API", "Carrd", "Stripe", "Beehiiv"],
    marketingChannel: "SEO + Reddit + LinkedIn",
    scalingPotential: "High",
    startupCost: 500,
    monthlyRevenue: 9000,
    margin: "82%",
    growthMoM: "12% MoM",
    skillset: "OpenAI API + Basic Web Dev",
    monetizationStack: "Stripe + Carrd + Beehiiv",
    marketTrend: "Growing at 22% CAGR",
    executionPlaybook: {
      summary: "Build a niche-specific resume builder using OpenAI to generate tailored bullet points and format checks for a specific profession.",
      steps: [
        "Pick one niche: nurses, software engineers, or MBAs",
        "Build a simple form interface using Carrd + OpenAI API",
        "Add Stripe for $19 one-time or $9/mo subscription",
        "Post on Reddit (r/nursing, r/cscareerquestions) with free trial offer",
        "Build email list with Beehiiv for repeat traffic"
      ],
      tools: [
        { name: "OpenAI", url: "https://openai.com", logo: "https://clearbit.com/logo/openai.com" },
        { name: "Stripe", url: "https://stripe.com", logo: "https://clearbit.com/logo/stripe.com" },
        { name: "Carrd", url: "https://carrd.co", logo: "https://clearbit.com/logo/carrd.co" }
      ],
      timeline: "2 weeks to first sale",
      successStory: {
        founder: "Priya M.",
        revenue: "$9,400/mo",
        timeframe: "3 months",
        strategy: "Built a nurse-specific resume tool, marketed on nursing Reddit and Facebook groups, 500 users at $19 one-time"
      }
    },
    trending: true,
    tags: ["AI", "SaaS", "Career Tech"],
    lastUpdated: "2024-03-19"
  },
  {
    id: "ai-audit-agency",
    title: "AI-Audit Agency for Law Firms",
    category: "service",
    description: "Automated compliance checking and document analysis for legal practices using AI",
    potentialRevenue: "$5,000-$15,000/mo",
    initialInvestment: "$500-$2,000",
    timeToFirstDollar: "2-4 weeks",
    difficultyScore: 3,
    marketSize: "$50B Legal Tech Industry",
    profitMargin: "70-85%",
    recommendedTools: ["OpenAI API", "DocumentDB", "Zapier", "Calendly"],
    marketingChannel: "Cold Outreach + LinkedIn",
    scalingPotential: "High",
    startupCost: 1000,
    monthlyRevenue: 10000,
    margin: "77%",
    growthMoM: "12% MoM",
    skillset: "AI Prompt Engineering + B2B Sales",
    monetizationStack: "Stripe + Notion + Calendly",
    marketTrend: "Legal AI growing at 35% CAGR",
    executionPlaybook: {
      summary: "Build an AI-powered service that audits legal documents for compliance issues, saving lawyers hundreds of hours.",
      steps: [
        "Research legal compliance requirements in your target niche",
        "Develop AI prompts for document analysis",
        "Create a simple dashboard using no-code tools",
        "Reach out to 50 law firms with personalized pitches",
        "Offer free audit to first 5 clients for testimonials"
      ],
      tools: [
        { name: "OpenAI", url: "https://openai.com", logo: "https://clearbit.com/logo/openai.com" },
        { name: "Zapier", url: "https://zapier.com", logo: "https://clearbit.com/logo/zapier.com" },
        { name: "Calendly", url: "https://calendly.com", logo: "https://clearbit.com/logo/calendly.com" }
      ],
      timeline: "3 months to $5k/mo",
      successStory: {
        founder: "Sarah Chen",
        revenue: "$12,000/mo",
        timeframe: "4 months",
        strategy: "Started with 10 free audits, used testimonials to land 20 paying clients at $600/mo each"
      }
    },
    trending: true,
    tags: ["AI", "Legal Tech", "B2B Service"],
    lastUpdated: "2024-03-19"
  },
  {
    id: "micro-saas-sheets",
    title: "Micro-SaaS for Google Sheets Users",
    category: "saas",
    description: "Add-on tools that automate repetitive tasks for Google Sheets power users",
    potentialRevenue: "$2,000-$8,000/mo",
    initialInvestment: "$100-$500",
    timeToFirstDollar: "1-2 weeks",
    difficultyScore: 2,
    marketSize: "$30B Productivity Software",
    profitMargin: "85-95%",
    recommendedTools: ["Google Apps Script", "Stripe", "Webflow", "ConvertKit"],
    marketingChannel: "SEO + Content Marketing",
    scalingPotential: "Medium",
    startupCost: 200,
    monthlyRevenue: 5000,
    margin: "90%",
    growthMoM: "8% MoM",
    skillset: "JavaScript + Google Apps Script",
    monetizationStack: "Stripe + Google Workspace Marketplace",
    marketTrend: "Workspace add-ons growing at 19% CAGR",
    executionPlaybook: {
      summary: "Create simple Google Sheets add-ons that solve specific automation problems for businesses.",
      steps: [
        "Identify repetitive tasks in Google Sheets workflows",
        "Build add-on using Google Apps Script",
        "Create landing page with demo video",
        "Publish to Google Workspace Marketplace",
        "Promote on YouTube tutorials and forums"
      ],
      tools: [
        { name: "Google Cloud", url: "https://cloud.google.com", logo: "https://clearbit.com/logo/cloud.google.com" },
        { name: "Stripe", url: "https://stripe.com", logo: "https://clearbit.com/logo/stripe.com" },
        { name: "Webflow", url: "https://webflow.com", logo: "https://clearbit.com/logo/webflow.com" }
      ],
      timeline: "6 weeks to first $1k",
      successStory: {
        founder: "Mike Rodriguez",
        revenue: "$6,500/mo",
        timeframe: "3 months",
        strategy: "Built a data validation add-on, marketed through YouTube tutorials showing real use cases"
      }
    },
    trending: true,
    tags: ["SaaS", "Google Sheets", "Productivity"],
    lastUpdated: "2024-03-19"
  },
  {
    id: "custom-gpt-law",
    title: "Custom GPT for Law Firms",
    category: "service",
    description: "Specialized AI assistants trained on specific legal domains for small law practices",
    potentialRevenue: "$3,000-$10,000/mo",
    initialInvestment: "$200-$1,000",
    timeToFirstDollar: "1-3 weeks",
    difficultyScore: 2,
    marketSize: "$40B Legal AI Market",
    profitMargin: "80-90%",
    recommendedTools: ["OpenAI API", "CustomGPT", "Notion", "Typeform"],
    marketingChannel: "LinkedIn + Referrals",
    scalingPotential: "Medium",
    startupCost: 500,
    monthlyRevenue: 6500,
    margin: "85%",
    growthMoM: "10% MoM",
    skillset: "Prompt Engineering + LinkedIn Outreach",
    monetizationStack: "Stripe + OpenAI + Typeform",
    marketTrend: "Legal AI adoption up 40% YoY",
    executionPlaybook: {
      summary: "Create and train custom GPT models for specific legal practice areas and sell as monthly subscriptions.",
      steps: [
        "Choose a legal niche (immigration, contracts, etc.)",
        "Gather and clean training documents",
        "Train custom GPT using OpenAI platform",
        "Create simple interface using no-code tools",
        "Offer free trials to 10 local law firms"
      ],
      tools: [
        { name: "OpenAI", url: "https://openai.com", logo: "https://clearbit.com/logo/openai.com" },
        { name: "Notion", url: "https://notion.so", logo: "https://clearbit.com/logo/notion.so" },
        { name: "Typeform", url: "https://typeform.com", logo: "https://clearbit.com/logo/typeform.com" }
      ],
      timeline: "4 weeks to first client",
      successStory: {
        founder: "Jennifer Wu",
        revenue: "$8,200/mo",
        timeframe: "2 months",
        strategy: "Specialized in immigration law GPT, got 15 paying firms at $550/mo through LinkedIn outreach"
      }
    },
    trending: false,
    tags: ["AI", "Legal Tech", "CustomGPT"],
    lastUpdated: "2024-03-19"
  },
  {
    id: "productized-design",
    title: "Productized Design Service",
    category: "nocode",
    description: "Fixed-price design packages for startups delivered on predictable schedules",
    potentialRevenue: "$4,000-$12,000/mo",
    initialInvestment: "$0-$300",
    timeToFirstDollar: "1-2 weeks",
    difficultyScore: 2,
    marketSize: "$20B Design Services",
    profitMargin: "75-85%",
    recommendedTools: ["Figma", "Notion", "Calendly", "Stripe"],
    marketingChannel: "Twitter + Portfolio",
    scalingPotential: "Medium",
    startupCost: 150,
    monthlyRevenue: 8000,
    margin: "80%",
    growthMoM: "11% MoM",
    skillset: "Figma Design + Twitter Marketing",
    monetizationStack: "Stripe + Notion + Calendly",
    marketTrend: "Productized services growing 30% YoY",
    executionPlaybook: {
      summary: "Offer standardized design packages at fixed prices instead of hourly billing.",
      steps: [
        "Define 3-5 specific design packages",
        "Create portfolio showcasing each package type",
        "Set up automated scheduling and payment",
        "Build waitlist with deposit system",
        "Deliver consistently to build reputation"
      ],
      tools: [
        { name: "Figma", url: "https://figma.com", logo: "https://clearbit.com/logo/figma.com" },
        { name: "Notion", url: "https://notion.so", logo: "https://clearbit.com/logo/notion.so" },
        { name: "Stripe", url: "https://stripe.com", logo: "https://clearbit.com/logo/stripe.com" }
      ],
      timeline: "2 weeks to first project",
      successStory: {
        founder: "Alex Kim",
        revenue: "$9,500/mo",
        timeframe: "3 months",
        strategy: "Created 3 packages ($2k, $5k, $10k), sold 8-10 projects per month through Twitter"
      }
    },
    trending: true,
    tags: ["Design", "Service", "Productized"],
    lastUpdated: "2024-03-19"
  },
  {
    id: "niche-newsletter-real-estate",
    title: "Niche Newsletter for Real Estate",
    category: "content",
    description: "Weekly insights on specific real estate markets with investment opportunities",
    potentialRevenue: "$1,500-$6,000/mo",
    initialInvestment: "$50-$200",
    timeToFirstDollar: "1-2 weeks",
    difficultyScore: 1,
    marketSize: "$15B Newsletter Market",
    profitMargin: "90-95%",
    recommendedTools: ["Substack", "Beehiiv", "Twitter", "Canva"],
    marketingChannel: "Twitter + SEO",
    scalingPotential: "Medium",
    startupCost: 100,
    monthlyRevenue: 4000,
    margin: "92%",
    growthMoM: "14% MoM",
    skillset: "Writing + Real Estate Knowledge",
    monetizationStack: "Beehiiv Paid Subs + Sponsorships",
    marketTrend: "Paid newsletter market growing at 15% CAGR",
    executionPlaybook: {
      summary: "Build a paid newsletter analyzing specific real estate markets and investment opportunities.",
      steps: [
        "Choose a specific real estate niche (commercial, residential, etc.)",
        "Create 10 free sample issues to build audience",
        "Set up paid subscription with Beehiiv",
        "Promote on Twitter and real estate forums",
        "Monetize with sponsorships and affiliate deals"
      ],
      tools: [
        { name: "Beehiiv", url: "https://beehiiv.com", logo: "https://clearbit.com/logo/beehiiv.com" },
        { name: "Twitter", url: "https://twitter.com", logo: "https://clearbit.com/logo/twitter.com" },
        { name: "Canva", url: "https://canva.com", logo: "https://clearbit.com/logo/canva.com" }
      ],
      timeline: "6 weeks to first $1k",
      successStory: {
        founder: "Marcus Thompson",
        revenue: "$4,200/mo",
        timeframe: "4 months",
        strategy: "Focused on multifamily properties, grew to 2,000 free subscribers, 200 paid at $21/mo"
      }
    },
    trending: false,
    tags: ["Newsletter", "Real Estate", "Content"],
    lastUpdated: "2024-03-19"
  },
  {
    id: "chrome-extension-productivity",
    title: "Chrome Extension for Productivity",
    category: "weekend",
    description: "Simple browser extensions that solve specific productivity pain points",
    potentialRevenue: "$500-$3,000/mo",
    initialInvestment: "$0-$100",
    timeToFirstDollar: "3-7 days",
    difficultyScore: 2,
    marketSize: "$25B Browser Extensions",
    profitMargin: "80-95%",
    recommendedTools: ["JavaScript", "Chrome Web Store", "Stripe", "GitHub"],
    marketingChannel: "Product Hunt + Reddit",
    scalingPotential: "Low",
    startupCost: 50,
    monthlyRevenue: 1800,
    margin: "90%",
    growthMoM: "5% MoM",
    skillset: "JavaScript + Product Hunt Launch",
    monetizationStack: "Chrome Web Store + Stripe",
    marketTrend: "Browser extension market +12% YoY",
    executionPlaybook: {
      summary: "Build and monetize simple Chrome extensions that solve everyday productivity problems.",
      steps: [
        "Identify a repetitive browser task to automate",
        "Build the extension using basic JavaScript",
        "Submit to Chrome Web Store",
        "Promote on Product Hunt and relevant subreddits",
        "Add premium features for paid version"
      ],
      tools: [
        { name: "GitHub", url: "https://github.com", logo: "https://clearbit.com/logo/github.com" },
        { name: "Stripe", url: "https://stripe.com", logo: "https://clearbit.com/logo/stripe.com" },
        { name: "Product Hunt", url: "https://producthunt.com", logo: "https://clearbit.com/logo/producthunt.com" }
      ],
      timeline: "1 weekend to launch",
      successStory: {
        founder: "David Park",
        revenue: "$1,800/mo",
        timeframe: "6 weeks",
        strategy: "Built a tab organizer extension, got 50k downloads, 2% converted to $3/mo premium"
      }
    },
    trending: true,
    tags: ["Chrome Extension", "Productivity", "Weekend"],
    lastUpdated: "2024-03-19"
  },
  {
    id: "automation-consulting-local",
    title: "Automation Consulting for Local Businesses",
    category: "service",
    description: "Help small businesses automate repetitive tasks using no-code tools",
    potentialRevenue: "$3,000-$9,000/mo",
    initialInvestment: "$100-$500",
    timeToFirstDollar: "1-3 weeks",
    difficultyScore: 2,
    marketSize: "$35B Business Automation",
    profitMargin: "70-80%",
    recommendedTools: ["Zapier", "Make", "Calendly", "Notion"],
    marketingChannel: "Local Networking + Referrals",
    scalingPotential: "Medium",
    startupCost: 300,
    monthlyRevenue: 6000,
    margin: "75%",
    growthMoM: "9% MoM",
    skillset: "Zapier / Make + Local Networking",
    monetizationStack: "Monthly Retainer + Zapier",
    marketTrend: "SMB automation growing at 23% CAGR",
    executionPlaybook: {
      summary: "Consult with local businesses to automate their workflows using no-code automation tools.",
      steps: [
        "Research local businesses with manual processes",
        "Create automation proposals using Zapier/Make",
        "Offer free automation audit to first 5 clients",
        "Charge monthly retainer for ongoing support",
        "Build case studies from successful automations"
      ],
      tools: [
        { name: "Zapier", url: "https://zapier.com", logo: "https://clearbit.com/logo/zapier.com" },
        { name: "Make", url: "https://make.com", logo: "https://clearbit.com/logo/make.com" },
        { name: "Notion", url: "https://notion.so", logo: "https://clearbit.com/logo/notion.so" }
      ],
      timeline: "3 weeks to first client",
      successStory: {
        founder: "Lisa Martinez",
        revenue: "$6,800/mo",
        timeframe: "2 months",
        strategy: "Automated 12 local restaurants, charged $500/mo each for ongoing support"
      }
    },
    trending: false,
    tags: ["Consulting", "Automation", "Local Business"],
    lastUpdated: "2024-03-19"
  },
  {
    id: "notion-templates-creators",
    title: "Notion Templates for Creators",
    category: "nocode",
    description: "Pre-built Notion workspaces for content creators and influencers",
    potentialRevenue: "$1,000-$4,000/mo",
    initialInvestment: "$0-$100",
    timeToFirstDollar: "1-2 weeks",
    difficultyScore: 1,
    marketSize: "$10B Creator Economy",
    profitMargin: "85-95%",
    recommendedTools: ["Notion", "Gumroad", "Twitter", "Canva"],
    marketingChannel: "Twitter + TikTok",
    scalingPotential: "Low",
    startupCost: 0,
    monthlyRevenue: 2800,
    margin: "93%",
    growthMoM: "7% MoM",
    skillset: "Notion + Social Media Marketing",
    monetizationStack: "Gumroad + Twitter Audience",
    marketTrend: "Digital products growing at 17% CAGR",
    executionPlaybook: {
      summary: "Create and sell specialized Notion templates for content creator workflows.",
      steps: [
        "Research creator pain points in content organization",
        "Build comprehensive Notion templates",
        "Create video tutorials for each template",
        "Sell on Gumroad with tiered pricing",
        "Promote through creator communities"
      ],
      tools: [
        { name: "Notion", url: "https://notion.so", logo: "https://clearbit.com/logo/notion.so" },
        { name: "Gumroad", url: "https://gumroad.com", logo: "https://clearbit.com/logo/gumroad.com" },
        { name: "Twitter", url: "https://twitter.com", logo: "https://clearbit.com/logo/twitter.com" }
      ],
      timeline: "1 week to first sale",
      successStory: {
        founder: "Rachel Green",
        revenue: "$2,800/mo",
        timeframe: "3 weeks",
        strategy: "Created 5 templates for YouTubers, sold 200+ copies at $15-47 each through Twitter"
      }
    },
    trending: false,
    tags: ["Notion", "Templates", "Creators"],
    lastUpdated: "2024-03-19"
  },
  {
    id: "whatsapp-marketing-agency",
    title: "WhatsApp Marketing Agency",
    category: "service",
    description: "Manage WhatsApp marketing campaigns for local service businesses",
    potentialRevenue: "$4,000-$12,000/mo",
    initialInvestment: "$200-$800",
    timeToFirstDollar: "2-4 weeks",
    difficultyScore: 3,
    marketSize: "$45B Messaging Marketing",
    profitMargin: "65-75%",
    recommendedTools: ["WhatsApp Business API", "ManyChat", "Calendly", "Notion"],
    marketingChannel: "Local Networking + LinkedIn",
    scalingPotential: "High",
    startupCost: 400,
    monthlyRevenue: 8500,
    margin: "70%",
    growthMoM: "18% MoM",
    skillset: "WhatsApp API + Campaign Management",
    monetizationStack: "Monthly Retainer + ManyChat",
    marketTrend: "WhatsApp business messaging +35% YoY",
    executionPlaybook: {
      summary: "Help local service businesses acquire customers through targeted WhatsApp marketing campaigns.",
      steps: [
        "Get certified in WhatsApp Business API",
        "Create campaign templates for different industries",
        "Partner with 5 local businesses for pilot programs",
        "Track and optimize campaign metrics",
        "Scale through referrals and case studies"
      ],
      tools: [
        { name: "WhatsApp", url: "https://whatsapp.com", logo: "https://clearbit.com/logo/whatsapp.com" },
        { name: "ManyChat", url: "https://manychat.com", logo: "https://clearbit.com/logo/manychat.com" },
        { name: "Notion", url: "https://notion.so", logo: "https://clearbit.com/logo/notion.so" }
      ],
      timeline: "1 month to first client",
      successStory: {
        founder: "Carlos Mendez",
        revenue: "$8,500/mo",
        timeframe: "3 months",
        strategy: "Started with dentists and spas, expanded to 20 clients paying $400-600/mo each"
      }
    },
    trending: true,
    tags: ["WhatsApp", "Marketing", "Local Business"],
    lastUpdated: "2024-03-19"
  },
  {
    id: "tiktok-shop-consulting",
    title: "TikTok Shop Consulting",
    category: "service",
    description: "Help brands set up and optimize their TikTok Shop for direct sales",
    potentialRevenue: "$2,000-$8,000/mo",
    initialInvestment: "$100-$500",
    timeToFirstDollar: "1-3 weeks",
    difficultyScore: 2,
    marketSize: "$30B Social Commerce",
    profitMargin: "80-90%",
    recommendedTools: ["TikTok Shop", "Canva", "Calendly", "Notion"],
    marketingChannel: "TikTok + Instagram",
    scalingPotential: "Medium",
    startupCost: 200,
    monthlyRevenue: 5500,
    margin: "85%",
    growthMoM: "22% MoM",
    skillset: "TikTok Marketing + E-commerce",
    monetizationStack: "Setup Fee + Monthly Retainer",
    marketTrend: "TikTok Shop GMV growing 150% YoY",
    executionPlaybook: {
      summary: "Consult with brands to set up and optimize their TikTok Shop for maximum sales.",
      steps: [
        "Get certified in TikTok Shop management",
        "Create portfolio of successful case studies",
        "Reach out to 50 brands with TikTok presence",
        "Offer setup fee + monthly retainer",
        "Track and share performance metrics"
      ],
      tools: [
        { name: "TikTok", url: "https://tiktok.com", logo: "https://clearbit.com/logo/tiktok.com" },
        { name: "Canva", url: "https://canva.com", logo: "https://clearbit.com/logo/canva.com" },
        { name: "Notion", url: "https://notion.so", logo: "https://clearbit.com/logo/notion.so" }
      ],
      timeline: "2 weeks to first client",
      successStory: {
        founder: "Sophie Lee",
        revenue: "$5,500/mo",
        timeframe: "6 weeks",
        strategy: "Helped 12 brands set up shops, charged $1k setup + $400/mo retainer each"
      }
    },
    trending: true,
    tags: ["TikTok", "E-commerce", "Consulting"],
    lastUpdated: "2024-03-19"
  },
  {
    id: "no-code-app-builder",
    title: "No-Code App Builder Service",
    category: "nocode",
    description: "Build custom apps for businesses using Bubble, Adalo, or Webflow",
    potentialRevenue: "$4,000-$12,000/mo",
    initialInvestment: "$300-$1,000",
    timeToFirstDollar: "2-4 weeks",
    difficultyScore: 3,
    marketSize: "$35B No-Code Development",
    profitMargin: "70-80%",
    recommendedTools: ["Bubble", "Webflow", "Figma", "Stripe"],
    marketingChannel: "LinkedIn + Portfolio",
    scalingPotential: "High",
    startupCost: 500,
    monthlyRevenue: 9800,
    margin: "75%",
    growthMoM: "13% MoM",
    skillset: "Bubble / Webflow + Project Management",
    monetizationStack: "Project Fee + Maintenance Retainer",
    marketTrend: "No-code market growing at 28% CAGR",
    executionPlaybook: {
      summary: "Build custom applications for businesses using no-code platforms and charge project fees.",
      steps: [
        "Master 2-3 no-code platforms (Bubble, Webflow)",
        "Build portfolio of sample applications",
        "Partner with businesses needing custom solutions",
        "Charge $5k-15k per project based on complexity",
        "Offer maintenance retainers for ongoing support"
      ],
      tools: [
        { name: "Bubble", url: "https://bubble.io", logo: "https://clearbit.com/logo/bubble.io" },
        { name: "Webflow", url: "https://webflow.com", logo: "https://clearbit.com/logo/webflow.com" },
        { name: "Figma", url: "https://figma.com", logo: "https://clearbit.com/logo/figma.com" }
      ],
      timeline: "3 weeks to first project",
      successStory: {
        founder: "Jason Miller",
        revenue: "$9,800/mo",
        timeframe: "4 months",
        strategy: "Built 6 apps for small businesses, average $8k per project, 2 maintenance retainers"
      }
    },
    trending: true,
    tags: ["No-Code", "Bubble", "App Development"],
    lastUpdated: "2024-03-19"
  },
  {
    id: "email-marketing-automation",
    title: "Email Marketing Automation",
    category: "service",
    description: "Set up automated email sequences for small businesses to nurture leads",
    potentialRevenue: "$3,000-$8,000/mo",
    initialInvestment: "$200-$600",
    timeToFirstDollar: "2-3 weeks",
    difficultyScore: 2,
    marketSize: "$30B Email Marketing",
    profitMargin: "75-85%",
    recommendedTools: ["Mailchimp", "ConvertKit", "Zapier", "Notion"],
    marketingChannel: "LinkedIn + Referrals",
    scalingPotential: "Medium",
    startupCost: 400,
    monthlyRevenue: 5800,
    margin: "80%",
    growthMoM: "9% MoM",
    skillset: "Email Copywriting + Automation Tools",
    monetizationStack: "Setup Fee + Monthly Management",
    marketTrend: "Email marketing ROI $42 per $1 spent",
    executionPlaybook: {
      summary: "Create automated email sequences that convert leads into customers for small businesses.",
      steps: [
        "Master email marketing best practices",
        "Create sequence templates for different industries",
        "Offer free audit of current email systems",
        "Set up sequences using Mailchimp/ConvertKit",
        "Charge setup fee + monthly management"
      ],
      tools: [
        { name: "Mailchimp", url: "https://mailchimp.com", logo: "https://clearbit.com/logo/mailchimp.com" },
        { name: "ConvertKit", url: "https://convertkit.com", logo: "https://clearbit.com/logo/convertkit.com" },
        { name: "Zapier", url: "https://zapier.com", logo: "https://clearbit.com/logo/zapier.com" }
      ],
      timeline: "3 weeks to first setup",
      successStory: {
        founder: "Nicole Brown",
        revenue: "$5,800/mo",
        timeframe: "4 weeks",
        strategy: "Set up sequences for 12 businesses, $500 setup + $300/mo management each"
      }
    },
    trending: false,
    tags: ["Email Marketing", "Automation", "Small Business"],
    lastUpdated: "2024-03-19"
  },
  {
    id: "shopify-store-setup",
    title: "Shopify Store Setup Service",
    category: "service",
    description: "Complete Shopify store setup for entrepreneurs who want to start e-commerce",
    potentialRevenue: "$3,000-$10,000/mo",
    initialInvestment: "$300-$1,000",
    timeToFirstDollar: "2-4 weeks",
    difficultyScore: 2,
    marketSize: "$40B E-commerce Services",
    profitMargin: "75-85%",
    recommendedTools: ["Shopify", "Canva", "Google Analytics", "Mailchimp"],
    marketingChannel: "LinkedIn + Facebook Groups",
    scalingPotential: "Medium",
    startupCost: 600,
    monthlyRevenue: 7500,
    margin: "80%",
    growthMoM: "11% MoM",
    skillset: "Shopify + Canva + Client Management",
    monetizationStack: "Project Fee + Optimization Retainer",
    marketTrend: "E-commerce growing at 14% CAGR",
    executionPlaybook: {
      summary: "Set up complete Shopify stores for entrepreneurs including design, products, and marketing integrations.",
      steps: [
        "Become Shopify expert and get certified",
        "Create store setup packages and pricing",
        "Build portfolio of successful stores",
        "Partner with business coaches and consultants",
        "Offer ongoing optimization services"
      ],
      tools: [
        { name: "Shopify", url: "https://shopify.com", logo: "https://clearbit.com/logo/shopify.com" },
        { name: "Canva", url: "https://canva.com", logo: "https://clearbit.com/logo/canva.com" },
        { name: "Google", url: "https://google.com", logo: "https://clearbit.com/logo/google.com" }
      ],
      timeline: "3 weeks to first store",
      successStory: {
        founder: "Brian Anderson",
        revenue: "$7,500/mo",
        timeframe: "5 weeks",
        strategy: "Set up 6 stores at $1,200 each, 3 monthly optimization retainers at $1,100/mo"
      }
    },
    trending: true,
    tags: ["Shopify", "E-commerce", "Store Setup"],
    lastUpdated: "2024-03-19"
  }
];
