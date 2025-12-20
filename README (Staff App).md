# WorkPulse Staff App

## 🌟 Features

- **Health Check-In**: Real-time camera-based wellness scanning with readiness score tracking
- **Mission System**: Execute and track various workplace wellness missions
- **Community Hub**: Create and share activities with the community
- **Profile Management**: Personal dashboard for tracking progress and achievements
- **Responsive Design**: Mobile-first interface with bottom navigation for seamless mobile experience
- **Dark Mode Support**: Theme switching capability with next-themes

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: [Radix UI](https://www.radix-ui.com/) primitives
- **Component Library**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms**: React Hook Form with Zod validation
- **Analytics**: Vercel Analytics
- **Package Manager**: pnpm

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd UMSIC2
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Available Scripts

- `pnpm dev` - Start the development server
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint to check code quality

## 📁 Project Structure

```
UMSIC2/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   ├── community/           # Community features
│   │   ├── page.tsx
│   │   └── create/
│   ├── health/              # Health check-in page
│   ├── missions/            # Mission tracking
│   │   └── execute/[id]/   # Dynamic mission execution
│   └── profile/             # User profile
├── components/              # React components
│   ├── bottom-nav.tsx       # Mobile navigation
│   ├── home-content.tsx     # Home page content
│   ├── health-content.tsx   # Health features
│   ├── missions-content.tsx # Mission list
│   ├── community-content.tsx# Community feed
│   ├── profile-content.tsx  # Profile view
│   └── ui/                  # shadcn/ui components
├── hooks/                   # Custom React hooks
├── lib/                     # Utility functions
├── public/                  # Static assets
└── styles/                  # Additional styles
```

## 🎨 Key Features Breakdown

### Home Page
- Personalized greeting based on time of day
- Readiness score display
- Camera-based health check-in with real-time scanning
- Quick access to wellness metrics (heart rate, stress level)

### Health
- Track wellness metrics
- View health history and trends
- Get personalized health recommendations

### Missions
- Browse available wellness missions
- Execute missions with step-by-step guidance
- Track completion and earn rewards

### Community
- Share wellness activities
- Engage with other users
- Create and participate in group challenges

### Profile
- View personal statistics
- Track achievement progress
- Manage account settings

## 🎨 UI Components

The project uses a comprehensive set of UI components from shadcn/ui, including:
- Cards, Buttons, Dialogs, Sheets
- Forms with validation
- Data tables and pagination
- Accordion, Tabs, Collapsible
- Toast notifications
- Progress indicators
- And many more...

## 📱 Responsive Design

The application is optimized for mobile devices with:
- Bottom navigation for easy thumb access
- Touch-friendly interface elements
- Responsive layouts that adapt to screen size
- Mobile-first design approach

## 🔧 Configuration Files

- `next.config.mjs` - Next.js configuration
- `tsconfig.json` - TypeScript configuration
- `postcss.config.mjs` - PostCSS configuration
- `components.json` - shadcn/ui components configuration
- `tailwind.config.ts` - Tailwind CSS configuration (if present)

## 🚀 Deployment

The application is ready for deployment on [Vercel](https://vercel.com/):

```bash
pnpm build
```

Then deploy using Vercel CLI or connect your repository to Vercel for automatic deployments.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

**Note**: This is a wellness and productivity coaching application. For production use, ensure proper privacy measures and consent mechanisms are in place for any health-related features, especially camera-based scanning.


