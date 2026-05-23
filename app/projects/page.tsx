"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { PhoneDemo } from "../components/iphone";
import { WebsiteDemo } from "../components/websiteDemo";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ShinyButton } from "@/components/ui/interactive-hover-button";
import ContactButton from "../components/ContactButton";

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


const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  tags, 
  defaultImage, 
  hoverImage, 
  image, 
  websiteDemo,
  demoUrl,
  codeUrl
}) => {
  return (
    <div className="group relative  rounded-2xl transition-all duration-500 h-full flex flex-col hover:shadow-2xl hover:shadow-[#432dd7]/10 w-full overflow-hidden">
      {/* ✅ Card Header - Homepage Size (h-72 md:h-96) */}
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

      {/* ✅ Card Content - Homepage Padding & Shadows */}
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
        <div className="flex-1 mb-6">
          <p className="text-gray-800 dark:text-gray-100 text-base leading-relaxed line-clamp-4">
            {description}
          </p>
        </div>

        {/* ✅ Action Buttons - Dynamic Links */}
        <div className="flex gap-4 mt-auto">
          {demoUrl ? (
            <Link
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-3 text-black dark:text-white rounded-xl text-sm font-medium flex-1 border border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/10 hover:border-blue-600 dark:hover:border-blue-400 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12" />
                <path d="M13 11L20 4" />
                <path d="M21 3H15M21 3V9" />
              </svg>
              Demo
            </Link>
          ) : (
            <button disabled className="flex items-center justify-center gap-2 px-5 py-3 text-zinc-400 dark:text-zinc-600 rounded-xl text-sm font-medium flex-1 border border-zinc-300 dark:border-zinc-700 bg-zinc-100/50 dark:bg-zinc-800/50 cursor-not-allowed">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12" />
                <path d="M13 11L20 4" />
                <path d="M21 3H15M21 3V9" />
              </svg>
              Demo
            </button>
          )}

          {codeUrl ? (
            <Link
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-3 text-black dark:text-white rounded-xl text-sm font-medium flex-1 border border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/10 hover:border-blue-600 dark:hover:border-blue-400 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 432 416" fill="currentColor">
                <path d="M213.5 0q88.5 0 151 62.5T427 213q0 70-41 125.5T281 416q-14 2-14-11v-58q0-27-15-40q44-5 70.5-27t26.5-77q0-34-22-58q11-26-2-57q-18-5-58 22q-26-7-54-7t-53 7q-18-12-32.5-17.5T107 88h-6q-12 31-2 57q-22 24-22 58q0 55 27 77t70 27q-11 10-13 29q-42 18-62-18q-12-20-33-22q-2 0-4.5.5t-5 3.5t8.5 9q14 7 23 31q1 2 2 4.5t6.5 9.5t13 10.5T130 371t30-2v36q0 13-14 11q-64-22-105-77.5T0 213q0-88 62.5-150.5T213.5 0z" />
              </svg>
              Code
            </Link>
          ) : (
            <button disabled className="flex items-center justify-center gap-2 px-5 py-3 text-zinc-400 dark:text-zinc-600 rounded-xl text-sm font-medium flex-1 border border-zinc-300 dark:border-zinc-700 bg-zinc-100/50 dark:bg-zinc-800/50 cursor-not-allowed">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 432 416" fill="currentColor">
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

export default function Home() {
  const [visibleCount, setVisibleCount] = useState(3);

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
  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  // ✅ Load more: add 3 more projects (1 per line)
  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, projects.length));
  };

  return (
    <>
      <header className="fixed top-2.5 z-50 w-full md:top-4">
        <div className="container mx-auto px-6">
          <Navbar />
        </div>
      </header>
      
      <main className="flex flex-col w-full dark:bg-black">
        <section className="relative w-full min-h-screen dark:bg-black overflow-hidden py-16 px-4 pt-24 md:pt-32">

          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-black pointer-events-none"></div>
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 animate-fadeInUp">
              <h1 className="w-full text-balance text-center leading-tight opacity-90 dark:text-zinc-100 font-sans mt-8">
                Work that speaks
              </h1>
              <h1 className="w-full text-balance text-center font-instrument-serif text-4xl md:text-5xl lg:text-6xl text-zinc-700 leading-tight opacity-90 dark:text-zinc-100 font-instrument">
                Showcase <span style={{ color: '#432dd7' }}>PROJECTS</span>
              </h1>
            </div>

            {/* ✅ Projects List - ONE PER LINE (single column) */}
            <div className="flex flex-col gap-8 md:gap-12 pt-12 md:pt-24">
              {visibleProjects.map((project, index) => (
                <div
                  key={index}
                  className="animate-fadeInUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>

            {/* ✅ Load More Button */}
            {hasMore && (
              <div className="flex justify-center mt-16">
                <div className="flex justify-center mt-16 md:mt-24">
                  <ShinyButton 
                    onClick={handleLoadMore} 
                    >
                      Load More Projects
                    </ShinyButton>
                </div>
              </div>
            )}

            {/* ✅ Show all message */}
            {!hasMore && visibleCount > 0 && (
              <div className="text-center mt-16 text-zinc-500">
                <p className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  You've seen all {projects.length} projects!
                </p>
              </div>
            )}
          </div>

          {/* Custom Styles */}
          <style jsx>{`
            @keyframes fadeInUp {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-fadeInUp {
              animation: fadeInUp 0.6s ease-out forwards;
              opacity: 0;
            }
          `}</style>
        </section>

        {/* Connection section */}
        <section className="relative w-full dark:bg-black overflow-hidden py-20 px-4">
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="w-full animate-fadeInUp text-balance text-center font-instrument-serif text-5xl text-zinc-700 leading-tight opacity-90 md:text-5xl lg:text-6xl dark:text-zinc-100">
                <span className="font-instrument md:text-nowrap">
                  FROM VISION TO <span style={{ color: "#432dd7" }}>REALITY</span>,
                </span>
                <br />
                <span className="font-medium md:text-nowrap">
                  YOUR <span style={{ color: "#432dd7" }}>NEXT BIG THING</span> STARTS HERE.
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
                I focus on delivering clean, responsive, and user-centric experiences.
                </span>
              </h2>
            </div>
          </div>
        </section>
      </main>

      <section className="relative w-full dark:bg-black overflow-hidden py-20 px-4">
        <Footer />
      </section>
    </>
  );
}