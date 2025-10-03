# 🎮 League of Legends CV - Aymen Khanfir

An immersive, interactive CV website themed after League of Legends for **Aymen Khanfir**, a Full-Stack Developer and LoL enthusiast. Experience portfolio browsing like never before - navigate through abilities, skins, match history, and more in a game-inspired interface!

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://ghassen-elkamel.github.io/lol-cv/)
[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8)](https://tailwindcss.com/)

## ✨ Features

### 🎯 Core Game Elements
- **Champion Select Screen** - Hero section with animated champion portrait
- **Loading Screen** - Authentic LoL loading animation
- **HUD Elements** - Health/Mana bars, Gold counter, Minimap, Mastery badge
- **Abilities System** - QWER abilities showcasing skills and technologies
- **Skins Carousel** - Work experience as champion skins
- **Match History** - Project showcase in match history format
- **Runes & Masteries** - Skills displayed as rune trees
- **Victory Screen** - Achievement when scrolling to the end

### 🎨 Visual Effects
- **Hexagonal Patterns** - Authentic LoL design elements
- **Custom Cursor** - Context-aware game cursor (changes on hover)
- **Smooth Animations** - Framer Motion powered transitions
- **Gradient Effects** - Gold and hextech blue themed gradients
- **Loading Progress Bar** - Scroll progress indicator
- **Level-Up Notifications** - Animated achievement popups

### 🎁 Easter Eggs
Discover hidden interactions throughout the site:
- **Konami Code**: `↑ ↑ ↓ ↓ ← → ← → B A` - Rainbow animation
- **QWER Combo**: Type `QWER` quickly - Ultimate activation
- **Pentakill**: Click champion portrait 5 times - Epic celebration
- **Dance**: `Ctrl + D` - Dance emote
- **Recall**: `Ctrl + B` - Recall to base
- **GG**: Type `GG` - Good game message
- **Minimap Ping**: Click minimap - Random LoL pings
- **Shop**: Click gold counter - Shop access message

## 🚀 Tech Stack

- **React 19** - Latest React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Latest utility-first CSS
- **Framer Motion** - Smooth animations
- **Vite** - Lightning-fast build tool
- **Shadcn/ui** - Beautiful component library

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/ghassen-elkamel/lol-cv.git
cd lol-cv

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎮 Development

```bash
# Start dev server (with hot reload)
npm run dev

# Type check
npm run type-check

# Lint code
npm run lint

# Build
npm run build
```

## 📁 Project Structure

```
lol-cv/
├── src/
│   ├── components/        # React components
│   │   ├── AbilitiesGrid.tsx
│   │   ├── ChampionPortrait.tsx
│   │   ├── EasterEggs.tsx
│   │   ├── HeroSection.tsx
│   │   ├── LoadingScreen.tsx
│   │   ├── LoLCursor.tsx
│   │   └── ...
│   ├── lib/              # Utilities and data
│   │   ├── animations.ts
│   │   ├── data.ts
│   │   └── utils.ts
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── public/               # Static assets
└── dist/                 # Production build
```

## 🎨 Customization

### Update Profile Information

Edit `src/lib/data.ts` to customize:
- Personal information
- Abilities (skills)
- Work experience (skins)
- Projects (match history)
- Skills (runes)
- Education
- Contact details

### Add Profile Picture

1. Place your image in `public/profile.jpg`
2. Recommended: Square image, 500x500px or larger
3. The image will be displayed in a hexagonal frame

### Customize Colors

Edit `tailwind.config.js` to modify the color scheme:
```js
colors: {
  'gold': '#C8AA6E',
  'hextech-blue': '#0BC5EA',
  'dark-bg': '#010A13',
  // ... customize more
}
```

## 🚀 Deployment

### Deploy to GitHub Pages

```bash
# Build the project
npm run build

# Deploy to GitHub Pages (using gh-pages)
npm install -g gh-pages
gh-pages -d dist
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Or use Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

## 📄 License

MIT License - feel free to use this template for your own CV!

## 🙏 Credits

- **Design Inspiration**: League of Legends by Riot Games
- **Icons & Patterns**: Custom SVG designs
- **Fonts**: System fonts with fallbacks
- **Profile Picture**: AI-generated Viego portrait

## 📞 Contact

**Aymen Khanfir**
- 📧 Email: aymen@example.com
- 💼 LinkedIn: [linkedin.com/in/aymen-khanfir](https://linkedin.com/in/aymen-khanfir)
- 🐙 GitHub: [github.com/aymen-khanfir](https://github.com/aymen-khanfir)

---

**Built with ❤️ and ⚔️ by ghassen-elkamel**

*This is a fan-made project and is not affiliated with or endorsed by Riot Games.*
