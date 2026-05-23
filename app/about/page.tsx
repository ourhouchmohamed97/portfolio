import ContactButton from "../components/ContactButton";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Image from "next/image";

export default function Homepage() {
  return (
    <>
      {/* Fixed Navbar */}
      <header className="fixed top-2.5 z-50 w-full md:top-4">
        <div className="container mx-auto px-6">
          <Navbar />
        </div>
      </header>

      {/* Main content with top padding to avoid navbar overlap */}
      <main className="flex flex-col w-full dark:bg-black">
        <div className="w-full h-screen flex mx-auto max-w-7xl flex-col items-center justify-center dark:bg-black py-pagebuilder">
          {/* Two-column layout: text left, image right — on ALL screen sizes */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 lg:gap-16">
            {/* ── Text column (LEFT) ── */}
            <div className="flex flex-col justify-center">
              <div className="space-y-6 lg:space-y-8">
                {/* Label */}
                <span className="inline-block text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  More About Me
                </span>

                {/* Heading */}
                <h2 className="w-full mb-10 animate-fadeInUp text-balance text-center font-instrument-serif text-5xl text-zinc-700 leading-tight opacity-90 md:text-5xl lg:text-6xl dark:text-zinc-100">
                  <span className="font-instrument md:text-nowrap">
                    I&apos;m Mohamed, a{" "}
                  </span>
                  <span className="font-instrument md:text-nowrap">
                    software <span style={{ color: "#432dd7" }}>engineer</span>
                  </span>
                </h2>

                {/* Body text */}
                <div className="prose prose-zinc max-w-none text-lg leading-relaxed dark:prose-invert md:text-xl">
                  <p>
                    I&apos;m Mohamed, a passionate software engineer and current
                    student at 42. I love building dynamic, efficient
                    applications — exploring new technologies and sharpening my
                    coding skills every day. I work across both front-end and
                    back-end, always aiming to combine solid functionality with
                    clean, intuitive, user-centered design.
                  </p>
                  <p>
                    I thrive on learning, teamwork, and solving hard problems in
                    real-world software development.
                  </p>
                </div>

                {/* Highlight phrase */}
                <div className="prose prose-zinc max-w-none text-lg leading-relaxed dark:prose-invert md:text-xl">
                  <p className="mt-8 text-xl font-medium text-zinc-700 dark:text-zinc-200">
                    Every day I aim to bring{" "}
                    <span className="bg-gradient-to-r from-[#432dd7] to-indigo-500 bg-[length:100%_3px] bg-left-bottom bg-no-repeat pb-1 transition-all duration-400 hover:bg-[length:0%_3px]">
                      energy, curiosity
                    </span>{" "}
                    and drive to create{" "}
                    <span className="bg-gradient-to-r from-indigo-500 to-[#432dd7] bg-[length:100%_3px] bg-left-bottom bg-no-repeat pb-1 transition-all duration-500 hover:bg-[length:0%_3px]">
                      meaningful impact
                    </span>{" "}
                    through my work.
                  </p>
                </div>

                {/* Social links */}
                <div className="mt-6 flex gap-6">
                  <a
                    href="https://github.com/ourhouchmohamed97/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 432 416"
                    >
                      <path
                        fill="currentColor"
                        d="M213.5 0q88.5 0 151 62.5T427 213q0 70-41 125.5T281 416q-14 2-14-11v-58q0-27-15-40q44-5 70.5-27t26.5-77q0-34-22-58q11-26-2-57q-18-5-58 22q-26-7-54-7t-53 7q-18-12-32.5-17.5T107 88h-6q-12 31-2 57q-22 24-22 58q0 55 27 77t70 27q-11 10-13 29q-42 18-62-18q-12-20-33-22q-2 0-4.5.5t-5 3.5t8.5 9q14 7 23 31q1 2 2 4.5t6.5 9.5t13 10.5T130 371t30-2v36q0 13-14 11q-64-22-105-77.5T0 213q0-88 62.5-150.5T213.5 0z"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mohamed-ourhouch-616799293/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 432 432"
                    >
                      <path
                        fill="currentColor"
                        d="M319 221.5q-8-10.5-30-10.5q-27 0-38 16t-11 45v146q0 5-3 8t-8 3h-76q-4 0-7.5-3t-3.5-8V148q0-4 3.5-7.5t7.5-3.5h74q4 0 6.5 2t3.5 6v5q1 2 1 7q28-27 76-27q53 0 83 27t30 79v182q0 5-3.5 8t-7.5 3h-78q-4 0-7.5-3t-3.5-8V254q0-22-8-32.5zM88 91.5Q73 107 51.5 107T15 91.5t-15-37T15 18T51.5 3T88 18t15 36.5t-15 37zm13 56.5v270q0 5-3.5 8t-7.5 3H14q-5 0-8-3t-3-8V148q0-4 3-7.5t8-3.5h76q4 0 7.5 3.5t3.5 7.5z"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/ourhouch_mohamed/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 0C8.74 0 8.333.015 7.053.072C5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053C.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 0 0 1.384 2.126A5.868 5.868 0 0 0 4.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 0 0 2.126-1.384a5.86 5.86 0 0 0 1.384-2.126c.296-.765.499-1.636.558-2.913c.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 0 0-1.384-2.126A5.847 5.847 0 0 0 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071c1.17.055 1.805.249 2.227.415c.562.217.96.477 1.382.896c.419.42.679.819.896 1.381c.164.422.36 1.057.413 2.227c.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 0 1-.899 1.382a3.744 3.744 0 0 1-1.38.896c-.42.164-1.065.36-2.235.413c-1.274.057-1.649.07-4.859.07c-3.211 0-3.586-.015-4.859-.074c-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 0 1-1.379-.899a3.644 3.644 0 0 1-.9-1.38c-.165-.42-.359-1.065-.42-2.235c-.045-1.26-.061-1.649-.061-4.844c0-3.196.016-3.586.061-4.861c.061-1.17.255-1.814.42-2.234c.21-.57.479-.96.9-1.381c.419-.419.81-.689 1.379-.898c.42-.166 1.051-.361 2.221-.421c1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324a6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 0 1-2.88 0a1.44 1.44 0 0 1 2.88 0z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* ── Image column (RIGHT) ── */}
            <div className="relative flex flex-col justify-center md:justify-end">
              <div className="aspect-square w-full max-w-md overflow-hidden rounded-2xl border-4 border-zinc-200/60 shadow-xl transition-transform duration-500 hover:scale-[1.03] dark:border-zinc-700/60 dark:shadow-2xl">
                <Image
                  src="/images/Rectangle.png"
                  alt="Mohamed – Software Engineer"
                  fill
                  className="object-cover grayscale-[30%] transition-all duration-700 hover:grayscale-0"
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>

              {/* Badge */}
              <div className="absolute -bottom-8 left-1/2 md:left-auto md:right-8 -translate-x-1/2 md:translate-x-0 whitespace-nowrap rounded-full bg-[#432dd7] px-6 py-2 text-sm font-medium text-white shadow-lg">
                @42 Student • Full-Stack
              </div>
            </div>
          </div>
        </div>

        {/* ── EDUCATION SECTION ── */}
        <div className="mt-32 dark:bg-black py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            {/* Section Header */}
            <div className="mb-20 text-center">
              <span className="inline-block text-sm font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                THE EDUCATION
              </span>
              <h2 className="mt-3 font-instrument-serif text-5xl font-light dark:text-white leading-tight">
                Knowledge That <br />
                Shapes{" "}
                <span className="font-normal" style={{ color: "#432dd7" }}>
                  {" "}
                  Innovation
                </span>
              </h2>
            </div>

            {/* Education Timeline */}
            <div className="space-y-16">
              {/* Education Item 1: License Degree */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-20">
                {/* Left Column - Date & School Info */}
                <div className="lg:col-span-4 space-y-4">
                  <time className="block text-sm font-medium uppercase tracking-wider text-zinc-500">
                    SEP 2023 - JAN 2025
                  </time>
                  <h3 className="text-2xl font-light text-white">
                    License Degree
                  </h3>
                  <p className="text-zinc-400">Abdelmalek Essaadi University</p>
                  <div className="flex items-center gap-1 text-sm text-zinc-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Tetouan, Morocco</span>
                  </div>
                </div>

                {/* Vertical Line - Hidden on mobile */}
                <div className="hidden lg:block lg:col-span-1">
                  <div className="h-full w-px bg-zinc-700"></div>
                </div>

                {/* Right Column - Description */}
                <div className="lg:col-span-7">
                  <div className="space-y-4 text-zinc-300 leading-relaxed">
                    <p className="text-white font-medium">
                      Licence in Computer Science – Abdelmalek Essaadi
                      University, Tetouan, Morocco
                    </p>
                    <p className="text-zinc-400">
                      Completed a 3-year undergraduate program focused on core
                      computer science principles, software development, and
                      information systems.
                    </p>
                    <p className="text-zinc-400">
                      Designed and implemented a final year project, developing
                      a fully functional mobile application from scratch,
                      including UI/UX design, database integration, and backend
                      logic.
                    </p>
                    <p className="text-zinc-400">
                      Gained hands-on experience in programming languages,
                      software architecture, and project management through
                      coursework and practical projects.
                    </p>
                    <p className="text-zinc-400">
                      Strengthened problem-solving, teamwork, and independent
                      research skills, preparing for real-world software
                      engineering challenges.
                    </p>

                    {/* Key Skills */}
                    <div className="mt-6 pt-6 border-t border-zinc-800">
                      <h4 className="text-sm font-medium text-zinc-500 mb-3">
                        Key Skills:
                      </h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        Mobile App Development | Java | Dart | Flutter |
                        Database Design | UI/UX Design | Problem-Solving | Team
                        Collaboration | Project Management
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education Item 2: Software Engineering Program */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                {/* Left Column - Date & School Info */}
                <div className="lg:col-span-4 space-y-4">
                  <time className="block text-sm font-medium uppercase tracking-wider text-zinc-500">
                    OCT 2025 - PRESENT
                  </time>
                  <h3 className="text-2xl font-light text-white">
                    Software Engineering Program
                  </h3>
                  <p className="text-zinc-400">42 (1337) School</p>
                  <div className="flex items-center gap-1 text-sm text-zinc-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Capo Negro, Morocco</span>
                  </div>
                </div>

                {/* Vertical Line - Hidden on mobile */}
                <div className="hidden lg:block lg:col-span-1">
                  <div className="h-full w-px bg-zinc-700"></div>
                </div>

                {/* Right Column - Description */}
                <div className="lg:col-span-7">
                  <div className="space-y-4 text-zinc-300 leading-relaxed">
                    <p className="text-white font-medium">
                      Software Engineering Program – 42(1337), Tetouan, Morocco
                    </p>
                    <p className="text-zinc-400">
                      Immersive, peer-led, project-based learning environment:
                      no lectures or formal classes; students learn
                      collaboratively through real coding challenges.
                    </p>
                    <p className="text-zinc-400">
                      Developed foundational skills in algorithms, C/Unix
                      programming, system architecture, network & software
                      concepts.
                    </p>
                    <p className="text-zinc-400">
                      Choose your specialized path thereafter (mobile apps,
                      cybersecurity, web, AI) through self-paced projects.
                    </p>

                    {/* Key Skills */}
                    <div className="mt-6 pt-6 border-t border-zinc-800">
                      <h4 className="text-sm font-medium text-zinc-500 mb-3">
                        Key Skills:
                      </h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        C | C++ | UNIX | System Architecture | Networking | Data
                        Structures & Algorithms | 2D/3D Graphics | Peer
                        Collaboration | Problem-Solving | Project-Based Learning
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Connection section */}
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
    </>
  );
}
