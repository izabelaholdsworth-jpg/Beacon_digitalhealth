export interface Capability {
  slug: string;
  title: string;
  subtitle: string;
  overview: string;
  whatYouGet: string[];
  howItWorks: string[];
  typicalOutputs: string[];
  bestFor: string;
  ctaLine: string;
  relatedCaseSlugs: string[];
}

export const capabilities: Capability[] = [
  {
    slug: 'forensics',
    title: 'Forensics',
    subtitle: 'Detect financial risk before it escalates',
    overview:
      'Find where money is leaking and where controls are weak. Beacon analyses high-volume transaction data to surface duplicate spend, coding inconsistencies, non-PO risk, unusual supplier patterns, and recoverable opportunities.',
    whatYouGet: [
      'A prioritised control-risk register with estimated value and effort',
      'Supplier and category outlier analysis (including repeat/fragmented payments)',
      'Non-PO and process-compliance breakdown (what\'s bypassing controls)',
      'A short list of "fix first" recommendations and workflow changes',
      'A dashboard view for ongoing monitoring (optional)',
    ],
    howItWorks: [
      'Ingest finance exports (and where available: procurement + contracts data)',
      'Standardise, map and de-duplicate; run anomaly and pattern checks',
      'Produce findings pack + dashboard excerpt + actions for control owners',
    ],
    typicalOutputs: [
      'Executive summary (1 page) + findings log',
      'Spend by source / category / site breakdown',
      'Exceptions list (flagged transactions) with rationale and evidence trail',
    ],
    bestFor: 'CFO teams, procurement leads, audit, counter fraud, transformation teams.',
    ctaLine: 'Want to see how this looks on your data? Request a demo.',
    relatedCaseSlugs: ['expenditure-forensics', 'deal-sourcing-intelligence'],
  },
  {
    slug: 'contracts',
    title: 'Contracts',
    subtitle: 'Visibility across your commercial estate',
    overview:
      'Make contract risk visible. Beacon helps teams track expiry exposure, off-contract purchasing, pricing variance and supplier concentration — linking what\'s signed to what\'s actually being bought.',
    whatYouGet: [
      'Contract register clean-up and standard fields (where required)',
      'Expiry / renewal risk view and forward plan',
      'Off-contract and maverick purchasing detection',
      'Spend benchmarking against contract terms and expected rates',
      'A "commercial estate" snapshot: key suppliers, values, risks, owners',
    ],
    howItWorks: [
      'Combine contract register + finance spend + procurement metadata',
      'Match suppliers/contracts; flag gaps and inconsistencies',
      'Produce a live tracker and an action list for contract owners',
    ],
    typicalOutputs: [
      'Expiry and renewal dashboard',
      'Off-contract exceptions list',
      'Supplier concentration and risk summary',
    ],
    bestFor: 'Contracting & procurement teams, estates/commercial teams, governance groups.',
    ctaLine: 'If you have a contract register and spend data, we can usually show value quickly.',
    relatedCaseSlugs: ['expenditure-forensics', 'deal-sourcing-intelligence'],
  },
  {
    slug: 'statutory-response',
    title: 'Statutory Response',
    subtitle: 'Audit-ready statutory response automation',
    overview:
      'Reduce the burden of FOI/SAR-style statutory requests. Beacon designs lightweight workflows that improve turnaround, defensibility and audit trails — without creating extra admin.',
    whatYouGet: [
      'End-to-end workflow for request triage, assignment and tracking',
      'Standard response templates and approval steps',
      'Evidence and audit trail by default (what was searched, when, by whom)',
      'Reporting on volumes, bottlenecks and repeat themes',
      'Automation options (routing, reminders, redaction support where relevant)',
    ],
    howItWorks: [
      'Map your current process and failure points',
      'Implement a simple workflow with clear ownership and templates',
      'Add reporting and automation where it saves time',
    ],
    typicalOutputs: [
      'Process map + operating guidance',
      'Request tracker dashboard (status, SLA, themes)',
      'Audit-ready evidence pack structure',
    ],
    bestFor: 'IG teams, legal/compliance, operations, corporate services.',
    ctaLine: 'If you\'re drowning in requests, we can stabilise the process fast.',
    relatedCaseSlugs: [],
  },
  {
    slug: 'patient-flow',
    title: 'Patient Flow',
    subtitle: 'Triage and pathway orchestration',
    overview:
      'Improve patient journey coordination without ripping out clinical systems. Beacon builds patient-facing modules, triage logic, and workflow orchestration that reduces friction and supports pathway consistency.',
    whatYouGet: [
      'Triage and routing logic (rules-based, configurable)',
      'Patient communications modules (information, navigation, FAQs)',
      'Optional assistant for common queries and signposting',
      'Workflow coordination across teams (handoffs, reminders, escalation)',
      'Measurement: no-shows, bottlenecks, pathway variation (where data allows)',
    ],
    howItWorks: [
      'Define the pathway and key decision points',
      'Build patient-facing modules + workflow steps',
      'Pilot, measure, then iterate',
    ],
    typicalOutputs: [
      'Patient module set (pages, content structure, governance workflow)',
      'Pathway workflow map + orchestration rules',
      'KPI view: engagement/no-show/variation (depending on available data)',
    ],
    bestFor: 'Outpatient transformation, service managers, pathway leads, digital teams.',
    ctaLine: 'Start small on one pathway, prove it, then scale.',
    relatedCaseSlugs: ['patient-engagement-modules'],
  },
  {
    slug: 'intelligence',
    title: 'Intelligence',
    subtitle: 'Early-warning signals for system performance',
    overview:
      'Early-warning signals for operational and financial performance. Beacon turns routine data into indicators leaders can act on: variation, demand shifts, capacity pressure and cost trends.',
    whatYouGet: [
      'A small set of actionable indicators (not a giant dashboard)',
      'Variation detection by site/service/team (where data supports)',
      'Demand and capacity pressure signals (trends, thresholds, exceptions)',
      'Cost pressure and supplier movement monitoring (where relevant)',
      'Executive-ready narrative: what changed, why it matters, what to do next',
    ],
    howItWorks: [
      'Agree the decisions you need to make regularly',
      'Define 8–15 indicators that directly support those decisions',
      'Build a simple view + cadence for review and action',
    ],
    typicalOutputs: [
      'Monthly/weekly "signals" pack (one page)',
      'Exceptions list + drill-down dashboard',
      'Decision log / action tracker (optional)',
    ],
    bestFor: 'Exec teams, transformation leaders, PMOs, performance teams.',
    ctaLine: 'The aim is fewer metrics, better decisions.',
    relatedCaseSlugs: [],
  },
  {
    slug: 'service-design',
    title: 'Service Design',
    subtitle: 'Scalable care models and operating design',
    overview:
      'Design service models that stand up operationally and financially. Beacon supports pathway design, workforce models, governance, and unit economics — particularly where you\'re competing with independent providers or scaling capacity.',
    whatYouGet: [
      'Target operating model for the pathway/service',
      'Workforce design and supervision model',
      'Governance: clinical safety, quality, escalation and performance cadence',
      'Activity, capacity and productivity assumptions',
      'Commercial and sustainability view (cost-to-serve, income levers where relevant)',
    ],
    howItWorks: [
      'Baseline current pathway and constraints',
      'Design the operating model and workforce configuration',
      'Build a delivery plan with measures and governance',
    ],
    typicalOutputs: [
      'Service blueprint + TOM pack',
      'Workforce model and productivity levers',
      'Implementation plan + risks and mitigations',
    ],
    bestFor: 'Clinical/service leadership, transformation teams, commissioners/providers.',
    ctaLine: 'If you want a model that scales, design has to include delivery reality.',
    relatedCaseSlugs: [],
  },
];

export function getCapability(slug: string): Capability | undefined {
  return capabilities.find((c) => c.slug === slug);
}

export function getAllCapabilitySlugs(): string[] {
  return capabilities.map((c) => c.slug);
}

export const caseStudiesData = [
  {
    slug: 'expenditure-forensics',
    title: 'Expenditure Forensics',
    lede: 'Uncovering £8m in duplicate and off-contract spend across a large acute trust.',
    category: 'Finance',
  },
  {
    slug: 'deal-sourcing-intelligence',
    title: 'Deal Sourcing Intelligence',
    lede: 'Supplier concentration risk quantified across acute, primary, and pharmacy.',
    category: 'Procurement',
  },
  {
    slug: 'patient-engagement-modules',
    title: 'Patient Engagement Modules',
    lede: 'Reducing outpatient no-shows and improving patient journey coordination.',
    category: 'Digital',
  },
];
