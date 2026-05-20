# Latish Charpe — Portfolio Website

> **Aspiring Data Analyst | AI & Data Science Student**

A premium, modern portfolio website built with React, Tailwind CSS v4, and Framer Motion — designed with a dark analytics-dashboard aesthetic, elegant glassmorphism cards, and smooth animations.

---

## 🚀 Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** | UI Framework |
| **Tailwind CSS v4** | Utility-first styling (via `@tailwindcss/vite`) |
| **Framer Motion** | Animations & transitions |
| **Lucide React** | Icon library |
| **Vite** | Build tool & dev server |

---

## 📁 Folder Structure

```
Portfolio/
├── public/
│   ├── favicon.svg           # Custom LC gradient favicon
│   └── resume.pdf            # ← Place your resume here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Sticky transparent navbar
│   │   ├── Hero.jsx          # Hero with resume/GitHub/LinkedIn buttons
│   │   ├── About.jsx         # Bio + education cards
│   │   ├── Skills.jsx        # Skills grid (no percentages)
│   │   ├── Projects.jsx      # Projects with featured IPL dashboard
│   │   ├── Certifications.jsx# 6 certification cards
│   │   ├── Achievements.jsx  # State-level achievement card
│   │   ├── Contact.jsx       # Contact form + links
│   │   └── Footer.jsx        # Footer with social icons
│   ├── App.jsx               # Root component
│   ├── main.jsx              # React entry point
│   └── index.css             # Global CSS + Tailwind import
├── index.html                # HTML with SEO meta tags
├── vite.config.js            # Vite + Tailwind plugin config
├── package.json
└── README.md
```

---

## ⚙️ Setup Instructions

### 1. Navigate to project directory
```bash
cd Portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Add your Resume
Place your `resume.pdf` file inside the `public/` folder:
```
public/resume.pdf
```

### 4. Start development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🔧 Customization

| What to change | Where |
|---|---|
| GitHub / LinkedIn links | `Hero.jsx`, `Footer.jsx`, `Contact.jsx` |
| Email address | `Contact.jsx` |
| Project details | `Projects.jsx` (title, description, tech, GitHub URL) |
| Certifications | `Certifications.jsx` |
| About bio | `About.jsx` |

---

## 📦 Build for Production

```bash
npm run build
```

This generates a `dist/` folder ready for deployment.

---

## 🌐 Vercel Deployment

### Option 1: Vercel CLI (Recommended)
```bash
npm install -g vercel
vercel
```
Follow the prompts. Vercel auto-detects Vite and deploys correctly.

### Option 2: GitHub + Vercel Dashboard
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repository
4. Leave build settings as default (Vite auto-detected)
5. Click **Deploy** ✅

### Option 3: Manual via Vercel Dashboard
1. Run `npm run build`
2. Go to Vercel → **New Project** → **Browse** → Upload `dist/` folder

> **Important:** Add `resume.pdf` to `public/` before building — it will be included in the deployment automatically.

---

## ✅ Resume Button

The Resume button in the Hero section opens `public/resume.pdf`:
```jsx
<a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
  Resume
</a>
```
Just drop your PDF into `public/resume.pdf` and it works out of the box.

---

## 🎨 Design Tokens

Edit CSS variables in `src/index.css` to customize the color scheme:

```css
:root {
  --bg-primary: #080c14;         /* Main background */
  --accent-blue: #5b8dee;        /* Primary accent */
  --accent-purple: #9b7fe8;      /* Secondary accent */
  --text-primary: #e8ecf4;       /* Main text */
  --text-secondary: #8b96b0;     /* Muted text */
}
```

---

## 📄 License

MIT — Free to use and modify for personal portfolio use.

---

Made with ❤️ by **Latish Charpe**
