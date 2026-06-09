export const PERSONAL = {
  name: 'Shubham Singh',
  initials: 'SS',
  tagline: 'LLM Post-Training Engineer & Full-Stack Developer',
  email: 'sdr95958@gmail.com',
  linkedin: 'https://linkedin.com/in/biharibhau',
  github: 'https://github.com/bihari-bhau',
  location: 'Gurugram, Haryana, India',
  resumeUrl: 'https://drive.google.com/file/d/19MVYcHhVpRPVf22rZZyzOMnAyyw8ml_8/view?usp=sharing',
  roles: [
    'LLM Post-Training Engineer',
    'AI Evaluation Engineer',
    'Full-Stack Developer',
    'Product Builder',
  ],
  about: [
    `I'm an <orange>LLM Post-Training Engineer</orange> at Ethara AI in Gurugram, where I build <orange>Kaiju</orange> — an AI coding agent benchmark pipeline built on Commit0 (ICLR 2025) that evaluates GPT-4o, Claude, and Gemini across <orange>100+ Python repositories</orange> using 38 automated eval criteria.`,
    `Beyond benchmarking, I'm a full-stack developer who ships things end-to-end. I built <cyan>Bihar Skill Hub</cyan>, a live ed-tech platform with 33 courses, JWT auth, and Razorpay payments deployed across Vercel + Railway, and <cyan>TaskFlow</cyan>, a production team task manager with Kanban, RBAC, analytics, and Docker deploys.`,
    `I come from an EEE background — that taught me to think in systems. I write Python for AI work, FastAPI/Django for APIs, React/Next.js for UIs, and reach for Docker, PostgreSQL, and Supabase when things need to scale.`,
  ],
}

export const STATS = [
  { num: 500, suffix: '+', label: 'RLHF Samples Annotated' },
  { num: 100, suffix: '+', label: 'Python Repos Benchmarked' },
  { num: 38,  suffix: '',  label: 'Automated Eval Criteria' },
  { num: 6,   suffix: '+', label: 'LLMs Evaluated' },
]

export const EXPERIENCE = [
  {
    company: 'Ethara AI',
    role: 'LLM Post-Training Intern',
    location: 'Gurugram, Haryana — On-site',
    period: 'Jan 2026 – Present',
    color: 'orange',
    bullets: [
      'Built <b>Kaiju</b> — an AI coding agent benchmark pipeline on top of <b>Commit0 (ICLR 2025)</b>, evaluating GPT-4o, Claude, and Gemini on Python library reconstruction across two custom splits (<b>ethara</b>, <b>ethara-lite</b>)',
      'Designed an <b>AST-stripping → stub → agent → pytest</b> pipeline that benchmarks <b>6+ LLMs across 100+ Python repos</b> using 38 automated eval criteria per repo',
      'Evaluated LLM responses across <b>6 quality dimensions</b> (Truthfulness, Instruction Following, Prompt Correctness, Writing Quality, Verbosity, Overall) on a 1–6 rubric — <b>500+ RLHF samples annotated</b>',
      'Surfaced <b>multi-turn response degradation patterns</b> across 8-turn STEM conversations to inform post-training and fine-tuning decisions',
    ],
  },
  {
    company: 'KodNest',
    role: 'Software Development Engineer Intern — Full Stack',
    location: 'Bangalore, Karnataka — Hybrid',
    period: 'May 2025 – Jan 2026',
    color: 'cyan',
    bullets: [
      'Developed full-stack applications using <b>Java, Python, Django, and REST APIs</b> with end-to-end feature integration',
      'Optimized SQL queries and backend logic, improving <b>data retrieval efficiency by 30%</b>',
      'Worked in Agile workflows with Git-based version control, debugging, and iterative development',
    ],
  },
  {
    company: 'BIPARD',
    role: 'Cisco Networking Intern',
    location: 'Patna, Bihar — Onsite',
    period: 'June 2025 – Aug 2025',
    color: 'cyan',
    bullets: [
      'Deployed and troubleshot <b>IPv4/IPv6 networks</b> using Cisco Packet Tracer and GNS3 simulation environments',
      'Secured network infrastructure using <b>port security, SSH, and VLAN segmentation</b> best practices',
      'Monitored network performance with <b>Wireshark and SNMP</b>, diagnosing and resolving connectivity issues',
    ],
  },
]

export const SKILLS = [
  {
    category: 'Languages',
    items: ['Python', 'TypeScript', 'JavaScript', 'Java', 'SQL'],
  },
  {
    category: 'Frontend',
    items: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'HTML5', 'CSS3'],
  },
  {
    category: 'Backend & Databases',
    items: ['FastAPI', 'Django REST', 'Node.js', 'PostgreSQL', 'Supabase', 'MySQL', 'SQLite', 'Hibernate ORM'],
  },
  {
    category: 'AI / LLM',
    items: ['Post-Training Eval', 'RLHF', 'Agent Benchmarking', 'Commit0', 'AST Manipulation', 'Prompt Engineering', 'Pytest Benchmarking', 'Multi-turn Analysis'],
  },
  {
    category: 'DevOps & Tools',
    items: ['Docker', 'GitHub Actions', 'n8n', 'Git / GitHub', 'Vercel', 'Railway', 'Streamlit', 'Linux'],
  },
]

export const PROJECTS = [
  {
    num: '01',
    title: 'Kaiju',
    period: '2026 – Present',
    desc: 'AI coding agent benchmark pipeline built on Commit0 (ICLR 2025). Strips function bodies from 2000+ ⭐ Python libraries via AST manipulation, hands the stubs to AI agents (Claude, GPT-4o, Gemini), and scores pass-rate via pytest. Ships with two custom splits — ethara (8 libs, full benchmark) and ethara-lite (4 libs, lightweight eval). Built during LLM Post-Training internship at Ethara AI.',
    stack: ['Python', 'AST', 'Pytest', 'Commit0', 'Docker'],
    github: 'https://github.com/bihari-bhau/kaiju',
    live: null,
    isLive: false,
  },
  {
    num: '02',
    title: 'Bihar Skill Hub',
    period: '2025 – Present',
    desc: 'A fully deployed educational platform targeting students in Bihar — 33 courses across 11 skill categories, JWT auth, course enrollment, user profiles, success stories, and Razorpay payments. Deployed across Vercel (frontend) and Railway (backend + PostgreSQL) with CI/CD via GitHub.',
    stack: ['React', 'Django REST', 'PostgreSQL', 'Razorpay', 'JWT', 'Vercel', 'Railway'],
    github: 'https://github.com/bihari-bhau/bihar-skill-hub',
    live: 'https://biharskillhub.co.in',
    isLive: true,
  },
  {
    num: '03',
    title: 'TaskFlow',
    period: '2025 – Present',
    desc: 'Production-ready full-stack team task manager: Kanban workflows, analytics dashboards, attendance tracking, and role-based access control. Features JWT auth, RBAC (Admin/Member), 6-stat analytics with Recharts, cross-project task tracker, daily check-in/checkout, and WebSocket chat. Seeded with 23 demo users across 5 projects. Deployed via Docker + Nginx on Railway with runtime API URL injection.',
    stack: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'JWT', 'Docker', 'Nginx', 'Railway', 'Recharts'],
    github: 'https://github.com/bihari-bhau/TaskFlow',
    live: 'https://vibrant-inspiration-production-f24a.up.railway.app',
    isLive: true,
  },
  {
    num: '04',
    title: 'RLHF Eval',
    period: '2026 – Present',
    desc: 'Production-grade RLHF dataset builder and LLM evaluation platform built during AI Post-Training internship. Side-by-side A/B prompt rating across 6 quality dimensions (Truthfulness, Correctness, Writing, Verbosity, Instruction Following, Overall) on a 1–6 scale with weighted scoring. Includes analytics dashboard, Kaiju benchmark integration, JSONL export, and Docker Compose deployment.',
    stack: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Docker', 'Railway'],
    github: 'https://github.com/bihari-bhau/rlhf-eval',
    live: null,
    isLive: false,
  },
  {
    num: '05',
    title: 'LLM Toolkit',
    period: '2026 – Present',
    desc: 'Modular AI-powered toolkit for LLM prompt experiments — Prompt Quality Scorer and Multi-turn Conversation Analyzer. Built with Next.js + Claude API + Supabase for persistent eval workflows.',
    stack: ['Next.js', 'Claude API', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Vercel'],
    github: 'https://github.com/bihari-bhau/llm-toolkit',
    live: 'https://llm-toolkit.vercel.app/',
    isLive: true,
  },
  {
    num: '06',
    title: 'LLM Response Evaluator',
    period: 'Mar 2026',
    desc: 'Streamlit tool to evaluate and compare LLM responses across 5 RLHF-inspired quality dimensions with a weighted scoring formula — IF×0.25, Truth×0.25, Correctness×0.20, Writing×0.15, Verbosity×0.15. Auto-logs to JSONL and surfaces multi-turn degradation patterns after 5+ entries. Directly inspired by post-training work at Ethara AI.',
    stack: ['Python', 'Streamlit', 'RLHF', 'JSONL', 'Post-Training'],
    github: 'https://github.com/bihari-bhau/llm-response-evaluator',
    live: null,
    isLive: false,
  },
  {
    num: '07',
    title: 'Lead Sniper',
    period: '2026',
    desc: 'GitHub stargazer outreach automation: pulls stargazers from a target repo, enriches profiles, generates personalised LLM pitches, and auto-delivers via Slack / Discord. Built as an n8n workflow with LLM-in-the-loop personalisation.',
    stack: ['n8n', 'LLM', 'Slack API', 'Discord API', 'Node.js'],
    github: 'https://github.com/bihari-bhau',
    live: null,
    isLive: false,
  },
]

export const EDUCATION = {
  degree: 'Electrical & Electronics Engineering',
  level: 'B.Tech',
  institution: 'Sershah Engineering College, Bihar',
  period: '2021 – 2025',
  certifications: [
    'Java Full Stack — JSpiders, Noida',
    'PCAP – Python Certified Associate',
    'Google Data Analytics',
    'Cisco Cybersecurity',
    'Cisco Certified Network Associate',
  ],
}

export const CUBE_FACES = ['Python', 'FastAPI', 'React', 'Next.js', 'RLHF', 'Kaiju']
