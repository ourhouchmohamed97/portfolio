"use client";

import { useState, useCallback } from 'react';
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from 'next/link';
import { PhoneDemo } from '../components/iphone';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  defaultImage?: string;
  hoverImage?: string; 
  image?: string;
}

const ProjectCard: React.FC<ProjectCardProps & { isActive: boolean }> = ({ 
  title, 
  description, 
  tags, 
  defaultImage, 
  hoverImage, 
  image,
  isActive 
}) => {
  return (
    <div className={`group relative rounded-2xl overflow-hidden transition-all duration-500 h-full flex flex-col ${
      isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-70'
    }`}>
      {/* Card Header with Phone/Image */}
      <div className="relative h-60 md:h-80 flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-zinc-900 to-zinc-800">
        <div className="relative w-full h-full z-10 px-4">
          {defaultImage && hoverImage ? (
            <div className="w-full h-full flex items-center justify-center">
              <PhoneDemo />
            </div>
          ) : image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover rounded-t-2xl"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-zinc-700/50 rounded-t-2xl flex items-center justify-center">
              <span className="text-zinc-400">No image</span>
            </div>
          )}
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
      </div>

      {/* Card Content */}
      <div
        className="p-6 flex-1 flex flex-col rounded-b-2xl"
        style={{ backgroundColor: 'var(--custom-bg, #18181b)' }}
      >
        {/* Title */}
        <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">{title}</h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <div className="flex-1 mb-6">
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            {description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          <Link
            href="/demo"
            className="flex items-center justify-center gap-2 px-4 py-3 text-white rounded-lg text-sm flex-1 border border-blue-500/30 hover:bg-blue-500/10 hover:border-blue-500/50 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12" />
              <path d="M13 11L20 4" />
              <path d="M21 3H15M21 3V9" />
            </svg>
            Demo
          </Link>

          <Link
            href="/code"
            className="flex items-center justify-center gap-2 px-4 py-3 text-white rounded-lg text-sm flex-1 border border-blue-500/30 hover:bg-blue-500/10 hover:border-blue-500/50 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 432 416" fill="#ffffff">
              <path d="M213.5 0q88.5 0 151 62.5T427 213q0 70-41 125.5T281 416q-14 2-14-11v-58q0-27-15-40q44-5 70.5-27t26.5-77q0-34-22-58q11-26-2-57q-18-5-58 22q-26-7-54-7t-53 7q-18-12-32.5-17.5T107 88h-6q-12 31-2 57q-22 24-22 58q0 55 27 77t70 27q-11 10-13 29q-42 18-62-18q-12-20-33-22q-2 0-4.5.5t-5 3.5t8.5 9q14 7 23 31q1 2 2 4.5t6.5 9.5t13 10.5T130 371t30-2v36q0 13-14 11q-64-22-105-77.5T0 213q0-88 62.5-150.5T213.5 0z"/>
            </svg>
            Code
          </Link>
        </div>
      </div>
    </div>
  );
};

// Carousel Navigation Component
const CarouselNav = ({ 
  scrollPrev, 
  scrollNext, 
  canScrollPrev, 
  canScrollNext 
}: {
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
}) => (
  <div className="flex items-center justify-center gap-3 mt-8">
    <button
      onClick={scrollPrev}
      disabled={!canScrollPrev}
      className={`p-3 rounded-full border border-zinc-700 transition-all ${
        canScrollPrev 
          ? 'hover:bg-zinc-800 hover:border-blue-500/50 text-white' 
          : 'opacity-30 cursor-not-allowed text-zinc-500'
      }`}
      aria-label="Previous project"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M15 18l-6-6 6-6" />
      </svg>
    </button>
    
    <button
      onClick={scrollNext}
      disabled={!canScrollNext}
      className={`p-3 rounded-full border border-zinc-700 transition-all ${
        canScrollNext 
          ? 'hover:bg-zinc-800 hover:border-blue-500/50 text-white' 
          : 'opacity-30 cursor-not-allowed text-zinc-500'
      }`}
      aria-label="Next project"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 18l6-6-6-6" />
      </svg>
    </button>
  </div>
);

// Carousel Dots Component
const CarouselDots = ({ 
  scrollSnaps, 
  selectedIndex, 
  onDotClick 
}: {
  scrollSnaps: number[];
  selectedIndex: number;
  onDotClick: (index: number) => void;
}) => (
  <div className="flex items-center justify-center gap-2 mt-4">
    {scrollSnaps.map((_, index) => (
      <button
        key={index}
        onClick={() => onDotClick(index)}
        className={`w-2.5 h-2.5 rounded-full transition-all ${
          index === selectedIndex 
            ? 'bg-blue-500 w-6' 
            : 'bg-zinc-600 hover:bg-zinc-500'
        }`}
        aria-label={`Go to project ${index + 1}`}
      />
    ))}
  </div>
);

export default function Home() {
  const [isCopied, setIsCopied] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('ourhouchmohamed@gmail.com');
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email: ', err);
    }
  };

  const projects = [
    {
      title: "HayMobility — Smart Car Tracking App",
      description: "This mobile app, built with Flutter and Firebase, enables car rental agencies to track their vehicles in real time. It allows admins to view vehicle status, manage user accounts, and monitor fleet activity through a simple dashboard. The goal is to improve fleet visibility and operational efficiency.",
      tags: ["Flutter", "Dart", "Firebase", "FastAPI", "Mobile"],
      defaultImage: "/projects/welcome.png",
      hoverImage: "/projects/haymobility-dashboard.png",
    },
    {
      title: "Decentralized Voting System",
      description: "Built on Ethereum blockchain, this secure and transparent platform ensures immutable and verifiable voting. Smart contracts handle voter registration and tallying, guaranteeing election integrity.",
      tags: ["Solidity", "React", "Web3.js", "Hardhat"],
      image: "/projects/Haymobility2.png",
    },
    {
      title: "E-commerce API Gateway",
      description: "A robust microservices-based API gateway handling product catalog, user authentication, order processing, and payment integration. Designed for high scalability and fault tolerance.",
      tags: ["Node.js", "Express", "Kafka", "MongoDB", "Docker"],
      image: "/projects/1.jpg",
    },
    {
      title: "Real-time Chat Application",
      description: "A responsive chat application featuring instant messaging, group chats, emoji support, and file sharing. Leverages WebSockets for real-time services.",
      tags: ["React", "Socket.io", "Node.js", "Redis"],
      image: "/projects/2.jpg",
    },
    {
      title: "Healthcare Management",
      description: "A secure web portal for managing patient records, appointments, and medical inventory. Includes role-based access control and integrates with various medical devices for data capture.",
      tags: ["Angular", "Spring Boot", "MySQL", "JWT"],
      image: "/projects/1.jpg",
    }
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'center',
      containScroll: 'trimSnaps',
      dragFree: false
    }, 
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onDotClick = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setScrollSnaps(emblaApi.scrollSnapList());
  }, [emblaApi]);

  // Setup event listeners
  useState(() => {
    if (emblaApi) {
      onSelect();
      emblaApi.on('select', onSelect);
      emblaApi.on('reInit', onSelect);
      
      return () => {
        emblaApi.off('select', onSelect);
        emblaApi.off('reInit', onSelect);
      };
    }
  });

  return (
    <>
      <header className="fixed top-2.5 z-50 w-full md:top-4">
        <div className="container mx-auto px-6">
          <Navbar />
        </div>
      </header>
      
      <main className="flex flex-col w-full p-0 m-0">
        <section className="relative w-full min-h-screen dark:bg-black overflow-hidden py-16 px-4">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-black pointer-events-none"></div>
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 animate-fadeInUp">
              <h1 className="w-full text-balance text-center leading-tight opacity-90 dark:text-zinc-100 font-sans mt-8">
                Work that speaks
              </h1>
              <h1 className="w-full text-balance text-center font-instrument-serif text-4xl md:text-5xl lg:text-6xl text-zinc-700 leading-tight opacity-90 dark:text-zinc-100 font-instrument">
                Showcase <span style={{ color: '#432dd7' }}>PROJECTS</span>
              </h1>
              <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
                Swipe through my latest work. Each project showcases different technologies and solutions.
              </p>
            </div>

            {/* Carousel Container */}
            <div className="embla mx-auto max-w-4xl">
              <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container flex">
                  {projects.map((project, index) => (
                    <div 
                      key={index} 
                      className="embla__slide flex-[0_0_100%] min-w-0 md:flex-[0_0_90%] lg:flex-[0_0_85%] mx-2 md:mx-4"
                    >
                      <ProjectCard 
                        {...project} 
                        isActive={index === selectedIndex}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <CarouselNav 
              scrollPrev={scrollPrev}
              scrollNext={scrollNext}
              canScrollPrev={emblaApi?.canScrollPrev() || false}
              canScrollNext={emblaApi?.canScrollNext() || false}
            />
            
            {/* Dots Indicator */}
            <CarouselDots 
              scrollSnaps={scrollSnaps}
              selectedIndex={selectedIndex}
              onDotClick={onDotClick}
            />

            {/* Project Counter */}
            <div className="text-center mt-6 text-zinc-500 text-sm">
              <span className="text-white font-medium">{selectedIndex + 1}</span>
              <span> / {projects.length} projects</span>
            </div>
          </div>

          {/* Custom Styles for Embla */}
          <style jsx>{`
            @keyframes fadeInUp {
              from { opacity: 0; transform: translateY(30px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-fadeInUp {
              animation: fadeInUp 0.8s ease-out forwards;
              opacity: 0;
            }
            
            .embla {
              position: relative;
              overflow: hidden;
            }
            .embla__viewport {
              overflow: hidden;
            }
            .embla__container {
              display: flex;
              touch-action: pan-y pinch-zoom;
              margin-left: calc(var(--embla-slide-spacing) * -1);
            }
            .embla__slide {
              transform: translate3d(0, 0, 0);
              flex: 0 0 100%;
              min-width: 0;
              padding-left: var(--embla-slide-spacing);
            }
            
            @media (min-width: 768px) {
              .embla__slide {
                flex: 0 0 90%;
              }
            }
            @media (min-width: 1024px) {
              .embla__slide {
                flex: 0 0 85%;
              }
            }
          `}</style>
        </section>
      </main>

      <Footer />
    </>
  );
}