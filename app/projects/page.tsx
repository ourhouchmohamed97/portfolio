"use client";

import { useState } from 'react';
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LiquidEther from '../components/LiquidEther';
import Link from 'next/link';
import { PhoneDemo } from '../components/iphone';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  defaultImage?: string;
  hoverImage?: string;
  image?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, defaultImage, hoverImage, image }) => {
  return (
    <div className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl h-full flex flex-col">
      {/* Card Header with Phone/Image */}
      <div className="relative h-120 flex items-center justify-center flex-shrink-0">
        <div className="relative w-full h-full z-10">
          {defaultImage && hoverImage ? (
            <PhoneDemo/>
          ) : image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover rounded-t-2xl"
            />
          ) : null}
        </div>
      </div>

      {/* Card Content */}
      <div
        className="p-6 flex-1 flex flex-col rounded-b-2xl"
        style={{ backgroundColor: 'var(--custom-bg)' }}
      >
        {/* Title */}
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
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
        <div className="flex-1 mb-4">
          <p className="text-zinc-400 text-sm leading-relaxed line-clamp-4">
            {description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          <Link
            href="/demo"
            className="flex items-center justify-center gap-2 px-4 py-2.5 text-white rounded-lg text-sm flex-1 border border-blue-500/30 hover:bg-blue-500/10 hover:border-blue-500/50 transition-all"
          >
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
            >
              <path d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12" />
              <path d="M13 11L20 4" />
              <path d="M21 3H15M21 3V9" />
            </svg>
            Demo
          </Link>

          <Link
            href="/code"
            className="flex items-center justify-center gap-2 px-4 py-2.5 text-white rounded-lg text-sm flex-1 border border-blue-500/30 hover:bg-blue-500/10 hover:border-blue-500/50 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 432 416"
              fill="#ffffff"
            >
              <path d="M213.5 0q88.5 0 151 62.5T427 213q0 70-41 125.5T281 416q-14 2-14-11v-58q0-27-15-40q44-5 70.5-27t26.5-77q0-34-22-58q11-26-2-57q-18-5-58 22q-26-7-54-7t-53 7q-18-12-32.5-17.5T107 88h-6q-12 31-2 57q-22 24-22 58q0 55 27 77t70 27q-11 10-13 29q-42 18-62-18q-12-20-33-22q-2 0-4.5.5t-5 3.5t8.5 9q14 7 23 31q1 2 2 4.5t6.5 9.5t13 10.5T130 371t30-2v36q0 13-14 11q-64-22-105-77.5T0 213q0-88 62.5-150.5T213.5 0z"/>
            </svg>
            Code
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const [isCopied, setIsCopied] = useState(false);

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

  return (
    <>
      <header className="fixed top-2.5 z-50 w-full md:top-4">
        <div className="container mx-auto px-6">
          <Navbar />
        </div>
      </header>
      <main className="flex flex-col w-full p-0 m-0">
        <section className="relative w-full h-[40000px] dark:bg-black overflow-hidden py-20 px-4">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-black pointer-events-none"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-24 animate-fadeInUp">
              <h1 className="w-full animate-fadeInUp text-balance text-center leading-tight opacity-90 dark:text-zinc-100 font-sans mt-8">
                Work that speaks
              </h1>
              <h1 className="w-full animate-fadeInUp text-balance text-center font-instrument-serif text-5xl text-zinc-700 leading-tight opacity-90 md:text-5xl lg:text-6xl dark:text-zinc-100 font-instrument md:text-nowrap">Showcase <span style={{ color: '#432dd7' }}>PROJECTS</span></h1>
            </div>

            {/* Projects Grid - Custom Layout */}
            <div className="projects-grid mt-16">
              <div className="project-card-1 animate-fadeInUp" style={{ animationDelay: '0ms' }}>
                <ProjectCard {...projects[0]} />
              </div>

              <div className="project-card-2 animate-fadeInUp" style={{ animationDelay: '100ms' }}>
                <ProjectCard {...projects[1]} />
              </div>

              <div className="project-card-3 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
                <ProjectCard {...projects[2]} />
              </div>

              <div className="project-card-4 animate-fadeInUp" style={{ animationDelay: '300ms' }}>
                <ProjectCard {...projects[3]} />
              </div>

              <div className="project-card-5 animate-fadeInUp" style={{ animationDelay: '400ms' }}>
                <ProjectCard {...projects[4]} />
              </div>
            </div>
          </div>

          <style jsx>{`
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

            .projects-grid {
              display: grid;
              grid-template-columns: repeat(6, 1fr);
              grid-template-rows: repeat(6, 1fr);
              gap: 24px;
              min-height: 800px;
            }
            
            .project-card-1 {
              grid-column: span 4 / span 4;
              grid-row: span 3 / span 3;
            }

            .project-card-2 {
              grid-column: span 2 / span 2;
              grid-row: span 3 / span 3;
              grid-column-start: 5;
            }

            .project-card-3 {
              grid-column: span 2 / span 2;
              grid-row: span 3 / span 3;
              grid-row-start: 4;
            }

            .project-card-4 {
              grid-column: span 2 / span 2;
              grid-row: span 3 / span 3;
              grid-column-start: 3;
              grid-row-start: 4;
            }

            .project-card-5 {
              grid-column: span 2 / span 2;
              grid-row: span 3 / span 3;
              grid-column-start: 5;
              grid-row-start: 4;
            }

            /* Responsive layout for smaller screens */
            @media (max-width: 1024px) {
              .projects-grid {
                grid-template-columns: repeat(2, 1fr);
                grid-template-rows: auto;
                min-height: auto;
              }
              
              .project-card-1,
              .project-card-2,
              .project-card-3,
              .project-card-4,
              .project-card-5 {
                grid-column: span 1 / span 1;
                grid-row: auto;
                grid-column-start: auto;
                grid-row-start: auto;
              }
              
              .project-card-1 {
                grid-column: span 2 / span 2;
              }
            }

            @media (max-width: 640px) {
              .projects-grid {
                grid-template-columns: 1fr;
              }
              
              .project-card-1 {
                grid-column: span 1 / span 1;
              }
            }
          `}</style>
        </section>
      </main>

      <Footer />
    </>
  );
}