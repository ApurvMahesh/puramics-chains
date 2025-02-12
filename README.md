├── client/                # Frontend React application
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Page components
│   │   ├── lib/          # Utility functions
│   │   └── hooks/        # Custom React hooks
├── server/               # Backend Express application
│   ├── routes.ts         # API endpoints
│   └── storage.ts        # Data storage logic
└── shared/              # Shared code between frontend and backend
    └── schema.ts        # Data models and types
```

## 🚀 Getting Started

### Prerequisites
- Node.js 20.x or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ApurvMahesh/puramics-chains.git
cd puramics-chains
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev