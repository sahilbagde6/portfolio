# Sahil Bagde — Portfolio Website

A modern, minimal, and professional portfolio landing page built with React, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠 Tech Stack

- **React 18** — UI library
- **Tailwind CSS 3** — Utility-first CSS
- **Framer Motion** — Animations
- **Vite** — Build tool
- **React Icons** — Icon library

## 📁 Project Structure

```
sahil-portfolio/
├── public/
│   ├── hero-image.jpg         # Hero section portrait
│   └── vite.svg               # Favicon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Navigation bar
│   │   ├── Hero.jsx           # Hero/landing section
│   │   ├── About.jsx          # About me section
│   │   ├── Skills.jsx         # Skills & certifications
│   │   ├── Projects.jsx       # Project showcase
│   │   ├── Experience.jsx     # Timeline/experience
│   │   ├── Contact.jsx        # Contact form & info
│   │   ├── Footer.jsx         # Footer
│   │   └── ChatBubble.jsx     # Floating chat widget
│   ├── App.jsx                # Root component
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── index.html                 # HTML template
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## ✨ Features

- Dark theme with red accent color
- Split-screen hero with B&W image effect
- Glassmorphism floating chat bubble
- Smooth scroll-triggered animations
- Responsive design (mobile-first)
- Timeline for experience/education
- Skill bars with animated progress
- Contact form with social links

## 📝 Customization

- Replace `public/hero-image.jpg` with your portrait photo
- Edit component files in `src/components/` to update content
- Modify `tailwind.config.js` for color/font changes

## 📦 Deployment

Build the project and deploy the `dist/` folder to any static hosting:

```bash
npm run build
```

Deploy to: Vercel, Netlify, GitHub Pages, etc.

---
Built with ❤️ by Sahil Bagde
