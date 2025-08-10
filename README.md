# 🚀 Welcome to Recap.AI

A modern, AI-powered work tracking and weekly email generation tool that helps professionals organize their work entries and generate professional summaries automatically.

## ✨ Features

- **📝 Work Entry Management**: Log daily work activities with date, time, and descriptions
- **🤖 AI-Powered Email Generation**: Automatically generate professional weekly summaries using AI
- **📊 Analytics Dashboard**: Visualize work patterns with KPI cards and statistics
- **🔐 User Authentication**: Secure login and user management with Supabase
- **📱 Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **🎨 Modern UI**: Beautiful interface built with shadcn/ui components
- **⚡ Real-time Updates**: Instant feedback with toast notifications and modal dialogs

## 🛠️ Technology Stack

### Core Framework
- **⚡ Next.js 15** - React framework with App Router
- **📘 TypeScript 5** - Type-safe development
- **🎨 Tailwind CSS 4** - Utility-first CSS framework

### UI Components & Styling
- **🧩 shadcn/ui** - High-quality accessible components
- **🎯 Lucide React** - Beautiful icon library
- **🌈 Framer Motion** - Smooth animations

### Backend & Database
- **🗄️ Supabase** - PostgreSQL database with real-time capabilities
- **🔐 Supabase Auth** - Authentication and user management
- **🤖 OpenAI API** - AI-powered email generation

### State Management & Data
- **🐻 Zustand** - Lightweight state management
- **🔄 TanStack Query** - Server state management
- **📊 Recharts** - Data visualization

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to see the application running.

## 📋 Prerequisites

Before running the application, make sure you have:

1. **Node.js 18+** installed
2. **Supabase project** set up with the required tables
3. **OpenRouter API key** for AI email generation (or use the provided fallback)

## 🔧 Environment Setup

Create a `.env.local` file in the root directory:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# OpenAI API Configuration (for email generation)
OPENROUTER_API_KEY=your_openrouter_api_key_or_use_fallback
```

## 🗄️ Database Setup

The application uses Supabase with the following tables:

- `user_profiles` - User information and preferences
- `work_entries` - Work activity logs

To set up the database:

```bash
# Push database schema
npm run db:push

# Generate Prisma client
npm run db:generate
```

## 🎯 How to Use

### 1. **Set Up Your Profile**
- Create an account or log in
- Configure your profile information

### 2. **Log Work Entries**
- Use the "Quick Add Entry" form to log daily work
- Include date, time, and description of your activities
- Add additional details in the advanced section if needed

### 3. **Generate Weekly Summary**
- Navigate to the "Generate" tab
- Click "Generate AI Summary" to create a professional weekly email
- Review the generated content in the modal popup
- Copy to clipboard or scroll to the detailed view

### 4. **Manage Your Entries**
- Use the "Manage" tab to edit or delete existing entries
- Keep your work history organized and up-to-date

## 🎨 Key Features

### **Smart Email Generation**
- AI-powered analysis of your work entries
- Professional formatting and tone
- Customizable content based on your activities
- One-click copy to clipboard

### **Interactive Dashboard**
- Real-time KPI cards showing work statistics
- Weekly progress tracking
- Visual indicators for productivity trends

### **Enhanced User Experience**
- **Toast Notifications**: Instant feedback for all actions
- **Modal Popups**: Immediate display of generated content
- **Smooth Scrolling**: Easy navigation to content sections
- **Responsive Design**: Works perfectly on all devices

### **Professional UI/UX**
- Clean, modern interface design
- Consistent color scheme and typography
- Accessible components with proper ARIA labels
- Smooth animations and transitions

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   │   ├── generate-email/ # Email generation endpoint
│   │   ├── health/        # Health check endpoint
│   │   └── test-db/       # Database test endpoint
│   ├── auth/              # Authentication pages
│   ├── setup/             # Setup configuration page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main dashboard page
├── components/            # Reusable React components
│   ├── ui/               # shadcn/ui components
│   ├── auth-*.tsx        # Authentication components
│   ├── header.tsx        # Navigation header
│   └── profile-*.tsx     # Profile management
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
│   ├── supabase/         # Supabase configurations
│   ├── db.ts             # Database client
│   └── utils.ts          # Utility functions
└── prisma/               # Database schema
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🚀 Deployment

### **Vercel (Recommended)**
1. Connect your repository to Vercel
2. Set up environment variables
3. Deploy automatically

### **Other Platforms**
- Build the application: `npm run build`
- Deploy the `.next` folder to your hosting platform

## 🐛 Troubleshooting

### **Common Issues**

**Q: Development server won't start**
A: Make sure all dependencies are installed with `npm install`

**Q: Database connection errors**
A: Verify your Supabase configuration in `.env.local`

**Q: Email generation fails**
A: Check your OpenRouter API key or ensure the fallback key is working

**Q: Build errors**
A: Run `npm run lint` to check for code issues

### **Getting Help**

If you encounter any issues:
1. Check the troubleshooting section above
2. Review the console logs for error messages
3. Ensure all environment variables are properly set
4. Verify your database connection and API keys

---

Built with ❤️ for professionals who want to streamline their work reporting. Powered by modern web technologies and AI.
