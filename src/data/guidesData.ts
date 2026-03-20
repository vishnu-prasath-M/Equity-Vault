import { BookOpen, CreditCard, Rocket, Users, Target, Zap, Shield, Globe } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface Guide {
    slug: string;
    iconName: string;
    heading: string;
    readingTime: string;
    complexity: "Beginner" | "Intermediate" | "Advanced";
    category: string;
    summary: string;
    phaseId: "phase-1" | "phase-2" | "phase-3" | "phase-4";
    content: string; // HTML or Markdown for the detail page
}

export interface Phase {
    id: "phase-1" | "phase-2" | "phase-3" | "phase-4";
    title: string;
    description: string;
}

export const academicPhases: Phase[] = [
    {
        id: "phase-1",
        title: "Phase 1: Foundations",
        description: "Idea Validation, Legal Setup, Domain/Branding",
    },
    {
        id: "phase-2",
        title: "Phase 2: Build & Launch",
        description: "MVP Development, Landing Pages, First 10 Customers",
    },
    {
        id: "phase-3",
        title: "Phase 3: Growth & Marketing",
        description: "SEO Playbooks, Paid Ads, Content Strategy",
    },
    {
        id: "phase-4",
        title: "Phase 4: Operations & Scale",
        description: "Hiring VAs, Automation Workflows, Financial Management",
    },
];

export const getIconElement = (name: string): LucideIcon => {
    const iconMap: Record<string, LucideIcon> = {
        Target: Target,
        CreditCard: CreditCard,
        Rocket: Rocket,
        Users: Users,
        BookOpen: BookOpen,
        Zap: Zap,
        Shield: Shield,
        Globe: Globe,
    };
    return iconMap[name] || BookOpen;
};

export const guidesData: Guide[] = [
    {
        slug: "validate-saas-idea-meta-ads",
        iconName: "Target",
        heading: "How to validate a SaaS idea for under $100 using Meta Ads.",
        readingTime: "8 mins",
        complexity: "Intermediate",
        category: "Marketing",
        summary: "A step-by-step SOP on using rapid Meta Ad testing to capture pre-launch intent before writing a single line of code.",
        phaseId: "phase-1",
        content: `
      <h2>The Problem with Building First</h2>
      <p>Most founders spend 3-6 months building an MVP only to realize no one wants it. The smarter approach? Test the <em>intent</em> to buy before you build.</p>
      
      <h3>Step 1: The Landing Page (The "Painted Door")</h3>
      <p>Set up a simple Carrd or Framer landing page. State the problem you're solving, the solution, and add a pricing table. When users click "Buy Now" or "Start Trial", show them a modal: <strong>"We're currently in invite-only beta. Enter your email to get early access."</strong></p>
      <p>This measures actual purchase intent, not just casual interest.</p>

      <h3>Step 2: The Meta Ad Setup</h3>
      <p>Create a Meta Ads campaign optimized for "Leads" or "Conversions" (if you're tracking the button click). Use a broad audience targeting interests relevant to your niche. Set the budget to $15-$20/day.</p>

      <h3>Step 3: The Ad Creatives</h3>
      <ul>
        <li><strong>Creative 1 (The Problem):</strong> "Tired of spending 10 hours a week on X? We built a tool that does it in 5 minutes."</li>
        <li><strong>Creative 2 (The Solution):</strong> "Automate X with replacing manual work with AI."</li>
        <li><strong>Creative 3 (The Outcome):</strong> "How [Target Audience] are saving $1,000/mo on X."</li>
      </ul>

      <h3>Step 4: Analyzing the Data</h3>
      <p>Run the ads for 3-5 days. If your Cost Per Click (CPC) is under $1.50 and your landing page converts clicks to emails at >10%, you have strong validation. If not, pivot the messaging or the idea entirely.</p>
    `,
    },
    {
        slug: "stripe-checkout-zero-code",
        iconName: "CreditCard",
        heading: "Setting up a Stripe-enabled checkout with zero-code automation.",
        readingTime: "12 mins",
        complexity: "Beginner",
        category: "Operations",
        summary: "Deploy a production-ready payment flow using Stripe Payment Links and Zapier without touching your codebase.",
        phaseId: "phase-2",
        content: `
      <h2>Why No-Code Checkout?</h2>
      <p>Integrating Stripe manually via their API requires handling webhooks, customer creation, and error states. For your first 100 customers, Stripe Payment Links combined with Zapier is faster and equally robust.</p>

      <h3>Step 1: Stripe Payment Links</h3>
      <p>Go to your Stripe Dashboard > Products. Create your product and pricing (subscription or one-time). Click "Create payment link". Customize the checkout page with your branding.</p>

      <h3>Step 2: Handling Fulfillment</h3>
      <p>Once a user pays, you need to deliver the product or grant access. This is where Zapier comes in. Set up a Zap with the trigger: <strong>Stripe - New Payment</strong>.</p>

      <h3>Step 3: The Automation Workflow</h3>
      <p>Connect your fulfillment tool (e.g., Mailchimp, Discord, Memberstack, or just a simple Gmail email). Pass the customer's email from the Stripe trigger to your action step.</p>
      <ul>
        <li><strong>Action 1:</strong> Send Welcome Email with login details or download link.</li>
        <li><strong>Action 2:</strong> Add to Customer Mailing List.</li>
        <li><strong>Action 3:</strong> Send a Slack notification to yourself: "New customer! 🎉"</li>
      </ul>

      <h3>Limitations</h3>
      <p>As you scale and need complex pricing tiers, usage-based billing, or in-app proration, you'll need a custom integration or a tool like Stripe Billing portal. But this setup will easily get you to $10k MRR.</p>
    `,
    },
    {
        slug: "cold-outreach-playbook",
        iconName: "Rocket",
        heading: "The Cold Outreach Playbook: Getting high-ticket clients on LinkedIn.",
        readingTime: "15 mins",
        complexity: "Advanced",
        category: "Sales",
        summary: "The exact sequence and scripts used to book 15+ meetings a month with enterprise decision-makers on autopilot.",
        phaseId: "phase-3",
        content: `
      <h2>The Anatomy of a Perfect Cold Message</h2>
      <p>Cold outreach fails because it's generic and self-serving. To win on LinkedIn, your outreach must be hyper-personalized and offer immediate, undeniable value (a "Lead Magnet").</p>

      <h3>Phase 1: Profile Optimization</h3>
      <p>Before sending a single message, your profile must act as a high-converting landing page. Your headline should be a value proposition, not a job title. Replace "Founder at X" with "Helping SaaS companies increase retention by 20% in 90 days."</p>

      <h3>Phase 2: The Multi-Touch Sequence</h3>
      <p>Using an automation tool (like HeyReach or Lemlist), set up this sequence:</p>
      <ul>
        <li><strong>Day 1 (Profile View):</strong> Automatically view their profile. They get a notification and see your optimized headline.</li>
        <li><strong>Day 2 (Connection Request):</strong> Send a blank request. Counterintuitively, blank requests often have higher acceptance rates than pitched ones.</li>
        <li><strong>Day 3 (Message 1 - The Value Offer):</strong> "Hey [Name], saw you're navigating [specific industry challenge]. We just put together a free tear-down on how [Competitor] solved this. Want me to send it over?"</li>
        <li><strong>Day 7 (Message 2 - The Follow-up):</strong> "Bumping this up. No worries if it's not a priority right now."</li>
      </ul>

      <h3>Phase 3: Handling the Reply</h3>
      <p>When they say "Yes", do NOT pitch immediately. Send the value asset (a Loom video, a PDF guide, or a quick audit). Follow up 2 days later: "Did you find the insights on page 3 useful? We implement this for companies like yours. Open to a 10-min chat next Tuesday?"</p>
    `,
    },
    {
        slug: "hire-remote-filipino-va",
        iconName: "Users",
        heading: "How to hire and manage a remote Filipino VA for $5/hour.",
        readingTime: "10 mins",
        complexity: "Intermediate",
        category: "Management",
        summary: "Offload 80% of your administrative tasks efficiently with a rock-solid hiring funnel and management SOP.",
        phaseId: "phase-4",
        content: `
      <h2>Why the Philippines?</h2>
      <p>High English proficiency, a strong cultural alignment with Western business practices, and an affordable cost of living make the Philippines the premier destination for remote talent.</p>

      <h3>Step 1: Sourcing Talent</h3>
      <p>Avoid Fiverr or Upwork for long-term hires (fees are too high). Use OnlineJobs.ph. Post a highly detailed job description outlining exact tasks (e.g., "Inbox management, basic data entry in Airtable, customer support replies").</p>

      <h3>Step 2: The Filtering Funnel</h3>
      <p>You will get hundreds of applicants. Filter them ruthlessly:</p>
      <ol>
        <li><strong>The Hidden Instruction:</strong> In the middle of your job post, write: "Include the word 'BLUE' in the subject line." Discard anyone who fails this.</li>
        <li><strong>The Test Task:</strong> Send the top 10 candidates a paid 1-hour test task that mimics the actual job. Evaluate for speed, communication, and accuracy.</li>
        <li><strong>The Interview:</strong> Interview the top 3 on Zoom. Focus on verifying their internet connection speed, camera presence, and cultural fit.</li>
      </ol>

      <h3>Step 3: Onboarding and Management</h3>
      <p>Your VA will only be as good as your SOPs (Standard Operating Procedures). Record Loom videos for every single task. Store these in a Notion wiki.</p>
      <p>Set a daily standup routine. They should send an End of Day (EOD) report via Slack: What was done, what is blocked, and questions they have.</p>
    `,
    }
];
