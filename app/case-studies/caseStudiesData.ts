export type CaseStudy = {
  slug: string;
  title: string;
  sector: "NHS" | "Private sector";
  summary: string;
  outcomes: string[];
  tags: string[];
  oneLiner: string;
  challenge: string;
  approach: string[];
  dataSources: string[];
  delivered: string[];
  impact: string[];
  exploredModules?: string[];
  atAGlance: { value: string; label: string; note?: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "deal-sourcing-intelligence",
    title: "Deal sourcing intelligence",
    sector: "Private sector",
    summary:
      "Deployable intelligence modules to identify acquisition targets across a fragmented NHS provider market and prioritise diligence quickly.",
    outcomes: [
      "40+ potential targets identified in 6 weeks",
      "Automated due diligence scoring system",
      "£2M+ pipeline opportunity value identified",
    ],
    tags: ["Private sector", "Analytics", "AI", "Intelligence"],
    oneLiner:
      "Deployable intelligence modules to identify acquisition targets across a fragmented NHS provider market and prioritise diligence quickly.",
    challenge:
      "UK-based private equity fund needed a systematic approach to identifying acquisition targets across a fragmented provider landscape with limited visibility of performance signals.",
    approach: [
      "Built an integrated transaction analytics layer",
      "Scored providers using financial health, growth indicators, and market signals",
      "Created a searchable dashboard and target shortlisting workflow",
    ],
    dataSources: [
      "Transaction datasets",
      "Provider registry and market data",
      "Public and licensed sources",
    ],
    delivered: [
      "Target scoring model + shortlisting pipeline",
      "Market intelligence dashboard",
      "Due diligence triage pack outputs",
    ],
    impact: [
      "40+ potential targets identified in 6 weeks",
      "Automated due diligence scoring system",
      "£2M+ pipeline opportunity value identified",
    ],
    atAGlance: [
      {
        value: "5.2M",
        label: "Transactions analysed",
        note: "Selected engagement outcome",
      },
      {
        value: "£14.56B",
        label: "Spend analysed",
        note: "Selected engagement outcome",
      },
      {
        value: "40+",
        label: "Targets identified in 6 weeks",
        note: "Selected engagement outcome",
      },
    ],
  },
  {
    slug: "patient-engagement-modules",
    title: "Patient engagement modules with AI assistant",
    sector: "NHS",
    summary:
      "Patient-facing modules for information, navigation, and support — including an optional AI assistant — built to reduce friction and improve access.",
    outcomes: [
      "Improved access to consistent patient guidance",
      "Reduced navigation friction across pathways",
      "Lowered repetitive admin queries (where deployed)",
    ],
    tags: ["NHS", "Patient experience", "AI", "Automation"],
    oneLiner:
      "Patient-facing modules for information, navigation, and support — including an optional AI assistant — built to reduce friction and improve access.",
    challenge:
      "Services needed a scalable way to share trusted information, guide patients, and reduce admin burden without replacing core clinical systems.",
    approach: [
      "Designed modular patient-facing sections for service information, FAQs, and guidance",
      "Prototyped and tested supportive AI features where appropriate",
      "Explored adjacent capabilities before consolidating into the final module set",
    ],
    dataSources: [
      "Patient communications content",
      "Service information and FAQs",
      "Pathway guidance content",
    ],
    delivered: [
      "Patient engagement platform modules",
      "AI chatbot / assistant for navigation and FAQs",
      "Content governance and update workflow",
    ],
    exploredModules: [
      "AI-enabled interpreting concept (prototype)",
      "Assistive/wearables exploration",
      "Workflow automation concepts",
      "Chatbot MVP",
    ],
    impact: [
      "Improved access to consistent patient guidance",
      "Reduced navigation friction across pathways",
      "Lowered repetitive admin queries (where deployed)",
    ],
    atAGlance: [
      { value: "Modules shipped", label: "Patient platform + AI assistant" },
      { value: "Deployment", label: "Rapid configuration" },
    ],
  },
  {
    slug: "unified-commercial-intelligence",
    title: "Unified commercial intelligence",
    sector: "NHS",
    summary:
      "Triangulated finance, procurement, and contracts into a governed dataset with an AI query layer to answer operational commercial questions quickly.",
    outcomes: [
      "Faster answers to commercial questions",
      "Improved visibility of exposure and exceptions",
      "Reduced manual reconciliation effort",
    ],
    tags: ["NHS", "Analytics", "AI", "Assurance/Risk"],
    oneLiner:
      "Triangulated finance, procurement, and contracts into a governed dataset with an AI query layer to answer operational commercial questions quickly.",
    challenge:
      "Teams lacked a single view of commercial exposure and had to reconcile finance, procurement, and contract records manually across systems.",
    approach: [
      "Integrated finance, procurement, and contract sources into a structured SQL layer",
      "Standardised taxonomy and governance rules",
      "Added an AI query interface to answer questions across the unified dataset",
    ],
    dataSources: [
      "Finance systems",
      "Procurement records",
      "Contracts data",
    ],
    delivered: [
      "Unified dataset + governance model",
      "Triangulated dashboards and exception views",
      "AI query layer for guided interrogation",
    ],
    impact: [
      "Faster answers to commercial questions",
      "Improved visibility of exposure and exceptions",
      "Reduced manual reconciliation effort",
    ],
    atAGlance: [
      { value: "3", label: "Data domains unified" },
      { value: "SQL-backed", label: "Governed dataset" },
    ],
  },
  {
    slug: "expenditure-forensics",
    title: "Expenditure forensics",
    sector: "NHS",
    summary:
      "Forensic spend analytics to surface control weaknesses, recovery opportunities, and high-risk patterns with auditable evidence.",
    outcomes: [
      "Non-PO spend surfaced as control/recovery opportunity",
      "Credit note reversals flagged for investigation",
      "Micro-invoice admin burden quantified",
    ],
    tags: ["NHS", "Analytics", "Assurance/Risk"],
    oneLiner:
      "Forensic spend analytics to surface control weaknesses, recovery opportunities, and high-risk patterns with auditable evidence.",
    challenge:
      "Leadership needed clear visibility of control weaknesses and recovery opportunities across high-volume, low-pattern spend activity.",
    approach: [
      "Transaction-level analysis with control and policy heuristics",
      "Coding consistency checks and supplier/category normalisation",
      "Exception reporting and investigation packs",
    ],
    dataSources: [
      "Accounts payable and GL transactions",
      "Supplier master data",
      "Purchase orders and credit notes",
    ],
    delivered: [
      "Executive summary dashboard + drill-down views",
      "Exception lists and investigation workflow outputs",
      "Recommendations mapped to immediate/short/medium/strategic actions",
    ],
    impact: [
      "Non-PO spend surfaced as control/recovery opportunity",
      "Credit note reversals flagged for investigation",
      "Micro-invoice admin burden quantified",
    ],
    atAGlance: [
      { value: "Apr 2024–Aug 2025", label: "Review period" },
      {
        value: "£139.62M",
        label: "Control opportunity surfaced",
        note: "Selected engagement outcome",
      },
    ],
  },
  {
    slug: "adhd-service-model-blueprint",
    title: "ADHD service model blueprint",
    sector: "NHS",
    summary:
      "Operating model design to scale ADHD provision with governance, productivity levers, and a sustainable delivery framework.",
    outcomes: [
      "Clear scalable delivery design",
      "Governance and performance framework",
      "Operational levers for sustainable capacity",
    ],
    tags: ["NHS", "Service design", "Governance"],
    oneLiner:
      "Operating model design to scale ADHD provision with governance, productivity levers, and a sustainable delivery framework.",
    challenge:
      "Services needed an implementable model to scale provision and improve productivity while maintaining governance and quality.",
    approach: [
      "Mapped pathway stages and operational constraints",
      "Defined workforce model and supervision ratios",
      "Designed governance, performance measures, and implementation roadmap",
    ],
    dataSources: [
      "Pathway definitions",
      "Workforce and capacity data",
      "Service performance measures",
    ],
    delivered: [
      "Service blueprint + operating model",
      "Workforce supervision model",
      "Implementation roadmap and governance pack",
    ],
    impact: [
      "Clear scalable delivery design",
      "Governance and performance framework",
      "Operational levers for sustainable capacity",
    ],
    atAGlance: [
      { value: "Operating model", label: "Blueprint delivered" },
      { value: "Workforce model", label: "Governance aligned" },
    ],
  },
  {
    slug: "fraud-anomaly-detection",
    title: "Fraud & anomaly detection",
    sector: "NHS",
    summary:
      "Anomaly detection capability to flag high-risk payment patterns and generate investigation-ready outputs.",
    outcomes: [
      "£2.2M high-risk transactions flagged and referred for investigation",
      "Improved prioritisation of investigation workload",
    ],
    tags: ["NHS", "AI", "Machine learning", "Assurance/Risk"],
    oneLiner:
      "Anomaly detection capability to flag high-risk payment patterns and generate investigation-ready outputs.",
    challenge:
      "Large invoice and payment datasets contained patterns that were difficult to detect manually, requiring scalable anomaly detection and triage.",
    approach: [
      "Built anomaly detection using machine learning + LLM-assisted pattern interpretation",
      "Implemented triage workflow and escalation outputs",
      "Created investigation packs with auditable rationale",
    ],
    dataSources: [
      "Invoice and payment datasets",
      "Supplier master data",
      "Approval and exception logs",
    ],
    delivered: [
      "Risk scoring model",
      "Triage and escalation workflow",
      "Investigation pack outputs",
    ],
    impact: [
      "£2.2M high-risk transactions flagged and referred for investigation",
      "Improved prioritisation of investigation workload",
    ],
    atAGlance: [
      {
        value: "£2.2M",
        label: "High-risk transactions flagged",
        note: "Selected engagement outcome",
      },
      { value: "Outputs", label: "Referral-ready investigation packs" },
    ],
  },
];

export const caseStudyFilters = [
  "All",
  "NHS",
  "Private sector",
  "Analytics",
  "Automation",
  "AI",
  "Intelligence",
  "Patient experience",
  "Assurance/Risk",
  "Service design",
  "Governance",
  "Machine learning",
];

