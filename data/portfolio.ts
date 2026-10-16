export const profile = {
  name: "Piyush More",
  role: "Software Engineer | Automation & Applied AI",
  statement:
    "I enjoy exploring new domains, understanding complex systems, and building practical solutions that combine software, automation, and data-driven decision making to solve real-world problems.",
  email: "10piyushmore@gmail.com",
  github: "https://github.com/piyushm10",
  linkedin: "https://www.linkedin.com/in/10-piyush",
  education: {
    degree: "B.Tech, Computer Science and Business Systems",
    university: "VIT-AP University",
    graduation: "Expected July - September 2026",
    cgpa: "7.7"
  }
};

export const stats = [
  { value: 22000, suffix: "+", label: "Test cases generated" },
  { value: 593, suffix: "", label: "Scripted onboarding TCs" },
  { value: 25, suffix: "", label: "Test scripts" },
  { value: 15, suffix: "+", label: "Application screens" },
  { value: 113, suffix: "", label: "Spikes detected" }
];

export const focusAreas = [
  ["Software Engineering", "Reliable systems, maintainable code, and pragmatic problem solving."],
  ["Automation Systems", "Validation frameworks that turn repetitive work into repeatable evidence."],
  ["Applied AI", "Interpretable, useful AI workflows grounded in real product constraints."],
  ["Healthcare Technology", "Software and analytics for medical applications and devices."],
  ["Product Development", "From feasibility questions to prototypes, validation, and iteration."],
  ["Research & Experimentation", "Literature, datasets, hypotheses, and disciplined evaluation."]
];

export type Experience = {
  id: string;
  number: string;
  title: string;
  summary: string;
  problem: string;
  approach: string;
  outcomes: string[];
  technologies: string[];
  visual: "automation" | "analytics" | "imaging" | "workflow";
  testRun?: {
    title: string;
    meta: string[];
    screens: { name: string; script: string; cases: string }[];
  };
};

export const experiences: Experience[] = [
  {
    id: "ui-automation",
    number: "01",
    title: "Healthcare UI Automation Framework",
    summary:
      "A Python framework validating Linux-based medical UIs across 15+ screens, scaling from 593 scripted cases to 22,000+ preset-matrix cases.",
    problem:
      "Medical UI validation requires repeatable coverage, clear evidence, and reliable checks across navigation, focus behavior, input rules, errors, and screen transitions.",
    approach:
      "Built an Excel-driven black-box framework around Linux accessibility APIs, automated interaction, screenshot evidence, UI-tree comparison, and AI-assisted visual validation.",
    outcomes: [
      "593 scripted test cases across onboarding screens 01–06",
      "22,000+ preset-matrix cases for procedure, DFS, and scope flows",
      "25 test scripts covering 15+ application screens",
      "11 tool categories + PASS/FAIL evidence reports"
    ],
    technologies: [
      "Python",
      "AT-SPI",
      "pyatspi",
      "OpenAI GPT-4.1",
      "OpenCV",
      "OpenPyXL",
      "Xvfb",
      "MySQL",
      "xdotool",
      "Pillow"
    ],
    visual: "automation",
    testRun: {
      title: "pytest · ui_test_automation",
      meta: ["22,000+ generated", "593 onboarding", "25 scripts", "15+ screens", "11 tools"],
      screens: [
        { name: "Welcome", script: "01", cases: "~43" },
        { name: "Hospital Details", script: "02", cases: "~70" },
        { name: "Security Setup", script: "03", cases: "~93" },
        { name: "Surgeon Details", script: "04", cases: "~161" },
        { name: "Confirm Password", script: "05", cases: "~99" },
        { name: "Login (3 tabs)", script: "06", cases: "~127" },
        { name: "Procedure · Enli8NXT", script: "13C", cases: "8,550" },
        { name: "Procedure · Enli8", script: "13A", cases: "2,125" },
        { name: "DFS (7 presets)", script: "12", cases: "49" },
        { name: "Scope Usage", script: "14", cases: "392" },
        { name: "Scope Connection Error", script: "15", cases: "7" },
        { name: "Forgot Password (3 tabs)", script: "16", cases: "51" },
        { name: "Feature Visibility", script: "11", cases: "~11" },
        { name: "Archive", script: "08", cases: "~103" },
        { name: "Profile", script: "10", cases: "~49" },
        { name: "Settings", script: "09", cases: "~18" },
        { name: "App Update (USB)", script: "19", cases: "~15" }
      ]
    }
  },
  {
    id: "cgm-analytics",
    number: "02",
    title: "CGM Analytics & Spike Detection",
    summary:
      "Investigated machine learning and interpretable algorithms for Continuous Glucose Monitoring analytics.",
    problem:
      "Useful spike detection must recognize patient-specific glucose behavior early enough to support action while remaining explainable.",
    approach:
      "Evaluated public datasets and RNN/LSTM approaches, reviewed literature, then developed personalized threshold logic using historical trends in a Streamlit experimentation app.",
    outcomes: [
      "113 spikes detected during evaluation",
      "Approximately 52 minutes average lead time",
      "Personalized historical thresholding",
      "Research and feasibility stage"
    ],
    technologies: ["Python", "Streamlit", "Pandas", "Time Series", "Machine Learning", "Data Analysis"],
    visual: "analytics"
  },
  {
    id: "kidney-stone",
    number: "03",
    title: "Medical Imaging Optimization Study",
    summary:
      "Studied deployment feasibility and performance optimization for a kidney stone detection and segmentation pipeline.",
    problem:
      "The externally supplied models needed evaluation against existing hardware constraints, balancing real-time performance with clinically acceptable accuracy.",
    approach:
      "Compared FPS and accuracy, tested resolution scaling and lightweight models, and assessed hybrid detection-segmentation and integration options.",
    outcomes: [
      "Performance and feasibility analysis",
      "Inference optimization experiments",
      "Resolution and model trade-off study",
      "Integration constraints documented"
    ],
    technologies: ["Python", "OpenCV", "YOLO-based Models", "ONNX Runtime"],
    visual: "imaging"
  },
  {
    id: "workflow-automation",
    number: "04",
    title: "Workflow Automation Research",
    summary:
      "Evaluated reusable authentication workflows to reduce backend implementation effort.",
    problem:
      "OTP and verification flows often repeat the same orchestration across email, SMS, and messaging channels.",
    approach:
      "Designed OTP workflows, integrated communication platforms, and compared reusable workflow architectures across multiple delivery channels.",
    outcomes: [
      "Technical feasibility established",
      "Email, SMS, and WhatsApp paths evaluated",
      "Reusable architecture explored",
      "Not adopted due to no immediate business requirement"
    ],
    technologies: ["n8n", "Twilio", "Gmail", "Outlook", "Sender"],
    visual: "workflow"
  }
];

export const microgreens = {
  title: "Microgreens Monitoring & Growth Detection System",
  role: "Team Lead",
  overview:
    "An IoT-enabled system for monitoring microgreens cultivation using sensors, imaging, and data-driven analysis.",
  contributions: [
    "Project leadership and team coordination",
    "Sensor integration, testing, and dataset annotation",
    "3D enclosure and PCB design collaboration",
    "Research paper and technical documentation",
    "Presentation and design registration activities"
  ],
  technologies: ["IoT", "Sensors", "Imaging", "Data Analysis", "3D Design", "Research"]
};

export const researchTopics = [
  {
    title: "Healthcare AI",
    text: "Practical AI-assisted validation and analytics under real healthcare product constraints."
  },
  {
    title: "CGM Analytics",
    text: "Personalized, interpretable signal detection using longitudinal glucose behavior."
  },
  {
    title: "Medical Imaging",
    text: "Deployment trade-offs between inference speed, resolution, model weight, and accuracy."
  },
  {
    title: "Workflow Automation",
    text: "Reusable orchestration patterns for communication and authentication workflows."
  }
];

export const skills = {
  Programming: ["Python", "C", "C++", "SQL"],
  "Software Engineering": [
    "Object-Oriented Programming",
    "Data Structures",
    "Algorithms",
    "Software Testing",
    "Framework Development"
  ],
  "Automation & Testing": [
    "UI Automation",
    "Accessibility Testing",
    "Black-Box Testing",
    "Regression Testing",
    "Test Design",
    "Test Reporting"
  ],
  "Applied AI & Analytics": [
    "Machine Learning",
    "Time-Series Analytics",
    "Data Analysis",
    "Computer Vision",
    "Healthcare Analytics"
  ],
  "Tools & Platforms": [
    "Linux",
    "Git",
    "Streamlit",
    "OpenCV",
    "OpenPyXL",
    "Jupyter",
    "n8n"
  ]
};

export const certifications = [
  { issuer: "Oracle", title: "OCI 2025 Certified AI Foundations Associate", code: "AI" },
  { issuer: "Oracle", title: "OCI 2025 Certified Data Science Professional", code: "DS" },
  { issuer: "Oracle", title: "OCI 2025 Certified Generative AI Professional", code: "GAI" },
  { issuer: "Google", title: "Google Data Analytics Professional Certificate", code: "G" }
];

export const milestones = [
  {
    year: "2022",
    label: "Education",
    title: "Computer Science & Business Systems",
    text: "Began B.Tech studies at VIT-AP University."
  },
  {
    year: "2025",
    label: "Publication",
    title: "IEEE ICCDS 2025",
    text: "Published work related to IoT and AI-enabled microgreens monitoring."
  },
  {
    year: "Apr 2025",
    label: "Intellectual Property",
    title: "Industrial Design Registration",
    text: "Microgreens Monitoring and Growth Detection System, No. 445226-001."
  },
  {
    year: "Jan 2026",
    label: "Internship",
    title: "Biorad Medisys",
    text: "Joined as System Design and Development Intern."
  },
  {
    year: "2026",
    label: "Research",
    title: "Healthcare Automation & Applied AI",
    text: "Building validation systems and studying CGM analytics and medical imaging optimization."
  },
  {
    year: "2026",
    label: "Graduation",
    title: "Expected B.Tech Completion",
    text: "Expected between July and September 2026."
  }
];

export const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Research", "research"],
  ["Publications & IP", "publications"],
  ["Skills", "skills"],
  ["Certifications", "certifications"],
  ["Timeline", "timeline"],
  ["Resume", "resume"]
] as const;
