export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  thumbnail: string;
  heroImage: string;
  beforeImage?: string;
  afterImage?: string;
  role: string;
  timeline: string;
  context: string;
  problem: string;
  problemGoal: string;
  researchInsights: string[];
  uxDecisions: {
    decision: string;
    reasoning: string;
  }[];
  finalUI: string[];
  impact: string[];
}

export const projects: CaseStudy[] = [
  {
    id: "safco-dental",
    title: "Safco Dental Supply",
    category: "E-commerce & Enterprise",
    shortDescription: "Redesigning the B2B purchasing experience for one of the largest dental suppliers in the US.",
    thumbnail: "https://picsum.photos/seed/safco/800/600",
    heroImage: "https://picsum.photos/seed/safco-hero/1920/1080",
    beforeImage: "https://picsum.photos/seed/safco-before/800/600",
    afterImage: "https://picsum.photos/seed/safco-after/800/600",
    role: "Lead Product Designer",
    timeline: "6 Months",
    context: "Safco Dental Supply needed to modernize their aging legacy platform. As a leading B2B distributor, their primary challenge was a complex, high-friction ordering process that resulted in significant customer support overhead and cart abandonment among power-user dental offices.",
    problem: "The legacy search and checkout experience was so fragmented that 35% of orders required manual intervention from sales reps to complete.",
    problemGoal: "Create a fast, friction-less 'Professional Ordering' experience that allows dental staff to complete a 50+ item order in under 3 minutes.",
    researchInsights: [
      "Dentists don't 'shop'—they 'replenish'. Speed of entry is more important than visual discovery.",
      "Inventory transparency is critical; users would rather see 'Out of Stock' than discover it during checkout.",
      "The 'Quick Order' feature was the most used but most buggy part of the existing site."
    ],
    uxDecisions: [
      {
        decision: "Predictive Search & Bulk Entry",
        reasoning: "We replaced the standard search with a multi-add interface that allows users to type SKU numbers directly and add to cart without page reloads."
      },
      {
        decision: "One-Page Enterprise Checkout",
        reasoning: "Consolidated a 5-step process into a single dynamic view, handling complex tax exemptions and multi-location shipping accounts."
      },
      {
        decision: "Inventory-First Navigation",
        reasoning: "Moved stock status to the highest level of hierarchy, reducing the time spent clicking into product detail pages."
      }
    ],
    finalUI: [
      "https://picsum.photos/seed/safco-1/1200/800",
      "https://picsum.photos/seed/safco-2/1200/800",
      "https://picsum.photos/seed/safco-3/1200/800"
    ],
    impact: [
      "42% Increase in Order Frequency",
      "22% Reduction in Sales Support Tickets",
      "140% Growth in Mobile Order Volume"
    ]
  },
  {
    id: "atlas-health",
    title: "Atlas Health Platform",
    category: "HealthTech & SaaS",
    shortDescription: "Streamlining patient outcome tracking for specialty oncology clinics.",
    thumbnail: "https://picsum.photos/seed/atlas/800/600",
    heroImage: "https://picsum.photos/seed/health-hero/1920/1080",
    beforeImage: "https://picsum.photos/seed/health-before/800/600",
    afterImage: "https://picsum.photos/seed/health-after/800/600",
    role: "Senior UX Specialist",
    timeline: "4 Months",
    context: "Atlas Health provides data-driven insights for oncology teams. Their existing dashboard was a literal 'wall of numbers' that clinicians found overwhelming during high-pressure patient consults.",
    problem: "Clinicians were spending more time trying to interpret the data than actually discussing it with patients.",
    problemGoal: "Transform raw clinical data into a visual story that can be understood at a glance during a 10-minute appointment.",
    researchInsights: [
      "Color-coding (Red/Green) was misleading for oncology where 'stability' is often a win.",
      "Trends are more important than single-point data snapshots.",
      "A dark mode interface was preferred to reduce eye strain in dimly lit clinic rooms."
    ],
    uxDecisions: [
      {
        decision: "Narrative Data Visualization",
        reasoning: "Shifted from tabular data to time-series trend lines that highlight significant deviations in patient vital signs."
      },
      {
        decision: "Consultation Mode",
        reasoning: "Created a simplified 'patient-facing' view that allows clinicians to share the screen without exposing sensitive backend medical codes."
      }
    ],
    finalUI: [
       "https://picsum.photos/seed/atlas-1/1200/800",
       "https://picsum.photos/seed/atlas-2/1200/800"
    ],
    impact: [
      "30% Faster Data Interpretation",
      "92% Clinician Satisfaction Rate",
      "12M Patient Records Migration"
    ]
  },
  {
    id: "health-track-ai",
    title: "HealthTrack AI",
    category: "HealthTech & AI",
    shortDescription: "Predictive health monitoring app utilizing machine learning to detect early warning signs.",
    thumbnail: "https://picsum.photos/seed/health/800/600",
    heroImage: "https://picsum.photos/seed/health-hero/1920/1080",
    role: "UX/UI Designer",
    timeline: "8 Months",
    context: "Patient monitoring often happens post-crisis. This app aimed to move the needle to preventative care.",
    problem: "Health data is often cold and unmotivating. Patients struggle to stick to monitoring routines when they 'feel fine'.",
    problemGoal: "Humanize health data and create a feedback loop that rewards preventative habits.",
    researchInsights: [
      "Small wins (e.g., 3 days of logging) are better motivators than long-term goals.",
      "Fear-based alerts lead to app abandonment.",
      "Integration with wearable devices needs to be invisible."
    ],
    uxDecisions: [
      {
        decision: "Proactive Nudging",
        reasoning: "Gentle, helpful notifications instead of alarmist warnings."
      },
      {
        decision: "Dynamic Progress Visualization",
        reasoning: "Using abstract shapes that grow and glow as health metrics stabilize."
      }
    ],
    finalUI: [
      "https://picsum.photos/seed/health-1/1200/800",
      "https://picsum.photos/seed/health-2/1200/800"
    ],
    impact: [
      "Daily active use increased by 35% over legacy competitors.",
      "User reported health awareness improvement by 60%.",
      "Successful integration with top 5 wearable manufacturers."
    ]
  }
];
