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
  targetRole: 'VLSI / RTL Design Engineer',
  tagline: 'Architecting High-Speed Digital Logic & Silicon Systems',
  bio: 'Electronics & Communication Engineering undergraduate at IIIT Sri City with a dedicated focus on RTL Design, VLSI Architecture, and Embedded Systems. Passionate about transforming algorithmic specifications into robust, timing-closure-ready Verilog hardware modules, building autonomous robotics platforms, and preparing for next-generation semiconductor engineering.',
  
  // Contact & Social Links (Update these anytime)
  email: 'satyaeesa@gmail.com',
  github: 'https://github.com/satya-eesa',
  linkedin: 'https://www.linkedin.com/in/satya-eesa/',
  
  // File Paths (Files are located in the /public folder)
  resumeUrl: '/resume/Satya_Eesa_Resume.pdf',
  profileImage: '/images/Satya_sq_pic.png',
  
  availableForInternship: true,
  interests: [
    'VLSI Design',
    'RTL Design',
    'Digital System Architecture',
    'Verilog & SystemVerilog',
    'FPGA Prototyping',
    'Embedded Systems & IoT',
    'Autonomous Robotics'
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
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Hardware & RTL Design',
    badge: 'Silicon Core',
    color: 'from-cyan-500 to-blue-600',
    description: 'Digital logic design, structural datapaths, state machines, and microarchitecture.',
    skills: [
      { name: 'RTL Design', level: 'Core Focus' },
      { name: 'Digital Electronics', level: 'Strong' },
      { name: 'VLSI Concepts', level: 'Proficient' },
      { name: 'Combinational & Sequential Logic', level: 'Strong' },
      { name: 'FSM Architecture (Moore/Mealy)', level: 'Proficient' },
      { name: 'Computer Organization & Architecture', level: 'Proficient' },
      { name: 'ASIC Design Flow', level: 'Foundations' },
      { name: 'FPGA Fundamentals', level: 'Learning' }
    ]
  },
  {
    title: 'HDL & EDA Simulation Tools',
    badge: 'Synthesis & Sim',
    color: 'from-violet-500 to-purple-600',
    description: 'Hardware description languages and electronic design automation toolchains.',
    skills: [
      { name: 'Verilog HDL', level: 'Advanced' },
      { name: 'SystemVerilog', level: 'Exploring' },
      { name: 'Xilinx Vivado', level: 'Proficient' },
      { name: 'Icarus Verilog (iverilog)', level: 'Proficient' },
      { name: 'GTKWave', level: 'Proficient' },
      { name: 'ModelSim', level: 'Familiar' },
      { name: 'HDLBits Problem Solving', level: 'Active Practice' }
    ]
  },
  {
    title: 'Embedded Systems & Robotics',
    badge: 'Physical Compute',
    color: 'from-amber-500 to-orange-600',
    description: 'Microcontroller programming, hardware-software integration, sensors, and robotics.',
    skills: [
      { name: 'ESP32 Microcontroller', level: 'Proficient' },
      { name: 'Arduino Platform', level: 'Proficient' },
      { name: 'Raspberry Pi', level: 'Proficient' },
      { name: 'IoT Telemetry & Protocols', level: 'Proficient' },
      { name: 'Serial Buses (UART, SPI, I2C)', level: 'Proficient' },
      { name: 'Sensor Interfacing & Actuators', level: 'Strong' },
      { name: 'Autonomous Robotics', level: 'Hands-on' }
    ]
  },
  {
    title: 'Programming & Toolchain',
    badge: 'Software Stack',
    color: 'from-emerald-500 to-teal-600',
    description: 'Systems programming, automation scripting, Linux environments, and version control.',
    skills: [
      { name: 'C Programming', level: 'Strong' },
      { name: 'C++', level: 'Proficient' },
      { name: 'Python', level: 'Proficient' },
      { name: 'Linux / Bash Scripting', level: 'Proficient' },
      { name: 'Git & GitHub Workflow', level: 'Strong' },
      { name: 'VS Code Hardware Toolchains', level: 'Advanced' }
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
    title: 'Semiconductor Engineering Vision',
    subtitle: 'Aspiring VLSI / RTL Design Engineer',
    description:
      'Driven to contribute to modern ASIC and SoC architectures, low-power digital design, hardware accelerators, and silicon solutions.',
    badge: 'Career Target',
    category: 'Vision',
    icon: 'Rocket',
    color: 'from-orange-500 to-red-400'
  }
];
