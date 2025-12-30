# WorkPulse - Employee Wellness & ROI Platform

<div align="center">

**Frictionless, Zero-Hardware Employee Wellness Monitoring with Gamification**

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=flat-square&logo=tailwind-css)
![Radix UI](https://img.shields.io/badge/Radix_UI-Latest-161618?style=flat-square&logo=radix-ui)
![Recharts](https://img.shields.io/badge/Recharts-2.x-22B5BF?style=flat-square)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-FF0055?style=flat-square&logo=framer)
![pnpm](https://img.shields.io/badge/pnpm-Package_Manager-F69220?style=flat-square&logo=pnpm)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Platform Interfaces](#platform-interfaces)
  - [Staff Interface](#-staff-interface)
  - [HR/CFO Dashboard](#-hrcfo-dashboard)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation & Setup](#-installation--setup)
- [Running the Application](#-running-the-application)
- [Available Scripts](#-available-scripts)
- [Key Features Breakdown](#-key-features-breakdown)
- [UI Components](#-ui-components)
- [Configuration Files](#-configuration-files)
- [Deployment](#-deployment)
- [License](#-license)

---

## Overview

**WorkPulse** is a dual-interface wellness platform designed to bridge the gap between employee wellbeing and organizational ROI. The platform consists of two complementary applications:

1. **Staff App** - Mobile-first wellness interface for employees featuring rPPG camera-based health scanning, gamified missions, and community engagement
2. **HR Dashboard** - Strategic analytics dashboard for HR/CFO to monitor organizational health metrics, track ROI, and manage wellness initiatives

The platform demonstrates how employee wellness translates directly to measurable financial outcomes through reduced healthcare costs, prevented burnout, and improved productivity.

---

## Platform Interfaces

### 📱 Staff Interface

*Mobile-first wellness app for employees*

| Feature | Description |
|---------|-------------|
| **rPPG Health Scanning** | Camera-based heart rate and stress detection using remote photoplethysmography |
| **Work Readiness Score** | AI-driven burnout prediction with personalized readiness assessment |
| **Daily Missions** | Gamified wellness activities (stretching, walking breaks, hydration reminders) |
| **Community Hub** | Social wellness features with activity creation and colleague engagement |
| **Wellness Leaderboard** | Individual and department rankings with opt-in privacy controls |
| **Health Trends** | Personal health metrics tracking (stress, sleep, activity, heart rate) |
| **Rewards System** | Points-based redemption for wellness achievements |
| **Leave Management** | View leave balance and submit leave requests |

**Key Screens:**
- Home (Readiness Score & Health Check-in)
- Missions (Daily wellness tasks)
- Community (Social feed, events, leaderboards)
- Health (Trends and insights)
- Profile (Settings, rewards, leave)

---

### 🖥️ HR/CFO Dashboard

*Strategic analytics dashboard for organizational wellness management*

| Feature | Description |
|---------|-------------|
| **Pulse Map** | Real-time department health monitoring with burnout driver analysis |
| **Financial ROI** | Healthcare cost savings visualization and insurance premium tracking |
| **Mission Manager** | Create and manage department wellness challenges |
| **Department Insights** | Stress levels, participation rates, and burnout indicators by team |

**Dashboard Views:**

#### Pulse Map
- Organization-wide health overview
- Department stress indicators (stable, warning, alert)
- Burnout driver breakdown (sleep quality, HRV, work hours, physical strain)
- Participation rate tracking

#### Financial ROI
- **Net Wellness Savings (YTD)**: RM 57,600+ tracked savings
- **Risks Mitigated**: Hypertension flags, burnout preventions, stress interventions
- **Intervention Costs**: GP consultation tracking
- **Avoided Loss**: Projected sick leave savings with day-to-cost calculations
- **Insurance Premium Impact**: Predicted vs. actual premium comparison charts

#### Mission Manager
- **Mission Builder**: Create custom wellness challenges
- **Metric Selection**: Sleep, HRV, ergonomic checks, steps, break compliance
- **Wellness Cup Leaderboard**: Live department rankings
- **Active Missions**: Progress tracking with completion percentages
- **Reward Configuration**: Customizable incentives for achievements

---

## 🛠️ Tech Stack

### Core Framework
| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16 | React framework with App Router |
| React | 19 | UI library |
| TypeScript | 5.x | Type-safe JavaScript |

### Styling & UI
| Technology | Purpose |
|------------|---------|
| Tailwind CSS | Utility-first CSS framework |
| shadcn/ui | Accessible component library |
| Radix UI | Headless UI primitives |
| Framer Motion | Animations (HR Dashboard) |
| Lucide React | Icon library |

### Data Visualization
| Technology | Purpose |
|------------|---------|
| Recharts | Charts and graphs |

### Forms & Validation
| Technology | Purpose |
|------------|---------|
| React Hook Form | Form state management |
| Zod | Schema validation |

### Additional Libraries
| Technology | Purpose |
|------------|---------|
| next-themes | Dark/light mode support |
| date-fns | Date utilities |
| sonner | Toast notifications |
| embla-carousel | Carousel component |
| vaul | Drawer component |
| cmdk | Command palette |

---

## 📁 Project Structure

```
UMSIC-2025-WorkPulse-App/
├── README.md                          # This file
├── staff-app/                         # Employee mobile interface
│   ├── app/
│   │   ├── layout.tsx                 # Root layout
│   │   ├── page.tsx                   # Home page
│   │   ├── globals.css                # Global styles
│   │   ├── community/                 # Community features
│   │   │   ├── page.tsx
│   │   │   └── create/                # Create activity
│   │   ├── health/                    # Health insights
│   │   ├── missions/                  # Mission system
│   │   │   └── execute/[id]/          # Mission execution
│   │   └── profile/                   # User profile
│   ├── components/
│   │   ├── bottom-nav.tsx             # Mobile navigation
│   │   ├── home-content.tsx           # Home with rPPG scanning
│   │   ├── health-content.tsx         # Health trends
│   │   ├── missions-content.tsx       # Mission list
│   │   ├── mission-execute.tsx        # Mission execution
│   │   ├── community-content.tsx      # Community feed
│   │   ├── create-activity.tsx        # Activity creation
│   │   ├── profile-content.tsx        # Profile & settings
│   │   ├── theme-provider.tsx         # Theme context
│   │   └── ui/                        # shadcn/ui components
│   ├── hooks/                         # Custom React hooks
│   ├── lib/                           # Utility functions
│   └── public/                        # Static assets
│
└── hr-dashboard/                      # HR/CFO analytics interface
    ├── app/
    │   ├── layout.tsx                 # Root layout
    │   ├── page.tsx                   # Dashboard page
    │   └── globals.css                # Global styles
    ├── components/
    │   ├── dashboard/
    │   │   ├── sidebar.tsx            # Navigation sidebar
    │   │   ├── top-bar.tsx            # Header bar
    │   │   ├── pulse-map.tsx          # Health monitoring
    │   │   ├── financial-roi.tsx      # ROI analytics
    │   │   └── mission-manager.tsx    # Gamification management
    │   ├── theme-provider.tsx         # Theme context
    │   └── ui/                        # shadcn/ui components
    ├── hooks/                         # Custom React hooks
    ├── lib/                           # Utility functions
    └── public/                        # Static assets
```

---

## 🚀 Installation & Setup

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm/yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/itznotpk/UMSIC-2025-WorkPulse-App.git
   cd UMSIC-2025-WorkPulse-App
   ```

2. **Install dependencies for Staff App**
   ```bash
   cd staff-app
   pnpm install
   ```

3. **Install dependencies for HR Dashboard**
   ```bash
   cd ../hr-dashboard
   pnpm install
   ```

---

## ▶️ Running the Application

### Staff App (Mobile Interface)
```bash
cd staff-app
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000)

### HR Dashboard
```bash
cd hr-dashboard
pnpm dev
```
Open [http://localhost:3001](http://localhost:3001) (or next available port)

> **Tip:** Run both applications simultaneously on different ports to see the complete platform experience.

---

## 📝 Available Scripts

Both applications support the following scripts:

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start development server with hot reload |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint for code quality |

---

## 🎯 Key Features Breakdown

### Staff App Features

#### rPPG Camera Health Scanning
- Real-time face scanning using device camera
- Heart rate detection simulation
- Stress level assessment
- Health status reporting
- 10-second scan countdown

#### Gamified Mission System
- **Active Missions**: Time-sensitive wellness tasks
- **Upcoming Missions**: Scheduled activities (walking, stretching, hydration)
- **Completed Missions**: Track daily achievements
- **Points & Rewards**: Earn points for redemption

#### Community & Social Wellness
- **Activity Feed**: See colleague achievements
- **Events**: Join yoga, badminton, walking sessions
- **Create Activities**: Organize wellness events
- **Leaderboards**: Individual and department rankings

#### Privacy Controls
- Opt-in/out of leaderboard visibility
- Anonymous health data sharing toggle
- Notification preferences

### HR Dashboard Features

#### Department Health Visualization
- Color-coded stress indicators per department
- Burnout driver analysis (sleep, HRV, work hours)
- Employee participation metrics
- Time range filtering (7 days, 30 days, quarter)

#### Financial ROI Tracking
- Year-to-date wellness savings
- Risk mitigation metrics
- Intervention cost tracking
- Insurance premium impact charts

#### Gamification Management
- Challenge creation interface
- Metric selection (sleep, HRV, steps, breaks)
- Reward configuration
- Live leaderboard visualization

---

## 🎨 UI Components

Both applications utilize a comprehensive shadcn/ui component library including:

**Layout & Navigation**
- Sidebar, Tabs, Accordion, Navigation Menu

**Forms & Inputs**
- Input, Select, Checkbox, Radio Group, Switch, Slider, Textarea, Date Picker

**Feedback & Overlays**
- Dialog, Sheet, Drawer, Popover, Tooltip, Toast, Alert

**Data Display**
- Card, Table, Badge, Avatar, Progress, Charts

**Interactive**
- Button, Toggle, Command Palette, Context Menu, Dropdown Menu

---

## 🔧 Configuration Files

| File | Purpose |
|------|---------|
| `next.config.mjs` | Next.js configuration (TypeScript, images) |
| `tsconfig.json` | TypeScript compiler options |
| `postcss.config.mjs` | PostCSS with Tailwind CSS |
| `components.json` | shadcn/ui component registry |
| `package.json` | Dependencies and scripts |

---

## 🚀 Deployment

Both applications are optimized for [Vercel](https://vercel.com/) deployment:

```bash
# Build for production
pnpm build

# Deploy using Vercel CLI
vercel
```

Alternatively, connect your GitHub repository to Vercel for automatic deployments on push.

---

<div align="center">

**Built for UMSIC 2025**

*Demonstrating how employee wellness translates to measurable organizational ROI*

</div>
