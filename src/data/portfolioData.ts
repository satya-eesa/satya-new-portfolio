import { Project, SkillCategory, EducationItem, AchievementItem } from '../types';

// ============================================================================
// SATYA EESA PORTFOLIO DATA CONFIGURATION
// To update your portfolio content, simply edit the values below.
// ============================================================================

export const personalInfo = {
  name: 'Satya Eesa',
  title: 'Electronics & Communication Engineering Student',
  institution: 'Indian Institute of Information Technology, Sri City (IIIT Sri City)',
  location: 'Andhra Pradesh, India',
  targetRole: 'Hardware, DSA & Software Engineer',
  tagline: 'Bridging Digital Silicon, Algorithms & Modern Software',
  bio: 'Electronics & Communication Engineering undergraduate at IIIT Sri City. Passionate about digital VLSI & RTL design, rigorous Data Structures & Algorithms (C++), and modern web software engineering. Driven by solving complex computational problems from gate-level hardware up to scalable web applications.',
  
  // Contact & Social Links (Update these anytime)
  email: 'satyaeesa@gmail.com',
  github: 'https://github.com/satya-eesa',
  linkedin: 'https://www.linkedin.com/in/satya-eesa/',
  
  // File Paths (Files are located in the /public folder)
  resumeUrl: '/resume/Satya_Eesa_Resume.pdf',
  profileImage: '/images/Satya_sq_pic.png',
  
  availableForInternship: true,
  interests: [
    'Digital VLSI & RTL Design',
    'Data Structures & Algorithms (DSA)',
    'Modern Web Development (Next.js / React / TypeScript)',
    'Computer Architecture & Verilog HDL',
    'C++ Systems & Algorithmic Problem Solving',
    'Embedded Systems & IoT',
    'Full-Stack Architecture & Cloud UI'
  ]
};

// ============================================================================
// PROJECTS LIST
// Add, remove, or modify projects here.
// ============================================================================
export const projectsData: Project[] = [
  {
    id: 'alu-8bit',
    title: 'Advanced 8-bit Modular RTL ALU',
    subtitle: 'High-Performance Arithmetic Logic Unit in Verilog HDL',
    description:
      'Engineered a complete 8-bit Arithmetic Logic Unit (ALU) using structural and behavioral Verilog HDL with a modular RTL architecture. Supports 9 independent arithmetic, logical, shift, and comparison operations, alongside real-time hardware status flags (Carry, Zero, Overflow, and Negative) verified with testbench fixtures.',
    category: 'VLSI / RTL',
    status: 'Verified RTL Design',
    highlights: [
      'Modular RTL datapath dividing arithmetic, bitwise logic, barrel shift, and comparison units',
      '4 Hardware Status Flags: Carry (C), Zero (Z), Overflow (V), and Negative/Sign (N)',
      'Validated through comprehensive self-checking Verilog testbench in Icarus Verilog & GTKWave',
      'Synthesized & analyzed for timing and logic gate utilization in Xilinx Vivado'
    ],
    tags: ['Verilog HDL', 'RTL Design', 'Vivado', 'GTKWave', 'Digital Electronics', 'Icarus Verilog'],
    githubUrl: 'https://github.com/satya-eesa/Advanced-8bit-ALU-Verilog',
    specifications: [
      { label: 'Data Width', value: '8-bit Datapath (A[7:0], B[7:0])' },
      { label: 'Operation Modes', value: '9 Operations (ADD, SUB, AND, OR, XOR, SHL, SHR, MUL, CMP)' },
      { label: 'Output Width', value: '8-bit Result (16-bit Product for Multiply)' },
      { label: 'Status Flags', value: 'Carry, Zero, Overflow, Negative' },
      { label: 'Simulation EDA', value: 'Icarus Verilog & GTKWave' },
      { label: 'Synthesis Tool', value: 'Xilinx Vivado' }
    ],
    images: [
      {
        src: '/projects/gtkwave_output.png',
        caption: 'GTKWave Signal Timing Waveforms validating ALU operations and flag transitions'
      },
      {
        src: '/projects/terminal_output.png',
        caption: 'Automated testbench simulation log showing opcode verification in Icarus Verilog'
      },
      {
        src: '/projects/vscode_project.png',
        caption: 'Structured RTL & Testbench repository workspace in VS Code'
      }
    ]
  },
  {
    id: 'agri-rover',
    title: 'Autonomous Agricultural Monitoring Rover',
    subtitle: 'Dual-Core Robotics & Precision Edge AI Platform',
    description:
      'Engineered an autonomous field rover for precision agricultural monitoring and smart telemetry. Employs a tiered computing hierarchy: a Raspberry Pi handles onboard computer vision and environmental analytics, while an ESP32/Arduino microcontroller provides low-latency motor control, ultrasonic obstacle mitigation, and multispectral soil telemetry.',
    category: 'Robotics & Embedded',
    status: 'Prototyping & Field Testing',
    highlights: [
      'Dual-tier embedded architecture separating high-level CV analytics from real-time motor control',
      'Computer vision pipeline for crop health detection and autonomous row following',
      'Sensor acquisition array: soil moisture, ambient humidity, temperature, and GPS coordinates',
      'Real-time IoT telemetry dashboard transmitting field health analytics over WiFi/LoRa'
    ],
    tags: ['Raspberry Pi', 'ESP32 / Arduino', 'Computer Vision', 'Python', 'Embedded C++', 'IoT', 'Sensors'],
    githubUrl: 'https://github.com/satya-eesa',
    specifications: [
      { label: 'High-Level Compute', value: 'Raspberry Pi (Computer Vision, Telemetry)' },
      { label: 'Low-Level Controller', value: 'ESP32 / Arduino Microcontroller' },
      { label: 'Motor Actuation', value: 'H-Bridge Dual DC Geared Motors with PWM' },
      { label: 'Sensory Suite', value: 'Ultrasonic, DHT22, Capacitive Soil, Camera' },
      { label: 'Communication', value: 'UART Inter-IC bus, HTTP/MQTT IoT Dashboard' },
      { label: 'Power System', value: 'Lithium-Ion Battery with Dual Step-Down Regulators' }
    ]
  },
  {
    id: 'web-silicon-lab',
    title: 'SiliconLab: Interactive RTL Simulator & Modern Web Platform',
    subtitle: 'Full-Stack Engineering with Next.js 15, React 19 & TypeScript',
    description:
      'Engineered a modern web application and an in-browser interactive digital logic datapath simulator. Visualizes clock-cycle datapath transitions, 9 arithmetic and logic opcodes, and 4 hardware status flags with real-time reactive state evaluation, dual theme glassmorphism, and responsive accessibility.',
    category: 'Modern Web',
    status: 'Production Deployed',
    highlights: [
      'Interactive in-browser ALU simulator rendering live datapath stages (Adder, Logic, Shifter, Flags)',
      'Dual-theme architecture (Obsidian Dark & Pearl Light) with zero-flicker hydration using next-themes',
      'Modern glassmorphism UI built with Tailwind CSS, Framer Motion, and Lucide icons',
      'High performance, accessible design with zero layout shift (LCP < 1.2s)'
    ],
    tags: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Web Architecture', 'UI/UX'],
    githubUrl: 'https://github.com/satya-eesa',
    specifications: [
      { label: 'Framework', value: 'Next.js 15 (App Router) + React 19' },
      { label: 'Language', value: 'TypeScript (Strict Mode)' },
      { label: 'Styling', value: 'Tailwind CSS v3.4 + Glassmorphism' },
      { label: 'Theme Engine', value: 'Dual Theme (Light & Dark System-Aware)' },
      { label: 'Interactivity', value: 'Real-Time 8-bit Datapath Visualizer' },
      { label: 'Deployment', value: 'Vercel Edge Network' }
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Digital VLSI & RTL Design',
    badge: 'Silicon Core',
    color: 'from-cyan-500 to-blue-600',
    description: 'Digital logic design, structural datapaths, finite state machines, and microarchitecture.',
    skills: [
      { name: 'Verilog HDL', level: 'Advanced' },
      { name: 'RTL Microarchitecture', level: 'Core Focus' },
      { name: 'Xilinx Vivado (Synthesis/Impl)', level: 'Proficient' },
      { name: 'Icarus Verilog & GTKWave', level: 'Proficient' },
      { name: 'Combinational & Sequential Logic', level: 'Strong' },
      { name: 'FSM Architecture (Moore/Mealy)', level: 'Proficient' },
      { name: 'Computer Organization & Arch', level: 'Proficient' },
      { name: 'SystemVerilog & ASIC Flow', level: 'Foundations' }
    ]
  },
  {
    title: 'Data Structures & Algorithms (DSA)',
    badge: 'Algorithmic Logic',
    color: 'from-emerald-500 to-teal-600',
    description: 'Computational problem solving, algorithmic paradigms, memory management, and time-space optimization.',
    skills: [
      { name: 'C++ / Modern C++', level: 'Strong' },
      { name: 'Data Structures (Trees, Graphs, Heaps)', level: 'Strong' },
      { name: 'Dynamic Programming', level: 'Proficient' },
      { name: 'Recursion & Backtracking', level: 'Strong' },
      { name: 'Asymptotic Complexity Analysis', level: 'Core Focus' },
      { name: 'C++ Standard Template Library (STL)', level: 'Advanced' },
      { name: 'Object-Oriented Programming (OOP)', level: 'Proficient' },
      { name: 'Competitive Problem Solving', level: 'Active Practice' }
    ]
  },
  {
    title: 'Modern Web & Software Engineering',
    badge: 'Full-Stack & UI',
    color: 'from-indigo-500 to-violet-600',
    description: 'Modern front-end & full-stack development, reactive architectures, and developer toolchains.',
    skills: [
      { name: 'Next.js 15 (App Router)', level: 'Proficient' },
      { name: 'React 19 & Component Design', level: 'Proficient' },
      { name: 'TypeScript', level: 'Strong' },
      { name: 'Tailwind CSS & Modern UI', level: 'Advanced' },
      { name: 'Framer Motion Animations', level: 'Proficient' },
      { name: 'Responsive & Accessible Web', level: 'Strong' },
      { name: 'Git & GitHub Workflows', level: 'Advanced' },
      { name: 'REST APIs & Cloud Deployment', level: 'Familiar' }
    ]
  },
  {
    title: 'Embedded Systems & Physical Compute',
    badge: 'IoT & Robotics',
    color: 'from-amber-500 to-orange-600',
    description: 'Microcontroller programming, hardware-software integration, sensors, and autonomous robotics.',
    skills: [
      { name: 'ESP32 & Dual-Core MCU', level: 'Proficient' },
      { name: 'Arduino Platform', level: 'Proficient' },
      { name: 'Raspberry Pi & Linux', level: 'Proficient' },
      { name: 'Serial Buses (UART, SPI, I2C)', level: 'Proficient' },
      { name: 'Sensor Interfacing & Actuators', level: 'Strong' },
      { name: 'Python Systems & Scripting', level: 'Proficient' },
      { name: 'Edge Computer Vision & Telemetry', level: 'Hands-on' },
      { name: 'Autonomous Rover Architecture', level: 'Hands-on' }
    ]
  }
];

export const educationData: EducationItem[] = [
  {
    degree: 'B.Tech in Electronics & Communication Engineering',
    institution: 'Indian Institute of Information Technology, Sri City',
    period: '2025 - 2029 (Expected)',
    location: 'Sri City, Andhra Pradesh',
    description:
      'Pursuing rigorous undergraduate engineering education with dedicated specializations in VLSI Design, Digital Hardware Architecture, Embedded Systems, and Signal Processing.',
    coursesOrHighlights: [
      'Digital Logic & System Design',
      'Electronic Circuits & Semiconductor Devices',
      'Microprocessors & Microcontrollers',
      'Signals and Systems',
      'Active participant in Hardware & Robotics technical activities'
    ],
    color: 'border-cyan-500'
  },
  {
    degree: 'Higher Secondary Education - Intermediate (MPC)',
    institution: 'Narayana Junior College',
    period: '2023 - 2025',
    score: '994 / 1000 Marks',
    location: 'Andhra Pradesh, India',
    description:
      'Completed Pre-University curriculum with top-tier distinction across Mathematics, Physics, and Chemistry, cultivating strong analytical and problem-solving fundamentals.',
    coursesOrHighlights: [
      'Scored 994 out of 1000 (Top Percentile Academic Honors)',
      'Advanced Mathematics (Calculus, Linear Algebra, Analytical Geometry)',
      'Electromagnetism, Quantum Physics & Mechanics',
      'Physical & Inorganic Chemistry'
    ],
    color: 'border-violet-500'
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Sri Vasavi Vidyanikethan School',
    period: '2013 - 2023',
    score: '587 / 600 Marks',
    location: 'Andhra Pradesh, India',
    description:
      'Graduated with stellar academic performance and a foundational passion for science, mathematics, and technological innovation.',
    coursesOrHighlights: [
      'Secured 587 out of 600 Marks',
      'School rank honors for excellence in Science and Mathematics',
      'Active participation in science exhibitions and Olympiads'
    ],
    color: 'border-amber-500'
  }
];

export const achievementsData: AchievementItem[] = [
  {
    title: 'JEE Advanced Qualified',
    subtitle: 'Premier National Entrance Examination',
    description:
      'Qualified the prestigious JEE Advanced examination, securing competitive admission into IIIT Sri City for Electronics & Communication Engineering.',
    badge: 'Competitive Rank',
    category: 'Competitive',
    icon: 'Trophy',
    color: 'from-amber-500 to-yellow-400'
  },
  {
    title: 'Intermediate Distinction: 994/1000',
    subtitle: 'State Board Higher Secondary Board',
    description:
      'Achieved a nearly perfect aggregate score of 994/1000 in Mathematics, Physics, and Chemistry, demonstrating exceptional rigor.',
    badge: '99.4% Aggregate',
    category: 'Academics',
    icon: 'GraduationCap',
    color: 'from-cyan-500 to-blue-400'
  },
  {
    title: 'Secondary School Honors: 587/600',
    subtitle: 'SSC Academic Excellence',
    description:
      'Graduated with 587 out of 600, establishing a consistent track record of academic dedication and scholastic distinction.',
    badge: '97.8% Marks',
    category: 'Academics',
    icon: 'Award',
    color: 'from-emerald-500 to-teal-400'
  },
  {
    title: 'Advanced 8-bit RTL ALU Architecture',
    subtitle: 'Verilog Hardware Implementation',
    description:
      'Designed, synthesized, and verified an 8-bit modular Arithmetic Logic Unit featuring 9 functional operations and 4 status flags with GTKWave testbenches.',
    badge: 'Hardware Milestone',
    category: 'Engineering',
    icon: 'Cpu',
    color: 'from-violet-500 to-purple-400'
  },
  {
    title: 'HDLBits & Digital Logic Problem Solver',
    subtitle: 'Continuous Circuit Verification Practice',
    description:
      'Consistently solving HDLBits challenges covering combinational circuits, sequential state machines, and finite state machine design patterns.',
    badge: 'Skill Mastery',
    category: 'Engineering',
    icon: 'Binary',
    color: 'from-pink-500 to-rose-400'
  },
  {
    title: 'Algorithmic Problem Solving & DSA',
    subtitle: 'C++ Computational Rigor',
    description:
      'Consistent practice solving complex algorithmic challenges across dynamic programming, graph theory, trees, and asymptotic runtime optimization in C++.',
    badge: 'Computational Logic',
    category: 'Engineering',
    icon: 'Binary',
    color: 'from-emerald-500 to-teal-400'
  },
  {
    title: 'Silicon-to-Software Vision',
    subtitle: 'Multi-Disciplinary Engineer',
    description:
      'Driven to engineer across the entire compute stack: digital silicon (VLSI/RTL), algorithmic problem solving (C++ DSA), and high-performance modern web platforms.',
    badge: 'Career Target',
    category: 'Vision',
    icon: 'Rocket',
    color: 'from-indigo-500 to-purple-400'
  }
];
