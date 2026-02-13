# ATULYAM Troubleshooting Guide

## Common Issues and Solutions

### 1. Blank Page / Hero Section Not Displaying

**Problem:** Browser shows blank page at localhost:5173/5174

**Causes:**
- Invalid Tailwind CSS class names (`bg-linear-to-*` instead of `bg-gradient-to-*`)
- Missing React imports for JSX type checking
- Uninstalled TypeScript type packages (@types/react)

**Solutions:**
```bash
# Install all dependencies
npm install --legacy-peer-deps

# Clear Vite cache and restart dev server
rm -r node_modules/.vite
npm run dev
```

### 2. JSX Compilation Errors

**Error:** "Cannot use JSX unless the '--jsx' flag is provided"

**Cause:** React namespace not imported in TypeScript files

**Solution:**
```typescript
// Add React import to .tsx files
import React, { useEffect, useRef, FC } from "react";
```

### 3. Missing Type Definitions

**Error:** "Could not find a declaration file for module 'react'"

**Cause:** @types/react not installed

**Solution:**
```bash
npm install --save-dev @types/react @types/react-dom
```

### 4. Tailwind CSS Not Loading

**Problem:** Classes like `bg-gradient-to-b` not applying styles

**Cause:** Incorrect class names in JSX

**Solution:**
- Use `bg-gradient-to-b` (not `bg-linear-to-b`)
- Use `bg-gradient-to-r` (not `bg-linear-to-r`)
- Verify tailwind.config.js includes all template paths
- Check that `@import "tailwindcss"` is in src/styles/index.css

### 5. Port Already in Use

**Error:** "Port 5173 is in use"

**Solution:**
```bash
# Dev server will automatically use next available port (5174, 5175, etc.)
# Or kill the existing process:
# On Windows
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Or just use npm run dev - Vite handles this automatically
```

## Key Files to Check

- `tsconfig.json` - Verify `"jsx": "react-jsx"` is set
- `vite.config.ts` - Ensure React plugin is properly configured
- `tailwind.config.js` - Check content paths include all .tsx files
- `src/styles/index.css` - Verify Tailwind directives are imported
- Component files - Ensure React is imported from "react"

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Audit dependencies
npm audit

# Fix vulnerabilities
npm audit fix --force
```

## Performance Tips

1. Use React DevTools to track render performance
2. Check Vite dev server terminal for build times
3. Monitor memory usage during development
4. Clear browser cache if styles don't update
5. Restart dev server if module resolution issues occur

## Git Commands

```bash
# View commit history
git log --oneline -10

# Check file changes
git diff src/components/Hero.tsx

# Restore file to last commit
git restore src/components/Hero.tsx

# Stage and commit changes
git add .
git commit -m "descriptive message"
```

## Environment Info

- **Node.js**: Required v16+
- **npm**: Required v7+ (for peer dependencies)
- **Browser**: Modern browser with ES2020 support
- **OS**: Windows/macOS/Linux

## Need Help?

1. Check terminal output for error messages
2. Clear node_modules and reinstall: `rm -r node_modules && npm install --legacy-peer-deps`
3. Check that all .tsx files have proper imports
4. Verify all TypeScript type definitions are installed
5. Ensure Vite dev server is running on correct port
