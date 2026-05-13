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
    'Full-Stack Developer',
    'AI Systems Evaluator',
    'Product Builder',
  ],
  about: [
    `I'm a <orange>LLM Post-Training Engineer</orange> currently at Ethara AI in Gurugram, where I evaluate AI responses across 6 quality dimensions and benchmark coding agents — Claude, GPT, and Kimi — on real Python library reconstruction tasks using the Commit0 framework.`,
    `Beyond AI evaluation, I'm a full-stack developer who builds and ships things. I created <cyan>Bihar Skill Hub</cyan>, a live educational platform serving students across Bihar with 33 courses, JWT auth, and Razorpay payments — deployed across Vercel and Railway.`,
    `I come from an EEE background, which taught me to think in systems. I write Python for AI, Django for APIs, React for UIs, and reach for Docker and PostgreSQL when things need to scale.`,
  ],
}

export const STATS = [
  { num: 500, suffix: '+', label: 'LLM Responses Evaluated Weekly' },
  { num: 54,  suffix: '',  label: 'Python Libraries Benchmarked' },
  { num: 33,  suffix: '',  label: 'Courses on Bihar Skill Hub' },
  { num: 4,   suffix: '',  label: 'Live Deployed Products' },
]

export const EXPERIENCE = [
  {
    company: 'Ethara AI',
    role: 'LLM Post-Training Intern',
    location: 'Gurugram, Haryana — On-site',
    period: 'Jan 2026 – Present',
    color: 'orange',
    bullets: [
      'Evaluated LLM responses across <b>6 quality dimensions</b> (Truthfulness, Instruction Following, Prompt Correctness, Writing Quality, Verbosity, Overall Quality) using a 1–6 rubric on <b>500+ responses weekly</b>',
      'Benchmarked AI coding agents (Claude, GPT, Kimi) on Python library reconstruction via Commit0 across a <b>3-stage pipeline — Draft → Lint → Test</b> — measuring pass rates across 54 Python libraries',
      'Identified <b>multi-turn response degradation patterns</b> across 8-turn STEM conversations, surfacing insights to inform model fine-tuning decisions',
      'Documented evaluation findings and pattern analyses to support data-driven post-training decisions',
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
]

export const SKILLS = [
  {
    category: 'Languages',
    items: ['Python', 'Java', 'JavaScript', 'SQL'],
  },
  {
    category: 'Frontend',
    items: ['React.js', 'HTML5', 'CSS3', 'Vite', 'React Router'],
  },
  {
    category: 'Backend & Databases',
    items: ['Django REST', 'PostgreSQL', 'MySQL', 'SQLite', 'Hibernate ORM', 'JDBC', 'Servlets'],
  },
  {
    category: 'AI / LLM',
    items: ['Post-Training Eval', 'RLHF', 'Agent Benchmarking', 'Prompt Engineering', 'Multi-turn Analysis', 'Commit0', 'Aider'],
  },
  {
    category: 'Tools & Infrastructure',
    items: ['Docker', 'Git / GitHub', 'Vercel', 'Railway', 'Streamlit', 'Linux', 'VS Code'],
  },
]

export const PROJECTS = [
  {
    num: '01',
    title: 'Bihar Skill Hub',
    period: '2025 – Present',
    desc: 'A fully deployed educational platform targeting students in Bihar, featuring 33 courses across 11 skill categories. Built with JWT authentication, course enrollment, user profiles, success stories, and Razorpay payment integration. Deployed across Vercel (frontend) and Railway (backend + PostgreSQL) with CI/CD via GitHub.',
    stack: ['React', 'Django REST', 'PostgreSQL', 'Razorpay', 'JWT', 'Vercel', 'Railway'],
    github: 'https://github.com/bihari-bhau',
    live: 'https://biharskillhub.co.in',
    isLive: true,
  },
  {
    num: '02',
    title: 'LLM Response Quality Evaluator',
    period: 'Mar 2026',
    desc: 'A Streamlit tool to evaluate and compare LLM responses across 5 RLHF-inspired quality dimensions with a weighted scoring formula — IF×0.25, Truth×0.25, Correctness×0.20, Writing×0.15, Verbosity×0.15. Auto-logs to JSONL and surfaces multi-turn degradation patterns after 5+ entries. Directly inspired by post-training work at Ethara AI.',
    stack: ['Python', 'Streamlit', 'RLHF', 'JSONL', 'Post-Training'],
    github: 'https://github.com/bihari-bhau',
    live: '#',
    isLive: false,
  },
  {
  num: '03',
  title: 'LLM Toolkit',
  period: '2025 – Present',
  desc: '...', // ⚠️ Need your input — what is this project exactly?
  stack: [],
  github: 'https://github.com/bihari-bhau/llm-toolkit',
  live: 'https://llm-toolkit.vercel.app/',
  isLive: false,
  },
  {
  num: '04',
  title: 'Taskflow',
  period: '2025 – Present',
  desc: '...', // ⚠️ Need your input — what does Taskflow do?
  stack: [],
  github: 'https://github.com/bihari-bhau/taskflow',
  live: '',
  isLive: false,
  },
  {
  num: '05',
  title: 'RLHF Eval',
  period: '2025 – Present',
  desc: 'Production-grade LLM evaluation platform built during an AI Post-Training internship. Features side-by-side A/B prompt rating across 6 quality dimensions (Truthfulness, Correctness, Writing, Verbosity, Instruction Following, Overall) on a 1–6 scale with weighted scoring. Includes an analytics dashboard, Kaiju benchmarking integration, and Docker Compose deployment.',
  stack: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Docker', 'Railway'],
  github: 'https://github.com/bihari-bhau/rlhf-eval',
  live: '',
  isLive: false,
  },
]

export const EDUCATION = {
  degree: 'Electrical & Electronics Engineering',
  level: 'B.Tech',
  institution: 'Sershah Engineering College, Bihar',
  period: '2021 – 2025',
  certifications: [
    'Java Full Stack',
    'PCAP – Python Certified Associate',
    'Google Data Analytics',
    'Cisco Cybersecurity',
  ],
}

export const CUBE_FACES = ['Python', 'Django', 'React', 'RLHF', 'Docker', 'LLM Eval']
