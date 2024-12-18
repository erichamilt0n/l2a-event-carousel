import { useEffect, useRef, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import { motion, useAnimation } from 'framer-motion';

const images = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e',
    category: 'Nature',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a',
    category: 'Architecture',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    category: 'Travel',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000',
    category: 'Urban',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1444464666168-49d633b86797',
    category: 'Landscape',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
    category: 'Mountains',
  },
];

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [duplicatedImages] = useState([...images, ...images]);
  const controls = useAnimation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'horizontal',
      gestureOrientation: 'horizontal',
      smoothWheel: true,
      wheelMultiplier: 2,
      touchMultiplier: 2,
    });

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    const animate = async () => {
      const sequence = async () => {
        if (!containerRef.current) return;
        
        const singleSetWidth = containerRef.current.scrollWidth / 2;

        // Animate the first set
        await controls.start({
          x: -singleSetWidth,
          transition: {
            duration: 40,
            ease: "linear",
          },
        });

        // Instantly reset to start
        controls.set({ x: 0 });

        // Repeat the sequence
        sequence();
      };

      sequence();
    };

    animate();

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
      controls.stop();
    };
  }, [controls]);

  return (
    <div className="min-h-screen w-full bg-gray-800 overflow-hidden relative p-2 sm:p-4">
      <h1 className="text-white text-xl sm:text-2xl mb-4 sm:mb-8 px-4 sm:px-[10vw]">L2A Events</h1>
      <div className="relative min-h-[50vh] sm:min-h-[70vh] overflow-hidden">
        <motion.div
          ref={containerRef}
          animate={controls}
          className="flex items-center gap-4 sm:gap-6 md:gap-8 px-4 sm:px-[10vw] absolute left-0 right-0"
          style={{
            width: '200%', // Two sets of images
          }}
        >
          {duplicatedImages.map((image, index) => (
            <motion.div
              key={`${image.id}-${index}`}
              className="relative flex-shrink-0 bg-transparent rounded-lg overflow-hidden
                w-[calc(85vw-2rem)] sm:w-[calc(60vw-2rem)] md:w-[calc(45vw-2rem)] lg:w-[calc(30vw-2rem)]
                aspect-[4/3]"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={image.url}
                alt={image.category}
                className="w-full h-full object-cover rounded-lg brightness-125 contrast-110"
              />
              <div className="absolute bottom-4 left-4 bg-black/20 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full">
                <p className="text-white text-sm sm:text-base font-medium drop-shadow-lg">{image.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="gradient-overlay gradient-left z-10" />
        <div className="gradient-overlay gradient-right z-10" />
      </div>
    </div>
  );
}

export default App;
