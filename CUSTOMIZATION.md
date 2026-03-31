# Customization Guide

This guide will walk you through customizing your portfolio to make it uniquely yours.

## 🎯 Content Updates

### 1. Hero Section (Home)

**File**: `src/sections/Home.jsx`

Update the following:

```javascript
// Your name
<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mt-2">
  Hi, I'm <span className="text-yellow-500">Your Name</span>
</h1>

// Your headline
<p className="text-xl text-gray-400 leading-relaxed max-w-xl">
  A passionate college student developer crafting beautiful, interactive web experiences.
  Specialized in React, modern web technologies, and full-stack development.
</p>

// Update button links
<motion.button className="btn-primary flex items-center gap-2 group">
  View My Work
</motion.button>
```

### 2. About Section

**File**: `src/sections/About.jsx`

Replace the placeholder text with your bio:

```javascript
<p className="text-lg text-gray-400 leading-relaxed">
  I'm a passionate college student developer with a keen interest in building modern web applications.
  [Add your bio here]
</p>
```

Update the highlight points:

```javascript
{[
  'Full-stack web developer with expertise in React, Node.js, and MongoDB',
  'Passionate about creating responsive and user-friendly interfaces',
  'Experience with Agile development and version control (Git)',
  'Strong problem-solving skills and attention to detail',
]}
```

### 3. Skills Section

**File**: `src/sections/Skills.jsx`

```javascript
const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: SiReact, color: '#61dafb' },
      { name: 'Your Skill', icon: SiTailwindcss, color: '#38bdf8' },
      // Add more skills
    ],
  },
  // Add more categories
]
```

Update proficiency levels:

```javascript
{ skill: 'Your Skill', level: 90 }
```

### 4. Experience Section

**File**: `src/sections/Experience.jsx`

Add your work experiences:

```javascript
const experiences = [
  {
    role: 'Your Job Title',
    company: 'Company Name',
    location: 'City, Country',
    duration: 'Month Year - Present',
    description: 'Your job description...',
    achievements: [
      'Achievement 1',
      'Achievement 2',
      'Achievement 3',
    ],
  },
  // Add more experiences
]
```

### 5. Education Section

**File**: `src/sections/Education.jsx`

Update your education:

```javascript
const education = [
  {
    degree: 'Your Degree',
    institution: 'Your University',
    period: '2021 - 2025',
    gpa: '3.85/4.0',
    highlights: [
      'Highlight 1',
      'Highlight 2',
      'Highlight 3',
    ],
  },
]
```

### 6. Projects Section

**File**: `src/sections/Projects.jsx`

Update your projects:

```javascript
const projects = [
  {
    title: 'Project Title',
    description: 'Project description...',
    technologies: ['React', 'Node.js', 'MongoDB'],
    icons: [SiReact, SiNodedotjs],
    image: 'https://your-image-url.com',
    liveLink: 'https://your-project.com',
    githubLink: 'https://github.com/username/project',
    category: 'Full-Stack',
  },
]
```

### 7. Achievements Section

**File**: `src/sections/Achievements.jsx`

Add your awards:

```javascript
const achievements = [
  {
    icon: FiAward,
    title: 'Achievement Title',
    description: 'Achievement description...',
    date: '2023',
  },
]
```

### 8. Contact Section

**File**: `src/sections/Contact.jsx`

Update contact information:

```javascript
const contactInfo = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'your.email@example.com',
    link: 'mailto:your.email@example.com',
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    link: 'tel:+15551234567',
  },
]
```

Update social links:

```javascript
{[
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile' },
  { name: 'GitHub', url: 'https://github.com/yourprofile' },
  // Add more
]}
```

## 🎨 Design Customization

### 1. Color Scheme

**File**: `tailwind.config.js`

```javascript
theme: {
  extend: {
    colors: {
      dark: {
        primary: '#0f172a',     // Change main background
        secondary: '#1e293b',   // Change secondary background
        tertiary: '#334155',    // Change tertiary background
      },
      accent: '#fbbf24',        // Change accent color
    },
  },
}
```

**Preset Color Schemes**:

**Modern Blue**:
```javascript
colors: {
  dark: {
    primary: '#0a0e27',
    secondary: '#1a1f45',
    tertiary: '#2a2f5f',
  },
  accent: '#3b82f6',  // Blue
}
```

**Purple Vibes**:
```javascript
colors: {
  dark: {
    primary: '#1a0033',
    secondary: '#330066',
    tertiary: '#4d0099',
  },
  accent: '#b060ff',  // Purple
}
```

**Green Tech**:
```javascript
colors: {
  dark: {
    primary: '#0f1f1f',
    secondary: '#1a3a3a',
    tertiary: '#255555',
  },
  accent: '#10b981',  // Green
}
```

### 2. Typography

**File**: `tailwind.config.js`

```javascript
fontFamily: {
  sans: ['Your Font', 'system-ui', 'sans-serif'],
},
```

**Add Google Fonts** (`src/index.css`):

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Roboto+Mono:wght@400;600&display=swap');
```

### 3. Animations

Modify animation speed in components:

```javascript
// Slower animations
transition={{ duration: 1 }}

// Faster animations
transition={{ duration: 0.3 }}

// Add delay to staggered items
transition={{ delay: index * 0.15 }}
```

### 4. Custom CSS

**File**: `src/index.css`

Add custom animations:

```css
@keyframes customAnimation {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-custom {
  animation: customAnimation 1s ease-out;
}
```

## 🖼️ Images & Media

### 1. Add Project Images

Replace placeholder image URLs:

```javascript
image: 'https://via.placeholder.com/500x300?text=E-Commerce',
```

With your actual images:

```javascript
image: '/images/my-project.jpg',
```

Place images in `public/images/` folder.

### 2. Add Profile Picture

Add to Home section:

```javascript
<img 
  src="/images/profile.jpg" 
  alt="Profile" 
  className="w-64 h-64 rounded-full border-4 border-yellow-500"
/>
```

## 🔗 External Links

### 1. Navigation Links

Currently uses smooth scroll to sections. Update in `Navbar.jsx`:

```javascript
const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Blog', href: 'https://yourblog.com' },
  // Mix internal and external links
]
```

### 2. Social Media Links

Update in multiple files:

**Navbar.jsx**, **Home.jsx**, **Contact.jsx**, **Footer.jsx**:

```javascript
<a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
  GitHub
</a>
```

### 3. Resume/CV Download

Update in Home section:

```javascript
<a 
  href="/resume.pdf" 
  download 
  className="btn-secondary"
>
  Download CV
</a>
```

Place your resume in the `public/` folder.

## 📧 Contact Form

The contact form currently logs to console. To send emails, integrate with a service:

### Option 1: Formspree

```javascript
const handleSubmit = async (e) => {
  e.preventDefault()
  setIsSubmitting(true)
  
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })
  
  if (response.ok) {
    // Success handling
  }
  setIsSubmitting(false)
}
```

### Option 2: EmailJS

```bash
npm install @emailjs/browser
```

Then implement:

```javascript
import emailjs from '@emailjs/browser'

const handleSubmit = async (e) => {
  e.preventDefault()
  
  await emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    formData,
    'YOUR_PUBLIC_KEY'
  )
}
```

## 🔍 SEO Optimization

### 1. Meta Tags

**File**: `index.html`

```html
<meta name="description" content="Your portfolio description">
<meta name="keywords" content="portfolio, developer, react">
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Your portfolio description">
<meta property="og:image" content="/og-image.jpg">
```

### 2. Page Title

```html
<title>Your Name | Portfolio</title>
```

### 3. Structured Data

Add Schema.org JSON-LD in `index.html`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Your Name",
  "url": "https://yourportfolio.com",
  "jobTitle": "Developer"
}
</script>
```

## 🚀 Performance Tweaks

### 1. Image Optimization

```javascript
// Use WebP with fallback
<picture>
  <source srcSet="/image.webp" type="image/webp">
  <img src="/image.jpg" alt="description">
</picture>
```

### 2. Lazy Loading

Add to images:

```javascript
<img 
  src="/image.jpg" 
  alt="description"
  loading="lazy"
/>
```

### 3. Code Splitting

Already optimized with Vite. Monitor in:

```bash
npm run build
```

## 📱 Mobile Customization

Adjust breakpoints in components:

```javascript
// sm: 640px
// md: 768px
// lg: 1024px
// xl: 1280px

<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>
```

## 🎯 Additional Tips

1. **Backup Original**: Keep a copy of original files before customizing
2. **Test Responsiveness**: Use DevTools to test on different devices
3. **Browser Testing**: Test on Chrome, Firefox, Safari, Edge
4. **Performance**: Run Lighthouse audits regularly
5. **Analytics**: Add Google Analytics if needed
6. **Accessibility**: Use WAVE extension to check accessibility
7. **Version Control**: Commit changes frequently with meaningful messages

---

For more help, refer to the component comments in the code!
