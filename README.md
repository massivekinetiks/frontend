# Specs Inspector Frontend

Modern, mobile-first React frontend for the Specs Inspector platform.

## 🚀 Features

- **Modern React 18** with TypeScript
- **Mobile-First Design** with Tailwind CSS
- **Responsive Layout** with sidebar navigation
- **Authentication System** with JWT tokens
- **Protected Routes** for secure access
- **API Integration** with Axios
- **State Management** with React Context
- **Real-time Updates** with React Query
- **Beautiful UI Components** with Radix UI

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **State Management**: React Context + React Query
- **UI Components**: Radix UI + Lucide React
- **Notifications**: React Hot Toast

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── auth/           # Authentication components
│   ├── layout/         # Layout and navigation
│   └── ui/             # Common UI components
├── contexts/            # React Context providers
├── pages/               # Page components
├── services/            # API services
├── types/               # TypeScript type definitions
├── utils/               # Utility functions
└── App.tsx             # Main application component
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/massivekinetiks/frontend.git
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env.local
```

4. Update environment variables:
```env
VITE_API_BASE_URL=http://localhost:3000/api/v1
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## 🎨 Design System

### Colors

- **Primary**: Blue (#2563eb) - Main brand color
- **Secondary**: Gray (#64748b) - Text and borders
- **Accent**: Orange (#f59e0b) - Highlights and warnings
- **Success**: Green (#10b981) - Success states
- **Danger**: Red (#ef4444) - Error states

### Typography

- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 300, 400, 500, 600, 700, 800
- **Monospace**: JetBrains Mono for code

### Components

- **Buttons**: Primary, Secondary, Outline, Danger variants
- **Cards**: Consistent card layouts with headers, bodies, and footers
- **Forms**: Styled form inputs with validation states
- **Badges**: Status indicators and labels
- **Modals**: Overlay dialogs and forms

## 🔐 Authentication

The frontend uses JWT tokens for authentication:

1. **Login/Register**: User credentials are sent to the backend
2. **Token Storage**: JWT tokens are stored in localStorage
3. **Protected Routes**: Routes require valid authentication
4. **Auto-logout**: Expired tokens automatically redirect to login

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: Tailwind CSS responsive breakpoints
- **Touch Friendly**: Optimized for touch interactions
- **Progressive Enhancement**: Enhanced features on larger screens

## 🚀 Deployment

### Build Process

1. Run the build command:
```bash
npm run build
```

2. The `dist/` folder contains the production build

3. Deploy the contents to your web server

### Environment Variables

Configure these environment variables for production:

```env
VITE_API_BASE_URL=https://api.inspector.specs.massivekinetiks.com/api/v1
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:

- **Email**: support@inspector.specs.massivekinetiks.com
- **Documentation**: [API Docs](https://inspector.specs.massivekinetiks.com/api/docs)
- **Issues**: [GitHub Issues](https://github.com/massivekinetiks/frontend/issues)
