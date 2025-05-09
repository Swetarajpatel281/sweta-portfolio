import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import ParticleBackground from './ParticleBackground';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const containerRef = useRef<HTMLDivElement>(null);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      ref={containerRef}
      className={`relative min-h-screen flex flex-col items-center justify-center overflow-hidden ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
      }`}
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <ParticleBackground />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            enableRotate={true}
            rotateSpeed={0.5}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </div>

      {/* Content */}
      <div className="z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.p 
            custom={0} 
            variants={textVariants}
            className="text-lg sm:text-xl font-medium"
          >
            Hi, I'm
          </motion.p>
          
          <motion.h1 
            custom={1} 
            variants={textVariants}
            className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight"
          >
            Sweta Raj Patel
          </motion.h1>
          
          <motion.h2 
            custom={2} 
            variants={textVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold"
          >
            A Full Stack Developer
          </motion.h2>
          
          <motion.p 
            custom={3} 
            variants={textVariants}
            className="text-base sm:text-lg max-w-2xl mx-auto"
          >
            I build exceptional digital experiences with modern technologies,
            focusing on both functionality and aesthetics.
          </motion.p>
          
          <motion.div 
            custom={4} 
            variants={textVariants}
            className="pt-6"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium ${
                darkMode 
                  ? 'bg-indigo-600 hover:bg-indigo-700 text-white' 
                  : 'bg-indigo-500 hover:bg-indigo-600 text-white'
              } transition-colors`}
              onClick={scrollToNext}
            >
              About me
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ChevronDown 
          size={32} 
          className={darkMode ? 'text-white' : 'text-gray-900'} 
          onClick={scrollToNext}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;