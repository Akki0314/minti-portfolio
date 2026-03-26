'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
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
  { id: 33, title: 'Sunset', category: 'Photoshop Art', img: '/psd-1.jpeg' },
  { id: 34, title: 'night sky', category: 'Photoshop Art', img: '/psd-2.jpeg' },
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

function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  const floatingShapes = Array.from({ length: 6 });

  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-r from-pink-100 to-yellow-100"
    >
      {/* Floating Shapes */}
      {floatingShapes.map((_, i) => (
        <motion.div
          key={i}
          className="absolute border border-gray-400 rounded-full"
          style={{
            width: 80 + i * 20,
            height: 80 + i * 20,
            top: `${20 + i * 10}%`,
            left: `${10 + i * 15}%`,
          }}
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 8 + i }}
        />
      ))}

      <motion.div style={{ y }} className="text-center z-10">
        <motion.h1
          className="text-6xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Not Just Art
          <br /> A Piece of Me
        </motion.h1>

        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Handmade creations by Minti
        </motion.p>

        <motion.a
          href="#gallery"
          whileHover={{ scale: 1.1 }}
          className="bg-black text-white px-8 py-3 rounded-full"
        >
          Explore My Work
        </motion.a>
      </motion.div>
    </section>
  );
}
function AboutSection() {
  return (
    <section id="about" className="py-32 relative bg-white overflow-hidden">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-6">

        <motion.img
          src="/artist-portrait.jpg"
          className="w-80 h-80 rounded-full object-cover mx-auto shadow-xl"
          whileHover={{ scale: 1.05 }}
        />

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-4xl mb-4">Patterns That Tell Stories</h2>

          <p className="text-gray-600 mb-4">
            Hi, I'm Mansi — the artist behind Minti Creations.
            Art is meditation for me.
          </p>

          <p className="text-gray-600">
            Every artwork begins with a single dot
            and grows into a peaceful universe.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
function GallerySection() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);

  const filters = ['All', 'Custom Work', 'Canvas', 'Mandala Art', 'Photoshop Art'];

  const items =
    filter === 'All'
      ? galleryItems
      : galleryItems.filter(i => i.category === filter);

  return (
    <section id="gallery" className="py-32 bg-gray-50">
      <h2 className="text-4xl text-center mb-12">My Work</h2>

      <div className="flex justify-center gap-3 flex-wrap mb-10">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-5 py-2 rounded-full transition ${
              filter === f ? 'bg-black text-white scale-105' : 'bg-gray-200'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-4 gap-6 px-6">
        {items.map(item => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.07 }}
            className="relative group cursor-pointer"
            onClick={() => setSelected(item)}
          >
            <img
              src={item.img}
              className="w-full h-72 object-cover rounded-xl"
            />

            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition">
              {item.title}
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex justify-center items-center z-50"
            onClick={() => setSelected(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.img
              src={selected.img}
              className="max-w-[90%] max-h-[90%]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
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