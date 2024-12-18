# L2A Events Carousel

A responsive, auto-scrolling event carousel built with React, TypeScript, and Framer Motion. Features smooth animations, touch support, and a modern design.

## 🌟 Features

- ♾️ Infinite auto-scrolling animation
- 📱 Responsive design for all devices
- 🎨 Modern dark theme UI
- 🖱️ Smooth scrolling with Lenis
- 🔄 Continuous loop without jumps
- 📲 Touch-friendly interactions
- 🌓 Dynamic image brightness
- 🎭 Beautiful hover effects

## 🛠️ Technologies

- React 18.2.0
- TypeScript 4.9.5
- Framer Motion 10.16.4
- Tailwind CSS 3.3.3
- Lenis Scroll 1.0.42
- Vite (Build Tool)

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/erichamilt0n/l2a-event-carousel.git
cd l2a-event-carousel
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### Project Structure

```
l2a-event-carousel/
├── src/
│   ├── App.tsx         # Main carousel component
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles and Tailwind
├── public/             # Static assets
├── index.html          # HTML template
└── package.json        # Dependencies and scripts
```

## 🎨 Customization

### Modifying Images

Update the `images` array in `App.tsx` with your own image URLs and categories:

```typescript
const images = [
  {
    id: 1,
    url: 'your-image-url',
    category: 'Your Category'
  },
  // Add more images...
];
```

### Adjusting Animation

Modify the animation duration in `App.tsx`:

```typescript
await controls.start({
  x: -singleSetWidth,
  transition: {
    duration: 40, // Adjust this value (in seconds)
    ease: "linear"
  }
});
```

### Styling

- Update colors in `index.css`
- Modify Tailwind theme in `tailwind.config.js`
- Adjust responsive breakpoints in component classes

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) for animations
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Lenis](https://github.com/studio-freight/lenis) for smooth scrolling
- [Unsplash](https://unsplash.com/) for demo images
