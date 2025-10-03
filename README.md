# League of Legends Interactive CV - Aymen Khanfir

An immersive, interactive CV website themed after League of Legends, showcasing full-stack development expertise with stunning animations and game-inspired UI elements.

## Features

### Champion Select Experience
- **Hero Section**: Dramatic champion reveal with animated particles and hextech effects
- **Lock In Mechanism**: Interactive button that reveals the full CV experience
- **Smooth Transitions**: Framer Motion animations throughout

### Champion Profile Sections
1. **Stats Panel**: Character-style attribute display with animated progress bars
2. **Abilities (Q/W/E/R)**: Skills organized as champion abilities with interactive modals
3. **Champion Skins**: Work experience timeline presented as collectible skins
4. **Match History**: Projects displayed as game victories with KDA metrics
5. **Runes & Masteries**: Technical skills organized in a rune tree layout
6. **Summoner Profile**: Education section with rank-based styling
7. **Add Friend**: Contact section styled as friend request interface

## Tech Stack

- **React 19**: Latest React features with TypeScript
- **TypeScript**: Strict mode for type safety
- **Vite**: Lightning-fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS with custom LoL theming
- **Framer Motion**: Smooth, professional animations
- **Lucide React**: Modern icon library

## LoL Theme Color Palette

```css
Hextech Blue: #0BC5EA
Gold: #C8AA6E
Dark Background: #010A13
Card Background: #1E2328
Border: #785A28
Ability Q (Blue): #4A9FD8
Ability W (Purple): #8B5FBF
Ability E (Orange): #F0A93C
Ability R (Red): #E74856
Victory Green: #00C8C8
Legendary Orange: #FF6B00
```

## Getting Started

### Installation

```bash
cd lol-cv
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5173` to see the CV in action.

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── HeroSection.tsx          # Champion Select screen
│   ├── StatsPanel.tsx            # Champion stats with bars
│   ├── AbilitiesGrid.tsx         # Q/W/E/R abilities showcase
│   ├── SkinsCarousel.tsx         # Work experience timeline
│   ├── MatchHistory.tsx          # Projects as match results
│   ├── RunesTree.tsx             # Skills in rune layout
│   ├── SummonerProfile.tsx       # Education section
│   └── ContactPanel.tsx          # Contact/Add Friend
├── lib/
│   ├── data.ts                   # CV data and types
│   ├── animations.ts             # Framer Motion variants
│   └── utils.ts                  # Utility functions
├── App.tsx                       # Main application
├── index.css                     # Global styles + Tailwind
└── main.tsx                      # Entry point
```

## Customization

### Update CV Data

Edit `src/lib/data.ts` to customize:
- Personal information
- Stats and attributes
- Abilities (skills/technologies)
- Work experience
- Projects
- Education
- Contact information

### Modify Colors

Update `tailwind.config.js` to change the color scheme while maintaining the LoL aesthetic.

### Adjust Animations

Edit `src/lib/animations.ts` to fine-tune animation timings and effects.

## Performance Optimizations

- Code splitting for vendor and animation libraries
- Lazy loading for images and components
- Optimized Framer Motion animations
- Minified production build
- Tree-shaking for unused code

## Responsive Design

The CV is fully responsive with breakpoints for:
- **Desktop** (1024px+): Full LoL client experience
- **Tablet** (768px-1023px): Simplified champion page layout
- **Mobile** (<768px): Card-based swipe navigation

## Accessibility

- Keyboard navigation support
- Semantic HTML structure
- ARIA labels where needed
- Reduced motion support (respects prefers-reduced-motion)
- Screen reader friendly content

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal and commercial use.

## Credits

Designed and developed by Aymen Khanfir
Inspired by League of Legends UI/UX
Built with modern web technologies

---

**Summoner's Note**: This CV demonstrates expertise in:
- Modern React patterns and hooks
- TypeScript best practices
- Advanced animations with Framer Motion
- Responsive design with Tailwind CSS
- UI/UX design principles
- Performance optimization
- Creative problem-solving

*May your code be bug-free and your builds successful!* 🏆