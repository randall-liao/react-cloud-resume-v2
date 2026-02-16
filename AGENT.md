# Cloud Resume Frontend - AI Agent Rules

## 1. Architectural Constraints
- **Core Stack:** React 18+, TypeScript, Vite.
- **Rendering:** 100% Client-Side Rendering (CSR). 
- **Routing:** strictly NO routing libraries (e.g., no `react-router-dom`). This is a Single Page Application (SPA) where all content scrolls on a single view.
- **Deployment:** The output must compile down to static HTML/JS/CSS via `npm run build` to be hosted on AWS S3 and served via CloudFront.

## 2. UI & Styling Ecosystem
- **Component Library:** Material-UI (MUI) v5. 
- **Icons:** `@mui/icons-material`.
- **Styling Rules:** DO NOT write raw `.css` files or use Tailwind. Use MUI's `sx` prop, `<Box>`, `<Stack>`, and `<Grid>` components for all layouts and spacing. 
- **Aesthetic:** "The Engineer's Dashboard." Use deep, dark-mode colors by default (#121212 backgrounds). Use a Monospace font (e.g., Fira Code, Roboto Mono) for tech stacks, metrics, and project names to convey a highly technical, console-like feel.

## 3. State & Logic
- Keep state management local using standard React hooks (`useState`, `useEffect`). Do not install Redux or Zustand.
- API calls to the AWS backend (e.g., the Visitor Counter) must use the native `fetch` API wrapped in standard `try/catch` blocks.

## 4. Code Quality
- Strictly enforce TypeScript interfaces for all component props.
- Keep components modular. Break down large sections (Hero, Experience, Certifications) into their own `.tsx` files inside `src/components/`.
