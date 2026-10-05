export const experiences = [
  {
    title: "Data Engineering & Agentic AI Intern",
    company: "HERE Technologies",
    location: "Chicago, IL",
    period: "Jun 2026 – Dec 2026",
    bullets: [
      "Built an agentic AWS Bedrock pipeline that retrieves expense data, generates financial commentary, and self-validates it against source data using metadata-enriched prompts — improving commentary accuracy from 70% to 90%.",
      "Built an MCP-protocol-compliant server enabling Amazon QuickSight's AI assistant to query a 26M+ row Athena database in natural language — concept to POC in 12 days, with sub-5-second responses and real-time validation.",
      "Persisted results to PostgreSQL with NLP-based query matching so prior outputs are reused instead of regenerated; added DynamoDB-backed persistent memory.",
    ],
    tags: ["AWS Bedrock", "MCP", "Athena", "QuickSight", "DynamoDB", "PostgreSQL", "Python"],
  },
  {
    title: "Student Researcher — Multimodal AI",
    company: "NEXIS Lab, Purdue University",
    location: "West Lafayette, IN",
    period: "Jan 2026 – Jun 2026",
    bullets: [
      "Built sound and depth benchmarking and audio metadata pipelines for multimodal research on the Ego4D / Ego-Exo4D datasets.",
      "Developed a QnA generation pipeline and applied LoRA / RLHF optimization to multimodal models.",
    ],
    tags: ["PyTorch", "Spark", "LangGraph", "MCP", "RAG", "Linux"],
  },
  {
    title: "Software Engineer",
    company: "ICICI Lombard General Insurance",
    location: "Mumbai, India",
    period: "May 2023 – Aug 2025",
    bullets: [
      "Engineered Azure Synapse, Data Factory, and Databricks pipelines processing 1M+ records daily.",
      "Built React and Python API features supporting internal business applications.",
      "Developed Power BI (DAX, Power Query M) and Tableau dashboards for business reporting.",
      "Automated CI/CD workflows, improving release reliability by 30%.",
    ],
    tags: ["Azure Synapse", "Databricks", "Python", "React", "Power BI", "CI/CD"],
  },
];

export const education = [
  {
    degree: "MS in Computer Science",
    school: "Purdue University",
    location: "West Lafayette, IN",
    period: "Aug 2025 – May 2027 (Expected)",
    detail: "GPA: 3.95 / 4.0",
    coursework: [
      "Advanced Algorithms",
      "Distributed Systems",
      "Database Systems",
      "Machine Learning",
    ],
  },
  {
    degree: "BE in Information Technology",
    school: "Thadomal Shahani Engineering College, University of Mumbai",
    location: "Mumbai, India",
    period: "2019 – 2023",
    detail: "CGPA: 9.54 / 10 · First Class with Distinction",
    coursework: [],
  },
];

export const projects = [
  {
    title: "Agentic Data Intelligence System",
    period: "2025 – 2026",
    description:
      "Agentic RAG pipeline orchestrating LLM agents and MCP tools to answer questions over structured data. LangGraph multi-agent orchestration, FastAPI backend, PostgreSQL.",
    tags: ["LangGraph", "MCP", "Anthropic Claude", "FastAPI", "PostgreSQL", "Docker"],
    highlight: "LangGraph · MCP",
    highlightColor: "violet",
    githubUrl: "",
    demoUrl: "",
  },
  {
    title: "PromptSmith — NL-to-SQL Platform",
    period: "2025",
    description:
      "Secure natural-language-to-SQL platform with metadata-driven planner and validator. 100% safety compliance, 35% fewer query failures. JWT/RBAC auth, fully containerized.",
    tags: ["FastAPI", "PostgreSQL", "React", "Vue", "TypeScript", "Docker", "Gemini", "Ollama"],
    highlight: "100% safety compliance",
    highlightColor: "sky",
    githubUrl: "",
    demoUrl: "",
  },
  {
    title: "CampusNav — Spatial AI & 3D Reconstruction",
    period: "2025 – 2026",
    description:
      "3D reconstruction of campus spaces combining 4D Gaussian Splatting with vision-language and segmentation models. COLMAP for calibration, Florence-2 and SAM for semantic understanding.",
    tags: ["4D Gaussian Splatting", "COLMAP", "Florence-2", "SAM", "PyTorch"],
    highlight: "4D Gaussian Splatting",
    highlightColor: "emerald",
    githubUrl: "",
    demoUrl: "",
  },
  {
    title: "Sip'n Shot",
    period: "Apr 2026",
    description:
      "Consumer web app built at a 24-hour Purdue Hackathon. Won the Social Impact Award. AI-driven content generation on a Next.js / MongoDB stack.",
    tags: ["Next.js", "React", "OpenAI API", "MongoDB"],
    highlight: "Social Impact Award",
    highlightColor: "amber",
    githubUrl: "https://github.com/manjuchashreya/sipnshot",
    demoUrl: "",
  },
  {
    title: "AI-Powered Interactive Resume Builder",
    period: "2025",
    description:
      "Full-stack platform generating AI-assisted, tailored resume content. React/Next.js frontend, FastAPI backend, Docker-containerized and CI/CD-deployed.",
    tags: ["React", "Next.js", "FastAPI", "Docker", "CI/CD"],
    highlight: "Full-Stack AI",
    highlightColor: "indigo",
    githubUrl: "https://github.com/manjuchashreya/ai-interactive-resume-builder",
    demoUrl: "",
  },
];

export const skillGroups: Record<string, string[]> = {
  "AI / LLM": [
    "LangGraph",
    "MCP",
    "RAG",
    "AWS Bedrock",
    "Anthropic Claude",
    "Gemini",
    "PyTorch",
    "TensorFlow",
    "LoRA / RLHF",
  ],
  "Languages": ["Python", "TypeScript", "JavaScript", "SQL", "Java", "C++"],
  "Web & Backend": ["FastAPI", "React", "Next.js", "Vue.js", "Flask", "REST APIs"],
  "Cloud & Data": [
    "AWS (Bedrock, Athena, S3, DynamoDB)",
    "Azure Synapse",
    "Databricks",
    "Apache Spark",
  ],
  "Databases": ["PostgreSQL", "MySQL", "MongoDB", "Oracle"],
  "Tools": ["Docker", "Git", "CI/CD", "Linux", "Power BI", "Tableau"],
};

export const stats = [
  { value: "26M+", label: "Rows Queried" },
  { value: "3.95", label: "GPA at Purdue" },
  { value: "1M+", label: "Records / Day" },
  { value: "99.54%", label: "Peak Model Accuracy" },
];
