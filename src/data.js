// All portfolio content lives here. Edit this file to update the site.
// Wrap words in **double asterisks** to make them bold in bullets.

export const profile = {
  name: 'Ukkisala Harish',
  firstName: 'Harish',
  initials: 'UH',
  title: 'Informatica Cloud ETL Developer',
  status: 'Open to IICS and cloud data engineering roles',
  tags: ['ETL Developer', 'Informatica IICS', 'Snowflake', 'AWS'],
  leadBefore: 'I build ',
  leadHighlight: 'cloud data pipelines',
  intro:
    "I design and run ETL pipelines with Informatica IICS and PowerCenter that move enterprise data into Oracle and Snowflake. In 4+ years I've migrated legacy DataStage code to IICS, built CDC and incremental loads, tuned slow SQL and sessions, and modeled SCD Type 1/2/3 dimensions for reinsurance, healthcare, pharma and insurance clients.",
  stack: ['IICS', 'PowerCenter', 'Snowflake', 'Oracle', 'AWS S3', 'SQL', 'Unix', 'Control-M'],
  email: 'harishu799@gmail.com',
  phone: '+91 7995144528',
  location: 'India',
  // Put a photo in the public/ folder and set its name here, e.g. 'harish.jpg'.
  photo: '',
  // Resume PDF in the public/ folder. Set to '' to hide the resume buttons.
  resume: 'resume.pdf',
}

export const stats = [
  { value: '4+ yrs', label: 'ETL and data integration experience, since Apr 2020' },
  { value: '4', label: 'Companies, from Bluefield to ValueMomentum' },
  { value: '5', label: 'Enterprise client projects' },
  { value: '4', label: 'Domains: reinsurance, healthcare, pharma, insurance' },
]

// Steps shown in the hero card
export const heroPipeline = [
  { step: 'Source', detail: 'Oracle · SQL Server · SFTP files' },
  { step: 'Ingest', detail: 'IICS Mass Ingestion → AWS S3' },
  { step: 'Transform', detail: 'Mappings · Lookups · SCD 1/2/3' },
  { step: 'Load', detail: 'Snowflake · Oracle warehouse' },
  { step: 'Audit', detail: 'Validation and reconciliation' },
]

export const currentJob = {
  company: 'ValueMomentum',
  role: 'Informatica Cloud ETL Developer',
  period: 'Apr 2026 – Aug 2026',
  summary:
    'Project: Munich RE (Global Reinsurance Solutions). I worked on the ETL layer that brings complex reinsurance data into the Oracle and Snowflake data warehouses.',
  groups: [
    {
      title: 'Mappings & transformations',
      icon: 'Layers',
      points: [
        'Built and optimized **IICS mappings, taskflows and PowerCenter workflows** that integrate reinsurance data into Oracle and Snowflake.',
        'Implemented business rules with **Source Qualifier, Connected/Unconnected Lookups, Joiner, Aggregator, Router and Expression** transformations.',
        'Created **reusable mapplets and dynamic mapping tasks** to standardize the ETL lifecycle.',
      ],
    },
    {
      title: 'Loads, tuning & orchestration',
      icon: 'Activity',
      points: [
        'Set up **incremental loading frameworks** for repeatable, efficient loads.',
        '**Tuned Informatica workflows and SQL queries**, shortening data load windows.',
        'Configured automated **Taskflows with Event Wait, Command and Decision tasks**, and supported deployments and production with Agile teams.',
      ],
    },
  ],
  tools: ['IICS', 'PowerCenter', 'Oracle SQL', 'Snowflake', 'JIRA'],
}

export const previousJobs = [
  {
    company: 'Innova Solutions',
    role: 'Informatica Cloud ETL Developer',
    period: 'Sep 2024 – Aug 2025',
    summary: 'Led the DataStage-to-IICS migration and the move to Snowflake for Fidelis Healthcare (Centene Corporation).',
  },
  {
    company: 'NTT DATA Services',
    role: 'Informatica IICS Cloud Developer',
    period: 'Jul 2022 – Feb 2023',
    summary: 'Built IICS pipelines, SCD loads and a Snowflake audit framework for Aventis Pharma.',
  },
  {
    company: 'Bluefield Technologies',
    role: 'Informatica IICS & PowerCenter Developer',
    period: 'Apr 2020 – Jul 2022',
    summary: 'Built file ingestion and warehouse loads for Kaiser Permanente (NiFi2) and Allstate Insurance.',
  },
]

export const projects = [
  {
    tag: 'Work · Innova',
    kind: 'Legacy migration',
    title: 'Fidelis Healthcare: moving DataStage ETL to IICS',
    intro:
      "Centene's Fidelis Healthcare ran multi-state healthcare programs on legacy DataStage jobs. I led the move to IICS and the data migration into Snowflake.",
    points: [
      'Led the **end-to-end migration of DataStage ETL code to IICS**, modernizing ingestion and processing.',
      'Engineered **Change Data Capture (CDC)** processes and custom DataStage-to-IICS migration utilities with **zero data loss**.',
      'Migrated large datasets from **Greenplum, Oracle and SQL Server to Snowflake**.',
      'Automated inbound and outbound **file transfers via AWS S3 and EC2** using IICS cloud connectors.',
      'Ran **end-to-end validation and reconciliation testing** for QA and UAT sign-offs.',
    ],
    flowTitle: 'How the data moved',
    flow: [
      { step: 'Legacy sources', detail: 'DataStage jobs; Greenplum, Oracle and SQL Server tables' },
      { step: 'Convert to IICS', detail: 'Migration utilities rebuild DataStage logic as IICS mappings' },
      { step: 'Capture changes', detail: 'CDC keeps source and target in sync' },
      { step: 'Load Snowflake', detail: 'Bulk migration; files through AWS S3 and EC2' },
      { step: 'Reconcile', detail: 'Source-to-target checks for QA and UAT sign-off' },
    ],
    tools: ['IICS', 'DataStage', 'Oracle SQL', 'Snowflake', 'Greenplum', 'AWS S3', 'AWS EC2', 'GitHub'],
  },
  {
    tag: 'Work · NTT DATA',
    kind: 'Data warehouse',
    title: 'Aventis Pharma: sales and prescription data into Snowflake',
    intro:
      'Pharmaceutical sales, marketing and prescription data had to land in Oracle staging and then the Snowflake warehouse, with a clear view of whether every load ran cleanly.',
    points: [
      'Designed **enterprise ETL pipelines** into Oracle staging and the Snowflake data warehouse.',
      'Built **parameterized mapping templates** for Stage, Dimension (SCD Type 1 & 2) and Fact loads.',
      'Deployed an automated **Data Integration Audit Framework in Snowflake** for run monitoring and data quality reports.',
      'Used **In/Out Parameters, Expression Macros and Source Partitioning** to raise throughput.',
      'Wrote **technical specs, source-to-target mapping documents and unit test plans**.',
    ],
    flowTitle: 'From source to warehouse',
    flow: [
      { step: 'Extract', detail: 'Sales, marketing and prescription data' },
      { step: 'Stage', detail: 'Oracle staging through parameterized templates' },
      { step: 'Model', detail: 'SCD Type 1 & 2 dimensions and fact tables' },
      { step: 'Load', detail: 'Snowflake warehouse with source partitioning' },
      { step: 'Audit', detail: 'Audit framework tracks runs and data quality' },
    ],
    tools: ['IICS', 'Oracle SQL', 'Snowflake', 'Unix Shell Scripting'],
  },
  {
    tag: 'Work · Bluefield',
    kind: 'File ingestion',
    title: 'Kaiser Permanente (NiFi2): secure file ingestion to the cloud',
    intro:
      'Healthcare files arrived on SFTP servers and had to reach Snowflake and Oracle safely and on schedule, for both batch and near real-time feeds.',
    points: [
      'Built **secure ingestion from SFTP to AWS S3** with IICS Mass Ingestion and **Managed File Transfer (MFT/B2B)**.',
      'Designed **mapping tasks and parallel taskflows** for batch and real-time healthcare data.',
      'Implemented **SCD Type 1, 2 and 3** logic for historical tracking.',
      'Automated batch runs and file triggers with **Unix shell scripts and Control-M**.',
    ],
    flowTitle: 'One file, start to finish',
    flow: [
      { step: 'Pick up', detail: 'Files land on SFTP servers' },
      { step: 'Transfer', detail: 'IICS Mass Ingestion and MFT to AWS S3 staging' },
      { step: 'Transform', detail: 'Mapping tasks, parallel taskflows, SCD 1/2/3' },
      { step: 'Load', detail: 'Snowflake and Oracle' },
      { step: 'Schedule', detail: 'Unix scripts and Control-M file triggers' },
    ],
    tools: ['IICS', 'Oracle SQL', 'AWS S3', 'Snowflake', 'Unix', 'WinSCP', 'Control-M'],
  },
  {
    tag: 'Work · Bluefield',
    kind: 'Data marts',
    title: 'Allstate Insurance: customer, policy and claims data marts',
    intro:
      'Customer, policy and claims data sat in several OLTP systems. I used PowerCenter to bring it together in enterprise data marts.',
    points: [
      'Extracted **OLTP customer, policy and claims data** from multiple sources with PowerCenter.',
      'Engineered **Lookup, Aggregator, Joiner and Router** transformations to load enterprise data marts.',
      'Tuned **complex SQL and session parameters** to fix bottlenecked jobs.',
      'Wrote **error-handling scripts** for production reliability.',
    ],
    flowTitle: 'How the marts are built',
    flow: [
      { step: 'Extract', detail: 'OLTP customer, policy and claims systems' },
      { step: 'Transform', detail: 'Lookup, Aggregator, Joiner, Router' },
      { step: 'Load', detail: 'Enterprise data marts' },
      { step: 'Tune', detail: 'SQL and session tuning, error handling' },
    ],
    tools: ['PowerCenter 10.x', 'Oracle SQL', 'Unix'],
  },
]

export const approach = {
  intro:
    'Most of my work moves data that other teams depend on every day. These habits keep those pipelines correct, fast and easy to run.',
  items: [
    {
      icon: 'ShieldCheck',
      title: 'Never lose a row',
      text: 'Migrations get CDC and source-to-target reconciliation before sign-off. The Fidelis move to IICS finished with zero data loss.',
      tags: 'CDC · reconciliation · UAT',
    },
    {
      icon: 'Gauge',
      title: 'Tune the slow parts',
      text: 'I tune SQL and Informatica session settings to cut load windows, and use source partitioning to raise throughput.',
      tags: 'query tuning · partitioning',
    },
    {
      icon: 'Blocks',
      title: 'Build it once',
      text: 'Reusable mapplets, parameterized templates and dynamic mapping tasks keep many similar loads consistent.',
      tags: 'mapplets · parameters · templates',
    },
    {
      icon: 'Workflow',
      title: 'Automate and audit',
      text: 'Taskflows, Control-M and shell scripts run the jobs. Audit tables show whether every run worked.',
      tags: 'taskflows · Control-M · audit',
    },
  ],
}

export const skills = [
  { title: 'ETL & integration', icon: 'Workflow', items: ['IICS / IDMC', 'Data Integration', 'Taskflows', 'Mass Ingestion', 'PowerCenter 10.x', 'DataStage'] },
  { title: 'Cloud & storage', icon: 'Cloud', items: ['Snowflake', 'AWS S3', 'AWS EC2', 'MFT / B2B', 'SFTP'] },
  { title: 'Databases & SQL', icon: 'Database', items: ['Oracle 21c / 12c', 'SQL Server', 'MySQL', 'Greenplum', 'SQL tuning'] },
  { title: 'Data warehousing', icon: 'Layers', items: ['Dimensional modeling', 'SCD Type 1/2/3', 'Fact & dimension tables', 'CDC', 'Data cleansing', 'Audit frameworks'] },
  { title: 'Scheduling & scripting', icon: 'Terminal', items: ['Unix shell scripting', 'Control-M', 'PuTTY', 'WinSCP'] },
  { title: 'Delivery & tools', icon: 'GitBranch', items: ['Git / GitHub', 'JIRA', 'Agile', 'Mapping specs (STM)', 'Unit testing', 'QA / UAT support'] },
]

export const education = [
  { year: 'Passed 2018', school: 'Ananthalakshmi Institute of Technology and Sciences', degree: 'B.Tech in Electronics and Communication Engineering', score: '59.07%' },
  { year: 'Passed 2015', school: 'Sree Vidyanikethan Engineering College', degree: 'Diploma in Electronics and Communication Engineering', score: '79.27%' },
  { year: 'Passed 2012', school: 'Priyadarsini Vidhya Mandhir', degree: 'Secondary School Certificate (10th)', score: 'GPA 9.0' },
]

export const domains = [
  { name: 'Reinsurance', clients: 'Munich RE' },
  { name: 'Healthcare', clients: 'Fidelis Healthcare (Centene), Kaiser Permanente' },
  { name: 'Pharma', clients: 'Aventis Pharma' },
  { name: 'Insurance', clients: 'Allstate Insurance' },
]
