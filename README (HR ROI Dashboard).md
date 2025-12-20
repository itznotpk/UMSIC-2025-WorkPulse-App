# WorkPulse HR ROI Dashboard

HR / CFO perspective: Employee wellness and health monitoring dashboard built with Next.js, featuring real-time health metrics tracking, financial ROI analysis, and gamified wellness challenges.

## 🌟 Features

### 📊 Pulse Map Dashboard
- **Real-time Department Health Monitoring**: Track stress levels and burnout indicators across all departments
- **Burnout Driver Analysis**: Identify key factors affecting employee wellbeing (sleep quality, HRV, work hours, etc.)
- **Department Comparison**: Visual stress indicators with color-coded alerts (stable, warning, critical)
- **Participation Tracking**: Monitor employee engagement rates by department

### 💰 Financial ROI Dashboard
- **Cost Savings Analysis**: Track healthcare premium reductions and wellness program ROI
- **Predictive Analytics**: Compare predicted vs. actual insurance premium trends
- **YTD Savings Metrics**: Real-time financial impact visualization
- **Healthcare Cost Reduction**: Monitor and quantify the financial benefits of wellness initiatives

### 🎯 Mission Manager (Gamification)
- **Wellness Challenges**: Create and manage department-based health competitions
- **Leaderboard System**: Track department performance across various health metrics
- **Reward Management**: Configure incentives for wellness achievements
- **Progress Tracking**: Monitor active missions with completion percentages
- **Engagement Metrics**: Measure participation and performance across teams

## 🛠️ Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Charts**: [Recharts](https://recharts.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Form Handling**: React Hook Form + Zod
- **Package Manager**: pnpm

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd UMSIC
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

```bash
pnpm dev       # Start development server
pnpm build     # Build for production
pnpm start     # Start production server
pnpm lint      # Run ESLint
```

## 🏗️ Project Structure

```
UMSIC/
├── app/                        # Next.js App Router
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Main dashboard page
│   └── globals.css            # Global styles
├── components/
│   ├── dashboard/             # Dashboard-specific components
│   │   ├── sidebar.tsx        # Navigation sidebar
│   │   ├── top-bar.tsx        # Header bar
│   │   ├── pulse-map.tsx      # Health monitoring view
│   │   ├── financial-roi.tsx  # Financial analytics view
│   │   └── mission-manager.tsx # Gamification view
│   ├── ui/                    # Reusable UI components (shadcn/ui)
│   └── theme-provider.tsx     # Theme context provider
├── lib/
│   └── utils.ts               # Utility functions
├── hooks/                     # Custom React hooks
├── public/                    # Static assets
└── styles/                    # Additional stylesheets
```

## 🎨 Key Components

### Dashboard Views
- **Pulse Map**: Visualize department-level health metrics and burnout indicators
- **Financial ROI**: Display cost savings and premium reduction analytics
- **Mission Manager**: Manage wellness challenges and track leaderboards

### UI Components
The project includes a comprehensive set of reusable UI components from shadcn/ui:
- Forms (Input, Select, Checkbox, Radio, etc.)
- Overlays (Dialog, Sheet, Drawer, Popover)
- Data Display (Table, Card, Badge, Avatar)
- Feedback (Toast, Alert, Progress)
- Navigation (Tabs, Accordion, Command)
- And many more...

## 🚀 Features in Detail

### Health Metrics Tracked
- Sleep quality and duration
- Heart Rate Variability (HRV)
- Stress levels
- Physical activity
- Ergonomic check-ins
- Work hours and break patterns

### Gamification Elements
- Department-based competitions
- Real-time leaderboards
- Customizable rewards and incentives
- Progress tracking with visual indicators
- Achievement badges and milestones

### Analytics & Insights
- Predictive healthcare cost modeling
- ROI calculations for wellness programs
- Department performance comparisons
- Burnout risk assessment
- Participation rate monitoring

## 🎯 Use Cases

- **HR Teams**: Monitor employee wellbeing and engagement across departments
- **Finance/CFO**: Quantify the ROI of wellness programs and track cost savings
- **Department Managers**: Track team health metrics and manage wellness initiatives
- **Employees**: Participate in wellness challenges and track personal progress

## 🔒 Data Privacy

This dashboard is designed to aggregate and anonymize health data at the department level, ensuring individual privacy while providing actionable insights for organizational wellness.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is private and proprietary.
owered by [Recharts](https://recharts.org/)

---

**Note**: This is a demonstration/prototype dashboard. For production use, integrate with real health monitoring APIs and implement proper authentication, authorization, and data security measures.
