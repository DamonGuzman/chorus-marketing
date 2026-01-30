# Chorus Marketing Website - Figma Implementation Plan

## Overview

This document outlines the comprehensive strategy for implementing the Chorus marketing website based on four Figma design frames. The designs showcase a modern, dark-themed AI platform landing page with multiple sections including hero, features, testimonials, team, and footer.

---

## Design Analysis Summary

### Pages/Frames Analyzed

| Node ID | Frame Name | Description |
|---------|------------|-------------|
| 4068:1830 | Frame 1707484632 | Full landing page variant - "Stop Hiring. Start Building" |
| 4229:61718 | Frame 1707484796 | Full landing page variant - Alternative layout |
| 4227:61660 | Frame 1707484795 | "Your AI Workforce. Unpacked" - Features deep dive |
| 4389:2098 | Landing page | "Chorus is the agentic AI platform" - Main marketing page |

### Key Observations

1. **All designs share a consistent visual language** - dark theme, purple accents, Urbanist font family
2. **Modular section-based layout** - Each page is composed of reusable sections
3. **Responsive considerations needed** - Designs are at 1440px width (desktop)
4. **Heavy use of gradients and glows** - Purple gradient CTAs with shadow effects

---

## Design Tokens

This section provides a complete mapping of all design tokens extracted from the Figma designs. These tokens should be implemented as CSS custom properties and/or Tailwind theme extensions.

### Token Architecture

```
tokens/
├── colors.css        # Color primitives and semantic colors
├── typography.css    # Font families, sizes, weights, line heights
├── spacing.css       # Spacing scale
├── effects.css       # Shadows, gradients, blur effects
├── borders.css       # Border radius, border widths
└── index.css         # Combines all token files
```

### CSS Custom Properties (tokens.css)

```css
:root {
  /* ============================================
     COLOR TOKENS - Primitives
     ============================================ */

  /* Core Colors */
  --color-black: #000000;
  --color-white: #FFFFFF;

  /* Purple Scale (Primary Brand) */
  --color-purple-50: rgba(180, 138, 251, 0.10);
  --color-purple-100: rgba(180, 138, 251, 0.25);
  --color-purple-200: rgba(145, 85, 237, 0.25);
  --color-purple-400: #B48AFB;
  --color-purple-500: #AF82F9;
  --color-purple-600: #9155ED;

  /* Gray Scale */
  --color-gray-50: #FAFAFA;
  --color-gray-100: #CBCACC;
  --color-gray-200: #A1A1A1;
  --color-gray-300: #7D7C83;
  --color-gray-400: #777E90;
  --color-gray-500: #737373;
  --color-gray-600: #3D3C42;
  --color-gray-700: #2A353D;
  --color-gray-800: #232227;
  --color-gray-900: #141B34;
  --color-gray-950: #131217;

  /* Neutral Scale */
  --color-neutral-4: #777E90;
  --color-neutral-8: #FCFCFD;

  /* Semantic Colors */
  --color-success: #12825F;
  --color-success-light: #3EA34B;
  --color-warning: #F2AB53;
  --color-warning-dark: #E3A008;
  --color-error: #DC2626;
  --color-green: #388D46;

  /* ============================================
     COLOR TOKENS - Semantic / Alias
     ============================================ */

  /* Backgrounds */
  --bg-primary: var(--color-black);
  --bg-secondary: var(--color-gray-800);
  --bg-elevated: var(--color-gray-700);
  --bg-card: var(--color-gray-800);
  --bg-input: rgba(255, 255, 255, 0);

  /* Text Colors */
  --text-primary: var(--color-white);
  --text-secondary: var(--color-gray-100);
  --text-muted: var(--color-gray-300);
  --text-disabled: var(--color-gray-400);

  /* Border Colors */
  --border-default: rgba(255, 255, 255, 0.36);
  --border-subtle: rgba(255, 255, 255, 0.10);
  --border-accent: var(--color-purple-400);
  --border-hover: rgba(255, 255, 255, 0.50);

  /* Interactive Colors */
  --interactive-primary: var(--color-purple-400);
  --interactive-primary-hover: var(--color-purple-600);
  --interactive-secondary: var(--color-gray-600);

  /* ============================================
     TYPOGRAPHY TOKENS
     ============================================ */

  /* Font Families */
  --font-family-primary: 'Urbanist', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-family-mono: 'SF Mono', 'Fira Code', monospace;

  /* Font Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Font Sizes */
  --font-size-xs: 12px;
  --font-size-sm: 14px;
  --font-size-base: 16px;
  --font-size-lg: 18px;
  --font-size-xl: 22px;
  --font-size-2xl: 26px;
  --font-size-3xl: 28px;
  --font-size-4xl: 34px;
  --font-size-5xl: 50px;
  --font-size-6xl: 64px;

  /* Line Heights */
  --line-height-tight: 1.1;
  --line-height-snug: 1.25;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.625;
  --line-height-loose: 2;

  /* Line Heights - Fixed */
  --line-height-22: 22px;
  --line-height-24: 24px;
  --line-height-32: 32px;
  --line-height-36: 36px;
  --line-height-44: 44px;
  --line-height-48: 48px;
  --line-height-64: 64px;
  --line-height-68: 68px;
  --line-height-74: 74px;
  --line-height-78: 78px;

  /* Letter Spacing */
  --letter-spacing-tighter: -0.5px;
  --letter-spacing-tight: -0.26px;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.5px;

  /* ============================================
     SPACING TOKENS
     ============================================ */

  --space-0: 0;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 14px;
  --space-5: 16px;
  --space-6: 20px;
  --space-7: 24px;
  --space-8: 26px;
  --space-9: 30px;
  --space-10: 32px;
  --space-11: 36px;
  --space-12: 38px;
  --space-13: 40px;
  --space-14: 42px;
  --space-15: 47px;
  --space-16: 50px;
  --space-17: 51px;
  --space-18: 58px;
  --space-19: 60px;
  --space-20: 75px;
  --space-21: 78px;
  --space-22: 82px;
  --space-23: 100px;
  --space-24: 127px;
  --space-25: 212px;

  /* Semantic Spacing */
  --space-section-x: 100px;
  --space-section-y: 75px;
  --space-container-x: 30px;
  --space-card-padding: 30px;
  --space-button-x: 32px;
  --space-button-y: 12px;
  --space-badge-x: 12px;
  --space-badge-y: 4px;

  /* Gap Tokens */
  --gap-xs: 8px;
  --gap-sm: 14px;
  --gap-md: 20px;
  --gap-lg: 32px;
  --gap-xl: 50px;
  --gap-2xl: 75px;
  --gap-3xl: 127px;

  /* ============================================
     BORDER RADIUS TOKENS
     ============================================ */

  --radius-none: 0;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-xl: 35px;
  --radius-2xl: 50px;
  --radius-full: 100px;
  --radius-circle: 1000px;

  /* Semantic Radius */
  --radius-button: var(--radius-2xl);
  --radius-badge: var(--radius-full);
  --radius-card: var(--radius-xl);
  --radius-avatar: var(--radius-circle);
  --radius-input: var(--radius-2xl);

  /* ============================================
     SHADOW TOKENS
     ============================================ */

  --shadow-none: none;
  --shadow-glow-sm: 0px 0px 4px 0px rgba(175, 130, 249, 0.4);
  --shadow-glow: 0px 0px 8px 0px rgba(175, 130, 249, 0.63);
  --shadow-glow-lg: 0px 0px 16px 0px rgba(175, 130, 249, 0.63);
  --shadow-glow-xl: 0px 0px 24px 0px rgba(175, 130, 249, 0.8);

  /* ============================================
     GRADIENT TOKENS
     ============================================ */

  /* Primary Gradients */
  --gradient-primary: linear-gradient(-67.9deg, #B48AFB 14.59%, #9155ED 88.45%);
  --gradient-primary-hover: linear-gradient(-67.9deg, #C9A5FC 14.59%, #A06EF0 88.45%);

  /* Badge/Chip Gradients */
  --gradient-badge: linear-gradient(-71.3deg, rgba(180, 138, 251, 0.25) 14.59%, rgba(145, 85, 237, 0.25) 88.45%);

  /* Background Gradients */
  --gradient-fade-top: linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.02) 45.19%, rgba(0, 0, 0, 0) 100%);
  --gradient-radial-glow: radial-gradient(50% 50% at 50% 50%, rgba(180, 138, 251, 0.15) 0%, transparent 100%);

  /* Text Gradients */
  --gradient-text: linear-gradient(180deg, #FFFFFF 0%, #B48AFB 100%);

  /* ============================================
     EFFECT TOKENS
     ============================================ */

  /* Backdrop Blur */
  --blur-none: 0;
  --blur-sm: 4px;
  --blur-md: 8px;
  --blur-lg: 16px;
  --blur-xl: 30px;

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-base: 200ms ease;
  --transition-slow: 300ms ease;
  --transition-slower: 500ms ease;

  /* ============================================
     Z-INDEX TOKENS
     ============================================ */

  --z-base: 0;
  --z-dropdown: 10;
  --z-sticky: 20;
  --z-fixed: 30;
  --z-modal-backdrop: 40;
  --z-modal: 50;
  --z-popover: 60;
  --z-tooltip: 70;

  /* ============================================
     LAYOUT TOKENS
     ============================================ */

  --container-max-width: 1440px;
  --container-content-width: 1240px;
  --container-narrow-width: 1064px;

  /* Header */
  --header-height: 88px;

  /* Section Heights */
  --hero-height: 659px;
  --cta-section-height: 632px;

  /* ============================================
     BREAKPOINT TOKENS (for reference)
     ============================================ */

  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1440px;
}
```

### Figma Variable Mapping

The following table maps Figma variable names to CSS custom properties:

| Figma Variable | CSS Token | Value |
|----------------|-----------|-------|
| `Secondary/tint2` | `--color-gray-100` | `#CBCACC` |
| `Secondary/Tint1` | `--color-gray-300` | `#7D7C83` |
| `Secondary/Hover` | `--color-gray-600` | `#3D3C42` |
| `Secondary/Black` | `--color-gray-800` | `#232227` |
| `Black/v2` | `--color-gray-950` | `#131217` |
| `White` | `--color-white` | `#FFFFFF` |
| `White/50%` | `--border-hover` | `rgba(255,255,255,0.5)` |
| `White/25%` | `--border-default` | `rgba(255,255,255,0.25)` |
| `White/10%` | `--border-subtle` | `rgba(255,255,255,0.1)` |
| `Black` | `--color-black` | `#000000` |
| `Green` | `--color-green` | `#388D46` |
| `Green/success` | `--color-success` | `#12825F` |
| `Green/600` | `--color-success-light` | `#3EA34B` |
| `Yellow/Pending` | `--color-warning` | `#F2AB53` |
| `Yellow/400` | `--color-warning-dark` | `#E3A008` |
| `Grey/50` | `--color-gray-50` | `#FAFAFA` |
| `Grey/400` | `--color-gray-200` | `#A1A1A1` |
| `Grey/500` | `--color-gray-500` | `#737373` |
| `Gray` | `--text-disabled` | `#757575` |
| `Neutrals/4` | `--color-neutral-4` | `#777E90` |
| `Neutrals/8` | `--color-neutral-8` | `#FCFCFD` |
| `Style` | `--color-gray-700` | `#2A353D` |
| `Dark` | `--color-gray-900` | `#141B34` |
| `stroke/bg` | `--bg-card` | `#222222` |
| `Stroke/white/50%` | `--border-hover` | `rgba(255,255,255,0.37)` |
| `Primary/White 1` | `--text-primary` | `#FFFFFF` |
| `Primary/White 2` | `--text-primary` | `#FFFFFF` |
| `Button/Shadow` | `--shadow-glow` | `0px 0px 8px rgba(175,130,249,0.63)` |
| `4%` | N/A | `rgba(255,255,255,0.04)` |
| `Playfull Yellow` | N/A | `#FFD02F` |

### Typography Token Mapping

| Figma Text Style | CSS Classes | Properties |
|------------------|-------------|------------|
| Hero Headline | `.text-hero` | `font-size: 64px; line-height: 74px; font-weight: 700;` |
| Section Title | `.text-section` | `font-size: 50px; line-height: 78px; font-weight: 700; letter-spacing: -0.5px;` |
| Card Title | `.text-card-title` | `font-size: 34px; line-height: 48px; font-weight: 700;` |
| Feature Title | `.text-feature` | `font-size: 26px; line-height: 44px; font-weight: 700; letter-spacing: -0.26px;` |
| Body Large | `.text-body-lg` | `font-size: 28px; line-height: 36px; font-weight: 500;` |
| Body | `.text-body` | `font-size: 22px; line-height: 36px; font-weight: 400;` |
| Body Small | `.text-body-sm` | `font-size: 18px; line-height: 32px; font-weight: 500;` |
| Caption | `.text-caption` | `font-size: 16px; line-height: 24px; font-weight: 500;` |
| Label | `.text-label` | `font-size: 14px; line-height: 22px; font-weight: 500;` |
| Button Text | `.text-button` | `font-size: 14px; line-height: 24px; font-weight: 700;` |
| Nav Link | `.text-nav` | `font-size: 14px; line-height: 22px; font-weight: 500;` |
| Footer Link | `.text-footer` | `font-size: 14px; line-height: 22px; font-weight: 500;` |
| Section Label | `.text-section-label` | `font-size: 16px; line-height: 24px; font-weight: 600; text-transform: uppercase;` |

### Component Token Usage

#### Button Component Tokens
```css
.button-primary {
  background: var(--gradient-primary);
  color: var(--text-primary);
  padding: var(--space-button-y) var(--space-button-x);
  border-radius: var(--radius-button);
  box-shadow: var(--shadow-glow);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-24);
  transition: var(--transition-base);
}

.button-outline {
  background: var(--bg-input);
  backdrop-filter: blur(var(--blur-xl));
  border: 1px solid var(--border-default);
  color: var(--text-secondary);
  padding: var(--space-button-y) var(--space-button-x);
  border-radius: var(--radius-button);
}
```

#### Badge Component Tokens
```css
.badge {
  background: var(--gradient-badge);
  border: 1px solid var(--border-accent);
  padding: var(--space-badge-y) var(--space-badge-x);
  border-radius: var(--radius-badge);
  box-shadow: var(--shadow-glow);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-24);
  color: var(--text-primary);
}
```

#### Card Component Tokens
```css
.card {
  background: var(--bg-card);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-card);
  padding: var(--space-card-padding);
}

.card-testimonial {
  border-radius: var(--radius-card);
  border: 1px solid var(--border-default);
}
```

#### Section Component Tokens
```css
.section {
  background: var(--bg-primary);
  padding: var(--space-section-y) var(--space-section-x);
}

.section-header {
  gap: var(--gap-lg);
}
```

---

## Style Guide

### Color Palette

#### Primary Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-black` | `#000000` | Primary background |
| `--color-white` | `#FFFFFF` | Primary text, icons |
| `--color-primary-purple` | `#B48AFB` | Primary accent, borders |
| `--color-primary-purple-dark` | `#9155ED` | Gradient end, hover states |

#### Secondary Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-secondary-tint1` | `#7D7C83` | Body text, descriptions |
| `--color-secondary-tint2` | `#CBCACC` | Navigation, subtle text |
| `--color-secondary-black` | `#232227` | Card backgrounds |
| `--color-stroke-white-50` | `rgba(255, 255, 255, 0.5)` | Borders, dividers |

#### Semantic Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-success` | `#12825F` | Success states |
| `--color-warning` | `#F2AB53` | Warning/pending states |
| `--color-green` | `#388D46` | Positive indicators |

### Typography

#### Font Family
- **Primary Font**: `Urbanist` (Google Fonts)
- **Weights Used**:
  - Regular (400)
  - Medium (500)
  - SemiBold (600)
  - Bold (700)
  - Bold Italic (700 italic)

#### Type Scale
| Element | Size | Weight | Line Height | Letter Spacing |
|---------|------|--------|-------------|----------------|
| H1 (Hero) | 64px | Bold | 74px | - |
| H2 (Section) | 50px | Bold | 78px | -0.5px |
| H3 (Card Title) | 34px | Bold | 48px | - |
| H4 (Feature) | 26px | Bold | 44px | -0.26px |
| Body Large | 28px | Medium | 36px | - |
| Body | 22px | Regular/Medium | 36px | - |
| Body Small | 18px | Medium | 32px | - |
| Caption | 16px | Medium | 24px | - |
| Label | 14px | Bold/Medium | 22-24px | - |

#### OpenType Features
```css
font-feature-settings: 'cv11' 1, 'cv02' 1, 'cv03' 1, 'cv04' 1;
```

### Effects & Shadows

#### Button Glow
```css
box-shadow: 0px 0px 8px 0px rgba(175, 130, 249, 0.63);
```

#### Gradient Backgrounds
```css
/* Primary Button Gradient */
background: linear-gradient(-67.9deg, #B48AFB 14.59%, #9155ED 88.45%);

/* Badge/Chip Gradient (with transparency) */
background: linear-gradient(-71.3deg, rgba(180, 138, 251, 0.25) 14.59%, rgba(145, 85, 237, 0.25) 88.45%);
```

#### Backdrop Blur
```css
backdrop-filter: blur(30px);
```

### Border Radius
| Element | Radius |
|---------|--------|
| Buttons (pill) | `50px` / `100px` |
| Cards | `35px` |
| Team photos | `1000px` (circle) |
| Badges | `100px` |

### Spacing System
Based on the designs, a consistent spacing scale:
- `4px`, `8px`, `12px`, `14px`, `16px`, `20px`, `24px`, `26px`, `30px`, `32px`, `36px`, `38px`, `40px`, `42px`, `47px`, `50px`, `51px`, `58px`, `60px`, `75px`, `78px`, `82px`, `100px`, `127px`, `212px`

---

## Component Library

### 1. Navigation Header
**Location**: Top of all pages
**Props**:
- `logo`: SVG/Image
- `links`: Array of nav items
- `ctaButton`: Button config

**Variants**:
- Default (transparent background)
- Scrolled (with backdrop blur)

```
Structure:
├── Logo (Vector icon)
├── Nav Links
│   ├── About
│   ├── Use Cases (dropdown)
│   ├── Pricing
│   ├── Features
│   ├── Press
│   └── FAQ
└── CTA Button ("Control")
```

### 2. Badge/Chip Component
**Usage**: Section labels, category tags
**Variants**:
- Gradient background with border
- Glow effect

```tsx
interface BadgeProps {
  label: string;
  variant?: 'primary' | 'outline';
  glow?: boolean;
}
```

### 3. Primary Button
**Variants**:
- Solid gradient (primary CTA)
- Outline with backdrop blur
- Icon + text

```tsx
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}
```

### 4. Section Header
**Props**:
- `badge`: Optional badge above title
- `title`: Main heading
- `subtitle`: Description text
- `alignment`: 'left' | 'center'

### 5. Feature Card
**Variants**:
- Icon + title + description
- With vertical divider separator

```tsx
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  showDivider?: boolean;
}
```

### 6. Testimonial Card
**Layout**: Image + quote + attribution
**Props**:
- `image`: Source image
- `quote`: Testimonial text
- `attribution`: Publication name

### 7. Team Member Card
**Props**:
- `image`: Profile photo
- `name`: Full name
- `title`: Job title

### 8. Footer
**Sections**:
- Brand column (logo, tagline, CTA)
- Link columns (About, Products, Community, Support)
- Bottom bar (copyright, social links, contact)

### 9. Icon Components
Required icons from designs:
- Bot icon
- Atom icon
- Blend icon
- Checkmark icon
- Mail/SMS icon
- Social icons (Twitter/X, LinkedIn, Instagram)
- Dropdown chevron

---

## Page Sections

### Landing Page Structure (4389:2098)

1. **Hero Section** (659px height)
   - Background: Black with decorative light beam image
   - Badge: "Control"
   - Headline: "Chorus is the agentic AI platform that proves real magic exists"
   - Subheadline: "We don't promise the impossible. We deliver it."

2. **Three Pillars Section**
   - Three feature cards with icons
   - Vertical line dividers between cards
   - Titles: "Built in Public. Proven in Public", "AI Agents in Perfect Harmony", "Proof Before Belief"

3. **Vision Section**
   - Badge: "Control"
   - Large headline: "Built By People Who Understand Both Vision And Execution"
   - Founder image/video placeholder
   - Long-form copy with emphasized quote

4. **Testimonials Header Section**
   - Badge: "Control"
   - Title: "What The Audience Is Saying"
   - Subtitle: "The Difference That Changes Everything"

5. **Testimonials Grid Section**
   - 2x2 grid of testimonial cards
   - Each with publication image, quote, attribution
   - "Add Review" button at bottom

6. **Team Section**
   - Badge: "Control"
   - Title: "Our Team"
   - Subtitle description
   - 3x2 grid of team member cards

7. **CTA Section**
   - Decorative gradient background
   - Large headline: "The Best Companies Don't Have More People..."
   - Three benefit pills
   - Primary CTA button

8. **Footer**
   - Full-width dark background
   - Multi-column layout
   - Social links and contact

---

## Assets Required

### Images to Download
From Figma API asset URLs (valid for 7 days):

| Asset ID | Description | Usage |
|----------|-------------|-------|
| `imgB23A4Eb81Fd06Bf7F47274C5C52Ad5611` | Hero light beam | Hero background |
| `imgTest`, `imgTest1` | Team/founder images | Vision section |
| `imgRectangle34624571-74` | Publication logos | Testimonials |
| `imgImage40-45` | Team member photos | Team section |
| `imgVector` | Chorus logo | Header, Footer |
| `imgElements`, `imgElements1` | Icon elements | Feature cards |
| `imgGroup1707484047` | CTA background graphic | CTA section |
| `imgEllipse2011` | Glow effect | CTA section |
| Social icon assets | Twitter, LinkedIn, Instagram | Footer |

### SVG Icons Needed
- Logo mark
- Navigation dropdown chevron
- Feature section icons (bot, atom, blend)
- Checkmark icons
- Mail icon

---

## Implementation Phases

### Phase 1: Project Setup & Foundation
**Estimated Components**: 5-7

1. Configure Tailwind CSS with custom theme
   - Add color tokens
   - Configure typography scale
   - Add custom font (Urbanist)
   - Set up gradient utilities
   - Configure shadow utilities

2. Create base layout components
   - `Container` - max-width wrapper
   - `Section` - consistent padding/spacing

3. Set up global styles
   - CSS custom properties for design tokens
   - Base typography styles
   - Reset/normalize

### Phase 2: Core Components
**Estimated Components**: 8-10

1. `Badge` component
2. `Button` component (all variants)
3. `SectionHeader` component
4. `NavHeader` component
5. `Icon` components (or icon system setup)
6. `Card` base component
7. `Divider` component

### Phase 3: Section Components
**Estimated Components**: 8-10

1. `HeroSection`
2. `FeatureGrid` (Three Pillars)
3. `VisionSection`
4. `TestimonialsHeader`
5. `TestimonialsGrid`
6. `TeamSection`
7. `CTASection`
8. `Footer`

### Phase 4: Page Assembly
1. Create landing page route
2. Compose sections
3. Add scroll animations (optional)
4. Implement responsive breakpoints

### Phase 5: Polish & Optimization
1. Image optimization (Next.js Image)
2. Font loading optimization
3. Animation refinements
4. Accessibility audit
5. Performance testing

---

## File Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ui/
│   │   ├── Badge.tsx
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   ├── Divider.tsx
│   │   ├── Section.tsx
│   │   └── SectionHeader.tsx
│   ├── icons/
│   │   ├── Logo.tsx
│   │   ├── BotIcon.tsx
│   │   ├── AtomIcon.tsx
│   │   ├── BlendIcon.tsx
│   │   ├── CheckIcon.tsx
│   │   ├── MailIcon.tsx
│   │   └── SocialIcons.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── sections/
│       ├── HeroSection.tsx
│       ├── FeatureGrid.tsx
│       ├── VisionSection.tsx
│       ├── TestimonialsSection.tsx
│       ├── TeamSection.tsx
│       └── CTASection.tsx
├── lib/
│   └── utils.ts
├── styles/
│   └── tokens.css
└── public/
    └── images/
        ├── hero-beam.png
        ├── team/
        └── testimonials/
```

---

## Tailwind CSS v4 Configuration

Since this project uses Tailwind CSS v4, configuration is done via CSS using `@theme` directive in `globals.css`.

### globals.css Theme Configuration

```css
@import "tailwindcss";

@theme {
  /* ============================================
     COLORS
     ============================================ */

  /* Core */
  --color-black: #000000;
  --color-white: #FFFFFF;

  /* Purple Scale (Primary Brand) */
  --color-purple-50: oklch(from #B48AFB l c h / 0.1);
  --color-purple-100: oklch(from #B48AFB l c h / 0.25);
  --color-purple-400: #B48AFB;
  --color-purple-500: #AF82F9;
  --color-purple-600: #9155ED;

  /* Gray Scale */
  --color-gray-50: #FAFAFA;
  --color-gray-100: #CBCACC;
  --color-gray-200: #A1A1A1;
  --color-gray-300: #7D7C83;
  --color-gray-400: #777E90;
  --color-gray-500: #737373;
  --color-gray-600: #3D3C42;
  --color-gray-700: #2A353D;
  --color-gray-800: #232227;
  --color-gray-900: #141B34;
  --color-gray-950: #131217;

  /* Semantic */
  --color-success: #12825F;
  --color-warning: #F2AB53;
  --color-green: #388D46;

  /* ============================================
     TYPOGRAPHY
     ============================================ */

  /* Font Family */
  --font-family-urbanist: 'Urbanist', ui-sans-serif, system-ui, sans-serif;

  /* Font Sizes with Line Heights */
  --font-size-hero: 64px;
  --font-size-hero--line-height: 74px;

  --font-size-section: 50px;
  --font-size-section--line-height: 78px;
  --font-size-section--letter-spacing: -0.5px;

  --font-size-card-title: 34px;
  --font-size-card-title--line-height: 48px;

  --font-size-feature: 26px;
  --font-size-feature--line-height: 44px;
  --font-size-feature--letter-spacing: -0.26px;

  --font-size-body-lg: 28px;
  --font-size-body-lg--line-height: 36px;

  --font-size-body: 22px;
  --font-size-body--line-height: 36px;

  --font-size-body-sm: 18px;
  --font-size-body-sm--line-height: 32px;

  --font-size-caption: 16px;
  --font-size-caption--line-height: 24px;

  --font-size-label: 14px;
  --font-size-label--line-height: 22px;

  /* ============================================
     SPACING
     ============================================ */

  --spacing-section-x: 100px;
  --spacing-section-y: 75px;
  --spacing-container: 30px;
  --spacing-card: 30px;

  /* ============================================
     BORDER RADIUS
     ============================================ */

  --radius-pill: 50px;
  --radius-badge: 100px;
  --radius-card: 35px;
  --radius-circle: 1000px;

  /* ============================================
     SHADOWS
     ============================================ */

  --shadow-glow-sm: 0px 0px 4px 0px rgba(175, 130, 249, 0.4);
  --shadow-glow: 0px 0px 8px 0px rgba(175, 130, 249, 0.63);
  --shadow-glow-lg: 0px 0px 16px 0px rgba(175, 130, 249, 0.63);

  /* ============================================
     ANIMATIONS
     ============================================ */

  --animate-fade-in: fade-in 0.3s ease-out;
  --animate-slide-up: slide-up 0.4s ease-out;

  /* ============================================
     LAYOUT
     ============================================ */

  --width-container: 1440px;
  --width-content: 1240px;
  --width-narrow: 1064px;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ============================================
   CUSTOM UTILITIES
   ============================================ */

@utility text-gradient {
  background: linear-gradient(180deg, #FFFFFF 0%, #B48AFB 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@utility bg-gradient-primary {
  background: linear-gradient(-67.9deg, #B48AFB 14.59%, #9155ED 88.45%);
}

@utility bg-gradient-badge {
  background: linear-gradient(-71.3deg, rgba(180, 138, 251, 0.25) 14.59%, rgba(145, 85, 237, 0.25) 88.45%);
}

@utility bg-gradient-fade {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.02) 45.19%, rgba(0, 0, 0, 0) 100%);
}

/* OpenType Features for Urbanist */
@utility font-feature-stylistic {
  font-feature-settings: 'cv11' 1, 'cv02' 1, 'cv03' 1, 'cv04' 1;
}
```

### Alternative: tailwind.config.ts (if needed)

For compatibility or additional customization, you can also use the traditional config:

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Core
        'chorus-black': '#000000',
        'chorus-white': '#FFFFFF',

        // Purple Scale
        'purple': {
          50: 'rgba(180, 138, 251, 0.10)',
          100: 'rgba(180, 138, 251, 0.25)',
          200: 'rgba(145, 85, 237, 0.25)',
          400: '#B48AFB',
          500: '#AF82F9',
          600: '#9155ED',
        },

        // Gray Scale
        'gray': {
          50: '#FAFAFA',
          100: '#CBCACC',
          200: '#A1A1A1',
          300: '#7D7C83',
          400: '#777E90',
          500: '#737373',
          600: '#3D3C42',
          700: '#2A353D',
          800: '#232227',
          900: '#141B34',
          950: '#131217',
        },

        // Semantic
        'success': '#12825F',
        'warning': '#F2AB53',
        'green': '#388D46',
      },

      fontFamily: {
        'urbanist': ['Urbanist', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },

      fontSize: {
        'hero': ['64px', { lineHeight: '74px', fontWeight: '700' }],
        'section': ['50px', { lineHeight: '78px', letterSpacing: '-0.5px', fontWeight: '700' }],
        'card-title': ['34px', { lineHeight: '48px', fontWeight: '700' }],
        'feature': ['26px', { lineHeight: '44px', letterSpacing: '-0.26px', fontWeight: '700' }],
        'body-lg': ['28px', { lineHeight: '36px', fontWeight: '500' }],
        'body': ['22px', { lineHeight: '36px', fontWeight: '400' }],
        'body-sm': ['18px', { lineHeight: '32px', fontWeight: '500' }],
        'caption': ['16px', { lineHeight: '24px', fontWeight: '500' }],
        'label': ['14px', { lineHeight: '22px', fontWeight: '500' }],
      },

      spacing: {
        'section-x': '100px',
        'section-y': '75px',
        'container': '30px',
        'card': '30px',
      },

      borderRadius: {
        'pill': '50px',
        'badge': '100px',
        'card': '35px',
        'circle': '1000px',
      },

      boxShadow: {
        'glow-sm': '0px 0px 4px 0px rgba(175, 130, 249, 0.4)',
        'glow': '0px 0px 8px 0px rgba(175, 130, 249, 0.63)',
        'glow-lg': '0px 0px 16px 0px rgba(175, 130, 249, 0.63)',
      },

      backgroundImage: {
        'gradient-primary': 'linear-gradient(-67.9deg, #B48AFB 14.59%, #9155ED 88.45%)',
        'gradient-badge': 'linear-gradient(-71.3deg, rgba(180, 138, 251, 0.25) 14.59%, rgba(145, 85, 237, 0.25) 88.45%)',
        'gradient-fade': 'linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.02) 45.19%, rgba(0, 0, 0, 0) 100%)',
      },

      backdropBlur: {
        'xl': '30px',
      },

      maxWidth: {
        'container': '1440px',
        'content': '1240px',
        'narrow': '1064px',
      },

      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },

      animation: {
        'fade-in': 'fade-in 0.3s ease-out',
        'slide-up': 'slide-up 0.4s ease-out',
      },
    },
  },
  plugins: [],
}

export default config
```

### Utility Classes Quick Reference

| Purpose | Tailwind Class |
|---------|----------------|
| Hero text | `text-hero font-urbanist font-bold` |
| Section title | `text-section font-urbanist font-bold tracking-[-0.5px]` |
| Body text (muted) | `text-body-sm text-gray-300` |
| Primary button | `bg-gradient-primary text-white rounded-pill shadow-glow px-8 py-3` |
| Badge | `bg-gradient-badge border border-purple-400 rounded-badge shadow-glow px-3 py-1` |
| Card | `bg-gray-800 border border-white/[0.36] rounded-card` |
| Section padding | `px-section-x py-section-y` |
| Backdrop blur | `backdrop-blur-xl bg-white/0` |
| Glow effect | `shadow-glow` |
| Gradient text | `text-gradient` (custom utility) |

---

## Responsive Breakpoints

| Breakpoint | Width | Notes |
|------------|-------|-------|
| Mobile | < 640px | Single column, stacked layout |
| Tablet | 640px - 1024px | 2-column grids |
| Desktop | 1024px - 1440px | Full design |
| Large | > 1440px | Centered with max-width |

### Key Responsive Considerations
1. Hero section: Reduce headline size on mobile
2. Feature grid: Stack to single column on mobile
3. Testimonials: 1 column on mobile, 2 on tablet
4. Team grid: 2 columns on mobile, 3 on desktop
5. Footer: Stack columns on mobile
6. Navigation: Mobile hamburger menu needed

---

## Accessibility Requirements

1. **Color Contrast**: Verify text meets WCAG AA (4.5:1 ratio)
   - Gray text on black background needs verification

2. **Focus States**: Add visible focus indicators for all interactive elements

3. **Semantic HTML**:
   - Use proper heading hierarchy
   - Landmarks for navigation, main, footer
   - Button elements for interactive controls

4. **Alt Text**: All images need descriptive alt text

5. **Keyboard Navigation**: Ensure all interactive elements are keyboard accessible

6. **Motion**: Respect `prefers-reduced-motion` for animations

---

## Performance Considerations

1. **Images**
   - Use Next.js `<Image>` component for optimization
   - Implement lazy loading for below-fold images
   - Use WebP format where possible
   - Add blur placeholders

2. **Fonts**
   - Use `next/font` for Urbanist
   - Subset to only needed characters
   - Use `font-display: swap`

3. **CSS**
   - Tailwind CSS purging enabled by default
   - Minimize custom CSS

4. **JavaScript**
   - Minimize client-side JS
   - Use Server Components where possible

---

## Development Dependencies to Add

```json
{
  "dependencies": {
    "@next/font": "latest",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0"
  },
  "devDependencies": {
    "@tailwindcss/typography": "^0.5.0"
  }
}
```

---

## Testing Checklist

- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile device testing (iOS Safari, Android Chrome)
- [ ] Responsive breakpoint verification
- [ ] Color contrast validation
- [ ] Keyboard navigation testing
- [ ] Screen reader testing
- [ ] Performance audit (Lighthouse)
- [ ] Load time optimization

---

## Notes & Recommendations

1. **Font Loading**: The Urbanist font is critical for visual fidelity. Ensure it loads quickly with proper fallbacks.

2. **Gradient Text**: The hero uses gradient text which requires special CSS (`background-clip: text`).

3. **Image Masks**: Team member photos use circular masks with specific positioning.

4. **Decorative Elements**: The light beam and glow effects are important for the premium feel but should be optimized.

5. **Dark Mode**: The design is already dark-themed, but consider if a light mode variant is needed.

6. **Animation**: Consider subtle scroll animations for section reveals to enhance the premium feel.

---

## Next Steps

1. Review and approve this implementation plan
2. Download and optimize all image assets from Figma
3. Set up Tailwind configuration with design tokens
4. Begin Phase 1 implementation
5. Regular design review checkpoints after each phase

---

*Document generated from Figma designs on January 29, 2026*
*Figma File: ISQ8H69XM2VPwvEwDRvnLL (Turing Agents)*
