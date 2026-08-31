# Portfolio - Ashwin Bhat K

A minimalist, responsive developer portfolio built with React and TypeScript.

## Features

- **Clean Design**: Warm brown color palette with minimalist aesthetic
- **Responsive**: Mobile-first design that works on all devices
- **Accessible**: Semantic HTML, ARIA attributes, keyboard navigation, and screen reader support
- **Performance**: Fast loading, optimized build, and smooth animations
- **Customizable**: All content managed through a single configuration file

## Tech Stack

- React 18
- TypeScript
- Vite
- CSS (Custom Properties)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ashwinbhatk/Portfolio.git
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## Configuration

Edit `src/config.ts` to update:
- Personal information (name, email, social links)
- Resume URL
- About section text
- Tech stack
- Projects
- Interests

## Project Structure

```
Portfolio/
├── src/
│   ├── components/      # React components
│   ├── config.ts        # Site configuration
│   ├── index.css        # Global styles
│   ├── App.tsx         # Main app component
│   └── main.tsx        # Entry point
├── public/             # Static assets
└── index.html         # HTML template
```

## Features

### Sections

1. **Hero**: Introduction with photo placeholder, call-to-action buttons, and interactive cat mascot
2. **About**: Personal introduction
3. **Tech Stack**: Technologies organized by category
4. **Projects**: Featured projects with descriptions and links
5. **Interests**: Current learning focus areas
6. **Contact**: Contact information and social links
7. **Footer**: Minimal footer with copyright

### Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Screen reader friendly
- Respects `prefers-reduced-motion`

### Responsive Design

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

### Interactive Elements

- Pixel art cat mascot with meow/purr interaction
- Custom paw cursor (on hover-capable devices)
- Smooth scrolling navigation
- Mobile hamburger menu

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contact

Ashwin Bhat K
- Email: ashwinbhatk@proton.me
- GitHub: [@ashwinbhatk](https://github.com/ashwinbhatk)
- LinkedIn: [ashwinbhatk](https://www.linkedin.com/in/ashwinbhatk)
