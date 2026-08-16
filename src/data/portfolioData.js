export const personalInfo = {
  name: "Gautam Singh Jadon",
  title: "Full Stack Web Developer",
  roleHeadline: "Specializing in Scalable Microservices, ERP Integrations & Modern React/Next.js Architectures",
  email: "gautamjadon18@gmail.com",
  phone: "+91-780-383-6311",
  location: "Vadodara, Gujarat, India",
  zip: "390007",
  github: "https://github.com/GautamCyborg",
  linkedin: "https://linkedin.com/in/gautam-singh-jadon",
  summary: `Full Stack Web Developer with 2+ years of experience building scalable, production-grade applications using React, Next.js, Node.js, Express.js, NestJS, SQL, and MongoDB. Experienced in delivering end-to-end systems including Learning Management Systems with OAuth2 authentication, ERP integrations, microservices architectures, and OCR-powered document processing pipelines. Contributed to multiple early-stage startups — including Quickoline (remote cybercafe infrastructure with microservices and OCR workflows) — and an EdTech LMS platform featuring OAuth-based SSO and Live Code Editor supporting multiple users in realtime. Skilled in managing production deployments on Windows Server environments using PM2 and IIS, with a track record of migrating legacy systems, optimizing backend performance, and shipping full-stack products across ESG, fintech, and education domains.`,
  stats: [
    { label: "Years Experience", value: "2+" },
    { label: "Production Builds", value: "6+" },
    { label: "Trees Geotagged", value: "10K+" }
  ]
};

export const experiences = [
  {
    company: "Encoraa ESG",
    location: "Vadodara, Gujarat",
    role: "Full Stack Developer",
    period: "June 2024 – Present",
    type: "Full-Time",
    badge: "Current Role",
    highlights: [
      "Delivered 4+ production-grade projects including 2 complete end-to-end builds using React, Next.js, Node.js, Express.js, NestJS, and SQL with scalable architecture.",
      "Built Tree Metric & Tracking platform (Aranyasetu) using Leaflet.js maps, geotagging, and reward systems engaging 50+ active users and tracking 10,000+ trees.",
      "Developed educational ERP using React and React Native integrating secure payment gateways and legacy backend systems.",
      "Implemented Tally ERP XML integrations and high-volume financial data export systems, improving accounting accuracy and reducing manual reconciliation effort.",
      "Developed enterprise ERP modules including Ledger View, Trial Balance, P&L, Balance Sheet, Payables/Receivables, MIS reports, vehicle tracking, inventory management, and end-to-end billing systems.",
      "Migrated legacy Django backend to Node.js, improving maintainability, developer speed, and runtime performance.",
      "Built tax filing system for US client using React and NestJS with cron-based scheduled emails and automated workflow reminders."
    ],
    techStack: ["React", "Next.js", "Node.js", "Express.js", "NestJS", "SQL", "PostgreSQL", "Leaflet.js", "Tally ERP XML", "Django", "Cron"]
  },
  {
    company: "Whizoid Studio",
    location: "Remote",
    role: "Full Stack Developer Intern",
    period: "Dec 2023 – May 2024",
    type: "Internship",
    badge: "Internship",
    highlights: [
      "Built RESTful APIs using Node.js and Express.js with JWT-based authentication and granular authorization layers.",
      "Designed optimized MongoDB schemas with indexed queries, significantly accelerating data retrieval speed.",
      "Developed Instagram automation Chrome extensions (Manifest V3) increasing marketing campaign efficiency by 60%.",
      "Integrated GoHighLevel CRM and built high-converting web applications, reducing client delivery timelines."
    ],
    techStack: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Chrome Extension (Manifest V3)", "GoHighLevel CRM", "REST API"]
  }
];

export const projects = [
  {
    id: "aranyasetu",
    title: "Aranyasetu - Tree Metric Platform",
    category: "ESG & Geospatial",
    tagline: "Geospatial tree metric platform with Leaflet.js maps, geotagging, and reward engine.",
    description: "An environmental sustainability platform tracking 10,000+ trees with Leaflet.js maps, geotagging verification, reward points distribution, and community engagement for 50+ active users.",
    highlights: ["10,000+ Trees Geotagged", "Leaflet.js Maps & Geotagging", "Gamified Reward Engine"],
    tech: ["React", "Leaflet.js", "Node.js", "PostgreSQL", "Geotagging", "Express.js"],
    icon: "TreePine"
  },
  {
    id: "enterprise-erp",
    title: "Enterprise ERP & Tally XML Suite",
    category: "Fintech & Enterprise",
    tagline: "Comprehensive financial accounting ERP with automated Tally XML sync and MIS analytics.",
    description: "Built modular enterprise ERP suites featuring Ledger View, Trial Balance, P&L, Balance Sheet, Payables/Receivables, vehicle tracking, inventory control, and seamless Tally ERP XML exports.",
    highlights: ["Tally XML Sync", "Automated Financial Reconciliation", "MIS & P&L Reports"],
    tech: ["React", "Node.js", "NestJS", "PostgreSQL", "Tally XML", "Recharts"],
    icon: "Briefcase"
  },
  {
    id: "us-tax-filing",
    title: "US Tax Filing Automation Workflow",
    category: "Full Stack & Cloud",
    tagline: "Automated tax preparation system with cron-based reminders and workflow orchestration.",
    description: "Developed a US tax filing platform with React frontend and NestJS microservices. Integrated automated email notifications, cron workflow reminders, and document handling pipelines.",
    highlights: ["Cron Reminder Workflows", "NestJS Microservices", "Secure Tax Submissions"],
    tech: ["React", "NestJS", "Node.js", "Cron Jobs", "PostgreSQL", "TailwindCSS"],
    icon: "FileCheck"
  },
  {
    id: "instagram-automation",
    title: "Instagram Marketing Extension",
    category: "Automation & Chrome",
    tagline: "Chrome Extension (Manifest V3) for automated social marketing and CRM lead sync.",
    description: "Built a Chrome Manifest V3 extension automating outreach and engagement workflows, integrated with GoHighLevel CRM, boosting marketing team productivity by 60%.",
    highlights: ["Manifest V3 Chrome Extension", "60% Efficiency Increase", "CRM Integration"],
    tech: ["JavaScript", "Chrome API", "GoHighLevel CRM", "DOM Manipulation", "REST API"],
    icon: "Chrome"
  },
  {
    id: "quickoline-cybercafe",
    title: "Quickoline - Remote Infrastructure",
    category: "Microservices & OCR",
    tagline: "Distributed cybercafe infrastructure with OCR document processing pipelines.",
    description: "Contributed to early-stage startup architecture enabling remote cybercafe access through Node.js microservices, OCR document parsing, and automated user session verification.",
    highlights: ["OCR Document Pipelines", "Microservice Architecture", "Remote Session Control"],
    tech: ["Node.js", "Express.js", "OCR", "Microservices", "MongoDB"],
    icon: "Monitor"
  },
  {
    id: "edtech-lms",
    title: "EdTech LMS & Realtime Live Editor",
    category: "EdTech & Realtime",
    tagline: "Multi-user LMS platform with OAuth SSO and interactive live code execution.",
    description: "Designed a multi-tenant LMS featuring OAuth-based Single Sign-On (SSO) and a collaborative live code editor allowing multiple users to code in real-time.",
    highlights: ["OAuth2 SSO Authentication", "Multi-user Live Code Editor", "Realtime WebSockets"],
    tech: ["React", "React Native", "Node.js", "OAuth2", "WebSockets", "Monaco Editor"],
    icon: "Code2"
  }
];

export const categorizedSkills = {
  "Frontend Architecture": [
    "React.js", "Next.js", "TailwindCSS", "Redux Toolkit", "Context API",
    "React Hook Form", "Axios", "Recharts & Chart.js"
  ],
  "Backend & Microservices": [
    "Node.js", "Express.js", "NestJS", "RESTful APIs", "Microservices",
    "Cron Schedulers", "Middleware"
  ],
  "Databases & ORMs": [
    "PostgreSQL", "MySQL", "MongoDB", "Mongoose ODM", "Sequelize ORM",
    "Query Optimization"
  ],
  "Security & Authentication": [
    "JWT", "OAuth2 / OIDC (SSO)", "RBAC Access Control", "Bcrypt", "HTTPS / SSL"
  ],
  "Integrations & APIs": [
    "Tally ERP XML", "Payment Gateways", "GoHighLevel CRM", "Leaflet.js Geospatial",
    "OCR Processing", "Chrome Extensions (Manifest V3)"
  ],
  "DevOps & Deployment": [
    "Git & GitHub", "PM2 Process Manager", "IIS Reverse Proxy", "Windows Server", "CI/CD Pipelines"
  ],
  "AI & Intelligent Systems": [
    "RAG (Retrieval-Augmented Generation)", "LLM Integration", "Prompt Engineering",
    "Embeddings & Vector Search", "Semantic Search", "OCR & Document Processing"
  ],
};

export const education = [
  {
    degree: "B.Tech in Computer Science",
    institution: "Shri Vaishnav Vidhyapeeth Vishwavidyalaya",
    period: "May 2024",
    location: "Indore, Madhya Pradesh",
    score: "Completed",
    highlights: ["Focus on Software Engineering, Data Structures, Web Systems & Database Architecture."]
  },
  {
    degree: "Class XII (Senior Secondary)",
    institution: "Aditya Birla Senior Secondary School",
    period: "April 2020",
    location: "Nagda, Madhya Pradesh",
    score: "Distinction",
    highlights: ["Physics, Chemistry, and Mathematics (PCM) specialization."]
  }
];
