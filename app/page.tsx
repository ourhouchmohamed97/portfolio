"use client";

import { useState } from "react";
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

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  defaultImage?: string;
  hoverImage?: string;
  image?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  defaultImage,
  hoverImage,
  image,
}) => {
  return (
    <div className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl h-full flex flex-col">
      {/* Card Header with Phone/Image */}
      <div className="relative h-120 flex items-center justify-center flex-shrink-0">
        <div className="relative w-full h-full z-10">
          {defaultImage && hoverImage ? (
            <PhoneDemo />
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
      <div className={cn( "p-6 flex-1 flex flex-col rounded-b-2xl", "bg-transparent [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] backdrop-blur-md [border:1px_solid_rgba(0,0,0,.1)]", "dark:bg-transparent dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)]" )} >
        {/* Title */}
        <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
          {title}
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-700/20 dark:text-blue-200 rounded-full border border-blue-300 dark:border-blue-500/40"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <div className="flex-1 mb-4">
          <p className="text-gray-800 dark:text-gray-100 text-sm leading-relaxed line-clamp-4">
            {description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          <Link
            href="/demo"
            className="flex items-center justify-center gap-2 px-4 py-2.5 text-black dark:text-white rounded-lg text-sm flex-1 border border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/10 hover:border-blue-600 dark:hover:border-blue-400 transition-all"
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
            className="flex items-center justify-center gap-2 px-4 py-2.5 text-black dark:text-white rounded-lg text-sm flex-1 border border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/10 hover:border-blue-600 dark:hover:border-blue-400 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 432 416"
              fill="currentColor"
            >
              <path d="M213.5 0q88.5 0 151 62.5T427 213q0 70-41 125.5T281 416q-14 2-14-11v-58q0-27-15-40q44-5 70.5-27t26.5-77q0-34-22-58q11-26-2-57q-18-5-58 22q-26-7-54-7t-53 7q-18-12-32.5-17.5T107 88h-6q-12 31-2 57q-22 24-22 58q0 55 27 77t70 27q-11 10-13 29q-42 18-62-18q-12-20-33-22q-2 0-4.5.5t-5 3.5t8.5 9q14 7 23 31q1 2 2 4.5t6.5 9.5t13 10.5T130 371t30-2v36q0 13-14 11q-64-22-105-77.5T0 213q0-88 62.5-150.5T213.5 0z" />
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
      await navigator.clipboard.writeText("ourhouchmohamed@gmail.com");
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  const projects = [
    {
      title: "HayMobility — Smart Car Tracking App",
      description:
        "This mobile app, built with Flutter and Firebase, enables car rental agencies to track their vehicles in real time. It allows admins to view vehicle status, manage user accounts, and monitor fleet activity through a simple dashboard. The goal is to improve fleet visibility and operational efficiency.",
      tags: ["Flutter", "Dart", "Firebase", "FastAPI", "Mobile"],
      defaultImage: "/projects/welcome.png",
      hoverImage: "/projects/haymobility-dashboard.png",
    },
    {
      title: "Decentralized Voting System",
      description:
        "Built on Ethereum blockchain, this secure and transparent platform ensures immutable and verifiable voting. Smart contracts handle voter registration and tallying, guaranteeing election integrity.",
      tags: ["Solidity", "React", "Web3.js", "Hardhat"],
      image: "/projects/Haymobility2.png",
    },
    {
      title: "E-commerce API Gateway",
      description:
        "A robust microservices-based API gateway handling product catalog, user authentication, order processing, and payment integration. Designed for high scalability and fault tolerance.",
      tags: ["Node.js", "Express", "Kafka", "MongoDB", "Docker"],
      image: "/projects/1.jpg",
    },
    {
      title: "Real-time Chat Application",
      description:
        "A responsive chat application featuring instant messaging, group chats, emoji support, and file sharing. Leverages WebSockets for real-time services.",
      tags: ["React", "Socket.io", "Node.js", "Redis"],
      image: "/projects/2.jpg",
    },
    {
      title: "Healthcare Management",
      description:
        "A secure web portal for managing patient records, appointments, and medical inventory. Includes role-based access control and integrates with various medical devices for data capture.",
      tags: ["Angular", "Spring Boot", "MySQL", "JWT"],
      image: "/projects/1.jpg",
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
        <section
          className="relative flex w-full h-screen flex max-h-[1000px] min-h-[800px] flex-col items-center justify-center dark:bg-black overflow-hidden py-pagebuilder"
          id="hero-section"
        >
          {/* LiquidEther Background - Full Screen */}
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

          {/* Existing gradient blur overlay */}
          <div
            aria-hidden="true"
            className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 z-10 h-[500px] w-4xl rounded-full bg-indigo-700/20 blur-[150px] dark:bg-[#0b0218] opacity-50"
          ></div>

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
                    ></path>
                    <path
                      d="m2.695 17.336s-1.132-1.65.519-2.781c1.649-1.131 2.78.518 2.78.518l5.251 7.658c.181-.302.379-.6.6-.894l-7.288-10.627s-1.131-1.649.519-2.78c1.649-1.131 2.78.518 2.78.518l6.855 9.997c.255-.208.516-.417.785-.622l-7.947-11.591s-1.131-1.649.519-2.78c1.649-1.131 2.78.518 2.78.518l7.947 11.589c.292-.179.581-.334.871-.498l-7.428-10.832s-1.131-1.649.518-2.78 2.78.518 2.78.518l7.854 11.454 1.194 1.742c-4.948 3.394-5.419 9.779-2.592 13.902.565.825 1.39.26 1.39.26-3.393-4.949-2.357-10.51 2.592-13.903l-1.459-7.302s-.545-1.924 1.378-2.47c1.924-.545 2.47 1.379 2.47 1.379l1.685 5.004c.668 1.984 1.379 3.961 2.32 5.831 2.657 5.28 1.07 11.842-3.94 15.279-5.465 3.747-12.936 2.354-16.684-3.11z"
                      fill="#ffdc5d"
                    ></path>
                    <g fill="#5dadec">
                      <path d="m12 32.042c-4 0-8.042-4.042-8.042-8.042 0-.553-.405-1-.958-1s-1.042.447-1.042 1c0 6 4.042 10.042 10.042 10.042.553 0 1-.489 1-1.042s-.447-.958-1-.958z"></path>
                      <path d="m7 34c-3 0-5-2-5-5 0-.553-.447-1-1-1s-1 .447-1 1c0 4 3 7 7 7 .553 0 1-.447 1-1s-.447-1-1-1zm17-32c-.552 0-1 .448-1 1s.448 1 1 1c4 0 8 3.589 8 8 0 .552.448 1 1 1s1-.448 1-1c0-5.514-4-10-10-10z"></path>
                      <path d="m29 .042c-.552 0-1 .406-1 .958s.448 1.042 1 1.042c3 0 4.958 2.225 4.958 4.958 0 .552.489 1 1.042 1s.958-.448.958-1c0-3.837-2.958-6.958-6.958-6.958z"></path>
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
                <span className="absolute inset-0 translate-x-[45%] scale-0 rounded-full bg-black opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100 dark:bg-white"></span>
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
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
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
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
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
                    <path d="M20 6 9 17l-5-5"></path>
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
                    <rect
                      width="14"
                      height="14"
                      x="8"
                      y="8"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
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

          {/* Bottom gradient section */}
          <div className="absolute inset-x-0 bottom-0 h-56 z-10">
            <div className="relative h-60 w-full z-[19] mt-4">
              <div className="-translate-x-1/2 absolute bottom-0 left-1/2 z-0 h-[400px] w-[1200px] overflow-hidden mask-gradient">
                <div className="-translate-x-1/2 absolute bottom-[167px] left-1/2 h-[111px] w-[787px] transform overflow-hidden bg-[radial-gradient(50%_50%_at_50%_50%,#432dd7_0%,rgba(10,10,10,0)_100%)] blur-[57px] dark:bg-[radial-gradient(50%_50%_at_50%_50%,#5506ba_0%,rgba(10,10,10,0)_100%)]"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Grid Design Section */}
        <section className="relative w-full dark:bg-black overflow-hidden py-20 px-4">
          <BentoDemo />
        </section>

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
              <h1 className="w-full animate-fadeInUp text-balance text-center font-instrument-serif text-5xl text-zinc-700 leading-tight opacity-90 md:text-5xl lg:text-6xl dark:text-zinc-100 font-instrument md:text-nowrap">
                Showcase <span style={{ color: "#432dd7" }}>PROJECTS</span>
              </h1>
            </div>

            {/* Projects Grid - Custom Layout */}
            <div className="projects-grid mt-16">
              <div
                className="project-card-1 animate-fadeInUp"
                style={{ animationDelay: "0ms" }}
              >
                <ProjectCard {...projects[0]} />
              </div>

              <div
                className="project-card-2 animate-fadeInUp"
                style={{ animationDelay: "100ms" }}
              >
                <ProjectCard {...projects[1]} />
              </div>

              <div
                className="project-card-3 animate-fadeInUp"
                style={{ animationDelay: "200ms" }}
              >
                <ProjectCard {...projects[2]} />
              </div>

              <div
                className="project-card-4 animate-fadeInUp"
                style={{ animationDelay: "300ms" }}
              >
                <ProjectCard {...projects[3]} />
              </div>
            </div>
            <div className="flex justify-center mt-16">
              <ShinyButtonDemo />
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
                grid-template-columns: repeat(12, 1fr);
                grid-template-rows: auto minmax(300px, auto); /* Fixed height for bottom row */
                gap: 24px;
                min-height: auto;
              }

              /* First project - full width */
              .project-card-1 {
                grid-column: 1 / -1; /* Takes all columns */
                grid-row: 1;
                width: 100%;

              }

              /* Remaining projects (2-4) */
              .project-card-2 {
                grid-column: span 4; /* Takes 4 columns */
                grid-row: 2;
                height: 450px; /* Fixed height */
              }

              .project-card-3 {
                grid-column: span 4; /* Takes 4 columns */
                grid-row: 2;
                height: 450px; /* Fixed height */
              }

              .project-card-4 {
                grid-column: span 4; /* Takes 4 columns */
                grid-row: 2;
                height: 450px; /* Fixed height */
              }

              /* Ensure ProjectCard components fill their containers */
              .project-card-2 .project-card-wrapper,
              .project-card-3 .project-card-wrapper,
              .project-card-4 .project-card-wrapper {
                height: 100%;
              }

              /* Responsive layout for tablets */
              @media (max-width: 1024px) {
                .projects-grid {
                  grid-template-columns: repeat(6, 1fr);
                  grid-template-rows: auto minmax(300px, auto);
                }

                .project-card-1 {
                  grid-column: 1 / -1;
                }

                .project-card-2 {
                  grid-column: span 3;
                  grid-row: 2;
                  height: 520px;
                }

                .project-card-3 {
                  grid-column: span 3;
                  grid-row: 2;
                  height: 520px;
                }

                .project-card-4 {
                  grid-column: 1 / -1;
                  grid-row: 3;
                  height: 520px;
                  margin-top: 24px;
                }
              }

              /* Responsive layout for mobile */
              @media (max-width: 768px) {
                .projects-grid {
                  grid-template-columns: 1fr;
                  grid-template-rows: auto;
                  gap: 20px;
                }

                .project-card-1,
                .project-card-2,
                .project-card-3,
                .project-card-4 {
                  grid-column: 1 / -1;
                  grid-row: auto;
                  height: auto; /* Remove fixed height on mobile */
                  min-height: 300px;
                }

                .project-card-2,
                .project-card-3,
                .project-card-4 {
                  margin-top: 0;
                }
              }

              /* Small mobile devices */
              @media (max-width: 480px) {
                .projects-grid {
                  gap: 16px;
                }

                .project-card-1,
                .project-card-2,
                .project-card-3,
                .project-card-4 {
                  min-height: 280px;
                }
              }
            `}</style>
          </section>

          {/* Skills Section */}
          <section className="relative w-full h-[40000px] dark:bg-black overflow-hidden py-20 px-4">
            <div className="text-center mb-24 animate-fadeInUp">
              <h1 className="w-full animate-fadeInUp text-balance text-center leading-tight opacity-90 dark:text-zinc-100 font-sans mt-8">
                Behind the Magic
              </h1>
              <h1 className="w-full animate-fadeInUp text-balance text-center font-instrument-serif text-5xl text-zinc-700 leading-tight opacity-90 md:text-5xl lg:text-6xl dark:text-zinc-100 font-instrument md:text-nowrap">
                My Craft <span style={{ color: "#432dd7" }}>Toolkit</span>
              </h1>
            </div>
            <div className="flex flex-row justify-center gap-6">
              <div className="w-72 md:w-80">
                <RadixAccordionDemo />
              </div>
              <div className="w-72 md:w-80">
                the design here
              </div>
            </div>
            <SkillsSection />
          </section>
      </main>

      <Footer />
    </>
  );
}
