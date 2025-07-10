# EasyA Landing Page

A modern, responsive landing page for EasyA built with Next.js 14 and Tailwind CSS. Features a dark theme with neon purple and green accents, smooth animations, and mobile-first design.

## Features

- **Dark Theme**: Custom color palette with neon purple and green accents
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern Animations**: Framer Motion for smooth transitions and effects
- **Glassmorphism**: Subtle blur effects and transparency
- **Accessibility**: ARIA labels, keyboard navigation, and semantic HTML
- **Performance**: Optimized images and lazy loading
- **SEO Friendly**: Proper meta tags and structured data

## Tech Stack

- **Next.js 14** - React framework with App Router
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Keen Slider** - Carousel/slider component

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd easya-landing-page
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
/app
├── layout.jsx          # Root layout with fonts and metadata
├── page.jsx           # Main page component
├── globals.css        # Global styles and Tailwind imports
└── components/
    ├── Navbar.jsx     # Navigation with glassmorphism
    ├── Hero.jsx       # Hero section with 3D tokens
    ├── StatsStrip.jsx # Animated counter statistics
    ├── Features.jsx   # Feature cards (Fast, In-Depth, Mobile)
    ├── Showcase.jsx   # Developer showcase section
    ├── CodeSnippet.jsx # Code example with syntax highlighting
    ├── EventsSlider.jsx # Events carousel
    ├── Testimonials.jsx # Customer testimonials
    ├── PartnersGrid.jsx # Partner logos grid
    ├── DownloadCTA.jsx # App download section
    └── Footer.jsx     # Footer with social links
```

## Customization

### Colors

The color palette can be customized in `tailwind.config.js`:

```javascript
colors: {
  background: '#0B0E18',
  'background-secondary': '#111426',
  primary: '#8B5CF6',
  secondary: '#10B981',
  accent: '#F59E0B',
  // ... more colors
}
```

### Fonts

Custom fonts are loaded in `app/layout.jsx`:

- **Sora** - Headlines and display text
- **Inter** - Body text and UI elements

### Animations

Animation configurations are in `tailwind.config.js`:

```javascript
animation: {
  'float': 'float 3s ease-in-out infinite',
  'float-delayed': 'float 3s ease-in-out infinite 1s',
  'pulse-slow': 'pulse 3s ease-in-out infinite',
}
```

## Components

### Navbar
- Fixed position with glassmorphism effect
- Smooth scroll navigation
- Mobile-responsive hamburger menu

### Hero
- Gradient text effects
- Floating 3D token animations
- App store download buttons

### Features
- Three feature cards with hover effects
- Icon integration with Lucide React
- Responsive grid layout

### Events Slider
- Horizontal scrolling carousel
- Event cards with prize information
- Registration CTAs

### Testimonials
- Customer quotes with ratings
- Avatar placeholders
- Company logo integration

## Performance

- **Lighthouse Score**: 90+ on mobile and desktop
- **Image Optimization**: Next.js Image component with lazy loading
- **Font Optimization**: next/font with display: 'swap'
- **Code Splitting**: Automatic with Next.js App Router

## Deployment

### Build for Production

```bash
npm run build
```

### Static Export

The project is configured for static export:

```bash
npm run build
npm run export
```

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@easya.com or join our Discord community.