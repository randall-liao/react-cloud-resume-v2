# Cloud Resume - React Frontend (v2)

This repository contains the frontend source code for my [Overengineered Cloud Resume](https://randalldev.link/).

As a Backend & Cloud Systems Engineer, my goal for this frontend was strict architectural simplicity and zero compute costs. This application is a **100% Client-Side Rendered (CSR)** Single Page Application (SPA), designed to be compiled into static assets and hosted on **AWS S3** behind an **Amazon CloudFront CDN**.

## 🏗️ Architecture & Tech Stack

This project is built with performance, type safety, and "Engineer's Dashboard" aesthetics in mind.

- **Core:** [React 18+](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict typing enforced)
- **Build Tool:** [Vite](https://vitejs.dev/) (Lightning-fast ESM-based development & optimized production bundling)
- **UI Framework:** [Material-UI (MUI) v5](https://mui.com/)
- **Styling:** Custom "Light" and "Dark" modes with console-like aesthetics (Monospace fonts, deep dark backgrounds).
- **Routing:** None. This is a pure Single Page Application (SPA) with scroll-based navigation.

## ✨ Key Features

- **Zero-Cost Hosting:** No server-side rendering (SSR), no Node.js server maintenance.
- **Serverless Integration:** Fetches live data (Visitor Count) from an AWS API Gateway + Lambda + DynamoDB backend using native `fetch`.
- **Fully Responsive:** Mobile-first layout using MUI's Grid and Stack systems.
- **Dynamic Theme:** Toggle between Light and Dark modes.
- **AI-Native Development:** Includes an `AGENT.md` configuration to guide AI coding assistants (Google Antigravity, Gemini CLI, Stitch) on architectural constraints.

## 🚀 Getting Started

To run this project locally on your machine:

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/randall-liao/react-frontend-cloud-resume.git
   cd react-cloud-resume-v2
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The app will run at `http://localhost:5173` (by default).

## 📜 Scripts

- `npm run dev`: Starts the local development server with HMR.
- `npm run build`: Compiles the project for production (outputs to `dist/`).
- `npm run preview`: Locally previews the production build.
- `npm run lint`: Runs ESLint to check for code quality issues.

## 📂 Project Structure

```text
react-cloud-resume-v2/
├── src/
│   ├── components/       # Reusable UI components (Hero, Experience, etc.)
│   ├── theme/            # Theme context and provider
│   ├── App.tsx           # Main application layout
│   ├── main.tsx          # Entry point
│   └── ...
├── public/               # Static assets
├── verification/         # Verification scripts and screenshots
├── verify_dashboard.py   # Mobile layout verification script
├── AGENT.md              # Rules for AI-assisted development
├── package.json          # Dependencies and scripts
└── vite.config.ts        # Vite configuration
```

## ✅ Verification

The project includes automated verification scripts using Playwright to ensure responsiveness and theme consistency.

1.  **Mobile Layout Verification:**
    Runs a headless browser check on `http://localhost:5173`.
    ```bash
    python3 verify_dashboard.py
    ```

2.  **Theme Verification:**
    Checks both Light and Dark modes on desktop and mobile viewports. Note: This script expects the dev server to be running on port **3000**.
    ```bash
    # Start server on port 3000 in a separate terminal
    npm run dev -- --port 3000

    # Run verification
    python3 verification/verify_theme.py
    ```

## ☁️ Deployment

This project is designed for **AWS S3 Static Website Hosting**.

1. Run the build script:
   ```bash
   npm run build
   ```
2. Upload the contents of the `dist/` folder to your S3 bucket.
3. Configure CloudFront to serve the S3 bucket content.
