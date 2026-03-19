# AI Development Rules - Foster Company

## Tech Stack
- **React 19**: Modern frontend library for building user interfaces.
- **TypeScript**: Used for all components and utilities to ensure type safety.
- **Vite**: Ultra-fast build tool and development server.
- **Tailwind CSS v4**: Utility-first CSS framework for styling (configured in `src/index.css`).
- **Motion (Framer Motion)**: Primary library for sophisticated animations and transitions.
- **Lucide React**: Standard icon library for the application.
- **Custom i18n System**: Context-based internationalization (PT, ES, EN) located in `src/i18n/`.
- **Google Gemini API**: Integration via `@google/genai` for AI-powered features.

## Library & Implementation Rules

### 1. Styling
- **Exclusivity**: Always use **Tailwind CSS** classes. Avoid creating new CSS files or using CSS Modules.
- **Theme**: Reference the custom theme colors defined in `src/index.css` (e.g., `text-f-neon`, `bg-f-black`, `border-f-mint/10`).
- **Responsiveness**: All designs must be mobile-first and fully responsive using Tailwind breakpoints (`sm:`, `md:`, `lg:`, `xl:`).

### 2. Components
- **Modularity**: Keep components under 100 lines. Break down large sections into smaller, reusable components in `src/components/`.
- **UI Consistency**: Prefer **shadcn/ui** patterns. Even if not all components are in the file tree, follow their design philosophy (Radix UI primitives).

### 3. Animations
- **Simple Transitions**: Use Tailwind's built-in transition utilities for simple hover or opacity changes.
- **Complex Animations**: Use the `motion` (Framer Motion) library for entrance animations, scrolls, and complex state transitions.
- **Section Triggers**: Use the existing `AnimatedSection.tsx` component to trigger entry animations when elements enter the viewport.

### 4. Internationalization (i18n)
- **Hardcoding**: Never hardcode text strings directly in components.
- **Implementation**: Add the key to `src/i18n/translations.ts` for all three languages (PT, ES, EN) and use the `t()` function from the `useLanguage()` hook.

### 5. Icons
- **Standard**: Always use `lucide-react`. Ensure consistent sizing (usually 16, 20, or 24px) to match the existing UI.

### 6. Routing
- **Location**: All routes must be managed in `src/App.tsx`.
- **Method**: The current app uses hash-based routing for compatibility. Maintain this pattern unless a migration to `react-router-dom` is explicitly requested.

### 7. File Structure
- **Paths**: 
  - Components: `src/components/` (PascalCase.tsx)
  - Pages: `src/pages/` (PascalCase.tsx)
  - Context/Hooks: `src/hooks/` or specific feature folders.
- **Naming**: Use all-lowercase for directory names.