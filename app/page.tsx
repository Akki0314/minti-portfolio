// app/page.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';

// ======== GALLERY ITEMS ========
const galleryItems = [
  { id: 1, title: 'Flower Heart', category: 'Custom Work', img: '/flower-heart.jpg' },
  { id: 2, title: 'Forever love', category: 'Custom Work', img: '/custom-2.jpg' },
  { id: 3, title: 'Mandal', category: 'Custom Work', img: '/custom-3.jpg' },
  { id: 4, title: 'anime', category: 'Custom Work', img: '/custom-4.jpg' },
  { id: 5, title: 'Aurora borealis', category: 'Canvas', img: '/canvas-1.jpg' },
  { id: 6, title: 'Misty mountains', category: 'Canvas', img: '/canvas-2.jpg' },
  { id: 7, title: 'Evening neighborhood', category: 'Canvas', img: '/canvas-3.jpg' },
  { id: 8, title: 'Firefly night', category: 'Canvas', img: '/canvas-4.jpg' },
  { id: 9, title: 'Evening lake row', category: 'Canvas', img: '/canvas-5.jpg' },
  { id: 10, title: 'Colourful sunset', category: 'Canvas', img: '/canvas-6.jpg' },
  { id: 11, title: 'Soothing window', category: 'Canvas', img: '/canvas-7.jpg' },
  { id: 12, title: 'Evening town', category: 'Canvas', img: '/canvas-8.jpg' },
  { id: 13, title: 'City', category: 'Canvas', img: '/canvas-9.jpg' },
  { id: 14, title: 'Snowy track', category: 'Canvas', img: '/canvas-10.jpg' },
  { id: 15, title: 'City sets', category: 'Canvas', img: '/canvas-11.jpg' },
  { id: 16, title: 'Cloudy night', category: 'Canvas', img: '/canvas-12.jpg' },
  { id: 17, title: 'Calm shores', category: 'Canvas', img: '/canvas-13.jpg' },
  { id: 18, title: 'Sunset at the beach', category: 'Canvas', img: '/canvas-14.jpg' },
  { id: 19, title: 'Night sky', category: 'Canvas', img: '/canvas-15.jpg' },
  { id: 20, title: 'starlights', category: 'Canvas', img: '/canvas-16.jpg' },
  { id: 21, title: 'City eves', category: 'Canvas', img: '/canvas-17.jpg' },
  { id: 22, title: 'windy eves', category: 'Canvas', img: '/canvas-18.jpg' },
  { id: 23, title: 'Parvatipatahe', category: 'Canvas', img: '/canvas-19.jpg' },
  { id: 24, title: 'Sun & Moon', category: 'Canvas', img: '/canvas-20.jpg' },
  { id: 25, title: 'Har Har Mahadev', category: 'Mandala Art', img: '/mandala-1.jpg' },
  { id: 26, title: 'Radha Krishna', category: 'Mandala Art', img: '/mandala-2.jpg' },
  { id: 27, title: 'Devine bond of Radha Krishna', category: 'Mandala Art', img: '/mandala-3.jpg' },
  { id: 28, title: 'Shiv Tandav', category: 'Mandala Art', img: '/mandala-4.jpg' },
  { id: 29, title: 'Hare Krishna', category: 'Mandala Art', img: '/mandala-5.jpg' },
  { id: 30, title: 'Celebrating indian beauty', category: 'Mandala Art', img: '/mandala-6.jpg' },
  { id: 31, title: 'Shivling', category: 'Mandala Art', img: '/mandala-7.jpg' },
  { id: 32, title: 'Separated but still connected', category: 'Mandala Art', img: '/mandala-8.jpg' },
];

// ======== CAROUSEL IMAGES ========
const carouselImages = [
  '/carousel/hero-1.jpg',
  '/carousel/hero-2.jpg',
  '/carousel/hero-3.jpg',
  '/carousel/hero-4.jpg',
  '/carousel/hero-5.jpg',
  '/carousel/hero-6.jpg',
];

// ========= MAIN PAGE =========
export default function HomePage() {
  return (
    <div className="bg-white text-gray-900 font-lato">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <GallerySection />
        <InteractiveAnimationSection />
      </main>
      <Footer />
    </div>
  );
}

// ========= HEADER =========
function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <nav className="container mx-auto flex justify-between items-center p-4">
        <a href="#" className="text-2xl font-playfair font-bold text-gray-900">Minti Creations</a>
        <ul className="hidden md:flex space-x-8 items-center">
          {['Home', 'About', 'Gallery'].map(item => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="relative group text-gray-900">
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

// ========= HERO SECTION =========
function HeroSection() {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => setCurrent(prev => (prev - 1 + carouselImages.length) % carouselImages.length);
  const handleNext = () => setCurrent(prev => (prev + 1) % carouselImages.length);

  const floatingShapes = [
    { size: 50, top: '20%', left: '10%', rotate: 0 },
    { size: 80, top: '40%', left: '70%', rotate: 45 },
    { size: 60, top: '70%', left: '30%', rotate: -30 },
    { size: 100, top: '10%', left: '50%', rotate: 15 },
    { size: 40, top: '60%', left: '80%', rotate: -45 },
  ];

  const startX = useRef(0);
  const endX = useRef(0);

  const handleDragStart = (e: React.TouchEvent | React.MouseEvent) => {
    startX.current = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
  };
  const handleDragEnd = (e: React.TouchEvent | React.MouseEvent) => {
    endX.current = 'changedTouches' in e ? e.changedTouches[0].clientX : (e as React.MouseEvent).clientX;
    if (startX.current - endX.current > 50) handleNext();
    else if (startX.current - endX.current < -50) handlePrev();
  };

  return (
    <section id="home" className="h-screen relative overflow-hidden bg-gray-50 flex items-center">
      {floatingShapes.map((shape, idx) => (
        <motion.div
          key={idx}
          className="absolute rounded-full border-2 border-gray-300"
          style={{ width: shape.size, height: shape.size, top: shape.top, left: shape.left, rotate: shape.rotate }}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 15 + idx * 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <div className="container mx-auto grid md:grid-cols-2 items-center px-4 z-10">
        <div className="text-center md:text-left z-10">
          <motion.h1 className="text-5xl md:text-7xl font-playfair font-bold mb-4 text-gray-900" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            Not Just Art, A Piece of Me
          </motion.h1>
          <motion.p className="text-lg mb-8 text-gray-700" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            Handmade Arts by Minti Creations.
          </motion.p>
          <motion.a
            href="#gallery"
            className="bg-gray-900 text-white px-8 py-3 rounded-full text-lg shadow-lg inline-block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            Explore My Work
          </motion.a>
        </div>

        <div
          ref={containerRef}
          className="hidden md:flex justify-center items-center p-8 relative w-full h-96 rounded-lg shadow-2xl overflow-hidden"
          onTouchStart={handleDragStart}
          onTouchEnd={handleDragEnd}
          onMouseDown={handleDragStart}
          onMouseUp={handleDragEnd}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={carouselImages[current]}
              alt={`Carousel ${current + 1}`}
              className="w-full h-96 object-cover rounded-lg"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
            />
          </AnimatePresence>

          <button onClick={handlePrev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-200/40 text-gray-900 p-2 rounded-full hover:bg-gray-200/60 z-20">‹</button>
          <button onClick={handleNext} className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-200/40 text-gray-900 p-2 rounded-full hover:bg-gray-200/60 z-20">›</button>
        </div>
      </div>
    </section>
  );
}

// ========= ABOUT SECTION =========
function AboutSection() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-r from-gray-50 to-white overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border-2 border-dotted border-gray-700 opacity-40"
            style={{ width: 150 + i * 40, height: 150 + i * 40, top: `${15 * i}%`, left: `${20 * i}%` }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 60 + i * 10, ease: 'linear' }}
          />
        ))}
      </div>

      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-4 relative z-10">
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src="/artist-portrait.jpg"
            alt="Portrait of the artist"
            className="w-80 h-80 rounded-full object-cover shadow-2xl border-4 border-white"
            whileHover={{ scale: 1.08, rotate: 2 }}
            transition={{ type: 'spring', stiffness: 200 }}
          />
        </motion.div>

        <motion.div
          className="backdrop-blur-md bg-white/70 p-8 rounded-2xl shadow-xl relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl font-playfair mb-4 text-gray-900">Patterns That Tell Stories</h2>
          <p className="mb-4 text-gray-700">
            Hello! I'm <span className="font-semibold text-gray-900">Mansi</span>, the hands and heart behind Minti Creations. For me, art is more than just drawing—it’s a gentle meditation, a way to slow down and let creativity flow into soothing Creations.
          </p>
          <p className="text-gray-700">
            Every piece begins with a single dot, unfolding into a universe of shapes, colors, and calm. Through my work, I hope to share that same sense of peace and quiet joy that I find while creating.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ========= GALLERY SECTION =========
function GallerySection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Custom Work', 'Canvas', 'Mandala Art'];

  const sortedGalleryItems = [
    ...galleryItems.filter(item => item.category === 'Custom Work'),
    ...galleryItems.filter(item => item.category === 'Canvas'),
    ...galleryItems.filter(item => item.category === 'Mandala Art'),
  ];

  const filteredItems = activeFilter === 'All' ? sortedGalleryItems : sortedGalleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair text-center mb-12 text-gray-900">My Work</h2>

        <div className="flex justify-center space-x-2 md:space-x-4 mb-8">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full transition text-sm md:text-base ${activeFilter === filter ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-900'}`}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredItems.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              >
                <img src={item.img} alt={item.title} className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <h3 className="text-white text-xl font-playfair text-center">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}


// ========= INTERACTIVE ANIMATION SECTION =========
function InteractiveAnimationSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [clicks, setClicks] = useState<{ x: number; y: number }[]>([]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMouse({ x: e.clientX - rect.left - rect.width / 2, y: e.clientY - rect.top - rect.height / 2 });
  };

  const handleClick = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setClicks(prev => [...prev, { x: e.clientX - rect.left - rect.width / 2, y: e.clientY - rect.top - rect.height / 2 }].slice(-20));
  };

  const layers = Array.from({ length: 8 }, (_, i) => i);

  return (
    <section
      ref={containerRef}
      className="py-48 bg-gray-50 relative overflow-hidden" // Increased from py-32 to py-48
      onMouseMove={handleMouseMove}
      onClick={handleClick}
    >
      {/* Glassmorphic Text Container */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 bg-white/30 backdrop-blur-lg rounded-xl px-8 py-6 max-w-3xl z-20">
        <motion.h2 className="text-4xl font-playfair mb-4 text-gray-900">
          Finishing Flourish, Now it's your time to shine
        </motion.h2>
        <motion.p className="text-gray-900 text-lg">
          Thanks for dropping by and letting my art sprinkle a little calm into your day! Now it’s your turn—tap the black space and watch your imagination take off. Every tap grows your pattern bigger and wilder. Go ahead—let your creativity shout, dance, and make its mark! 
        </motion.p>
      </div>

      {/* Interactive fractal layers */}
      {layers.map(i => (
        <motion.div
          key={i}
          className="absolute rounded-full border-2 border-gray-900"
          style={{
            width: 60 + i * 40,
            height: 60 + i * 40,
            top: '50%',
            left: '50%',
            x: mouse.x * (i / 15),
            y: mouse.y * (i / 15),
            translateX: '-50%',
            translateY: '-50%',
            opacity: 0.6 - i * 0.05,
            background: `radial-gradient(circle, rgba(${50 * i}, ${200 - i * 20}, ${100 + i * 10},0.3) 0%, transparent 70%)`,
          }}
          animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{ repeat: Infinity, duration: 30 - i * 2, ease: 'linear' }}
        />
      ))}

      {clicks.map((c, idx) => (
        <motion.div
          key={idx}
          className="absolute rounded-full border-2 border-gray-900 bg-gray-300/30"
          style={{
            width: 40 + idx * 10,
            height: 40 + idx * 10,
            top: '50%',
            left: '50%',
            x: c.x,
            y: c.y,
            translateX: '-50%',
            translateY: '-50%',
          }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10 + idx, ease: 'linear' }}
        />
      ))}
    </section>
  );
}
// ========= FOOTER =========
function Footer() {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto text-center text-gray-900">
        <a href="#" className="text-2xl font-playfair font-bold mb-4 inline-block text-gray-900">
          Minti Creations
        </a>
        <ul className="flex justify-center space-x-6 mb-6">
          {['Home', 'About', 'Gallery'].map(item => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="hover:underline text-gray-700">
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex justify-center space-x-6">
          <a href="https://www.instagram.com/minti_creations224" target="_blank" className="hover:scale-110 transition-transform">
            <FaInstagram size={24} />
          </a>
          <a href="https://facebook.com/yourusername" target="_blank" className="hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.325 24H12.82v-9.294H9.692V11.05h3.128V8.414c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.462.099 2.793.143v3.24h-1.918c-1.504 0-1.796.716-1.796 1.767v2.317h3.592l-.468 3.656h-3.124V24h6.127C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0z"/>
            </svg>
          </a>
        </div>
        <p className="mt-8 text-sm text-gray-600">&copy; {new Date().getFullYear()} Minti Creations. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
