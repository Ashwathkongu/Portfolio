# Premium Portfolio Website

A modern, responsive, and animated personal portfolio website built with React, Vite, Tailwind CSS, React Icons, and Framer Motion.

## 🎨 Features

- **Modern Design**: Dark theme with yellow accent color for a premium look
- **Responsive Layout**: Fully responsive on mobile, tablet, and desktop
- **Smooth Animations**: Smooth scrolling and subtle Framer Motion animations
- **Reusable Components**: Well-organized, modular React components
- **Fast Performance**: Built with Vite for optimized build and development
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **React Icons**: Beautiful icon library integration
- **SEO Ready**: Semantic HTML structure

## 🚀 Quick Start

### Installation

1. **Clone or navigate to the project directory**:
   ```bash
   cd d:\Portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   - The app will automatically open at `http://localhost:5173/`
   - If not, manually navigate to that URL

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
Portfolio/
├── index.html                 # Main HTML file
├── package.json               # Dependencies and scripts
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
├── .gitignore                # Git ignore rules
│
├── src/
│   ├── index.css             # Global styles and Tailwind directives
│   ├── main.jsx              # React entry point
│   ├── App.jsx               # Main App component
│   │
│   ├── components/
│   │   ├── Navbar.jsx        # Navigation header with mobile menu
│   │   └── Footer.jsx        # Footer component
│   │
│   └── sections/
│       ├── Home.jsx          # Hero section
│       ├── About.jsx         # About section with stats
│       ├── Education.jsx     # Education timeline
│       ├── Skills.jsx        # Skills and technologies with proficiency
│       ├── Experience.jsx    # Work experience timeline
│       ├── Projects.jsx      # Featured projects showcase
│       ├── Achievements.jsx  # Awards and achievements
│       └── Contact.jsx       # Contact form and info
```

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling framework
- **Framer Motion** - Animation library
- **React Icons** - Icon components
- **PostCSS & Autoprefixer** - CSS processing

## 🎯 Customization

### 1. Update Personal Information

Edit the following files to add your information:

**Home Section** (`src/sections/Home.jsx`):
```javascript
<span className="text-yellow-500">Your Name</span>
```

**Contact Section** (`src/sections/Contact.jsx`):
- Update email, phone, and location
- Customize social media links

**Footer** (`src/components/Footer.jsx`):
- Update current year and name

### 2. Modify Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  dark: {
    primary: '#0f172a',     // Main background
    secondary: '#1e293b',   // Secondary background
    tertiary: '#334155',    // Tertiary background
  },
  accent: '#fbbf24',        // Yellow accent color
}
```

### 3. Add Your Content

**Projects Section** (`src/sections/Projects.jsx`):
- Replace project titles, descriptions, and images
- Update links to your GitHub and live demos

**Experience Section** (`src/sections/Experience.jsx`):
- Add your work experiences
- Include role, company, duration, and achievements

**Education Section** (`src/sections/Education.jsx`):
- Add your educational background
- Include degree, institution, and highlights

**Skills Section** (`src/sections/Skills.jsx`):
- Update skill categories and proficiency levels

**Achievements Section** (`src/sections/Achievements.jsx`):
- Add your awards and recognitions

### 4. Connect Social Media

Update social media links in:
- `Navbar.jsx` - Navigation bar icons
- `Home.jsx` - Hero section social links
- `Contact.jsx` - Contact page social links
- `Footer.jsx` - Footer social links

## 📱 Responsive Breakpoints

The design uses Tailwind's responsive prefixes:
- **`sm`** (640px) - Small devices
- **`md`** (768px) - Tablets
- **`lg`** (1024px) - Desktops
- **`xl`** (1280px) - Large screens

## 🎨 Theme Customization

### Global Styles

Modify `src/index.css` to:
- Change scrollbar appearance
- Add custom animations
- Define utility classes
- Import custom fonts

### Component Classes

Three main utility classes are available:

```css
.container-max      /* Max-width container with padding */
.section-padding    /* Standard section padding */
.section-title      /* Standard section heading styles */
```

## ✨ Key Features Explained

### 1. Smooth Scrolling

The Navbar includes smooth scroll-to-section functionality:
```javascript
document.querySelector(href).scrollIntoView({ behavior: 'smooth' })
```

### 2. Mobile Responsive Navigation

The Navbar includes:
- Desktop menu with hover effects
- Mobile hamburger menu with animations
- Smooth transitions between states

### 3. Framer Motion Animations

All sections use Framer Motion for:
- Staggered animations on entry
- Hover effects on cards
- Smooth transitions
- Floating elements

### 4. Form Handling

The Contact section includes:
- Form validation
- Loading states
- Responsive input fields
- Accessible form structure

## 🔧 Performance Optimization

- **Code Splitting**: Components loaded on-demand
- **Tree Shaking**: Unused code removed in production
- **CSS Purging**: Only used Tailwind classes included
- **Image Optimization**: Use optimized image formats
- **Lazy Loading**: Implement lazy loading for images

## 📦 Building & Deployment

### Environment Variables

Create a `.env.local` file for environment-specific settings (if needed):

```
VITE_API_URL=https://api.example.com
```

### Deploy to Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Vercel automatically deploys on push

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drop the `dist/` folder into Netlify
3. Or connect your GitHub repository for auto-deployment

### Deploy to GitHub Pages

1. Update `vite.config.js`:
   ```javascript
   export default {
     base: '/your-repo-name/',
   }
   ```

2. Build and deploy:
   ```bash
   npm run build
   npm run deploy
   ```

## 🐛 Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 5174
```

### Clear Node Modules
```bash
rm -r node_modules
npm install
```

### Build Fails
```bash
npm run build -- --debug
```

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)

## 📝 Notes

- Update placeholder content with your actual information
- Replace placeholder images with your project screenshots
- Add your social media links and contact information
- Test on multiple devices before deployment
- Optimize images for faster loading

## 📄 License

This project is free to use and modify for personal portfolios.

---

**Built with ❤️ using React, Vite, and Tailwind CSS**
