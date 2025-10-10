# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern enterprise website built with Next.js 15.5.4, React 19, TypeScript, and Tailwind CSS 4. The project emphasizes modern design principles, performance optimization, and responsive design with a comprehensive design system documented in MODERN_DESIGN_GUIDE.md.

## Development Commands

### Essential Commands
```bash
# Start development server with Turbopack
npm run dev

# Build for production (static export to ./out)
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

### Deployment
The project uses GitHub Actions for automatic deployment to GitHub Pages:
- Workflow: `.github/workflows/deploy-pages.yml`
- Build output: `./out` directory (static export)
- Package manager: pnpm (version 8.14.0 in CI)
- Triggers on push to `main` branch

## Architecture

### Project Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with Navbar, Footer, BackToTop
│   ├── page.tsx           # Home page composition
│   ├── globals.css        # Design system + Tailwind
│   ├── about/
│   ├── contact/
│   └── products/
└── components/            # Reusable React components
```

### Key Architectural Patterns

**Component Composition**: The home page (`app/page.tsx`) is composed of modular sections in a specific order:
1. HeroSection - Modern hero area
2. Banner - Carousel/banner rotation
3. StatsCounter - Animated statistics
4. CompanyIntroduction - About section
5. ProductsSection - Products/services display
6. CaseStudies - Customer case studies
7. NewsSection - News/updates

**Layout Pattern**: Root layout (`app/layout.tsx`) includes:
- PerformanceMonitor (performance tracking component)
- Navbar (sticky navigation)
- Main content area with `pt-16` (to account for fixed navbar)
- Footer
- BackToTop button

**Performance Monitoring**: The `PerformanceMonitor` component tracks:
- Core Web Vitals (LCP, FID, CLS)
- Navigation timing metrics
- Resource loading performance
- Memory usage (Chrome only)
- Console logs performance data in development

### Styling Architecture

**Design System**: See `MODERN_DESIGN_GUIDE.md` for comprehensive design specifications.

**CSS Organization** (`app/globals.css`):
1. CSS Custom Properties (design tokens) in `:root`
2. Modern design system variables (primary colors, neutrals, semantic colors)
3. Global resets and typography
4. Component styles (buttons, cards, navbar, etc.)
5. Utility classes (gradients, glass effects, animations)
6. Responsive breakpoints and mobile optimizations
7. Dark mode support (`[data-theme="dark"]` and `prefers-color-scheme`)
8. Accessibility enhancements

**Color System**:
- Primary: `#2563eb` (modern blue) with full 50-900 scale
- Neutrals: Complete gray scale (50-900)
- Semantic colors: `--background`, `--foreground`, `--muted`, `--border`, `--accent`

**Spacing/Typography**: Modern scale system with optimized letter-spacing and line-heights. See design guide for specifics.

### Key Configuration

**TypeScript** (`tsconfig.json`):
- Path alias: `@/*` maps to `./src/*`
- Target: ES2017
- Module resolution: bundler

**Next.js** (`next.config.ts`):
- Turbopack enabled for builds
- Image optimization: WebP/AVIF formats, multiple device sizes
- Remote image patterns: `picsum.photos` allowed
- Console removal in production builds
- CSS optimization enabled (experimental)

**ESLint** (`eslint.config.mjs`):
- Extends: `next/core-web-vitals`, `next/typescript`
- Ignores: node_modules, .next, out, build, next-env.d.ts

### Component Patterns

**Client Components**: Most interactive components use `"use client"` directive:
- PerformanceMonitor, BackToTop, ThemeToggle, ScrollReveal
- Components with state, effects, or browser APIs

**Responsive Design**:
- Components use responsive classes and container queries
- Breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl), 1536px (2xl)
- Touch-friendly: minimum 44x44px touch targets on mobile

**Animation Strategy**:
- CSS transitions for hover/focus states
- Keyframe animations for entrances (fadeInUp, fadeInLeft, etc.)
- Scroll-based reveals (Intersection Observer pattern in ScrollReveal)
- Performance-conscious: prefer `transform` and `opacity`

**Image Optimization**:
- LazyImage component for deferred loading
- Next.js Image component with proper sizing
- WebP/AVIF formats configured

### State and Data Flow

**Metadata**: SEO metadata defined in `layout.tsx` with Chinese language support
- Title: "科技企业 - 创新科技,引领未来"
- Keywords focused on technology and digital transformation

**Font Loading**: Inter font from Google Fonts with `--font-inter` CSS variable

**No Global State**: Currently no Redux/Zustand/Context - components are largely presentational

## Development Guidelines

### When Adding New Features

1. **Maintain Design System**: Always reference `MODERN_DESIGN_GUIDE.md` for colors, spacing, typography
2. **Use Design Tokens**: Use CSS variables from `globals.css` instead of hardcoded values
3. **Responsive First**: Ensure mobile (768px-), tablet (768px-1024px), desktop (1024px+) work properly
4. **Performance**: Monitor bundle size, use dynamic imports for large components
5. **Accessibility**: Maintain WCAG 2.1 AA compliance (4.5:1 contrast, keyboard nav, ARIA labels)

### Component Creation

```tsx
// Example pattern for new components
"use client"; // if using hooks/effects

import React from "react";

const MyComponent: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Content */}
    </div>
  );
};

export default MyComponent;
```

### Styling Approach

1. Use Tailwind utility classes for layout and common styles
2. Use global CSS classes for reusable patterns (`.btn-primary`, `.card`, etc.)
3. Add custom animations in `globals.css` under appropriate sections
4. Respect the modern design aesthetic: rounded corners (16px for cards), subtle shadows, smooth transitions

### Language Support

The site is in Chinese (lang="zh-CN"):
- Metadata, content, and comments are in Chinese
- Keep this consistent when adding new content
- Use appropriate Chinese typography and spacing

## Build Output

The project uses static export (`next build`):
- Output directory: `./out`
- All pages are pre-rendered at build time
- Suitable for GitHub Pages deployment
- No server-side runtime required

## Performance Considerations

1. **Turbopack**: Used for both dev and build for faster compilation
2. **Console Removal**: `console.*` calls removed in production builds
3. **CSS Optimization**: Experimental CSS optimization enabled
4. **Image Optimization**: Automated through Next.js with multiple formats and sizes
5. **Performance Monitoring**: PerformanceMonitor tracks key metrics during development

## Browser Support

Modern browsers (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+):
- CSS Grid and Custom Properties required
- Intersection Observer for scroll animations
- Backdrop Filter for glassmorphism effects
