// ============================================================================
//  CENTRAL CONTENT FILE — edit everything about the portfolio here.
//  Anything written as [PLACEHOLDER] must be replaced before you deploy.
//  No company names, grades, certifications or links are invented.
// ============================================================================

export type IconKey =
  | "code"
  | "server"
  | "database"
  | "layout"
  | "cpu"
  | "network"
  | "brain"
  | "shield"
  | "wrench"
  | "cloud";

export type Level = "Expert" | "Advanced" | "Intermediate" | "Learning";
export type ProjectStatus = "Completed" | "In Development" | "Concept";

export type ScenePose =
  | "idle"
  | "wave"
  | "jump"
  | "type"
  | "read"
  | "think"
  | "build"
  | "shield"
  | "contact"
  | "run";

export interface Tech {
  name: string;
  level: Level;
  relatedProjects?: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  blurb: string;
  icon: IconKey;
  techs: Tech[];
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  status: ProjectStatus;
  year: string;
  icon: IconKey;
  accent: string; // tailwind gradient classes
  summary: string;
  problem: string;
  solution: string;
  architecture: { label: string; detail: string }[];
  features: string[];
  contribution: string;
  process: string[];
  tech: string[];
  repo: string | null; // null = not published yet (no fake links)
  demo: string | null;
  featured: boolean;
}

export interface Specialty {
  id: string;
  index: string;
  title: string;
  kicker: string;
  icon: IconKey;
  accent: string;
  glow: string;
  description: string;
  capabilities: string[];
  stack: string[];
  flow: [string, string, string];
  projects: string[];
  pose: ScenePose;
  action: string;
  sceneLabel: string;
}

// ---------------------------------------------------------------------------
// PROFILE
// ---------------------------------------------------------------------------

export const profile = {
  name: "Abhi",
  fullName: "Abhi", // add your full name if you want it shown
  role: "Electronics & Communication Engineer",
  headline: "I build software, embedded systems and intelligent connected products.",
  location: "India",
  availability: "Open to software, embedded and IoT opportunities",
  email: "pashapuabhi.8475@gmail.com",
  phone: "9666608448",
  linkedin: "https://www.linkedin.com/in/abhishek-pashapu/",
  github: "https://github.com/Abhishekpashapu",
  domain: "[YOUR DOMAIN]",
  resume: "/resume.pdf",
  bio: [
    "I am an Electronics and Communication Engineering graduate who enjoys working across the full stack — from writing Java backends and React interfaces to wiring sensors, flashing microcontrollers and training small machine-learning models.",
    "My approach is simple: understand the problem, build a working prototype, measure it, then refine the engineering. I care about clean structure, honest documentation and interfaces that feel effortless to use.",
  ],
  rotatingRoles: [
    "Software Developer",
    "Java Full-Stack Builder",
    "Embedded & IoT Engineer",
    "AI / ML Explorer",
    "Networking & Security Learner",
  ],
};

// ---------------------------------------------------------------------------
// NAVIGATION
// ---------------------------------------------------------------------------

export const navLinks = [
  { label: "Home", href: "/#top" },
  { label: "About", href: "/#about" },
  { label: "Journey", href: "/#journey" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Specialties", href: "/#embedded" },
  { label: "Education", href: "/#education" },
  { label: "Contact", href: "/#contact" },
];

// ---------------------------------------------------------------------------
// STATS (counters)
// ---------------------------------------------------------------------------

export const stats = [
  { value: 7, suffix: "", label: "Engineering projects" },
  { value: 40, suffix: "+", label: "Technologies & tools" },
  { value: 6, suffix: "", label: "Engineering specialties" },
  { value: 100, suffix: "%", label: "Curiosity driven" },
];

// ---------------------------------------------------------------------------
// SKILLS — separated by honest proficiency labels, not fake percentages
// ---------------------------------------------------------------------------

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages & Core",
    blurb: "The primitives I reach for when solving problems.",
    icon: "code",
    techs: [
      { name: "Java", level: "Advanced", relatedProjects: ["milk-route-manager"] },
      { name: "JavaScript", level: "Advanced", relatedProjects: ["milk-route-manager"] },
      { name: "TypeScript", level: "Intermediate", relatedProjects: ["sentinel-desktop-assistant"] },
      { name: "Python", level: "Intermediate", relatedProjects: ["ai-attendance-system", "network-intrusion-lab"] },
      { name: "C / C++", level: "Intermediate", relatedProjects: ["accident-alert-system"] },
      { name: "SQL", level: "Intermediate", relatedProjects: ["milk-route-manager"] },
      { name: "HTML & CSS", level: "Advanced" },
    ],
  },
  {
    id: "fullstack",
    title: "Full-Stack Engineering",
    blurb: "From database schema to the last pixel on screen.",
    icon: "layout",
    techs: [
      { name: "Spring Boot", level: "Intermediate", relatedProjects: ["milk-route-manager"] },
      { name: "REST APIs", level: "Advanced", relatedProjects: ["milk-route-manager", "smart-energy-monitor"] },
      { name: "React", level: "Advanced", relatedProjects: ["sentinel-desktop-assistant"] },
      { name: "Next.js", level: "Intermediate" },
      { name: "Node.js", level: "Intermediate" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Authentication (JWT)", level: "Learning" },
    ],
  },
  {
    id: "embedded",
    title: "Embedded & IoT",
    blurb: "Firmware, sensors and hardware-to-cloud pipelines.",
    icon: "cpu",
    techs: [
      { name: "Arduino (AVR)", level: "Advanced", relatedProjects: ["accident-alert-system", "air-quality-node"] },
      { name: "ESP32 / ESP8266", level: "Advanced", relatedProjects: ["smart-energy-monitor", "air-quality-node"] },
      { name: "Raspberry Pi", level: "Intermediate", relatedProjects: ["ai-attendance-system"] },
      { name: "MQTT", level: "Intermediate", relatedProjects: ["smart-energy-monitor"] },
      { name: "I2C / SPI / UART", level: "Intermediate" },
      { name: "Sensor integration", level: "Advanced", relatedProjects: ["air-quality-node"] },
      { name: "PCB basics", level: "Learning" },
    ],
  },
  {
    id: "ai",
    title: "AI & Data",
    blurb: "Small, explainable models applied to real signals.",
    icon: "brain",
    techs: [
      { name: "Python (NumPy / Pandas)", level: "Intermediate", relatedProjects: ["network-intrusion-lab"] },
      { name: "scikit-learn", level: "Intermediate", relatedProjects: ["network-intrusion-lab"] },
      { name: "OpenCV", level: "Intermediate", relatedProjects: ["ai-attendance-system"] },
      { name: "Face recognition", level: "Learning", relatedProjects: ["ai-attendance-system"] },
      { name: "Data visualisation", level: "Intermediate" },
      { name: "Model evaluation", level: "Intermediate" },
    ],
  },
  {
    id: "networking",
    title: "Networking & Security",
    blurb: "How packets move — and how to reason about their safety.",
    icon: "network",
    techs: [
      { name: "TCP/IP fundamentals", level: "Intermediate" },
      { name: "Wireshark", level: "Intermediate", relatedProjects: ["network-intrusion-lab"] },
      { name: "Linux networking", level: "Intermediate" },
      { name: "Routing & switching basics", level: "Intermediate" },
      { name: "Nmap & reconnaissance", level: "Learning", relatedProjects: ["network-intrusion-lab"] },
      { name: "OWASP basics", level: "Learning" },
    ],
  },
  {
    id: "platform",
    title: "Platform & Workflow",
    blurb: "Tools that keep the build repeatable and the code reviewable.",
    icon: "wrench",
    techs: [
      { name: "Git & GitHub", level: "Advanced" },
      { name: "Linux CLI", level: "Intermediate" },
      { name: "Docker", level: "Learning" },
      { name: "Postman", level: "Advanced" },
      { name: "VS Code", level: "Advanced" },
      { name: "Vercel / Render", level: "Intermediate" },
      { name: "Figma", level: "Intermediate" },
    ],
  },
];

// ---------------------------------------------------------------------------
// SKILL → PROJECT MAPPING — shows how a skill travels into real work
// ---------------------------------------------------------------------------

export const skillChains = [
  {
    title: "Java full-stack delivery",
    steps: ["Java", "Spring Boot", "REST API", "SQL", "React dashboard"],
    project: "Milk Route Manager",
    slug: "milk-route-manager",
  },
  {
    title: "Sensor → cloud pipeline",
    steps: ["ESP32", "I2C sensors", "MQTT", "Data store", "Live dashboard"],
    project: "Smart Home Energy Monitor",
    slug: "smart-energy-monitor",
  },
  {
    title: "On-device computer vision",
    steps: ["Python", "OpenCV", "Face embeddings", "Matching", "Attendance log"],
    project: "AI Attendance System",
    slug: "ai-attendance-system",
  },
  {
    title: "Field-safe embedded alerting",
    steps: ["MPU6050", "GPS", "GSM", "Threshold logic", "Alert dispatch"],
    project: "Accident Detection & Alert",
    slug: "accident-alert-system",
  },
  {
    title: "Applied network security",
    steps: ["Packet capture", "Feature extraction", "scikit-learn", "Classification", "Report"],
    project: "Network Intrusion Lab",
    slug: "network-intrusion-lab",
  },
];

// ---------------------------------------------------------------------------
// PROJECTS — 7 case studies. Replace with your real work before deploying.
// ---------------------------------------------------------------------------

export const projects: Project[] = [
  {
    slug: "milk-route-manager",
    title: "Milk Route Manager",
    subtitle: "A full-stack operations platform for small dairy distributors",
    category: "Software / Full-Stack",
    status: "Completed",
    year: "2024",
    icon: "server",
    accent: "from-blue-500/25 via-indigo-500/10 to-transparent",
    summary:
      "A Java-backed management system for daily milk delivery: customers, routes, subscriptions, invoices and payments in one focused dashboard.",
    problem:
      "Small dairy distributors usually track subscriptions, daily quantities and dues in notebooks. Route changes and month-end billing are slow, error-prone and hard to audit.",
    solution:
      "I designed a relational data model for customers, routes and subscription schedules, exposed it through a Spring Boot REST API, and built a dashboard that generates daily delivery sheets and monthly invoices automatically.",
    architecture: [
      { label: "Client", detail: "React dashboard with role-aware views" },
      { label: "API", detail: "Spring Boot REST controllers with validation" },
      { label: "Domain", detail: "Service layer for routes, billing and schedules" },
      { label: "Data", detail: "Relational schema for customers, deliveries and payments" },
    ],
    features: [
      "Customer and route CRUD with searchable lists",
      "Subscription scheduling with daily delivery sheets",
      "Monthly invoice generation and payment status tracking",
      "Dashboard totals for dues and delivered quantity",
    ],
    contribution:
      "Sole developer: data model, REST API, UI, and validation rules. This project is where I learned to keep business logic out of controllers.",
    process: [
      "Interviewed a local distributor to map the real daily workflow",
      "Sketched the entities and relationships before writing code",
      "Built API endpoints first and tested them in Postman",
      "Added the dashboard once the contracts were stable",
      "Documented the setup and sample data for reviewers",
    ],
    tech: ["Java", "Spring Boot", "REST API", "SQL", "React", "Tailwind CSS"],
    repo: null,
    demo: null,
    featured: true,
  },
  {
    slug: "smart-energy-monitor",
    title: "Smart Home Energy Monitor",
    subtitle: "An IoT energy dashboard built on ESP32 and MQTT",
    category: "IoT / Embedded",
    status: "Completed",
    year: "2024",
    icon: "cpu",
    accent: "from-emerald-500/25 via-teal-500/10 to-transparent",
    summary:
      "A low-cost energy monitoring node that samples current sensors, publishes readings over MQTT and charts live and historical consumption.",
    problem:
      "Household energy use is invisible until the bill arrives. I wanted a retrofit-friendly way to see which loads are running and when.",
    solution:
      "An ESP32 samples a non-invasive current sensor, computes RMS values, and publishes JSON payloads over MQTT. A lightweight dashboard subscribes to the topic and renders live and rolling consumption charts.",
    architecture: [
      { label: "Sensing", detail: "Current transformer + RMS calculation on ESP32" },
      { label: "Transport", detail: "MQTT publish over Wi-Fi at a fixed interval" },
      { label: "Storage", detail: "Time-series readings persisted for history" },
      { label: "Interface", detail: "Live dashboard with rolling averages" },
    ],
    features: [
      "Calibrated RMS current measurement",
      "MQTT publishing with reconnect handling",
      "Live and historical consumption charts",
      "Configurable sample interval via serial or config topic",
    ],
    contribution:
      "Firmware, calibration procedure, broker setup and the dashboard. I documented the calibration steps so the readings can be trusted.",
    process: [
      "Bench-tested the sensor with known resistive loads",
      "Derived and verified the RMS calculation",
      "Added Wi-Fi/MQTT reconnect handling before mounting",
      "Built the dashboard against recorded sample data",
    ],
    tech: ["ESP32", "C++", "MQTT", "Current sensor", "JavaScript", "Charting"],
    repo: null,
    demo: null,
    featured: true,
  },
  {
    slug: "ai-attendance-system",
    title: "AI Attendance System",
    subtitle: "Camera-based attendance with an auditable review flow",
    category: "AI / Computer Vision",
    status: "In Development",
    year: "2025",
    icon: "brain",
    accent: "from-violet-500/25 via-fuchsia-500/10 to-transparent",
    summary:
      "A face-recognition attendance prototype that logs check-ins and keeps a human review step for uncertain matches.",
    problem:
      "Manual attendance is slow and easy to proxy. Automatic systems often fail silently when confidence is low or lighting changes.",
    solution:
      "The pipeline detects faces, generates embeddings and compares them against an enrolled set. Low-confidence matches are queued for manual review instead of being silently accepted.",
    architecture: [
      { label: "Capture", detail: "Camera frames sampled at a controlled rate" },
      { label: "Detect", detail: "Face detection and alignment with OpenCV" },
      { label: "Match", detail: "Embedding comparison against enrolled profiles" },
      { label: "Review", detail: "Confidence thresholds + manual confirmation queue" },
      { label: "Log", detail: "Timestamped attendance records with audit trail" },
    ],
    features: [
      "Enrollment flow for new people",
      "Confidence threshold with an uncertain-match queue",
      "Duplicate check-in prevention per session",
      "Exportable attendance log",
    ],
    contribution:
      "Prototype architecture, recognition pipeline and the review workflow. Still in development — not deployed.",
    process: [
      "Built a small labelled test set for evaluation",
      "Benchmarked detection and matching separately",
      "Added a manual review queue after seeing false positives",
      "Currently tuning thresholds for different lighting conditions",
    ],
    tech: ["Python", "OpenCV", "Face embeddings", "Raspberry Pi", "SQLite"],
    repo: null,
    demo: null,
    featured: true,
  },
  {
    slug: "accident-alert-system",
    title: "Accident Detection & Alert",
    subtitle: "Embedded crash detection with GPS location and GSM alerts",
    category: "Embedded / Safety",
    status: "Completed",
    year: "2023",
    icon: "shield",
    accent: "from-rose-500/25 via-orange-500/10 to-transparent",
    summary:
      "A vehicle-mounted prototype that detects impact signatures and sends an SMS with location to a configured emergency contact.",
    problem:
      "In a collision the difference between help arriving quickly and not at all can be a single phone call — one the occupant may not be able to make.",
    solution:
      "An accelerometer is sampled continuously and compared against a tuned impact signature. On trigger, the controller acquires a GPS fix and dispatches an SMS with coordinates via a GSM module, with a cancel window to avoid false alarms.",
    architecture: [
      { label: "Sense", detail: "Accelerometer sampled on a fixed interval" },
      { label: "Detect", detail: "Threshold + duration logic to reject bumps" },
      { label: "Locate", detail: "GPS fix acquisition after trigger" },
      { label: "Notify", detail: "GSM SMS with coordinates and cancel window" },
    ],
    features: [
      "Impact detection tuned to reject potholes and hard braking",
      "Cancel window before the alert is sent",
      "GPS coordinates embedded in the SMS",
      "Audible local buzzer for the occupant",
    ],
    contribution:
      "Circuit assembly, firmware, threshold tuning and field testing on a bicycle-mounted rig.",
    process: [
      "Captured raw accelerometer traces for normal and impact events",
      "Chose a threshold and duration pair from the recorded data",
      "Tested GPS fix time in open and built-up areas",
      "Added the cancel window after early false triggers",
    ],
    tech: ["Arduino", "C++", "MPU6050", "GPS module", "GSM module"],
    repo: null,
    demo: null,
    featured: true,
  },
  {
    slug: "air-quality-node",
    title: "Air Quality Monitoring Node",
    subtitle: "A calibrated indoor air-quality station with a live dashboard",
    category: "IoT / Environmental",
    status: "Completed",
    year: "2023",
    icon: "cloud",
    accent: "from-cyan-500/25 via-sky-500/10 to-transparent",
    summary:
      "An ESP8266 node that measures particulate and climate signals, warns locally, and streams readings to a web dashboard.",
    problem:
      "Consumer air-quality monitors are expensive and opaque. I wanted a node I could calibrate myself and read from anywhere.",
    solution:
      "The node reads a particulate sensor plus temperature and humidity, applies a warm-up and smoothing strategy, and publishes readings to a dashboard. An OLED and RGB LED give a local status without opening the app.",
    architecture: [
      { label: "Sense", detail: "Particulate, temperature and humidity sensors" },
      { label: "Condition", detail: "Warm-up, averaging and outlier rejection" },
      { label: "Publish", detail: "Wi-Fi JSON updates to the dashboard" },
      { label: "Display", detail: "Local OLED + RGB status, remote charts" },
    ],
    features: [
      "Sensor warm-up and rolling average to reduce noise",
      "Local OLED readout and colour-coded status",
      "Remote historical chart with thresholds",
      "Enclosure with airflow slots for the sensor",
    ],
    contribution:
      "Firmware, enclosure design, dashboard and calibration notes.",
    process: [
      "Measured sensor warm-up behaviour before trusting data",
      "Compared readings against a reference meter",
      "Added smoothing after observing spikes",
      "Documented thresholds and limitations clearly",
    ],
    tech: ["ESP8266", "C++", "PMS sensor", "DHT22", "OLED", "Dashboard"],
    repo: null,
    demo: null,
    featured: false,
  },
  {
    slug: "network-intrusion-lab",
    title: "Network Intrusion Lab",
    subtitle: "A reproducible lab for classifying suspicious traffic",
    category: "Networking / Security",
    status: "In Development",
    year: "2025",
    icon: "network",
    accent: "from-indigo-500/25 via-blue-500/10 to-transparent",
    summary:
      "A contained lab that captures traffic, extracts flow features and benchmarks simple classifiers on labelled network data.",
    problem:
      "Security ML demos often skip the part that matters: understanding the traffic, the features and where the model fails.",
    solution:
      "I built a repeatable capture-and-label workflow in a virtual lab, extracted flow-level features, and compared classical classifiers with clear evaluation metrics and confusion matrices.",
    architecture: [
      { label: "Lab", detail: "Isolated virtual network with controlled traffic" },
      { label: "Capture", detail: "Packet capture and flow reconstruction" },
      { label: "Features", detail: "Flow duration, volume, protocol, flags" },
      { label: "Model", detail: "Classical classifiers with cross-validation" },
      { label: "Report", detail: "Metrics, confusion matrix and limitations" },
    ],
    features: [
      "Documented capture procedure for repeatability",
      "Feature extraction script with clear field mapping",
      "Benchmark of multiple classifiers",
      "Honest limitations and false-positive discussion",
    ],
    contribution:
      "Lab setup, capture scripts, feature extraction and evaluation. Still in development.",
    process: [
      "Built an isolated topology so traffic is reproducible",
      "Captured normal and anomalous scenarios separately",
      "Extracted flow features and validated the dataset",
      "Comparing models and documenting where they break",
    ],
    tech: ["Python", "Wireshark", "scikit-learn", "Pandas", "Linux"],
    repo: null,
    demo: null,
    featured: false,
  },
  {
    slug: "sentinel-desktop-assistant",
    title: "Sentinel Desktop Assistant",
    subtitle: "A local-first productivity assistant with a command palette",
    category: "Software / AI",
    status: "Concept",
    year: "2025",
    icon: "code",
    accent: "from-amber-500/25 via-yellow-500/10 to-transparent",
    summary:
      "A concept for a desktop assistant that indexes local notes and actions, with a fast command palette and explicit permissions.",
    problem:
      "Cloud assistants are convenient but opaque about what leaves the machine. I wanted to explore a local-first alternative.",
    solution:
      "The concept uses a local index of notes and files, a command palette for actions, and clear permission prompts before anything network-bound happens. It is a design exploration, not a shipped product.",
    architecture: [
      { label: "Index", detail: "Local file and note indexing" },
      { label: "Intent", detail: "Command parsing with explicit confirmation" },
      { label: "Actions", detail: "Pluggable local actions and scripts" },
      { label: "Privacy", detail: "Permission gate for any network call" },
    ],
    features: [
      "Command palette with fuzzy search",
      "Local-first index and storage",
      "Explicit permission prompts",
      "Pluggable action model",
    ],
    contribution:
      "Concept, interaction design and technical spike. Not implemented beyond prototypes.",
    process: [
      "Mapped the privacy trade-offs of existing assistants",
      "Sketched the command palette interaction",
      "Prototyped the local index in TypeScript",
      "Parked the concept to focus on active projects",
    ],
    tech: ["TypeScript", "Node.js", "Electron (concept)", "SQLite"],
    repo: null,
    demo: null,
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

// ---------------------------------------------------------------------------
// SPECIALTIES — rendered as separate cinematic scenes, one area per section
// ---------------------------------------------------------------------------

export const specialties: Specialty[] = [
  {
    id: "embedded",
    index: "01",
    title: "Embedded Systems",
    kicker: "Firmware that touches the physical world",
    icon: "cpu",
    accent: "from-emerald-500/20 via-teal-500/10 to-transparent",
    glow: "bg-emerald-500/20",
    description:
      "Microcontroller firmware where a mis-timed interrupt has consequences. I build small, measurable embedded systems: sensor drivers, control logic and the bench tests that prove they behave.",
    capabilities: [
      "C / C++ firmware on Arduino and ESP32",
      "Sensor drivers over I2C, SPI and UART",
      "Interrupts, timers and low-power states",
      "Calibration and bench validation",
    ],
    stack: ["C / C++", "Arduino", "ESP32", "MPU6050", "I2C / SPI", "UART"],
    flow: ["Sense", "Firmware", "Act"],
    projects: ["accident-alert-system", "air-quality-node"],
    pose: "build",
    action: "soldering a sensor node",
    sceneLabel: "Embedded Lab",
  },
  {
    id: "iot",
    index: "02",
    title: "IoT & Connected Devices",
    kicker: "From a sensor pin to a live dashboard",
    icon: "cloud",
    accent: "from-cyan-500/20 via-sky-500/10 to-transparent",
    glow: "bg-cyan-500/20",
    description:
      "The interesting part of IoT is not the board — it is the pipeline. I wire devices to brokers, design payloads that survive reconnects, and build dashboards that make the readings useful.",
    capabilities: [
      "ESP32 / ESP8266 Wi-Fi firmware",
      "MQTT topics, QoS and reconnect handling",
      "Time-series storage and payload design",
      "Live and historical dashboards",
    ],
    stack: ["ESP32", "ESP8266", "MQTT", "Wi-Fi", "JavaScript", "Charting"],
    flow: ["Device", "MQTT", "Dashboard"],
    projects: ["smart-energy-monitor", "air-quality-node"],
    pose: "idle",
    action: "watching live telemetry",
    sceneLabel: "IoT Lab",
  },
  {
    id: "software",
    index: "03",
    title: "Software Engineering",
    kicker: "Backends, APIs and interfaces with structure",
    icon: "layout",
    accent: "from-blue-500/20 via-indigo-500/10 to-transparent",
    glow: "bg-blue-500/20",
    description:
      "I like software that is boring in the best way: clear data models, predictable APIs and interfaces that do not make the user think. Java and Spring Boot for the core, React and Next.js for the surface.",
    capabilities: [
      "Spring Boot REST services and validation",
      "Relational data modelling and SQL",
      "React and Next.js interfaces",
      "Documented API contracts in Postman",
    ],
    stack: ["Java", "Spring Boot", "REST", "SQL", "React", "Next.js"],
    flow: ["Client", "API", "Database"],
    projects: ["milk-route-manager", "sentinel-desktop-assistant"],
    pose: "type",
    action: "writing the API layer",
    sceneLabel: "Software Studio",
  },
  {
    id: "ai",
    index: "04",
    title: "AI & Machine Learning",
    kicker: "Small models, honest evaluation",
    icon: "brain",
    accent: "from-violet-500/20 via-fuchsia-500/10 to-transparent",
    glow: "bg-violet-500/20",
    description:
      "Applied models for signals and images, evaluated with the failures included. I care more about a clear confusion matrix than a headline accuracy number.",
    capabilities: [
      "Data cleaning and feature engineering",
      "Classical ML with scikit-learn",
      "Computer vision with OpenCV",
      "Error analysis and threshold tuning",
    ],
    stack: ["Python", "NumPy", "pandas", "scikit-learn", "OpenCV", "Matplotlib"],
    flow: ["Data", "Model", "Insight"],
    projects: ["ai-attendance-system", "network-intrusion-lab"],
    pose: "think",
    action: "evaluating a model",
    sceneLabel: "AI Lab",
  },
  {
    id: "networking",
    index: "05",
    title: "Networking",
    kicker: "Following the packet, not guessing",
    icon: "network",
    accent: "from-sky-500/20 via-blue-500/10 to-transparent",
    glow: "bg-sky-500/20",
    description:
      "TCP/IP fundamentals, routing and packet-level analysis. I build isolated labs where traffic is reproducible, then read the capture instead of trusting a dashboard.",
    capabilities: [
      "TCP/IP, subnetting and routing basics",
      "Packet capture and flow reconstruction",
      "Linux networking and CLI tooling",
      "Reproducible virtual lab topologies",
    ],
    stack: ["TCP/IP", "Wireshark", "Linux", "Routing", "Nmap", "Netcat"],
    flow: ["Packet", "Route", "Host"],
    projects: ["network-intrusion-lab"],
    pose: "run",
    action: "tracing a packet path",
    sceneLabel: "Network Operations",
  },
  {
    id: "cybersecurity",
    index: "06",
    title: "Cybersecurity",
    kicker: "Defensive thinking, tested in a lab",
    icon: "shield",
    accent: "from-rose-500/20 via-orange-500/10 to-transparent",
    glow: "bg-rose-500/20",
    description:
      "Security is a design constraint, not a feature. I practise in isolated environments: traffic analysis, basic offensive tooling and the defensive controls that answer it — always within scope.",
    capabilities: [
      "OWASP fundamentals and secure defaults",
      "Traffic analysis and anomaly spotting",
      "Nmap and reconnaissance in owned labs",
      "Hardening checklists and responsible disclosure",
    ],
    stack: ["Wireshark", "Nmap", "Linux", "OWASP", "Burp Suite", "Python"],
    flow: ["Traffic", "Detect", "Respond"],
    projects: ["network-intrusion-lab", "milk-route-manager"],
    pose: "shield",
    action: "running a defensive drill",
    sceneLabel: "Security Range",
  },
];

export const sectionIds = [
  "top",
  "about",
  "journey",
  "skills",
  "projects",
  ...specialties.map((specialty) => specialty.id),
  "education",
  "contact",
];

// ---------------------------------------------------------------------------
// ENGINEERING JOURNEY
// ---------------------------------------------------------------------------

export const journey = [
  {
    phase: "01",
    title: "Electronics foundations",
    period: "Coursework",
    description:
      "Started with circuits, signals and microcontrollers — learning why a datasheet matters before a single line of firmware.",
    tags: ["Circuit theory", "Digital logic", "Microcontrollers"],
  },
  {
    phase: "02",
    title: "Embedded & IoT builds",
    period: "Project work",
    description:
      "Moved from breadboards to complete nodes: sensors, firmware, connectivity and the dashboards that make readings actionable.",
    tags: ["ESP32", "Arduino", "Sensors", "MQTT"],
  },
  {
    phase: "03",
    title: "Software engineering",
    period: "Project work",
    description:
      "Learned to structure backends and interfaces properly: data models, APIs, validation and user-facing dashboards.",
    tags: ["Java", "Spring Boot", "React", "SQL"],
  },
  {
    phase: "04",
    title: "AI & security exploration",
    period: "Ongoing",
    description:
      "Currently exploring applied computer vision, classical ML and network traffic analysis — with a priority on honest evaluation.",
    tags: ["Python", "OpenCV", "scikit-learn", "Wireshark"],
  },
];

// ---------------------------------------------------------------------------
// EDUCATION & CERTIFICATIONS — placeholders only, nothing invented
// ---------------------------------------------------------------------------

export const education = [
  {
    degree: "B.E. — Electronics and Communication Engineering",
    institution: "KSHATRIYA COLLAGE OF ENIGINNERING",
    period: "2022 — 2026",
    detail:
      "ELECTRONICS AND COMMUNICATION ENGINEERING (ECE) is a branch of engineering that deals with the study and application of electronic devices, circuits, communication systems, and related technologies. It encompasses a wide range of topics, including analog and digital electronics, signal processing, telecommunications, microelectronics, embedded systems, and more. ECE engineers work on designing, developing, and maintaining electronic systems and communication networks that are essential in various industries such as telecommunications, consumer electronics, aerospace, healthcare, and more.",
    status: "GRADUATED IN 2026 WITH 7.0 CGPA",
  },
  {
    degree: "KSHATRIYA JUNIOR COLLEGE",
    institution: "KSHATRIYA JUNIOR COLLEGE",
    period: "2020 — 2022",
    detail: "Completed my +2 education with a focus on science and mathematics.",
    status: "GRADUATED WITH 75% AGGREGATE",
  },
];

export const certifications = [
  {
    name: "[CERTIFICATION NAME]",
    issuer: "[ISSUING ORGANISATION]",
    date: "[YEAR]",
    link: null,
    note: "Add a real certificate and verification link — do not publish unverified credentials.",
  },
  {
    name: "[CERTIFICATION NAME]",
    issuer: "[ISSUING ORGANISATION]",
    date: "[YEAR]",
    link: null,
    note: "Replace this card with a certification you have actually completed.",
  },
  {
    name: "[CERTIFICATION NAME]",
    issuer: "[ISSUING ORGANISATION]",
    date: "[YEAR]",
    link: null,
    note: "Keep only the credentials you can verify on request.",
  },
];

// ---------------------------------------------------------------------------
// DEVELOPMENT TOOLS
// ---------------------------------------------------------------------------

export const toolGroups = [
  {
    label: "Code & Build",
    tools: ["VS Code", "Git", "GitHub", "npm", "Maven", "Arduino IDE"],
  },
  {
    label: "Runtime & Platform",
    tools: ["Node.js", "JVM", "Linux", "Docker (learning)", "Vercel", "Render"],
  },
  {
    label: "Test & Debug",
    tools: ["Postman", "Wireshark", "Serial Monitor", "Browser DevTools", "pytest"],
  },
  {
    label: "Design & Docs",
    tools: ["Figma", "Excalidraw", "Markdown", "Canva", "draw.io"],
  },
];

// ---------------------------------------------------------------------------
// MARQUEE
// ---------------------------------------------------------------------------

export const marqueeItems = [
  "Java",
  "Spring Boot",
  "React",
  "Next.js",
  "TypeScript",
  "ESP32",
  "Arduino",
  "MQTT",
  "Python",
  "OpenCV",
  "scikit-learn",
  "Linux",
  "Wireshark",
  "SQL",
  "Tailwind CSS",
  "Git",
  "Docker",
  "REST APIs",
];

// ---------------------------------------------------------------------------
// STATUS STYLES
// ---------------------------------------------------------------------------

export const statusStyles: Record<ProjectStatus, string> = {
  Completed: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  "In Development": "border-amber-400/30 bg-amber-400/10 text-amber-300",
  Concept: "border-violet-400/30 bg-violet-400/10 text-violet-300",
};

export const levelStyles: Record<Level, string> = {
  Expert: "text-emerald-300 border-emerald-400/30 bg-emerald-400/10",
  Advanced: "text-sky-300 border-sky-400/30 bg-sky-400/10",
  Intermediate: "text-indigo-300 border-indigo-400/30 bg-indigo-400/10",
  Learning: "text-amber-300 border-amber-400/30 bg-amber-400/10",
};
