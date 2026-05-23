"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LiquidEther from "./components/LiquidEther";
import Link from "next/link";
import { PhoneDemo } from "./components/iphone";
import { ShinyButtonDemo } from "./components/interactiveButton";
import { BentoDemo } from "./components/BentoGrid";
import { cn } from "@/lib/utils";
import SkillsSection from "./components/Skills";
import { RadixAccordionDemo } from "./components/RadixAccordionDemo";
import TargetCursor from "./components/TargetCursor";
import ContactButton from "./components/ContactButton";
import Orb from "./components/Orb";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { WebsiteDemo } from "./components/websiteDemo";

interface WebsiteDemoData {
  image: string;
  title: string;
  description?: string;
  badge?: string;
  projectName: string;
  projectType?: string;
  url?: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  defaultImage?: string;
  hoverImage?: string;
  image?: string;
  websiteDemo?: WebsiteDemoData;
  demoUrl?: string;
  codeUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps & { isActive?: boolean }> = ({
  title,
  description,
  tags,
  defaultImage,
  hoverImage,
  image,
  websiteDemo,
  demoUrl,
  codeUrl,
  isActive = true,
}) => {
  return (
    <div
      className={`group relative rounded-2xl overflow-hidden transition-all duration-500 h-full flex flex-col ${
        isActive
          ? "scale-100 opacity-100 shadow-2xl shadow-[#432dd7]/20"
          : "scale-98 opacity-85"
      }`}
    >
      {/* ✅ Card Header - EXTRA HEIGHT*/}
      <div className="relative h-72 md:h-96 flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-zinc-900 to-zinc-800">
        <div className="relative w-full h-full z-10">
          {defaultImage && hoverImage ? (
            <div className="w-full h-full flex items-center justify-center">
              <PhoneDemo />
            </div>
          ) : websiteDemo ? (
            <div className="w-full h-full flex items-center justify-center">
              <WebsiteDemo {...websiteDemo} />
            </div>
          ) : (
            <div className="w-full h-full bg-zinc-700/50 rounded-t-2xl flex items-center justify-center">
              <span className="text-zinc-400 text-sm">No image</span>
            </div>
          )}
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
      </div>

      {/* ✅ Card Content - More padding for bigger cards */}
      <div
        className={cn(
          "p-6 md:p-8 flex-1 flex flex-col rounded-b-2xl",
          "bg-white/60 backdrop-blur-md border border-black/5 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)]",
          "dark:bg-transparent dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)]"
        )}
      >
        {/* Title */}
        <h3 className="text-xl md:text-2xl font-semibold text-black dark:text-white mb-4 leading-tight">
          {title}
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1.5 text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-700/20 dark:text-blue-200 rounded-full border border-blue-300 dark:border-blue-500/40"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <div className="flex-1 mb-6 mt-6">
          <p className="text-gray-800 dark:text-gray-100">{description}</p>
        </div>

        {/* Action Buttons - Dynamic Links */}
        <div className="flex gap-4 mt-auto">
          {/* Demo Button - Conditional rendering */}
          {demoUrl ? (
            <Link
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-3 text-black dark:text-white rounded-xl text-sm font-medium flex-1 border border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/10 hover:border-blue-600 dark:hover:border-blue-400 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12" />
                <path d="M13 11L20 4" />
                <path d="M21 3H15M21 3V9" />
              </svg>
              Demo
            </Link>
          ) : (
            <button
              disabled
              className="flex items-center justify-center gap-2 px-5 py-3 text-zinc-400 dark:text-zinc-600 rounded-xl text-sm font-medium flex-1 border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800/50 cursor-not-allowed"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12" />
                <path d="M13 11L20 4" />
                <path d="M21 3H15M21 3V9" />
              </svg>
              Demo
            </button>
          )}

          {/* Code Button - Conditional rendering */}
          {codeUrl ? (
            <Link
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-3 text-black dark:text-white rounded-xl text-sm font-medium flex-1 border border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/10 hover:border-blue-600 dark:hover:border-blue-400 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 432 416"
                fill="currentColor"
              >
                <path d="M213.5 0q88.5 0 151 62.5T427 213q0 70-41 125.5T281 416q-14 2-14-11v-58q0-27-15-40q44-5 70.5-27t26.5-77q0-34-22-58q11-26-2-57q-18-5-58 22q-26-7-54-7t-53 7q-18-12-32.5-17.5T107 88h-6q-12 31-2 57q-22 24-22 58q0 55 27 77t70 27q-11 10-13 29q-42 18-62-18q-12-20-33-22q-2 0-4.5.5t-5 3.5t8.5 9q14 7 23 31q1 2 2 4.5t6.5 9.5t13 10.5T130 371t30-2v36q0 13-14 11q-64-22-105-77.5T0 213q0-88 62.5-150.5T213.5 0z" />
              </svg>
              Code
            </Link>
          ) : (
            <button
              disabled
              className="flex items-center justify-center gap-2 px-5 py-3 text-zinc-400 dark:text-zinc-600 rounded-xl text-sm font-medium flex-1 border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800/50 cursor-not-allowed"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 432 416"
                fill="currentColor"
              >
                <path d="M213.5 0q88.5 0 151 62.5T427 213q0 70-41 125.5T281 416q-14 2-14-11v-58q0-27-15-40q44-5 70.5-27t26.5-77q0-34-22-58q11-26-2-57q-18-5-58 22q-26-7-54-7t-53 7q-18-12-32.5-17.5T107 88h-6q-12 31-2 57q-22 24-22 58q0 55 27 77t70 27q-11 10-13 29q-42 18-62-18q-12-20-33-22q-2 0-4.5.5t-5 3.5t8.5 9q14 7 23 31q1 2 2 4.5t6.5 9.5t13 10.5T130 371t30-2v36q0 13-14 11q-64-22-105-77.5T0 213q0-88 62.5-150.5T213.5 0z" />
              </svg>
              Code
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// ✅ ProjectCarousel - Self-contained component with all carousel logic
const ProjectCarousel = ({ projects }: { projects: ProjectCardProps[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
      slidesToScroll: 1,
      containScroll: "trimSnaps",
    },
    [Autoplay({ delay: 6000, stopOnInteraction: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <>
      <div className="embla mx-auto max-w-6xl">
        <div className="embla__viewport overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {projects.map((project, index) => (
              <div
                key={index}
                className="embla__slide flex-[0_0_100%] md:flex-[0_0_85%] lg:flex-[0_0_75%] pl-4 pr-4 md:pl-8 md:pr-8"
              >
                <div className="h-full">
                  <ProjectCard
                    {...project}
                    isActive={index === selectedIndex}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation: Arrow - Dots - Arrow */}
        <div className="flex justify-center items-center gap-6 mt-10">
          {/* Left Arrow */}
          <button
            onClick={scrollPrev}
            className="w-11 h-11 flex items-center justify-center rounded-full border dark:border-white/20 border-black/20 dark:bg-zinc-900/60 backdrop-blur-md hover:bg-zinc-700 transition"
            aria-label="Previous slide"
          >
            <svg
              className="w-5 h-5 dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex items-center gap-3">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => onDotClick(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === selectedIndex
                    ? "w-6 h-2 dark:bg-white bg-black shadow-md shadow-blue-500/40"
                    : "w-2 h-2 dark:bg-white/20 bg-black/20 hover:bg-zinc-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={scrollNext}
            className="w-11 h-11 flex items-center justify-center rounded-full border dark:border-white/20 dark:bg-zinc-900/60 backdrop-blur-md bg-zinc-800 hover:bg-zinc-700 transition"
            aria-label="Next slide"
          >
            <svg
              className="w-5 h-5 dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Swipe hint for mobile */}
        <div className="flex justify-center mt-6 md:hidden">
          <p className="text-zinc-500 text-xs flex items-center gap-2">
            <svg
              className="w-4 h-4 animate-pulse"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Swipe to explore
          </p>
        </div>
      </div>

      {/* Carousel-specific styles */}
      <style jsx>{`
        .embla {
          position: relative;
        }
        .embla__viewport {
          overflow: hidden;
        }
        .embla__container {
          display: flex;
          touch-action: pan-y pinch-zoom;
          margin-left: calc(-1 * var(--embla-slide-spacing, 1rem));
        }
        .embla__slide {
          transform: translate3d(0, 0, 0);
          flex: 0 0 100%;
          min-width: 0;
          padding-left: var(--embla-slide-spacing, 1rem);
        }
      `}</style>
    </>
  );
};

export function TargetDemo() {
  return (
    <div>
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />
      <h1 className="text-center py-10">Hover over the elements below</h1>
      <div className="flex justify-center gap-4 pb-10">
        <button className="cursor-target px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Click me!
        </button>
        <div className="cursor-target px-6 py-3 bg-zinc-800 text-white rounded-lg">
          Hover target
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [isCopied, setIsCopied] = useState(false);
  const [pixelRatio, setPixelRatio] = useState(1);

  useEffect(() => {
    setPixelRatio(window.devicePixelRatio || 1);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("ourhouchmohamed@gmail.com");
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  const projects: ProjectCardProps[] = [
    {
      title: "HayMobility — Smart Car Tracking App",
      description:
        "This mobile app, built with Flutter and Firebase, enables car rental agencies to track their vehicles in real time. It allows admins to view vehicle status, manage user accounts, and monitor fleet activity through a simple dashboard. The goal is to improve fleet visibility and operational efficiency.",
      tags: ["Flutter", "Dart", "Firebase", "FastAPI", "Mobile"],
      defaultImage: "/projects/welcome.png",
      hoverImage: "/projects/haymobility-dashboard.png",
      demoUrl: "https://github.com/ourhouchmohamed97/PFE",
      codeUrl: "https://github.com/ourhouchmohamed97/PFE",
    },
    {
      title: "AI Prompt Sharing Platform",
      description:
        "A modern and responsive web application designed for discovering, creating, and sharing AI-generated prompts across different creative and productivity domains. The platform features a clean futuristic interface focused on usability, inspiration, and collaboration, allowing users to explore trending prompts, publish their own creations, and organize content efficiently. Built with scalability and performance in mind, the application delivers a smooth user experience with dynamic content rendering, responsive layouts, and an engaging community-driven ecosystem for AI enthusiasts and creators.",
      tags: ["Next.js", "React", "Tailwind CSS", "MongoDB", "TypeScript", "AI"],
      websiteDemo: {
        image: "/projects/promptopia.png",
        title: "PromptHub Platform",
        description:
          "Community-driven platform for exploring, creating, and sharing AI-powered prompts with a futuristic user experience.",
        badge: "Live v2.1",
        projectName: "Promptopia",
        projectType: "AI Platform",
        url: "https://promptopia-platform.vercel.app/",
      },
      demoUrl: "https://promptopia-platform.vercel.app/",
      codeUrl: "https://github.com/ourhouchmohamed97/promptopia-platform",
    },
    {
      title: "Webserv HTTP Server",
      description:
        "A custom HTTP web server built in C++ designed to handle client connections, serve static content, and execute CGI scripts while following core HTTP protocol standards. The project focuses on low-level networking, socket programming, asynchronous I/O, and efficient request handling through a lightweight and scalable architecture. Features include multi-client connection management, configurable routing, request parsing, response generation, error handling, and support for dynamic content execution, providing a deep understanding of how modern web servers operate internally.",
      tags: [
        "C++",
        "HTTP",
        "Socket Programming",
        "CGI",
        "Networking",
        "Asynchronous I/O",
      ],
      websiteDemo: {
        image: "/projects/test.png",
        title: "Custom HTTP Server Engine",
        description:
          "Lightweight HTTP server capable of handling multiple client connections, static file serving, and CGI execution.",
        badge: "Live v2.0",
        projectName: "Webserv",
        projectType: "Network Infrastructure",
      },
      demoUrl: "",
      codeUrl: "https://github.com/ourhouchmohamed97/webserv",
    },
    {
      title: "Chronora AI Study Planner",
      description:
        "Chronora is an AI-powered study planning SaaS designed to help students manage academic workloads more effectively through intelligent scheduling, adaptive task prioritization, and predictive deadline analysis. The platform combines AI-generated study plans with real-time workload balancing to reduce stress, improve productivity, and prevent last-minute cramming. Built with Next.js, Prisma, and PostgreSQL, Chronora features secure authentication, analytics dashboards, responsive UI design, and a scalable full-stack architecture optimized for modern educational workflows.",
      tags: [
        "Next.js",
        "Prisma",
        "PostgreSQL",
        "TypeScript",
        "AI",
        "Tailwind CSS",
      ],
      websiteDemo: {
        image: "/projects/test.png",
        title: "Chronora Dashboard",
        description:
          "Smart student productivity platform with AI-generated study plans, analytics, and adaptive scheduling.",
        badge: "Live v3.1",
        projectName: "Chronora",
        projectType: "EdTech SaaS",
        url: "https://chronora-website-y3kg.vercel.app/",
      },
      demoUrl: "",
      codeUrl: "https://github.com/ourhouchmohamed97/chronora",
    },
    {
      title: "MiniShell Presentation Website",
      description:
        "A clean and interactive presentation website designed to showcase the MiniShell project in a structured and visually engaging way. It highlights the shell’s core functionality, command parsing system, execution flow, and key features such as pipes, redirections, and environment handling. Built with a focus on clarity and user experience, the site presents technical concepts through interactive sections, diagrams, and demonstrations, making it easier to understand how the MiniShell operates under the hood.",
      tags: ["Next.js", "UI/UX", "Tailwind CSS", "JavaScript", "Web Design"],
      websiteDemo: {
        image: "/projects/Minishell.png",
        title: "MiniShell Showcase",
        description:
          "Interactive presentation site demonstrating MiniShell features, architecture, and command execution workflow.",
        badge: "Live v2.3",
        projectName: "MiniShell",
        projectType: "Systems Project",
        url: "https://minishell-website-y3kg.vercel.app/",
      },
      demoUrl: "https://minishell-website-y3kg.vercel.app/",
      codeUrl: "https://github.com/ourhouchmohamed97/minishell-website",
    },
  ];

  return (
    <>
      <header className="fixed top-2.5 z-50 w-full md:top-4">
        <div className="container mx-auto px-6">
          <Navbar />
        </div>
      </header>

      <main className="flex flex-col w-full p-0 m-0">
        {/* Hero Section */}
        <section
          className="relative flex w-full h-screen flex max-h-[1000px] min-h-[800px] flex-col items-center justify-center dark:bg-black overflow-hidden py-pagebuilder"
          id="hero-section"
        >
          {/* LiquidEther Background */}
          <div className="absolute inset-0 z-0 w-full h-full">
            <LiquidEther
              colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
              mouseForce={20}
              cursorSize={100}
              isViscous={false}
              viscous={30}
              iterationsViscous={32}
              iterationsPoisson={32}
              resolution={0.5}
              isBounce={false}
              autoDemo={true}
              autoSpeed={0.5}
              autoIntensity={2.2}
              takeoverDuration={0.25}
              autoResumeDelay={3000}
              autoRampDuration={0.6}
            />
          </div>

          {/* Gradient blur overlay */}
          <div
            aria-hidden="true"
            className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 z-10 h-[500px] w-4xl rounded-full bg-indigo-700/20 blur-[150px] dark:bg-[#0b0218] opacity-50"
          />

          {/* Main Content */}
          <div className="relative z-20 mx-auto mb-14 flex w-full flex-col items-center justify-center gap-y-6">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gray-800 aspect-square">
              <div className="w-full h-full relative">
                <Image
                  src="/images/profile.jpeg"
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h2 className="w-full animate-fadeInUp text-balance text-center font-instrument-serif text-5xl text-zinc-700 leading-tight opacity-90 md:text-5xl lg:text-6xl dark:text-zinc-100">
              <span className="font-instrument md:text-nowrap">
                I turn ideas into interactive,
              </span>
              <br />
              <span className="font-instrument md:text-nowrap">
                high-performance digital experiences.
              </span>
            </h2>

            <div className="grad-white relative z-20 animate-fadeInUp text-center text-xl tracking-tight md:text-xl lg:text-2xl">
              <div className="flex items-center justify-center mb-2">
                <span className="font-outfit">Hello, I'm &nbsp;</span>
                <div className="group relative">
                  <span className="font-outfit grad-white">Mohamed</span>
                  <svg
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-0 left-0 hidden size-6 animate-none delay-200 group-hover:block group-hover:animate-wave"
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m4.861 9.147c.94-.657 2.357-.531 3.201.166l-.968-1.407c-.779-1.111-.5-2.313.612-3.093 1.112-.777 4.263 1.312 4.263 1.312-.786-1.122-.639-2.544.483-3.331 1.122-.784 2.67-.513 3.456.611l10.42 14.72-1.328 12.875-11.083-4.042-9.667-14.333c-.793-1.129-.519-2.686.611-3.478z"
                      fill="#ef9645"
                    />
                    <path
                      d="m2.695 17.336s-1.132-1.65.519-2.781c1.649-1.131 2.78.518 2.78.518l5.251 7.658c.181-.302.379-.6.6-.894l-7.288-10.627s-1.131-1.649.519-2.78c1.649-1.131 2.78.518 2.78.518l6.855 9.997c.255-.208.516-.417.785-.622l-7.947-11.591s-1.131-1.649.519-2.78c1.649-1.131 2.78.518 2.78.518l7.947 11.589c.292-.179.581-.334.871-.498l-7.428-10.832s-1.131-1.649.518-2.78 2.78.518 2.78.518l7.854 11.454 1.194 1.742c-4.948 3.394-5.419 9.779-2.592 13.902.565.825 1.39.26 1.39.26-3.393-4.949-2.357-10.51 2.592-13.903l-1.459-7.302s-.545-1.924 1.378-2.47c1.924-.545 2.47 1.379 2.47 1.379l1.685 5.004c.668 1.984 1.379 3.961 2.32 5.831 2.657 5.28 1.07 11.842-3.94 15.279-5.465 3.747-12.936 2.354-16.684-3.11z"
                      fill="#ffdc5d"
                    />
                    <g fill="#5dadec">
                      <path d="m12 32.042c-4 0-8.042-4.042-8.042-8.042 0-.553-.405-1-.958-1s-1.042.447-1.042 1c0 6 4.042 10.042 10.042 10.042.553 0 1-.489 1-1.042s-.447-.958-1-.958z" />
                      <path d="m7 34c-3 0-5-2-5-5 0-.553-.447-1-1-1s-1 .447-1 1c0 4 3 7 7 7 .553 0 1-.447 1-1s-.447-1-1-1zm17-32c-.552 0-1 .448-1 1s.448 1 1 1c4 0 8 3.589 8 8 0 .552.448 1 1 1s1-.448 1-1c0-5.514-4-10-10-10z" />
                      <path d="m29 .042c-.552 0-1 .406-1 .958s.448 1.042 1 1.042c3 0 4.958 2.225 4.958 4.958 0 .552.489 1 1.042 1s.958-.448.958-1c0-3.837-2.958-6.958-6.958-6.958z" />
                    </g>
                  </svg>
                </div>
                <span>&nbsp;a Full Stack Developer</span>
              </div>
              <div className="block">
                I build fast, responsive, and user-focused web experiences that
                make an impact.
              </div>
            </div>

            <div className="z-100 mt-4 flex animate-fadeInUp flex-col items-center justify-center gap-6 sm:flex-row md:gap-10">
              <button className="group relative inline-flex cursor-pointer items-center justify-between overflow-hidden rounded-full border border-black/30 bg-black/20 py-[3px] pr-[3px] pl-2 font-medium text-base opacity-85 backdrop-blur-xs transition-all hover:bg-transparent md:py-1 md:pr-1 md:pl-3 dark:border-white/10 dark:bg-white/10">
                <span className="z-10 px-3 text-black transition-colors duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black">
                  Let's Connect
                </span>
                <span className="absolute inset-0 translate-x-[45%] scale-0 rounded-full bg-black opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100 dark:bg-white" />
                <span className="z-10 flex items-center justify-center overflow-hidden rounded-full bg-black p-2 transition-colors duration-300 group-hover:bg-transparent md:p-2.5 dark:bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right text-white transition-all duration-300 group-hover:translate-x-5 group-hover:opacity-0 dark:text-black"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right -translate-x-5 absolute text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 dark:text-black"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </button>

              <button
                onClick={copyEmail}
                className="flex items-center gap-2 py-2 font-light text-base text-black dark:text-white/75 cursor-pointer hover:opacity-80 transition-opacity"
                type="button"
              >
                {isCopied ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check text-green-500"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-copy"
                  >
                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                  </svg>
                )}
                {isCopied ? (
                  <span className="text-green-500 font-medium">Copied!</span>
                ) : (
                  <span>ourhouchmohamed@gmail.com</span>
                )}
              </button>
            </div>
          </div>

          {/* Bottom gradient */}
          <div className="absolute inset-x-0 bottom-0 h-56 z-10">
            <div className="relative h-60 w-full z-[19] mt-4">
              <div className="-translate-x-1/2 absolute bottom-0 left-1/2 z-0 h-[400px] w-[1200px] overflow-hidden mask-gradient">
                <div className="-translate-x-1/2 absolute bottom-[167px] left-1/2 h-[111px] w-[787px] transform overflow-hidden bg-[radial-gradient(50%_50%_at_50%_50%,#432dd7_0%,rgba(10,10,10,0)_100%)] blur-[57px] dark:bg-[radial-gradient(50%_50%_at_50%_50%,#5506ba_0%,rgba(10,10,10,0)_100%)]" />
              </div>
            </div>
          </div>
        </section>

        {/* Grid Design Section */}
        <section className="relative w-full dark:bg-black overflow-hidden py-20 px-4">
          <BentoDemo />
        </section>

        {/* ✅ Project Carousel Section - Now using self-contained ProjectCarousel */}
        <section className="relative w-full dark:bg-black overflow-hidden py-20 px-4">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-black pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16 md:mb-24 animate-fadeInUp">
              <h1 className="w-full animate-fadeInUp text-balance text-center leading-tight opacity-90 dark:text-zinc-100 font-sans mt-8">
                Work that speaks
              </h1>
              <h1 className="w-full animate-fadeInUp text-balance text-center font-instrument-serif text-5xl text-zinc-700 leading-tight opacity-90 md:text-5xl lg:text-6xl dark:text-zinc-100 font-instrument md:text-nowrap">
                Showcase <span style={{ color: "#432dd7" }}>PROJECTS</span>
              </h1>
            </div>

            {/* ✅ Carousel Component - All logic contained inside */}
            <ProjectCarousel projects={projects} />

            {/* View All Button */}
            <div className="flex justify-center mt-16 md:mt-24">
              <ShinyButtonDemo />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="relative w-full dark:bg-black overflow-hidden py-20 px-4">
          <div className="text-center mb-24 animate-fadeInUp">
            <h1 className="w-full animate-fadeInUp text-balance text-center leading-tight opacity-90 dark:text-zinc-100 font-sans mt-8">
              Behind the Magic
            </h1>
            <h1 className="w-full animate-fadeInUp text-balance text-center font-instrument-serif text-5xl text-zinc-700 leading-tight opacity-90 md:text-5xl lg:text-6xl dark:text-zinc-100 font-instrument md:text-nowrap">
              My Craft <span style={{ color: "#432dd7" }}>Toolkit</span>
            </h1>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 mt-16 px-4 max-w-6xl mx-auto">
            <div className="w-full md:w-1/2 max-w-2xl">
              <RadixAccordionDemo />
            </div>
            <div className="w-full md:w-1/2 max-w-2xl">
              <div className="relative h-[350px] w-full overflow-hidden rounded-lg">
                <Orb
                  hoverIntensity={0.5}
                  rotateOnHover={true}
                  hue={0}
                  forceHoverState={false}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 px-4">
            <SkillsSection />
          </div>
        </section>

        {/* Connection Section */}
        <section className="relative w-full dark:bg-black overflow-hidden py-20 px-4">
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="w-full animate-fadeInUp text-balance text-center font-instrument-serif text-5xl text-zinc-700 leading-tight opacity-90 md:text-5xl lg:text-6xl dark:text-zinc-100">
                <span className="font-instrument md:text-nowrap">
                  FROM VISION TO{" "}
                  <span style={{ color: "#432dd7" }}>REALITY</span>,
                </span>
                <br />
                <span className="font-medium md:text-nowrap">
                  YOUR <span style={{ color: "#432dd7" }}>NEXT BIG THING</span>{" "}
                  STARTS HERE.
                </span>
              </h2>
            </div>
            <div className="flex items-center justify-center">
              <ContactButton />
            </div>
            <div>
              <h2 className="w-full animate-fadeInUp text-balance text-center font-outfit-serif text-5xl text-zinc-700 leading-tight opacity-90 md:text-5xl lg:text-2xl dark:text-zinc-100">
                <span className="text-md font-medium dark:text-white">
                  Ready for full-time or freelance projects.
                </span>
                <br />
                <span className="text-md font-medium text-gray-500 dark:text-gray-400">
                  I focus on delivering clean, responsive, and user-centric
                  experiences.
                </span>
              </h2>
            </div>
          </div>
        </section>
      </main>

      <section className="relative w-full dark:bg-black overflow-hidden py-20 px-4">
        <Footer />
      </section>

      {/* Global animation styles */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </>
  );
}
