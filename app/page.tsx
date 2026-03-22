"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Instagram, ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Portfolio() {
  const currentYear = new Date().getFullYear();
  
  // Progress bar logic
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Updated artworks with correct image sources
  const artworks = [
    { id: 1, title: "Etape", category: "Etape", src: "/cosmin1.jpg"},
    { id: 2, title: "Al 12-lea Motiv", category: "Al 12-lea Motiv", src: "/cosmin2.jpg" },
    { id: 3, title: "BVCOVIA - La nesfarsit", category: "Remake", src: "/cosmin3.jpg" },
  ];

  const containerFade: any = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2, delayChildren: 0.1 } 
    }
  };

  const itemFade: any = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-gray-100 font-sans selection:bg-[#0a84ff]/30 overflow-x-hidden">
      
      {/* Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0a84ff] to-[#5e5ce6] origin-left z-[100]"
      />

      {/* Navigation - Apple Glassmorphism Style */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between text-xs font-semibold text-gray-400 tracking-widest uppercase">
          <a href="#home" className="hover:text-white transition-colors duration-300">COSMIN</a>
          <div className="flex gap-8">
            <a href="#artworks" className="hover:text-[#0a84ff] transition-colors duration-300">Artworks</a>
            <a href="#contact" className="hover:text-[#0a84ff] transition-colors duration-300">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        {/* Subtle Blue Glow Animated */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,132,255,0.15),transparent_50%)] pointer-events-none" 
        />
        
        <motion.div 
          variants={containerFade}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center z-10 pt-20"
        >
          <motion.div variants={itemFade} className="flex justify-center mb-6">
            <span className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-medium text-[#0a84ff]">
              <Sparkles size={14} /> Available for projects
            </span>
          </motion.div>

          <motion.h1 variants={itemFade} className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6 text-white leading-tight">
            Viziune <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0a84ff] to-[#5e5ce6]">digitală.</span>
          </motion.h1>
          
          <motion.p variants={itemFade} className="text-lg md:text-2xl text-gray-400 mb-12 font-light tracking-tight max-w-2xl mx-auto">
            Design grafic la intersecția dintre estetică pură și inovație absolută.
          </motion.p>
          
          <motion.div variants={itemFade}>
            <motion.a 
              href="#artworks"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(10,132,255,0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors"
            >
              Explorează portofoliul 
              <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                <ArrowRight size={18} />
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Artworks Section */}
      <section id="artworks" className="py-32 px-6 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerFade}
        >
          <motion.h2 variants={itemFade} className="text-4xl md:text-6xl font-bold tracking-tight mb-16 text-center text-white">
            Artworks.
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {artworks.map((art) => (
              <motion.div
                key={art.id}
                variants={itemFade}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group relative aspect-[4/3] bg-[#0c0c0e] rounded-3xl overflow-hidden cursor-pointer border border-white/5 hover:border-[#0a84ff]/50 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(10,132,255,0.15)]"
              >
                {/* Image Component */}
                <Image
                  src={art.src}
                  alt={art.title}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-in-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={art.id === 1} // incarca prima poza cu prioritate
                />

                <div className="absolute inset-0 bg-gradient-to-br from-[#0a84ff]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                
                <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black via-black/60 to-transparent transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 z-20">
                  <p className="text-[#0a84ff] text-xs font-bold tracking-widest uppercase mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {art.category}
                  </p>
                  <h3 className="text-3xl font-bold text-white tracking-tight">{art.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerFade}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2 variants={itemFade} className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
            Let's collab.
          </motion.h2>
          <motion.p variants={itemFade} className="text-gray-400 mb-14 text-xl font-light tracking-tight">
            Deschis pentru proiecte noi.
          </motion.p>
          
          <motion.div variants={itemFade} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="https://instagram.com/coxmin_15/" 
              target="_blank" 
              rel="noreferrer"
              className="group flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#0a84ff]/50 px-8 py-5 rounded-2xl transition-all duration-300 w-full sm:w-auto"
            >
              <Instagram className="text-gray-400 group-hover:text-[#0a84ff] transition-colors w-5 h-5" />
              <span className="font-semibold text-sm text-white uppercase tracking-wider">Instagram</span>
            </a>
            
            <a 
              href="https://tiktok.com/@artworks_by_cosminn/" 
              target="_blank" 
              rel="noreferrer"
              className="group flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#0a84ff]/50 px-8 py-5 rounded-2xl transition-all duration-300 w-full sm:w-auto"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-400 group-hover:text-[#0a84ff] transition-colors">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              <span className="font-semibold text-sm text-white uppercase tracking-wider">TikTok</span>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-white/5 mt-10">
        <p className="text-gray-600 text-[10px] uppercase font-bold tracking-[0.2em]">
          &copy; {currentYear} Cosmin's Artworks - All Rights Reserved! Developed by Moana Stefanut
        </p>
      </footer>
    </div>
  );
}