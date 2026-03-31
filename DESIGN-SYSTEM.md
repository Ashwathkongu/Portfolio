# 🎨 Portfolio Design System Guide

Complete documentation of the design system, components, utilities, and color tokens for the portfolio website.

---

## 📋 TABLE OF CONTENTS

1. [Color Palette](#color-palette)
2. [Typography](#typography)
3. [Reusable Components](#reusable-components)
4. [Layout Utilities](#layout-utilities)
5. [Button Styles](#button-styles)
6. [Card Styles](#card-styles)
7. [Premium Effects](#premium-effects)
8. [Animations](#animations)
9. [Best Practices](#best-practices)

---

## 🎨 COLOR PALETTE

### Brand Colors

The design system uses a comprehensive color palette defined in `tailwind.config.js`:

```javascript
brand: {
  bg: {
    primary: '#0f172a',      // Main background
    secondary: '#1a2847',    // Slightly lighter
    tertiary: '#1e293b',     // Cards and sections
  },
  surface: {
    raised: '#253550',       // Raised surfaces
    input: '#162038',        // Input fields
    hover: '#1e3a52',        // Hover state
  },
  text: {
    primary: '#ffffff',      // Headings
    secondary: '#e2e8f0',    // Body text
    muted: '#94a3b8',        // Muted text
    faded: '#64748b',        // Very faded
  },
  border: '#334155',         // Border color
  accent: '#fbbf24',         // Primary yellow
  accent_hover: '#f59e0b',   // Darker yellow
  accent_light: '#fde047',   // Lighter yellow
}
```

### Usage in Components

```jsx
// Using brand colors in Tailwind CSS
<div className="bg-brand-bg-primary text-brand-text-secondary">
  Content with correct colors
</div>

// Text variations
<p className="text-brand-text-primary">Main heading text</p>
<p className="text-brand-text-secondary">Body text</p>
<p className="text-brand-text-muted">Muted text</p>
<p className="text-brand-text-faded">Faded text</p>

// Accent color
<button className="bg-brand-accent text-black">
  Primary Button
</button>
```

---

## 📝 TYPOGRAPHY

### Type Scales

```jsx
<h1>Heading 1 (6xl, extrabold)</h1>    // 48px
<h2>Heading 2 (4xl, bold)</h2>         // 36px
<h3>Heading 3 (2xl, semibold)</h3>     // 24px
<h4>Heading 4 (lg, semibold)</h4>      // 18px
```

### Typography Classes

```jsx
// Section titles
<h2 className="section-title">About Me</h2>           // 4xl-6xl font-bold
<h2 className="section-title-lg">Large Title</h2>    // 5xl-7xl font-extrabold
<h2 className="section-title-sm">Small Title</h2>    // 3xl-4xl font-bold

// Subtitles
<p className="section-subtitle">Small description</p>         // lg text-muted
<p className="section-subtitle-lg">Larger description</p>     // xl-2xl text-secondary

// Text gradients
<h2 className="text-gradient">Gradient Text</h2>            // Yellow accent gradient
<h3 className="text-gradient-lg">Large Gradient Text</h3>    // Larger gradient
```

---

## 🧩 REUSABLE COMPONENTS

### 1. SectionHeading Component

Consistent section titles for all portfolio sections.

```jsx
import SectionHeading from './components/SectionHeading'

<SectionHeading
  title="About Me"
  subtitle="Learn more about my background"
  alignment="center"          // 'left', 'center', 'right'
  showAccentLine={true}      // Show golden accent line
  variant="primary"          // 'primary' or 'gradient'
  animated={true}            // Enable animations
/>
```

**File**: `src/components/SectionHeading.jsx`

### 2. Button Component

Accessible, customizable button component.

```jsx
import Button from './components/Button'

// Primary button
<Button variant="primary" size="lg">
  Click Me
</Button>

// With icon
<Button 
  variant="secondary" 
  icon={FiArrowRight} 
  iconPosition="right"
>
  Learn More
</Button>

// As link
<Button href="https://example.com" target="_blank">
  External Link
</Button>

// Loading state
<Button loading disabled>
  Sending...
</Button>
```

**Variants**: `primary`, `secondary`, `ghost`, `accent`, `danger`
**Sizes**: `sm`, `md`, `lg`, `xl`
**File**: `src/components/Button.jsx`

### 3. Container Component

Wrapper for consistent section layout and spacing.

```jsx
import Container from './components/Container'

<Container 
  size="lg"                 // 'sm', 'md', 'lg', 'xl', 'full'
  padding="lg"              // 'none', 'sm', 'md', 'lg', 'xl', 'section'
  background="primary"      // 'primary', 'secondary', 'tertiary', 'elevated', 'glass', 'gradient', 'accent'
  variant="default"         // 'default', 'bordered', 'card', 'glass', 'accent'
  animated={true}
>
  <SectionHeading title="My Section" />
  {/* Section content */}
</Container>
```

**File**: `src/components/Container.jsx`

### 4. Badge Component

Labels and status indicators.

```jsx
import Badge from './components/Badge'

// Basic badges
<Badge>Default</Badge>
<Badge variant="primary">Primary</Badge>
<Badge variant="success">Active</Badge>
<Badge variant="warning">Featured</Badge>
<Badge variant="error">Inactive</Badge>

// With icon
<Badge variant="accent" icon={FiStar}>
  Premium
</Badge>

// Different sizes
<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>
```

**Variants**: `default`, `primary`, `secondary`, `success`, `warning`, `error`, `accent`, `ghost`
**Sizes**: `sm`, `md`, `lg`
**File**: `src/components/Badge.jsx`

---

## 📐 LAYOUT UTILITIES

### Containers

```jsx
// Standard containers
<div className="container-max">        // max-w-7xl, centered
  {/* Full width with max constraint */}
</div>

<div className="container-lg">         // max-w-6xl
<div className="container-md">         // max-w-4xl
<div className="container-page">       // max-w-7xl (alternative)
```

### Sections

```jsx
// Section wrappers
<section className="section-padding">     // py-20 sm:py-24 lg:py-32
  
</section>

<section className="section-padding-sm">  // Smaller padding

</section>

<section className="section-wrapper">     // Includes overflow hidden for effects

</section>
```

### Grid Utilities

```jsx
// Auto-fit grids
<div className="grid-auto-fit">           // 1 col (mobile), 2 (tablet), 3 (desktop)
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<div className="grid-auto-fit-sm">        // 2 → 3 → 4 columns
  {items}
</div>

<div className="grid-auto-fit-lg">        // 1 → 2 columns
  {items}
</div>
```

### Flexbox Utilities

```jsx
<div className="flex-center">        // flex items-center justify-center
  Centered
</div>

<div className="flex-between">       // flex items-center justify-between
  Left <span>Right</span>
</div>

<div className="flex-col-center">    // flex flex-col items-center justify-center
  Centered column
</div>
```

---

## 🔘 BUTTON STYLES

### Classes-Only Buttons

```jsx
// Primary buttons
<button className="btn-primary">Primary</button>
<button className="btn-primary-lg">Large Primary</button>
<button className="btn-primary-sm">Small Primary</button>

// Secondary buttons
<button className="btn-secondary">Secondary</button>
<button className="btn-secondary-lg">Large Secondary</button>

// Ghost buttons
<button className="btn-ghost">Ghost</button>
<button className="btn-ghost-lg">Large Ghost</button>

// Button groups
<div className="btn-group">
  <button className="btn-primary">Save</button>
  <button className="btn-secondary">Cancel</button>
</div>
```

### Component Buttons

Use the `Button` component for consistency:

```jsx
<Button variant="primary" size="lg">
  Click Me
</Button>

<Button variant="secondary">
  Secondary
</Button>

<Button variant="ghost" size="sm">
  Ghost
</Button>
```

---

## 🃏 CARD STYLES

### Card Utilities

```jsx
// Basic card
<div className="card">
  {/* Card content */}
</div>

// Large card with more padding
<div className="card-lg">
  {/* Card content */}
</div>

// Elevated card with gradient
<div className="card-elevated">
  {/* Card content */}
</div>

// Glass morphism effect
<div className="card-glass">
  {/* Transparent card with blur */}
</div>

// Accent card
<div className="card-accent">
  {/* Card with yellow accent styling */}
</div>
```

### Card Features

All cards include:
- Hover effects (border and shadow changes)
- Smooth transitions
- Proper border styling
- Responsive padding

---

## ✨ PREMIUM EFFECTS

### Glow Effects

```jsx
// Add glow to any element
<div className="glow-accent">
  Subtle glow effect
</div>

<div className="glow-accent-lg">
  Large glow effect
</div>

<div className="glow-accent-xl">
  Extra large glow
</div>

// Animated glow
<div className="glow-animated">
  Pulsing glow
</div>
```

### Background Effects

The portfolio includes premium background effects using:

- **Animated gradients** - Subtle color shifts
- **Radial glows** - Golden accent glow spots that drift
- **Layered backgrounds** - Multiple pseudo-elements for depth

### Borders & Dividers

```jsx
// Accent border
<div className="border-2 border-accent">
  With accent border
</div>

// Dividers
<div className="divider"></div>              // Gradient divider
<div className="divider-accent"></div>       // Accent color divider

// Light accent border
<div className="border border-accent-light">
  With light accent
</div>
```

---

## 🎬 ANIMATIONS

### Entry Animations

```jsx
// Fade in from bottom
<div className="animate-fade-in-up">
  Content
</div>

// Fade in from top
<div className="animate-fade-in-down">
  Content
</div>

// Slide from left
<div className="animate-slide-in-left">
  Content
</div>

// Slide from right
<div className="animate-slide-in-right">
  Content
</div>

// Staggered entrance (with delays)
<div className="animate-entrance">First</div>
<div className="animate-entrance-delay-1">Second (0.1s delay)</div>
<div className="animate-entrance-delay-2">Third (0.2s delay)</div>
<div className="animate-entrance-delay-3">Fourth (0.3s delay)</div>
<div className="animate-entrance-delay-4">Fifth (0.4s delay)</div>
```

### Framer Motion Animations

```jsx
import { motion } from 'framer-motion'

// Hover lift effect
<motion.div 
  whileHover={{ y: -10 }}
  transition={{ duration: 0.3 }}
>
  Hover to lift
</motion.div>

// Scale on hover
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Clickable element
</motion.div>

// Staggered children
<motion.div
  variants={{
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }}
  initial="hidden"
  whileInView="visible"
>
  <motion.div variants={itemVariants}>Item 1</motion.div>
  <motion.div variants={itemVariants}>Item 2</motion.div>
</motion.div>
```

### Transition Utilities

```jsx
// Smooth transitions
<div className="transition-smooth">
  Smooth 300ms transition
</div>

// Fast transitions
<div className="transition-fast">
  Fast 150ms transition
</div>

// Slow transitions
<div className="transition-slow">
  Slow 500ms transition
</div>

// Hover effects
<div className="hover-lift">
  Lifts on hover
</div>

<div className="hover-scale">
  Scales on hover
</div>

<div className="hover-glow">
  Glows on hover
</div>
```

---

## 📐 TEXT UTILITIES

### Text Colors

```jsx
// Accent text
<p className="text-accent">Yellow text</p>
<p className="text-accent-hover">Changes on hover</p>

// Text variants
<p className="text-muted">Muted gray text</p>
<p className="text-faded">Faded gray text</p>

// Gradient text
<h2 className="text-gradient">Gradient heading</h2>
<h3 className="text-gradient-lg">Large gradient heading</h3>
```

### Responsive Text

```jsx
<h1 className="text-4xl sm:text-5xl lg:text-6xl">
  Responsive heading
</h1>

<p className="text-base sm:text-lg lg:text-xl">
  Responsive paragraph
</p>
```

---

## 🌐 RESPONSIVE UTILITIES

### Hide/Show Classes

```jsx
// Hidden on mobile, visible on desktop
<div className="hidden-mobile">
  Desktop only
</div>

// Visible on mobile, hidden on desktop
<div className="hidden-desktop">
  Mobile only
</div>
```

### Breakpoints

```
Mobile:    < 640px   (sm)
Tablet:    640px+    (md: 768px, lg: 1024px)
Desktop:   1024px+
```

---

## ✅ BEST PRACTICES

### 1. Use Components Over Classes

Good:
```jsx
<Button variant="primary">Click Me</Button>
<SectionHeading title="About" subtitle="Learn more" />
```

Avoid:
```jsx
<button className="btn-primary">Click Me</button>
```

### 2. Maintain Color Consistency

Use brand color variables:
```jsx
// Good
<div className="text-brand-accent">Hello</div>

// Avoid hardcoding
<div className="text-yellow-500">Hello</div>
```

### 3. Use Container Component for Sections

```jsx
// Good - Consistent spacing
<Container size="lg" padding="lg">
  <SectionHeading title="Skills" />
  {/* Content */}
</Container>

// Avoid
<div className="py-20 px-4 max-w-7xl">
  {/* Content */}
</div>
```

### 4. Leverage Framer Motion

```jsx
// Good - Smooth animations
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
>
  Animated content
</motion.div>

// Avoid - No animations
<div>Static content</div>
```

### 5. Responsive Design First

```jsx
// Good - Mobile first
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  Items
</div>

// Avoid
<div className="grid grid-cols-3">
  Items
</div>
```

### 6. Use Semantic HTML

```jsx
// Good
<section>
  <header>
    <h1>Title</h1>
  </header>
  <article>
    Content
  </article>
</section>

// Avoid
<div>
  <div><div>Title</div></div>
  <div>Content</div>
</div>
```

---

## 📚 QUICK REFERENCE

### Most Used Classes

```
Layout:
- container-max, container-lg, container-md
- section-padding, section-padding-sm
- grid-auto-fit, grid-auto-fit-lg

Typography:
- section-title, section-title-lg, section-title-sm
- section-subtitle, section-subtitle-lg
- text-gradient, text-gradient-lg

Buttons:
- btn-primary, btn-secondary, btn-ghost
- btn-primary-lg, btn-secondary-lg, btn-ghost-lg

Cards:
- card, card-lg, card-glass, card-accent

Effects:
- glow-accent, glow-accent-lg, glow-animated
- hover-lift, hover-scale, hover-glow

Colors:
- text-accent, text-muted, text-faded
- bg-brand-bg-primary, bg-brand-surface-raised
```

---

## 🎯 COMPONENT CHECKLISTS

### Using SectionHeading

- [ ] Set appropriate `title`
- [ ] Add `subtitle` if needed
- [ ] Choose correct `alignment`
- [ ] Set `variant` to 'primary' or 'gradient'
- [ ] Enable `animated` for page load effects

### Using Button

- [ ] Choose appropriate `variant`
- [ ] Set correct `size`
- [ ] Add `icon` if needed
- [ ] Include `onClick` handler
- [ ] Test `disabled` state
- [ ] Test `loading` state

### Using Container

- [ ] Choose appropriate `size`
- [ ] Set `padding` level
- [ ] Select `background` type
- [ ] Choose `variant` for styling
- [ ] Enable `animated` for scroll effects

---

## 🎨 Color Picker Quick Guide

| Use Case | Color | Class |
|----------|-------|-------|
| Headings | #ffffff | text-white |
| Body text | #e2e8f0 | text-brand-text-secondary |
| Muted text | #94a3b8 | text-brand-text-muted |
| Backgrounds | #0f172a | bg-brand-bg-primary |
| Cards | #253550 | bg-brand-surface-raised |
| Buttons | #fbbf24 | bg-brand-accent |
| Accents | #fbbf24 | text-brand-accent |
| Borders | #334155 | border-brand-border |

---

**This design system ensures consistency, accessibility, and a premium feel throughout the portfolio. Use these components and utilities as building blocks for all sections!**
