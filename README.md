# ATULYAM – Haru no Stars 🌸

A cinematic, high-performance 3D landing page website for a cultural fest celebrating new beginnings, blooming cultures, and creative brilliance.

**Theme**: Spring night festival with sakura blossoms, glowing lights, and interactive 3D elements inspired by Japanese aesthetics.

## ✨ Features

### 🎬 Hero Section – 3D Cinematic Experience

- **Dark indigo night sky gradient background** with multiple depth layers
- **2000+ dynamic stars** with realistic brightness variation
- **3D falling sakura petals** (500+ particles) with physics-based movement
  - Random drift and rotation
  - Wind sway effect that increases on scroll
  - Position reset when off-screen
  - Different sizes and speeds
- **Floating glow particles** (300+ golden particles) with ambient animations
- **Soft bloom/glow lighting** with multiple light sources
- **Camera parallax movement** triggered by scroll events
- **Subtle camera drift** for cinematic feel

### 🌸 Advanced Sakura Effects

- **500+ 3D particles** falling continuously
- **Physics-based animation** with velocity vectors
- **Wind sway motion** that intensifies as you scroll deeper
- **Automatic recycling** of petals when they exit viewport
- **Scroll-sensitive behavior** that increases petal speed/density deeper in page
- **Depth layering** between foreground petals and background stars

### 🎨 Engaging Hero Content

- **Gradient text** (Gold → Sakura Pink → Gold) with glow effects
- **"ATULYAM" title** with gentle floating animation
- **"Haru no Stars 🌸" subtitle** with subtitle animation
- **Inspirational tagline**: "Where Cultures Bloom & Stars Shine"
- **Glowing CTA button** with hover animation and scale effects
- **Scroll indicator arrow** (bouncing animation)

### 📜 Scroll Experience

- **Smooth scroll behavior** with LERP-based easing
- **ScrollTrigger animations** for section reveals
- **Camera movement through 3D layers** as you scroll
- **Sakura density increases** deeper into the page
- **Parallax depth** between foreground and background elements
- **Fade-in animations** for content sections with ScrollTrigger

### 🎯 Additional Sections

- **Culture & Creativity Section** – Sticky positioned with compelling copy
- **Call-to-Action Section** – "Ready to Bloom?" with register button
- Both sections feature smooth scroll-triggered animations

## 🛠️ Tech Stack

- **React 18.3.1** – UI framework
- **Vite 5.0.11** – Lightning-fast build tool & dev server
- **Three.js 0.157.0** – 3D graphics library
- **@react-three/fiber 8.15.13** – React renderer for Three.js
- **@react-three/drei 9.88.8** – Useful Three.js utilities
- **GSAP 3.12.2** – Animation & scroll timeline library
- **Tailwind CSS 4** – Utility-first styling
- **PostCSS 4** – CSS transformation


## 📁 Project Structure

```
atulyam/
├── src/
│   ├── app/
│   │   ├── globals.css          # Legacy files
│   │   ├── layout.js            # (will be replaced in future)
│   │   └── page.js
│   ├── components/
│   │   ├── Hero.jsx             # Main hero container
│   │   ├── Scene.jsx            # 3D Three.js scene components
│   │   └── HeroContent.jsx      # Hero text & button overlay
│   ├── styles/
│   │   └── index.css            # Global styles + Tailwind imports
│   ├── App.jsx                  # Main app component with sections
│   └── main.jsx                 # React entry point
├── public/                      # Static assets
├── index.html                   # HTML entry point
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.mjs          # PostCSS configuration
├── eslint.config.mjs           # ESLint configuration
└── package.json                # Dependencies & scripts
```

## 🎮 Component Details

### Hero.jsx

Container component that:

- Renders the Canvas from @react-three/fiber
- Mounts the 3D Scene component
- Overlays HeroContent for text and buttons
- Handles responsive sizing

### Scene.jsx

3D scene with four sub-components:

**Stars()**

- 2000 procedurally generated stars
- Slow rotation for cinematic effect
- Brightness variation using vertex colors

**FloatingParticles()**

- 300 golden glow particles
- Continuous floating movement
- Ambient animation using sine/cosine waves

**SakuraPetals()**

- 500 falling cherry blossom petals
- Physics-based movement with velocity vectors
- Scroll-responsive behavior
- Wind sway that intensifies on scroll
- Auto-reset when off-screen

**Lighting**

- Ambient light (0.3 intensity)
- Gold point light (foreground)
- Pink point light (accent)

### HeroContent.jsx

Overlay component featuring:

- GSAP animation timeline for intro
- Floating animations on title & subtitle
- Hover effects on button with glowing effects
- Scroll indicator arrow

## ⚙️ Animation Systems

### GSAP Animations

**Intro Timeline**

- Hero title fades in and floats up
- Subtitle follows with slight delay
- Tagline appears with delicate animation
- Button scales in with elastic easing
- All use `ease: 'power3.out'` for smooth acceleration

**Continuous Animations**

- Title continuously floats (4s duration)
- Subtitle gently floats (5s duration)
- Button has pulsing glow effect (2s duration)

**Scroll Animations**

- Content fades in when scrolled into view
- ScrollTrigger animations on `.fade-in` elements
- Start point: "top 80%" for staggered reveals

### Three.js Animations

**Star Animation**

- Slow Z-axis rotation (0.00005 rad/frame)
- Slow Y-axis rotation (0.00003 rad/frame)

**Camera Movement**

- Y-position tracks scroll (parallax effect)
- Z-position increases on deeper scroll (depth effect)
- Subtle X-axis drift for cinematic feel

## 🎨 Color Palette

```css
--sakura-pink: #ff69b4 --sakura-light: #ffb7d5 --night-indigo: #0a0e27
  --night-dark: #050812 --gold: #ffd700 --gold-light: #ffed4e;
```

## 🔧 Customization

### Change Hero Title

Edit `src/components/HeroContent.jsx`:

```jsx
<h1>Your Title Here</h1>
```

### Adjust Sakura Density

In `src/components/Scene.jsx`, change:

```jsx
const sakuraCount = 500; // Increase for more petals
```

### Modify Colors

Update `tailwind.config.js`:

```js
colors: { 'sakura-pink': '#YourColor' }
```

## 🚀 Performance Optimizations

- Instanced rendering for particle systems
- Requestanimationframe for smooth 60fps
- Lazy geometry creation with useMemo
- Viewport recycling for sakura particles
- Minimal draw calls for all particles
- Optimized pixel ratio (max 2x)
- Vite code splitting for fast load
- Tree-shaking of unused Three.js modules

## 📱 Responsive Design

- Mobile-first Tailwind CSS approach
- Responsive text scaling
- Touch-friendly button sizes
- Auto-resizing canvas
- Smooth scrolling on all devices

## 🌐 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 15+
- Requires WebGL support

## 📝 License

This project is open source and available under the MIT License.

---

**Built with ❤️ for ATULYAM – Where Cultures Bloom & Stars Shine** 🌸✨

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
