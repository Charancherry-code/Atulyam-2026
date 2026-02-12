# ATULYAM – Haru no Stars 🌸

A beautiful, elegant landing page for a cultural fest celebrating new beginnings, blooming cultures, and creative brilliance.

**Theme**: Spring celebrations with sakura aesthetics inspired by Japanese culture.

## ✨ Features

### 🎬 Hero Section

- **Elegant gradient typography** with ATULYAM branding
- **"Haru no Stars 🌸"** subtitle with Japanese spring theme
- **Floating animations** powered by GSAP
- **Animated background elements** with sakura-inspired colors
- **Smooth scroll indicator** to guide users

### 🌸 About ATULYAM Section

- **Cultural storytelling** explaining the "Haru no Stars" theme
- **Three feature cards** highlighting:
  - Cultural Performances 🌸
  - Creative Excellence ⭐
  - Artistic Innovation 🎨
- **Scroll-triggered animations** for engaging reveals
- **Call-to-action button** for participation

### 🎨 Design Elements

- **Sakura pink and gold color palette**
- **Gradient text effects** with custom colors
- **Smooth GSAP animations** for modern feel
- **Responsive design** for all screen sizes
- **Japanese-inspired aesthetic** throughout

## 🛠️ Tech Stack

- **React 18.3.1** – Modern UI framework
- **Vite 5.0.11** – Fast build tool & dev server
- **GSAP 3.12.2** – Professional animation library
- **Tailwind CSS 4** – Utility-first styling

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ (recommended 18+)
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd atulyam

# Install dependencies
npm install

# If you encounter peer dependency warnings, use:
npm install --legacy-peer-deps
```

### Development

```bash
# Start development server (opens at http://localhost:5173)
npm run dev

# The server will auto-reload on file changes
# Access at: http://localhost:5173
```

### Production Build

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

## 📁 Project Structure

```
atulyam/
├── src/
│   ├── components/
│   │   ├── Hero.jsx       # Hero section with branding
│   │   └── About.jsx      # About ATULYAM section
│   ├── styles/
│   │   └── index.css      # Global styles
│   ├── App.jsx            # Main app component
│   └── main.jsx           # React entry point
├── public/                # Static assets
├── index.html             # HTML entry point
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS config
└── package.json          # Dependencies
```

## 🎨 Color Palette

```css
--sakura-pink: #ff69b4 --sakura-light: #ffb7d5 --night-indigo: #0a0e27
  --night-dark: #050812 --gold: #ffd700 --gold-light: #ffed4e;
```

## ⚙️ Animations

### GSAP Animations

- **Hero title** fades in with float effect
- **Subtitle** appears with staggered timing
- **About section** reveals on scroll using ScrollTrigger
- **Feature cards** animate sequentially

## 📱 Responsive Design

- Mobile-first approach with Tailwind CSS
- Responsive text scaling (text-6xl → text-9xl)
- Touch-friendly buttons and spacing
- Optimized for all devices

## 🌐 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 15+

## 📝 License

MIT License - Open source and free to use.

---

**Built with ❤️ for ATULYAM – Where Cultures Bloom & Stars Shine** 🌸✨
