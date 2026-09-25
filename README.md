# Satya Eesa - Personal Portfolio Website

A modern, high-performance personal portfolio website built with a **professional VLSI, semiconductor, and digital engineering aesthetic**. Designed specifically for showcasing RTL design, digital architecture, embedded systems, and robotics projects to top semiconductor firms and recruiters.

![Satya Eesa Portfolio](public/images/Satya_sq_pic.png)

---

## ⚡ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, React 19)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom semiconductor die grid, glowing clock buses, and neon logic traces
- **Icons**: [Lucide React](https://lucide.dev/) + Custom High-Precision Hardware SVGs
- **Typography**: Google Space Grotesk & JetBrains Mono
- **Deployment**: Optimized for [Vercel](https://vercel.com/)

---

## 🚀 Key Features

1. **Interactive RTL 8-bit ALU Simulator**:
   - Visitors can manipulate 8-bit registers (A & B) via binary switches or decimal sliders.
   - Live execution of 9 opcode operations (ADD, SUB, AND, OR, XOR, SHL, SHR, MUL, CMP).
   - Real-time hardware status flags (Carry `[C]`, Zero `[Z]`, Overflow `[V]`, Negative `[N]`) with pulsing LED visualizers.
   - Dynamic synthesizable Verilog execution code display.

2. **Hardware Engineering Aesthetics**:
   - Deep silicon obsidian palette with Logic Cyan (`#00f0ff`), Quantum Violet (`#9d4edd`), and Silicon Amber (`#ff9f1c`).
   - Animated SVG semiconductor bus lines and clock packet motion.
   - Pinout die frame for the profile image (`CLK_SYS`, `RST_N`, `DATA_IN`, `DATA_OUT`).
   - RTL to Silicon flow diagram (Spec → Architecture → Verilog → Verification → Vivado Synthesis).

3. **Featured Projects**:
   - **Advanced 8-bit ALU**: Complete RTL architecture, specifications matrix, waveform gallery modal (GTKWave waveforms, terminal simulation logs, VS Code structure), and GitHub repo link.
   - **Autonomous Agricultural Rover**: Dual-tier computing breakdown (Raspberry Pi + ESP32), sensor telemetry pipeline, and computer vision integration.

4. **Academic Journey & Distinction**:
   - Timing-diagram styled timeline featuring **IIIT Sri City**, **Intermediate (994/1000)**, and **SSC (587/600)**.
   - Achievement cards for **JEE Advanced Qualified**, academic percentile honors, and VLSI career aspirations.

5. **Contact & Accessibility**:
   - One-click email copy with instant copied toast.
   - Interactive collaboration inquiry form with automated mail client formatting.
   - Fully responsive for mobile, tablet, and ultra-wide displays.

---

## 🛠️ Project Structure

```
portfolio/
├── public/
│   ├── images/
│   │   └── Satya_sq_pic.png       # Your profile image
│   ├── projects/
│   │   ├── gtkwave_output.png     # ALU GTKWave waveform screenshot
│   │   ├── terminal_output.png    # Testbench execution log
│   │   └── vscode_project.png     # VS Code project structure
│   └── resume/
│       └── Satya_Eesa_Resume.pdf  # Downloadable PDF resume
├── src/
│   ├── app/
│   │   ├── globals.css            # Custom semiconductor animations & glassmorphism
│   │   ├── layout.tsx             # Root layout, fonts, and OpenGraph metadata
│   │   └── page.tsx               # Main landing page assembling all sections
│   ├── components/
│   │   ├── Navbar.tsx             # Glassmorphic header with active link spy & mobile drawer
│   │   ├── Hero.tsx               # VLSI hero with pinout die frame & telemetry
│   │   ├── CircuitBackground.tsx  # Dynamic SVG circuit trace & bus lines
│   │   ├── About.tsx              # Narrative bio & 4 Bento cards
│   │   ├── Skills.tsx             # Skill matrix & RTL-to-silicon design pipeline
│   │   ├── Projects.tsx           # ALU & Rover showcase with waveform modals
│   │   ├── AluSimulator.tsx       # Live interactive 8-bit Verilog ALU simulator
│   │   ├── Education.tsx          # High-tech timing diagram timeline
│   │   ├── Achievements.tsx       # Milestone and honors cards
│   │   ├── Contact.tsx            # One-click email copy & inquiry form
│   │   ├── Footer.tsx             # Terminal footer with system status
│   │   └── Icons.tsx              # Reusable SVG brand icons
│   ├── data/
│   │   └── portfolioData.ts       # Central data file for all portfolio content
│   └── types/
│       └── index.ts               # TypeScript data models
└── tailwind.config.ts             # Silicon color palette & keyframe animations
```

---

## 💻 How to Run Locally

### 1. Install dependencies
```bash
cd portfolio
npm install
```

### 2. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production
```bash
npm run build
npm start
```

---

## ✏️ How to Customize Your Content

All data is separated into `src/data/portfolioData.ts`. You do not need to touch component code to change your content!

- **Update personal info & links**: Edit `personalInfo` in `src/data/portfolioData.ts`.
- **Add or edit projects**: Edit `projectsData` in `src/data/portfolioData.ts`.
- **Update skills**: Edit `skillCategories` in `src/data/portfolioData.ts`.
- **Update education & achievements**: Edit `educationData` and `achievementsData` in `src/data/portfolioData.ts`.
- **Replace profile picture**: Replace `public/images/Satya_sq_pic.png`.
- **Replace resume**: Replace `public/resume/Satya_Eesa_Resume.pdf`.

---

## 🚢 Deploying to Vercel

This project is ready for 1-click deployment on [Vercel](https://vercel.com/):

```bash
npx vercel
```
Or push this repository to GitHub and connect it to your Vercel account.
